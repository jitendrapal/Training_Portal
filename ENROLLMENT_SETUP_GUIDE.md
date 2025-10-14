# 📊 Enrollment Data Collection Setup Guide

This guide will help you set up a **completely free** backend to collect enrollment data from your website using Google Sheets.

## 🎯 What You'll Get

- ✅ **Free enrollment data collection**
- ✅ **Real-time data in Google Sheets**
- ✅ **Email notifications** (optional)
- ✅ **No monthly fees or limits**
- ✅ **Easy to manage and export data**

## 📋 Step-by-Step Setup

### **Step 1: Create Google Sheet**

1. Go to [Google Sheets](https://sheets.google.com)
2. Click **"+ Blank"** to create a new spreadsheet
3. Rename it to **"TechAcademy Enrollments"**
4. The script will automatically create headers when first form is submitted

### **Step 2: Set Up Google Apps Script**

1. In your Google Sheet, go to **Extensions > Apps Script**
2. Delete the default `myFunction()` code
3. Copy and paste the code from `google-apps-script.js` file
4. Click **Save** (💾) and name your project **"TechAcademy Form Handler"**

### **Step 3: Deploy as Web App**

1. Click **Deploy > New deployment**
2. Click the gear icon ⚙️ next to "Type" and select **"Web app"**
3. Set the following:
   - **Description**: "TechAcademy Enrollment Form Handler"
   - **Execute as**: "Me"
   - **Who has access**: "Anyone"
4. Click **Deploy**
5. **Copy the Web App URL** (it looks like: `https://script.google.com/macros/s/ABC123.../exec`)

### **Step 4: Update Your Website**

1. Open `src/components/EnrollmentForm.jsx`
2. Find line 41: `https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec`
3. Replace `YOUR_SCRIPT_ID` with your actual script ID from the URL
4. Save the file

### **Step 5: Test the Setup**

1. Deploy your website to Vercel
2. Fill out the enrollment form
3. Check your Google Sheet - you should see the data appear!

## 📊 Data You'll Collect

Your Google Sheet will automatically capture:

| Column | Description |
|--------|-------------|
| **Timestamp** | When the form was submitted |
| **Name** | Student's full name |
| **Email** | Student's email address |
| **Phone** | Student's phone number |
| **Course** | Selected course |
| **Message** | Student's message/background |
| **Source** | Always "TechAcademy Website" |
| **Status** | "New" (you can update this manually) |

## 📧 Optional: Email Notifications

To receive email notifications when someone enrolls:

1. In the Google Apps Script, find the `sendEmailNotification` function
2. Replace `info@techacademy.com` with your actual email
3. Uncomment the line: `// MailApp.sendEmail(emailAddress, subject, emailBody);`
4. Save and redeploy

## 🔧 Advanced Features

### **Export Data**
- **Excel**: File > Download > Microsoft Excel
- **CSV**: File > Download > Comma-separated values
- **PDF**: File > Download > PDF Document

### **Share Access**
- Click **Share** button in Google Sheets
- Add team members' emails
- Set permissions (View/Edit)

### **Create Charts**
- Select your data
- Insert > Chart
- Track enrollments by course, date, etc.

### **Filter and Sort**
- Use Data > Create a filter
- Sort by date, course, status, etc.

## 🚀 Alternative Free Options

If you prefer other solutions:

### **1. Airtable**
```javascript
// Replace the fetch URL with:
'https://api.airtable.com/v0/YOUR_BASE_ID/Enrollments'
// Add Authorization header with your API key
```

### **2. Firebase**
```javascript
// Install: npm install firebase
// Use Firestore to store enrollment data
```

### **3. Supabase**
```javascript
// Install: npm install @supabase/supabase-js
// Use PostgreSQL database
```

## 🔒 Security Notes

- The Google Apps Script URL is public but only accepts POST requests
- No sensitive data is exposed
- You can add additional validation in the script if needed
- Consider adding reCAPTCHA for production use

## 📞 Support

If you need help with setup:
1. Check the Google Apps Script logs for errors
2. Test the script using the `testFunction()`
3. Verify the deployment URL is correct
4. Ensure the Google Sheet is accessible

---

**🎉 Once set up, you'll have a professional enrollment system that costs $0 and works perfectly!**
