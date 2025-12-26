# 🧪 Test Service Form Submission

## Quick Test Instructions

### **Step 1: Start Development Server**

```bash
npm run dev
```

### **Step 2: Open Browser with Console**

1. Open: `http://localhost:5173/service-enroll`
2. Press **F12** to open Developer Tools
3. Click **Console** tab

### **Step 3: Fill Test Data**

Fill the form with this test data:

- **Name:** Test User
- **Email:** test@example.com
- **Phone:** 9876543210
- **Service:** Website Development
- **Message:** This is a test submission

### **Step 4: Submit and Watch Console**

Click **Submit** and watch the console output.

---

## ✅ Expected Console Output

You should see these logs in order:

```
=== SERVICE FORM SUBMISSION ===
Form Data: {name: "Test User", email: "test@example.com", phone: "9876543210", service: "Website Development", message: "This is a test submission"}
✅ Form validation passed
Submitting to Google Sheets with form type: service
=== GOOGLE SHEETS SUBMISSION START ===
Form Type: service
Form Data: {name: "Test User", email: "test@example.com", phone: "9876543210", service: "Website Development", message: "This is a test submission"}
Google Apps Script URL: https://script.google.com/macros/s/AKfycbw--ryT4gCGTdTzk3v5IlOpeyLqfE3uzWX5I9m7LaWrLtwQHOEyC6pwS0X8PtIL54Ny/exec
Adding field: name = Test User
Adding field: email = test@example.com
Adding field: phone = 9876543210
Adding field: service = Website Development
Adding field: message = This is a test submission
Final form data to send: {name: "Test User", email: "test@example.com", phone: "9876543210", service: "Website Development", message: "This is a test submission", form_type: "service", source: "Neuro Edge Technologies Website", timestamp: "2025-12-26T..."}
Sending request to Google Apps Script...
✅ service form submitted to Google Sheets successfully
Response: Response {type: "opaque", url: "", redirected: false, status: 0, ok: false, …}
=== GOOGLE SHEETS SUBMISSION END ===
✅ Submission completed
```

---

## 🔍 What Each Log Means

### **1. Form Submission Start**
```
=== SERVICE FORM SUBMISSION ===
```
✅ Form component is working

### **2. Form Data**
```
Form Data: {name: "...", email: "...", ...}
```
✅ Form data is captured correctly

### **3. Validation Passed**
```
✅ Form validation passed
```
✅ All required fields are filled

### **4. Google Sheets Submission**
```
=== GOOGLE SHEETS SUBMISSION START ===
```
✅ Submission function is called

### **5. Adding Fields**
```
Adding field: name = Test User
Adding field: email = test@example.com
...
```
✅ All form fields are being added to FormData

### **6. Final Form Data**
```
Final form data to send: {..., form_type: "service", ...}
```
✅ **IMPORTANT:** Check that `form_type: "service"` is present

### **7. Request Sent**
```
Sending request to Google Apps Script...
```
✅ HTTP request is being sent

### **8. Success**
```
✅ service form submitted to Google Sheets successfully
```
✅ Request completed (but response is opaque due to no-cors mode)

---

## 🚨 If You See Errors

### **Error: "Form validation failed"**
**Cause:** Required fields are empty  
**Solution:** Fill all required fields (name, email, phone, service)

### **Error: "Google Apps Script URL not configured"**
**Cause:** URL is still set to default  
**Solution:** Check `src/config/googleSheets.js` has the correct URL

### **No logs appear at all**
**Cause:** JavaScript error or dev server not running  
**Solution:** Check for red errors in console, restart dev server

---

## 📊 Step 5: Check Google Sheet

After seeing success in console:

1. Open: [Your Google Sheet](https://docs.google.com/spreadsheets/d/1dLwMdDf8Is7lKbbcYVDftUJwyzI-saPB9vU2_A0ps7A/edit)
2. Look for tab: **"Service_Requests"**
3. Check for your test data

### **Expected Sheet:**

| Timestamp | Name | Email | Phone | Service | Message | Source | Status |
|-----------|------|-------|-------|---------|---------|--------|--------|
| 2025-12-26 ... | Test User | test@example.com | 9876543210 | Website Development | This is a test submission | Neuro Edge Technologies Website | New |

---

## ❌ If Data NOT in Sheet

Even if console shows success, data might not save if:

### **1. Google Apps Script Not Updated**
**Solution:** Update Google Apps Script with code from `google-apps-script/form-handler.js`

### **2. Check Google Apps Script Execution Logs**

1. Go to [Google Apps Script](https://script.google.com)
2. Open your project
3. Click **Executions** (left sidebar)
4. Look for recent executions

**What to look for:**
- ✅ **Success:** "Service form data saved successfully"
- ❌ **Error:** "Unknown form type: service" → Update the script!
- ❌ **Error:** "Permission denied" → Re-authorize

### **3. Wrong Sheet ID**
Check that `SHEET_ID` in `google-apps-script/form-handler.js` matches your actual Google Sheet ID.

---

## 🎯 Summary

**Frontend is working if:**
- ✅ Console shows all logs
- ✅ "service form submitted to Google Sheets successfully" appears

**Backend needs update if:**
- ❌ Data doesn't appear in Google Sheet
- ❌ Google Apps Script logs show "Unknown form type: service"

**The fix:** Update Google Apps Script with the new code! 🚀

