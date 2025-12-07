# 🔧 Debug Contact Form Issue

## 🧪 **Step-by-Step Debugging**

### **1. Test Contact Form Submission**

1. **Open your website** in Chrome/Firefox
2. **Press F12** to open Developer Tools
3. **Go to Console tab**
4. **Navigate to Contact page**
5. **Fill out the contact form** with test data:
   - Name: "Test Contact"
   - Email: "test@example.com"
   - Phone: "1234567890"
   - Subject: "General Inquiry"
   - Message: "This is a test message"
6. **Submit the form**

### **2. Check Console Messages**

Look for these specific messages in the console:

#### **Expected Messages:**
```
Contact form data being submitted: {name: "Test Contact", email: "test@example.com", ...}
Form type: contact
contact form submitted to Google Sheets successfully
Form data sent: {name: "Test Contact", email: "test@example.com", ...}
```

#### **If Missing Messages:**
- **No "Contact form data being submitted"** → Form not submitting properly
- **No "contact form submitted"** → Issue with Google Sheets function
- **Error messages** → Check the specific error

### **3. Check Google Apps Script Logs**

1. **Go to [Google Apps Script](https://script.google.com)**
2. **Open your "Neuro Edge Form Handler" project**
3. **Click "Executions"** (left sidebar)
4. **Look for recent executions** when you submitted the contact form
5. **Click on any execution** to see logs

#### **Expected Google Apps Script Logs:**
```
Received form submission: {name: "Test Contact", email: "test@example.com", ...}
Processing form type: contact
Handling contact form with data: {name: "Test Contact", ...}
Contact sheet found: Yes (or No if creating new sheet)
Contact form row data: [timestamp, "Test Contact", "test@example.com", ...]
Contact form data added to sheet successfully
Contact form data saved successfully
```

### **4. Check Google Sheet**

1. **Open your Google Sheet**: [Your Sheet](https://docs.google.com/spreadsheets/d/1dLwMdDf8Is7lKbbcYVDftUJwyzI-saPB9vU2_A0ps7A/edit)
2. **Look for "Contact_Forms" tab** (should be created automatically)
3. **Check for new row** with your test data

### **5. Common Issues & Solutions**

#### **Issue: No Console Messages**
**Problem**: Contact form not submitting
**Solution**: Check if form validation is passing

#### **Issue: "Form type: undefined"**
**Problem**: FORM_CONFIG not imported correctly
**Solution**: Check import statement in ContactForm.jsx

#### **Issue: Google Apps Script Not Executing**
**Problem**: URL incorrect or permissions issue
**Solution**: 
- Verify URL in `src/config/googleSheets.js`
- Re-deploy Google Apps Script
- Check permissions

#### **Issue: "Contact sheet found: No" but no data**
**Problem**: Sheet creation failing
**Solution**: Check Google Apps Script permissions

### **6. Quick Fix Test**

Try this simple test in browser console:

```javascript
// Test the Google Sheets function directly
import { submitToGoogleSheets, FORM_CONFIG } from './src/config/googleSheets.js';

const testData = {
  name: "Console Test",
  email: "console@test.com",
  phone: "9999999999",
  subject: "Console Test",
  message: "Testing from console"
};

submitToGoogleSheets(testData, FORM_CONFIG.FORM_TYPES.CONTACT);
```

### **7. Compare with Working Enrollment Form**

Since enrollment form works, compare:

1. **Form structure** - both should be similar
2. **Import statements** - both should import same functions
3. **Submit function calls** - both should call submitToGoogleSheets
4. **Form data structure** - check field names match Google Apps Script

### **8. Manual Google Apps Script Test**

In Google Apps Script, try running this test:

```javascript
function testContactForm() {
  const testData = {
    name: "Manual Test",
    email: "manual@test.com",
    phone: "8888888888",
    subject: "Manual Test",
    message: "Testing manually",
    form_type: "contact",
    source: "Manual Test"
  };
  
  return handleContactForm(testData);
}
```

### **9. Most Likely Issues**

1. **Form field names mismatch** - Check if contact form fields match Google Apps Script expectations
2. **Form validation failing** - Contact form might not be passing validation
3. **Import issues** - FORM_CONFIG.FORM_TYPES.CONTACT might be undefined
4. **Google Apps Script permissions** - Contact form handling might need re-authorization

### **10. Next Steps**

After running the debug steps above, you should see:
- **Where the issue occurs** (website vs Google Apps Script)
- **What error messages appear**
- **Whether data reaches Google Apps Script**

**Run through these steps and let me know what console messages and Google Apps Script logs you see! 🔧**
