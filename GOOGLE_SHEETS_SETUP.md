# Khajani Welfare Society - Universal Google Forms & Sheets Setup

All forms across the website are now connected to a single, unified Google Apps Script backend. Submissions are processed **directly on the site** without any page reloads or external redirects!

---

## Which Forms Are Connected?

1. **Contact Us Page** (`/contact`) → Routes to `Contact_Inquiries` & `All_Submissions`
2. **Volunteer & Get Involved Page** (`/get-involved`) → Routes to `Volunteers` & `All_Submissions`
3. **Corporate / CSR Partnerships** (`/partnership-inquiry`) → Routes to `Partnerships` & `All_Submissions`
4. **Brij Women Business Directory Modal** (`/directory`) → Routes to `Directory_Applications` & `All_Submissions`
5. **Footer Quick Contact** (Global site footer) → Routes to `Footer_Quick_Enquiries` & `All_Submissions`
6. **Newsletter Subscription** (Homepage "Stay Connected") → Routes to `Newsletter_Subscribers` & `All_Submissions`

*Note: You do not need to manually create tabs or headers! The script automatically generates formatted tabs and headers when the first submission arrives.*

---

## 3-Minute Setup Guide

### Step 1: Create or Open Your Google Sheet
1. Open [Google Sheets](https://sheets.new) to create a new spreadsheet (e.g., named **"Khajani Welfare Society - Form Submissions"**).
2. Note your Google Sheet ID from your browser's address bar:
   `https://docs.google.com/spreadsheets/d/`**`1K11sm6gUg-R120Djk5yarQhT75XoY5ny8TiJMHYgJeM`**`/edit`

### Step 2: Add Google Apps Script
1. In your Google Sheet, click **Extensions** → **Apps Script**.
   *(Alternatively, go to [script.google.com](https://script.google.com) and create a New Project).*
2. Delete any existing code in the editor (`myFunction`).
3. Open [`gas/Code.gs`](gas/Code.gs) in this repository, copy the entire code, and paste it into the Apps Script editor.
4. If you created a standalone script on `script.google.com`, paste your Google Sheet ID into `SPREADSHEET_ID`:
   ```javascript
   const SPREADSHEET_ID = 'YOUR_GOOGLE_SHEET_ID_HERE';
   ```
   *(If you opened Apps Script from inside the Sheet via Extensions > Apps Script, you can leave it as is!)*
5. Click the **Save** (disk) icon and name the project **"Khajani Universal Form API"**.

### Step 3: Deploy as a Web App
1. Click the blue **Deploy** button (top right) → **New deployment**.
2. Click the gear icon next to "Select type" and choose **Web app**.
3. Fill in the deployment details:
   - **Description**: `Khajani Forms Web App v1`
   - **Execute as**: `Me (your email address)`
   - **Who has access**: **`Anyone`** *(⚠️ Crucial: Must be set to "Anyone" so submissions from your website visitors can be saved).*
4. Click **Deploy**.
5. Grant permissions if prompted (Click *Advanced* → *Go to Khajani Universal Form API (unsafe)* → *Allow*).
6. Copy the generated **Web App URL** (ends with `/exec`).

### Step 4: Plug Your Web App URL into the Site
You have two quick options:

#### Option A: In the `.env` file (Recommended)
Open [`.env`](.env) and paste your URL:
```env
VITE_GOOGLE_SCRIPT_URL=https://script.google.com/macros/s/YOUR_DEPLOYMENT_ID/exec
```

#### Option B: Directly in [`src/config/forms.ts`](src/config/forms.ts)
Update `DEFAULT_GOOGLE_SCRIPT_URL`:
```typescript
export const DEFAULT_GOOGLE_SCRIPT_URL =
  "https://script.google.com/macros/s/YOUR_DEPLOYMENT_ID/exec";
```

---

## How It Works

- **Zero Redirection**: Forms submit silently via the browser background `fetch()` with CORS-safelisted headers (`text/plain` & `mode: 'no-cors'`). The user never leaves the page or sees a Google redirect.
- **Instant UI Feedback**: Form buttons switch to loading states (`Submitting...`), followed by inline success confirmations or toasts.
- **Automatic Organization**:
  - `All_Submissions`: Master chronological feed of every inquiry.
  - `Volunteers`, `Contact_Inquiries`, `Partnerships`, `Directory_Applications`, `Newsletter_Subscribers`, `Footer_Quick_Enquiries`: Dedicated tabs with relevant columns.

---

## Testing & Verifying
1. Run `npm run dev` to start the local development server.
2. Visit `/contact`, fill out the form, and hit **Send Message**.
3. Check your Google Sheet — the `All_Submissions` and `Contact_Inquiries` tabs will appear with your test entry!
