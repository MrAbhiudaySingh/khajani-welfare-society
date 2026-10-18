/**
 * ==============================================================================
 * Khajani Welfare Society - Universal Google Sheets Form Backend
 * ==============================================================================
 * 
 * Works with ALL website forms:
 * 1. Contact Us Page (/contact)
 * 2. Get Involved & Volunteer Page (/get-involved)
 * 3. Corporate & CSR Partnership Page (/partnerships)
 * 4. Brij Women Business Directory Modal (/directory)
 * 5. Footer Quick Contact Form (Site-wide)
 * 6. Stay Connected Newsletter Form (Homepage)
 * 
 * SETUP INSTRUCTIONS:
 * 1. Open Google Sheets (create a new blank spreadsheet or use your existing one).
 * 2. Click Extensions > Apps Script (or visit script.google.com).
 * 3. Replace all default code with this entire file.
 * 4. (Optional) If not bound to a spreadsheet, set SPREADSHEET_ID below.
 * 5. Click "Deploy" > "New deployment".
 * 6. Select type: "Web app".
 * 7. Set "Execute as": "Me" (your Google account).
 * 8. Set "Who has access": "Anyone" (crucial for website submissions).
 * 9. Click "Deploy" and authorize the requested permissions.
 * 10. Copy the Web App URL and paste it into your website's .env file:
 *     VITE_GOOGLE_SCRIPT_URL=https://script.google.com/macros/s/.../exec
 *     (Or in src/config/forms.ts)
 */

// If creating standalone script on script.google.com, paste your Google Sheet ID here:
// (Leave blank if you opened Apps Script directly from Extensions > Apps Script inside your Google Sheet)
const SPREADSHEET_ID = '1K11sm6gUg-R120Djk5yarQhT75XoY5ny8TiJMHYgJeM';

function getSpreadsheet() {
  if (SPREADSHEET_ID && SPREADSHEET_ID.trim() !== '' && SPREADSHEET_ID !== 'YOUR_SPREADSHEET_ID_HERE') {
    try {
      return SpreadsheetApp.openById(SPREADSHEET_ID.trim());
    } catch (err) {
      Logger.log('Could not open spreadsheet by ID, falling back to active: ' + err.toString());
    }
  }
  return SpreadsheetApp.getActiveSpreadsheet();
}

/**
 * Handle incoming POST requests from website forms
 */
function doPost(e) {
  const lock = LockService.getScriptLock();
  // Wait up to 15 seconds for concurrent requests
  const success = lock.tryLock(15000);
  
  if (!success) {
    return ContentService
      .createTextOutput(JSON.stringify({ success: false, message: 'Server busy, please retry.' }))
      .setMimeType(ContentService.MimeType.JSON)
      .setHeaders(getCORSHeaders());
  }

  try {
    let data = {};
    if (e && e.postData && e.postData.contents) {
      try {
        data = JSON.parse(e.postData.contents);
      } catch (err) {
        data = e.parameter || {};
      }
    } else if (e && e.parameter) {
      data = e.parameter;
    }

    const ss = getSpreadsheet();
    if (!ss) {
      throw new Error('Spreadsheet not found. Please provide a valid SPREADSHEET_ID.');
    }

    const timestamp = data.submittedAt || new Date().toLocaleString('en-IN', {
      timeZone: 'Asia/Kolkata',
      dateStyle: 'medium',
      timeStyle: 'short'
    });

    const formType = (data.formType || data.type || data.source || 'General Contact').toString();

    // 1. Always record in master "All_Submissions" tab
    recordMasterSubmission(ss, timestamp, formType, data);

    // 2. Also record in dedicated tab for clean organization
    recordCategorizedSubmission(ss, timestamp, formType, data);

    lock.releaseLock();

    return ContentService
      .createTextOutput(JSON.stringify({
        success: true,
        message: 'Thank you! Your response has been recorded successfully.'
      }))
      .setMimeType(ContentService.MimeType.JSON)
      .setHeaders(getCORSHeaders());

  } catch (error) {
    lock.releaseLock();
    Logger.log('Error processing form submission: ' + error.toString());
    return ContentService
      .createTextOutput(JSON.stringify({
        success: false,
        error: error.toString(),
        message: 'Something went wrong. Please try again later.'
      }))
      .setMimeType(ContentService.MimeType.JSON)
      .setHeaders(getCORSHeaders());
  }
}

/**
 * Record every submission into a master chronological tab
 */
function recordMasterSubmission(ss, timestamp, formType, data) {
  const sheetName = 'All_Submissions';
  let sheet = ss.getSheetByName(sheetName);

  if (!sheet) {
    sheet = ss.insertSheet(sheetName);
    const headers = [
      'Timestamp',
      'Form Type',
      'Name',
      'Email',
      'Phone / Contact',
      'Organization',
      'Interest / Category',
      'Message / Details',
      'Page URL',
      'Raw JSON'
    ];
    formatHeaderRow(sheet, headers);
  }

  const name = data.name || data.yourName || '';
  const email = data.email || '';
  const phone = data.phone || data.contact || '';
  const organization = data.organization || data.businessName || '';
  const interest = data.interest || data.skillsOrInterest || data.category || '';
  const message = data.message || data.whatYouOffer || data.motivation || '';
  const pageUrl = data.pageUrl || '';

  sheet.appendRow([
    timestamp,
    formType,
    name,
    email,
    phone,
    organization,
    interest,
    message,
    pageUrl,
    JSON.stringify(data)
  ]);
}

/**
 * Route submissions into purpose-specific tabs with clean columns
 */
function recordCategorizedSubmission(ss, timestamp, formType, data) {
  const lowerType = formType.toLowerCase();

  if (lowerType.includes('volunteer') || lowerType.includes('involved')) {
    let sheet = getOrCreateSheet(ss, 'Volunteers', [
      'Timestamp', 'Full Name', 'Contact (Email/Phone)', 'Engagement Type', 'Skills / Area of Interest', 'Motivation / Message', 'Page URL'
    ]);
    sheet.appendRow([
      timestamp,
      data.name || '',
      data.contact || data.email || data.phone || '',
      data.type || 'Volunteer',
      data.skillsOrInterest || data.interest || '',
      data.message || data.motivation || '',
      data.pageUrl || ''
    ]);
  } else if (lowerType.includes('partnership')) {
    let sheet = getOrCreateSheet(ss, 'Partnerships', [
      'Timestamp', 'Full Name', 'Organization', 'Email', 'Phone', 'Partnership Proposal / Message', 'Page URL'
    ]);
    sheet.appendRow([
      timestamp,
      data.name || '',
      data.organization || '',
      data.email || '',
      data.phone || '',
      data.message || '',
      data.pageUrl || ''
    ]);
  } else if (lowerType.includes('directory')) {
    let sheet = getOrCreateSheet(ss, 'Directory_Applications', [
      'Timestamp', 'Applicant Name', 'Business Name', 'Phone / WhatsApp', 'Email', 'Category', 'Location', 'What You Offer', 'Website / Social', 'Page URL'
    ]);
    sheet.appendRow([
      timestamp,
      data.yourName || data.name || '',
      data.businessName || '',
      data.phone || '',
      data.email || '',
      data.category || '',
      data.location || '',
      data.whatYouOffer || data.message || '',
      data.websiteOrSocial || '',
      data.pageUrl || ''
    ]);
  } else if (lowerType.includes('newsletter') || lowerType.includes('subscribe')) {
    let sheet = getOrCreateSheet(ss, 'Newsletter_Subscribers', [
      'Timestamp', 'Email Address', 'Page URL'
    ]);
    sheet.appendRow([
      timestamp,
      data.email || '',
      data.pageUrl || ''
    ]);
  } else if (lowerType.includes('footer')) {
    let sheet = getOrCreateSheet(ss, 'Footer_Quick_Enquiries', [
      'Timestamp', 'Name', 'Contact (Email or Phone)', 'Message', 'Page URL'
    ]);
    sheet.appendRow([
      timestamp,
      data.name || '',
      data.contact || '',
      data.message || '',
      data.pageUrl || ''
    ]);
  } else {
    // Default Contact Page form
    let sheet = getOrCreateSheet(ss, 'Contact_Inquiries', [
      'Timestamp', 'Full Name', 'Email', 'Phone', 'Area of Interest', 'Message', 'Source', 'Page URL'
    ]);
    sheet.appendRow([
      timestamp,
      data.name || '',
      data.email || '',
      data.phone || '',
      data.interest || 'General Enquiry',
      data.message || '',
      data.source || 'Contact Form',
      data.pageUrl || ''
    ]);
  }
}

/**
 * Helper to get or initialize a sheet with headers
 */
function getOrCreateSheet(ss, name, headers) {
  let sheet = ss.getSheetByName(name);
  if (!sheet) {
    sheet = ss.insertSheet(name);
    formatHeaderRow(sheet, headers);
  }
  return sheet;
}

/**
 * Format headers with professional styling
 */
function formatHeaderRow(sheet, headers) {
  sheet.appendRow(headers);
  const headerRange = sheet.getRange(1, 1, 1, headers.length);
  headerRange.setFontWeight('bold');
  headerRange.setBackground('#142033'); // Khajani Navy
  headerRange.setFontColor('#FFFFFF');
  sheet.setFrozenRows(1);
}

/**
 * Handle GET requests for health check
 */
function doGet(e) {
  return ContentService
    .createTextOutput(JSON.stringify({
      status: 'OK',
      service: 'Khajani Welfare Society Unified Forms API',
      timestamp: new Date().toISOString()
    }))
    .setMimeType(ContentService.MimeType.JSON)
    .setHeaders(getCORSHeaders());
}

/**
 * CORS headers to allow cross-origin submissions from the website
 */
function getCORSHeaders() {
  return {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type'
  };
}
