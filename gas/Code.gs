// Google Apps Script for Khajani Welfare Society Volunteer Form
// Deploy as Web App with Execute as: Me, Access: Anyone

const SHEET_ID = '1K11sm6gUg-R120Djk5yarQhT75XoY5ny8TiJMHYgJeM';
const SHEET_NAME = 'Sheet1';

function doPost(e) {
  const lock = LockService.getScriptLock();
  lock.tryLock(10000);
  
  try {
    // Parse data from POST body (handles both JSON and form-encoded)
    let data = {};
    if (e.postData && e.postData.contents) {
      try {
        data = JSON.parse(e.postData.contents);
      } catch (err) {
        // If not JSON, try form data
        data = e.parameter;
      }
    } else {
      data = e.parameter;
    }
    
    // Open the spreadsheet
    const ss = SpreadsheetApp.openById(SHEET_ID);
    const sheet = ss.getSheetByName(SHEET_NAME);
    
    // Add timestamp
    const timestamp = new Date().toLocaleString('en-IN', { 
      timeZone: 'Asia/Kolkata',
      dateStyle: 'medium',
      timeStyle: 'short'
    });
    
    // Append data to sheet
    sheet.appendRow([
      timestamp,
      data.name || '',
      data.email || '',
      data.interest || '',
      data.availableFrom || '',
      data.motivation || ''
    ]);
    
    lock.releaseLock();
    
    // Return success with CORS headers
    return ContentService
      .createTextOutput(JSON.stringify({ 
        success: true, 
        message: 'Thank you for your application! We will reach out to schedule an orientation.' 
      }))
      .setMimeType(ContentService.MimeType.JSON)
      .setHeaders(getCORSHeaders());
      
  } catch (error) {
    lock.releaseLock();
    return ContentService
      .createTextOutput(JSON.stringify({ 
        success: false, 
        message: 'Something went wrong. Please try again later.' 
      }))
      .setMimeType(ContentService.MimeType.JSON)
      .setHeaders(getCORSHeaders());
  }
}

function doGet(e) {
  return ContentService
    .createTextOutput(JSON.stringify({ 
      status: 'OK', 
      message: 'Volunteer form API is running' 
    }))
    .setMimeType(ContentService.MimeType.JSON)
    .setHeaders(getCORSHeaders());
}

function getCORSHeaders() {
  return {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type'
  };
}
