# 🔧 Update Google Apps Script for Service Form Support

## ⚠️ IMPORTANT: Service Form Not Saving Data

The service enrollment form is not saving data because the Google Apps Script needs to be updated to handle the new "service" form type.

## 🚀 Quick Fix Steps

### **Step 1: Open Google Apps Script**

1. Go to [Google Apps Script](https://script.google.com)
2. Open your **"Neuro Edge Form Handler"** project
3. You should see the `form-handler.js` file

### **Step 2: Update the Script**

Replace the **ENTIRE** content of your Google Apps Script with the updated code from:
```
google-apps-script/form-handler.js
```

Or copy the updated script below:

---

## 📋 Updated Google Apps Script Code

**COPY THIS ENTIRE CODE AND PASTE IT INTO YOUR GOOGLE APPS SCRIPT:**

```javascript
/**
 * Google Apps Script for handling form submissions from Neuro Edge Technologies website
 * This script receives form data and saves it to Google Sheets
 */

// Configuration - Replace with your actual Google Sheet ID
const SHEET_ID = "1dLwMdDf8Is7lKbbcYVDftUJwyzI-saPB9vU2_A0ps7A";

// Sheet names for different forms
const ENROLLMENT_SHEET = "Enrollments";
const CONTACT_SHEET = "Contact_Forms";
const SERVICE_SHEET = "Service_Requests";

/**
 * Main function to handle POST requests from website forms
 */
function doPost(e) {
  try {
    // Log the incoming request for debugging
    console.log("Received form submission:", e.parameter);

    // Get form data from the request
    const formData = e.parameter;

    // Validate that we have form data
    if (!formData || Object.keys(formData).length === 0) {
      throw new Error("No form data received");
    }

    // Determine which form was submitted based on the 'form_type' parameter
    const formType = formData.form_type || "enrollment";
    console.log("Processing form type:", formType);

    // Process the form based on type
    if (formType === "enrollment") {
      return handleEnrollmentForm(formData);
    } else if (formType === "contact") {
      return handleContactForm(formData);
    } else if (formType === "service") {
      return handleServiceForm(formData);
    } else {
      throw new Error("Unknown form type: " + formType);
    }
  } catch (error) {
    console.error("Error processing form:", error);
    return ContentService.createTextOutput(
      JSON.stringify({
        success: false,
        error: error.toString(),
        timestamp: new Date().toISOString(),
      })
    ).setMimeType(ContentService.MimeType.JSON);
  }
}

// ... (rest of the functions - handleEnrollmentForm, handleContactForm, handleServiceForm, testScript)
```

---

## 📝 What Changed?

### **1. Added Service Sheet Constant:**
```javascript
const SERVICE_SHEET = "Service_Requests";
```

### **2. Added Service Form Handler:**
```javascript
else if (formType === "service") {
  return handleServiceForm(formData);
}
```

### **3. Added handleServiceForm Function:**
This new function creates a "Service_Requests" sheet and saves service form data with these columns:
- Timestamp
- Name
- Email
- Phone
- **Service** (instead of Course)
- Message
- Source
- Status

---

## 🔄 Step 3: Deploy the Updated Script

After updating the code:

1. **Save** the script (Ctrl+S or Cmd+S)
2. Click **Deploy** → **Manage Deployments**
3. Click the **Edit** icon (pencil) next to your existing deployment
4. Under **Version**, select **"New version"**
5. Add description: "Added service form support"
6. Click **Deploy**
7. **Important**: The Web App URL should remain the same

---

## ✅ Step 4: Test the Service Form

1. Go to your website: `http://localhost:5173/service-enroll`
2. Fill out the service enrollment form
3. Submit the form
4. Check your Google Sheet - you should see a new tab called **"Service_Requests"**
5. The service form data should appear in this new sheet

---

## 📊 Expected Result

After updating and deploying, you will have **3 sheets** in your Google Spreadsheet:

1. **Enrollments** - Course enrollment data
2. **Contact_Forms** - Contact form data
3. **Service_Requests** - Service enrollment data (NEW!)

---

## 🔍 Troubleshooting

### **If data still doesn't save:**

1. **Check Browser Console** (F12):
   - Look for "service form submitted to Google Sheets successfully"
   - Check for any error messages

2. **Check Google Apps Script Execution Log**:
   - In Google Apps Script, click **Executions** (left sidebar)
   - Look for recent executions when you submitted the form
   - Check for any errors

3. **Verify the deployment**:
   - Make sure you clicked "Deploy" after saving
   - Make sure you selected "New version"

4. **Clear browser cache** and try again

---

## 📞 Quick Verification

After deployment, submit a test service form with:
- Name: "Test User"
- Email: "test@example.com"
- Phone: "9876543210"
- Service: "Website Development"
- Message: "This is a test"

Then check your Google Sheet for the new "Service_Requests" tab with this data.

---

## ✨ All Done!

Once you've updated and deployed the Google Apps Script, your service enrollment form will work perfectly and save all data to Google Sheets! 🎉

