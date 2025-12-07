# 🔧 Google Sheets Integration Troubleshooting

## 🚨 **Issue: No Data Saving to Sheets**

### **✅ Step 1: Check Browser Console**

1. Open your website in Chrome/Firefox
2. Press **F12** to open Developer Tools
3. Go to **Console** tab
4. Submit a form and look for error messages
5. Look for these log messages:
   ```
   Submitting form data: {name: "...", email: "..."}
   Form type: enrollment
   Google Apps Script URL: https://script.google.com/...
   Added field: name = John Doe
   Added field: email = john@example.com
   enrollment form submitted to Google Sheets successfully
   ```

### **🔍 Step 2: Verify Google Apps Script**

#### **Check Script Deployment:**
1. Go to [Google Apps Script](https://script.google.com)
2. Open your "Neuro Edge Form Handler" project
3. Click **Deploy** → **Manage Deployments**
4. Verify the Web App URL matches your config file
5. Make sure **Execute as** is set to "Me"
6. Make sure **Who has access** is set to "Anyone"

#### **Test Script Manually:**
1. In Google Apps Script, click **Run** → **testScript**
2. Check the execution log for errors
3. If there are permission errors, re-authorize the script

### **📊 Step 3: Check Google Sheet**

1. Open your Google Sheet: [Your Sheet](https://docs.google.com/spreadsheets/d/1dLwMdDf8Is7lKbbcYVDftUJwyzI-saPB9vU2_A0ps7A/edit)
2. Look for these sheets:
   - **Enrollments** (for enrollment form data)
   - **Contact_Forms** (for contact form data)
3. If sheets don't exist, they should be created automatically on first submission

### **🔧 Step 4: Common Fixes**

#### **Fix 1: Re-deploy Google Apps Script**
1. In Google Apps Script, click **Deploy** → **New Deployment**
2. Change version to "New Version"
3. Copy the new Web App URL
4. Update `src/config/googleSheets.js` with the new URL

#### **Fix 2: Check Permissions**
1. In Google Apps Script, click **Run** → **doPost**
2. If prompted, grant all permissions
3. Make sure you're signed in with the same Google account that owns the sheet

#### **Fix 3: Verify Sheet ID**
1. Check that the Sheet ID in `google-apps-script/form-handler.js` matches your actual sheet
2. Current ID: `1dLwMdDf8Is7lKbbcYVDftUJwyzI-saPB9vU2_A0ps7A`
3. Verify this matches your Google Sheet URL

### **🧪 Step 5: Test with Simple Data**

Try submitting a form with simple data:
- Name: "Test User"
- Email: "test@example.com"
- Phone: "1234567890"

### **📝 Step 6: Check Google Apps Script Logs**

1. In Google Apps Script, go to **Executions**
2. Look for recent executions when you submitted forms
3. Click on any failed executions to see error details
4. Look for these log messages:
   ```
   Received form submission: {name: "...", email: "..."}
   Processing form type: enrollment
   Enrollment form data saved successfully
   ```

### **🚨 Common Error Messages & Solutions**

#### **"Permission denied"**
- **Solution**: Re-run the authorization process in Google Apps Script

#### **"Script function not found"**
- **Solution**: Make sure the `doPost` function exists in your script

#### **"Invalid argument"**
- **Solution**: Check that the Sheet ID is correct

#### **"Range not found"**
- **Solution**: The script will create sheets automatically, but make sure the spreadsheet exists

### **💡 Quick Test Method**

1. Open browser console (F12)
2. Submit a form
3. Look for console messages starting with "Submitting form data:"
4. If you see the messages, the website is working
5. If no data appears in sheets, the issue is with Google Apps Script

### **🔄 If Still Not Working**

1. **Double-check the Google Apps Script URL** in `src/config/googleSheets.js`
2. **Re-deploy the Google Apps Script** with a new version
3. **Check Google Apps Script execution logs** for errors
4. **Verify Google Sheet permissions** - make sure you can edit the sheet manually
5. **Try creating a test sheet** and updating the Sheet ID

### **📞 Need Help?**

If you're still having issues:
1. Check the browser console for error messages
2. Check Google Apps Script execution logs
3. Verify all URLs and IDs are correct
4. Make sure all permissions are granted

The most common issue is usually incorrect URLs or missing permissions in Google Apps Script.
