# 🔍 Debug Service Form - Step by Step

## ⚠️ CRITICAL: Did You Update Google Apps Script?

**BEFORE DEBUGGING, ANSWER THIS:**

❓ **Have you updated your Google Apps Script with the new code?**

If **NO**, that's why it's not working! Follow these steps:

### **Step 1: Update Google Apps Script (REQUIRED)**

1. Go to [Google Apps Script](https://script.google.com)
2. Open your "Neuro Edge Form Handler" project
3. **REPLACE ALL CODE** with the content from `google-apps-script/form-handler.js`
4. Click **Save** (Ctrl+S)
5. Click **Deploy** → **Manage Deployments**
6. Click **Edit** (pencil icon)
7. Under **Version**, select **"New version"**
8. Click **Deploy**
9. ✅ **DONE** - Now test the form again

---

## 🧪 Step 2: Test the Form with Console Open

### **Open Browser Console:**

1. Open your website: `http://localhost:5173/service-enroll`
2. Press **F12** to open Developer Tools
3. Go to **Console** tab
4. Fill out the service form
5. Click **Submit**

### **What You Should See in Console:**

```
=== SERVICE FORM SUBMISSION ===
Form Data: {name: "...", email: "...", phone: "...", service: "...", message: "..."}
✅ Form validation passed
Submitting to Google Sheets with form type: service
=== GOOGLE SHEETS SUBMISSION START ===
Form Type: service
Form Data: {name: "...", email: "...", phone: "...", service: "...", message: "..."}
Google Apps Script URL: https://script.google.com/macros/s/AKfycbw--ryT4gCGTdTzk3v5IlOpeyLqfE3uzWX5I9m7LaWrLtwQHOEyC6pwS0X8PtIL54Ny/exec
Adding field: name = John Doe
Adding field: email = john@example.com
Adding field: phone = 9876543210
Adding field: service = Website Development
Adding field: message = Test message
Final form data to send: {name: "...", email: "...", phone: "...", service: "...", message: "...", form_type: "service", source: "...", timestamp: "..."}
Sending request to Google Apps Script...
✅ service form submitted to Google Sheets successfully
Response: Response {type: "opaque", url: "", redirected: false, status: 0, ok: false, …}
=== GOOGLE SHEETS SUBMISSION END ===
✅ Submission completed
```

---

## 🔍 Step 3: Check Google Apps Script Execution Log

### **View Execution Logs:**

1. Go to [Google Apps Script](https://script.google.com)
2. Open your "Neuro Edge Form Handler" project
3. Click **Executions** (left sidebar, clock icon)
4. Look for recent executions when you submitted the form

### **What You Should See:**

```
Received form submission: {name: "...", email: "...", phone: "...", service: "...", message: "...", form_type: "service"}
Processing form type: service
Handling service form with data: {...}
Service sheet found: No
Service form row data: [timestamp, "John Doe", "john@example.com", "9876543210", "Website Development", "Test message", "Website", "New"]
Service form data added to sheet successfully
Service form data saved successfully
```

### **If You See Error:**

Look for error messages like:
- ❌ **"Unknown form type: service"** → You didn't update the Google Apps Script
- ❌ **"Permission denied"** → Re-authorize the script
- ❌ **"Script function not found"** → The doPost function is missing

---

## 📊 Step 4: Check Google Sheet

1. Open your Google Sheet: [Your Sheet](https://docs.google.com/spreadsheets/d/1dLwMdDf8Is7lKbbcYVDftUJwyzI-saPB9vU2_A0ps7A/edit)
2. Look for a new tab called **"Service_Requests"**
3. Check if your test data appears there

### **Expected Sheet Structure:**

| Timestamp | Name | Email | Phone | Service | Message | Source | Status |
|-----------|------|-------|-------|---------|---------|--------|--------|
| 2025-12-26 10:30 | John Doe | john@example.com | 9876543210 | Website Development | Test message | Neuro Edge Technologies Website | New |

---

## 🚨 Common Issues & Solutions

### **Issue 1: "Unknown form type: service" in Google Apps Script logs**

**Solution:** You didn't update the Google Apps Script. Go back to Step 1.

### **Issue 2: No execution logs in Google Apps Script**

**Solution:** 
- Check the Google Apps Script URL in `src/config/googleSheets.js`
- Make sure it matches your deployed Web App URL
- Verify the deployment is set to "Anyone" can access

### **Issue 3: Data appears in console but not in sheet**

**Solution:**
- Check Google Apps Script execution logs for errors
- Verify the Sheet ID in `google-apps-script/form-handler.js` is correct
- Make sure you have edit permissions on the Google Sheet

### **Issue 4: "Permission denied" error**

**Solution:**
- In Google Apps Script, click **Run** → **doPost**
- Grant all permissions when prompted
- Re-deploy the script

---

## ✅ Quick Checklist

Before asking for help, verify:

- [ ] Updated Google Apps Script with new code from `google-apps-script/form-handler.js`
- [ ] Deployed as "New version" in Google Apps Script
- [ ] Google Apps Script URL is correct in `src/config/googleSheets.js`
- [ ] Sheet ID is correct in `google-apps-script/form-handler.js`
- [ ] Browser console shows submission logs
- [ ] Google Apps Script execution logs show the submission
- [ ] Checked Google Sheet for "Service_Requests" tab

---

## 📞 Still Not Working?

If you've completed all steps above and it's still not working:

1. **Share the browser console output** - Copy all the logs
2. **Share Google Apps Script execution logs** - Screenshot or copy the logs
3. **Verify the Google Apps Script code** - Make sure it has the `handleServiceForm` function

**Most likely cause:** You haven't updated the Google Apps Script yet! 🎯

