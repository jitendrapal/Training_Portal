# 📊 Google Sheets Integration Setup Guide

This guide will help you set up Google Sheets integration to automatically save form submissions from your website.

## 🎯 **Step 1: Create Google Sheet**

1. Go to [Google Sheets](https://sheets.google.com)
2. Click **"+ Blank"** to create a new spreadsheet
3. Rename it to: **"Neuro Edge Technologies - Form Submissions"**
4. **Copy the Sheet ID** from the URL:

   ```
   https://docs.google.com/spreadsheets/d/[SHEET_ID_HERE]/edit
   ```

   Example: `1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms`

   1dLwMdDf8Is7lKbbcYVDftUJwyzI-saPB9vU2_A0ps7A
   https://docs.google.com/spreadsheets/d/1dLwMdDf8Is7lKbbcYVDftUJwyzI-saPB9vU2_A0ps7A/edit?usp=sharing

## 🔧 **Step 2: Create Google Apps Script**

1. Go to [Google Apps Script](https://script.google.com)
2. Click **"+ New Project"**
3. Replace the default code with the content from `google-apps-script/form-handler.js`
4. **Important**: Replace `YOUR_GOOGLE_SHEET_ID_HERE` with your actual Sheet ID
5. Save the project (Ctrl+S) and name it: **"Neuro Edge Form Handler"**

AKfycbw--ryT4gCGTdTzk3v5IlOpeyLqfE3uzWX5I9m7LaWrLtwQHOEyC6pwS0X8PtIL54Ny

https://script.google.com/macros/s/AKfycbw--ryT4gCGTdTzk3v5IlOpeyLqfE3uzWX5I9m7LaWrLtwQHOEyC6pwS0X8PtIL54Ny/exec

## 🚀 **Step 3: Deploy the Script**

1. In Google Apps Script, click **"Deploy"** → **"New Deployment"**
2. Click the gear icon ⚙️ next to "Type" and select **"Web app"**
3. Set the following:
   - **Description**: "Form submission handler for Neuro Edge Technologies"
   - **Execute as**: "Me"
   - **Who has access**: "Anyone"
4. Click **"Deploy"**
5. **Copy the Web App URL** (it looks like):
   ```
   https://script.google.com/macros/s/AKfycby.../exec
   ```

## 🔐 **Step 4: Grant Permissions**

1. When you first deploy, Google will ask for permissions
2. Click **"Review permissions"**
3. Choose your Google account
4. Click **"Advanced"** → **"Go to [Project Name] (unsafe)"**
5. Click **"Allow"**

## 📝 **Step 5: Update Website Code**

After getting your Google Apps Script URL, update the configuration:

1. Open `src/config/googleSheets.js`
2. Replace `YOUR_GOOGLE_APPS_SCRIPT_URL_HERE` with your actual Web App URL
3. Save the file

**Example:**

```javascript
// Replace this:
export const GOOGLE_APPS_SCRIPT_URL = "YOUR_GOOGLE_APPS_SCRIPT_URL_HERE";

// With this (using your actual URL):
export const GOOGLE_APPS_SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycby.../exec";
```

## 📊 **What You'll Get**

### **Enrollment Sheet Columns:**

- Timestamp
- Name
- Email
- Phone
- Course
- Message
- Source
- Status

### **Contact Sheet Columns:**

- Timestamp
- Name
- Email
- Phone
- Subject
- Message
- Source
- Status

## 🧪 **Step 6: Test the Integration**

1. After updating the website code, submit a test form
2. Check your Google Sheet - new data should appear automatically
3. Each form type will create its own sheet tab

## 🔧 **Troubleshooting**

### **Common Issues:**

- **Permission denied**: Re-run the deployment process
- **Script not found**: Check the Web App URL is correct
- **Data not appearing**: Check browser console for errors

### **Testing the Script:**

1. In Google Apps Script, click **"Run"** → **"testScript"**
2. Check the execution log for any errors

## 📱 **Features Included:**

✅ **Automatic sheet creation** - Creates sheets if they don't exist
✅ **Proper headers** - Adds column headers automatically
✅ **Timestamp tracking** - Records when each form was submitted
✅ **Error handling** - Graceful error handling and logging
✅ **Auto-resize columns** - Makes data readable
✅ **Status tracking** - Marks submissions as "New"
✅ **Source tracking** - Identifies submissions from website

## 🎯 **Next Steps**

After completing this setup:

1. I'll update your website forms to use the new Google Apps Script URL
2. Test both enrollment and contact forms
3. Verify data is being saved to Google Sheets correctly

**Your form data will be automatically organized and easily accessible in Google Sheets! 📊✨**
