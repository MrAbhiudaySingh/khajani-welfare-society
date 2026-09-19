# Google Sheets Integration Setup

## Quick Setup (2 minutes)

### Step 1: Deploy Google Apps Script
1. Go to [script.google.com](https://script.google.com)
2. Click **New Project**
3. Delete the default `myFunction()` code
4. Copy and paste the entire contents of `gas/Code.gs`
5. Click **Save** (disk icon) and name it "Khajani Volunteer Form"
6. Click **Deploy** → **New deployment**
7. Select type: **Web app**
8. Configure:
   - Description: "Volunteer Form API"
   - Execute as: **Me**
   - Who has access: **Anyone**
9. Click **Deploy**
10. Authorize the script (click through permissions)
11. **Copy the Web App URL** (looks like: `https://script.google.com/macros/s/XXXXXXXX/exec`)

### Step 2: Update the Website
1. Open `src/pages/VolunteerPage.tsx`
2. Find this line:
   ```typescript
   const GOOGLE_SCRIPT_URL = 'YOUR_GOOGLE_SCRIPT_URL_HERE';
   ```
3. Replace with your Web App URL:
   ```typescript
   const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/YOUR_ID/exec';
   ```
4. Save and deploy your website

### Step 3: Test
1. Go to your website's Volunteer page
2. Fill out and submit the form
3. Check your Google Sheet - the data should appear instantly!

---

## Troubleshooting

**Form submissions not appearing?**
- Check the Web App URL is correctly pasted (no extra spaces)
- Ensure the Google Sheet is shared with the script owner
- Check browser console for error messages

**Getting CORS errors?**
- Make sure the Web App is deployed with "Anyone" access
- The script handles CORS automatically

**Need to update the script?**
- Edit in Google Apps Script
- Click **Deploy** → **Manage deployments**
- Click **Edit** (pencil icon) on the deployment
- Click **Deploy** again to update

---

## Sheet Column Structure
The script expects these columns in order:
1. **Timestamp** - Auto-filled
2. **Full Name** - From form
3. **Email** - From form
4. **Interest** - From form
5. **Available From** - From form
6. **Motivation** - From form

Make sure your Google Sheet has these headers in row 1!
