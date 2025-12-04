# 📊 Google Sheets Enrollment Data Collection - Complete Guide

This comprehensive guide will help you set up a **completely free** backend to collect enrollment data from your website using Google Sheets + Google Apps Script.

## 🎯 What You'll Get

- ✅ **100% Free forever** - No monthly fees or limits
- ✅ **Real-time data collection** - See enrollments instantly
- ✅ **Professional spreadsheet** - Organized data with headers
- ✅ **Email notifications** - Get notified of new enrollments
- ✅ **Easy data management** - Sort, filter, export, share
- ✅ **Unlimited submissions** - No monthly limits
- ✅ **Automatic formatting** - Headers and styling applied automatically

## 🔧 How It Works

```
Student fills form → Website sends data → Google Apps Script → Google Sheets → Email notification
```

## 📋 Detailed Step-by-Step Setup

### **Step 1: Create Your Google Sheet (2 minutes)**

1. **Open Google Sheets**

   - Go to [sheets.google.com](https://sheets.google.com)
   - Make sure you're logged into your Google account

2. **Create New Spreadsheet**

   - Click the **"+ Blank"** button (big plus icon)
   - You'll see a new empty spreadsheet

3. **Rename Your Spreadsheet**

   - Click on **"Untitled spreadsheet"** at the top
   - Change it to **"Neuro Edge Technologies Enrollments"**
   - Press Enter to save

4. **Don't Add Headers Yet**
   - Leave the spreadsheet empty
   - The script will automatically create headers when the first form is submitted

### **Step 2: Set Up Google Apps Script (5 minutes)**

**What is Google Apps Script?**

- It's like a mini-program that runs in the cloud
- It receives data from your website and puts it in the spreadsheet
- It's completely free and runs automatically

**Let's set it up:**

1. **Access Apps Script**

   - In your Google Sheet, look at the top menu
   - Click **Extensions** → **Apps Script**
   - A new tab will open with the Apps Script editor

2. **Prepare the Editor**

   - You'll see some default code that says `function myFunction() {}`
   - **Select all the code** (Ctrl+A or Cmd+A)
   - **Delete it** (press Delete key)
   - Now you have a blank editor

3. **Add the Neuro Edge Technologies Code**

   - Open the `google-apps-script.js` file from your project
   - **Copy all the code** (Ctrl+A, then Ctrl+C)
   - **Paste it** into the Apps Script editor (Ctrl+V)

4. **Save Your Project**
   - Click the **Save** button (💾 icon) or press Ctrl+S
   - When prompted, name your project: **"Neuro Edge Technologies Form Handler"**
   - Click **Save**

### **Step 3: Deploy as Web App (3 minutes)**

**What is deployment?**

- This makes your script accessible from the internet
- Your website will send data to this URL
- Google will run your script and save data to the sheet

**Deployment steps:**

1. **Start Deployment**

   - In the Apps Script editor, look for the **Deploy** button (top right)
   - Click **Deploy** → **New deployment**

2. **Configure Deployment Type**

   - You'll see a popup with deployment settings
   - Click the **gear icon** ⚙️ next to "Type"
   - Select **"Web app"** from the dropdown

3. **Set Deployment Details**

   - **Description**: Type "Neuro Edge Technologies Enrollment Form Handler"
   - **Execute as**: Select **"Me (your-email@gmail.com)"**
   - **Who has access**: Select **"Anyone"** (this allows your website to send data)

4. **Deploy the Script**

   - Click the blue **Deploy** button
   - Google may ask for permissions - click **"Authorize access"**
   - If prompted, choose your Google account
   - Click **"Allow"** to grant permissions

5. **Copy Your Web App URL**
   - After deployment, you'll see a success message
   - **Copy the Web App URL** - it looks like:
   ```
   https://script.google.com/macros/s/AKfycbx1234567890abcdef.../exec
   ```
   - **Save this URL** - you'll need it in the next step!

### **Step 4: Update Your Website Code (2 minutes)**

**Now we need to connect your website to the Google Sheet:**

1. **Open the Form Component**

   - Navigate to your project folder
   - Open `src/components/EnrollmentForm.jsx` in your code editor

2. **Find the Google Sheets Section**

   - Look for this line (around line 40):

   ```javascript
   // const response = await fetch(
   //   "https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec",
   ```

3. **Uncomment and Update the Code**

   - **Remove the `//` comments** from the Google Sheets section
   - **Add `//` comments** to the Formspree section to disable it
   - **Replace `YOUR_SCRIPT_ID`** with your actual script ID

   **Example:**

   ```javascript
   // Option 1: Google Sheets (ACTIVE)
   const response = await fetch(
     "https://script.google.com/macros/s/AKfycbx1234567890abcdef.../exec",
     {
       method: "POST",
       mode: "no-cors",
       // ... rest of the code

   // Option 2: Formspree (DISABLED)
   // const response = await fetch("https://formspree.io/f/YOUR_FORM_ID", {
   ```

4. **Save the File**
   - Press Ctrl+S (or Cmd+S on Mac) to save
   - The website is now connected to your Google Sheet!

### **Step 5: Test the Setup (5 minutes)**

**Let's make sure everything works:**

1. **Deploy Your Website**

   - Commit your changes: `git add . && git commit -m "Connect to Google Sheets"`
   - Push to GitHub: `git push origin master`
   - Deploy to Vercel (it will auto-deploy from GitHub)

2. **Test the Form**

   - Go to your live website
   - Fill out the enrollment form with test data:
     - Name: "Test Student"
     - Email: "test@example.com"
     - Phone: "+91-8055006652"
     - Course: "Java Full Stack Developer"
     - Message: "This is a test submission"
   - Click "Get Free Counseling Session"

3. **Check Your Google Sheet**

   - Go back to your Google Sheet
   - **Refresh the page** (F5 or Ctrl+R)
   - You should see:
     - **Headers automatically created** in row 1
     - **Your test data** in row 2
     - **Professional formatting** applied

4. **What You Should See:**
   ```
   | Timestamp | Name | Email | Phone | Course | Message | Source | Status |
   |-----------|------|-------|-------|--------|---------|--------|--------|
   | 12/14/2024 3:30:00 PM | Test Student | test@example.com | +91-8055006652 | Java Full Stack Developer | This is a test submission | Neuro Edge Technologies Website | New |
   ```

## 🎉 **Congratulations! Your System is Live!**

Every time someone fills out your enrollment form:

- ✅ Data is instantly saved to your Google Sheet
- ✅ You can see it in real-time
- ✅ Data is organized and professional
- ✅ You can export, share, and analyze it

## 📊 Data You'll Collect

Your Google Sheet will automatically capture:

| Column        | Description                              |
| ------------- | ---------------------------------------- |
| **Timestamp** | When the form was submitted              |
| **Name**      | Student's full name                      |
| **Email**     | Student's email address                  |
| **Phone**     | Student's phone number                   |
| **Course**    | Selected course                          |
| **Message**   | Student's message/background             |
| **Source**    | Always "Neuro Edge Technologies Website" |
| **Status**    | "New" (you can update this manually)     |

## 📧 Optional: Email Notifications

To receive email notifications when someone enrolls:

1. In the Google Apps Script, find the `sendEmailNotification` function
2. Replace `info@Neuro Edge Technologies.com` with your actual email
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
"https://api.airtable.com/v0/YOUR_BASE_ID/Enrollments";
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

## 🔧 **Troubleshooting Guide**

### **Problem: "Data not appearing in Google Sheet"**

**Solution 1: Check the Script URL**

- Go back to Google Apps Script
- Click **Deploy** → **Manage deployments**
- Copy the URL again and update your code
- Make sure you removed the `//` comments

**Solution 2: Check Script Permissions**

- In Google Apps Script, click **Run** → **doPost**
- If prompted, grant permissions again
- Try the test function: **Run** → **testFunction**

**Solution 3: Check the Logs**

- In Google Apps Script, click **Executions** (left sidebar)
- Look for any error messages
- Common errors and fixes:
  - "Permission denied" → Re-authorize the script
  - "Sheet not found" → Make sure you're in the right Google Sheet

### **Problem: "Form submits but shows error"**

**Solution:**

- This is normal! The form uses `mode: "no-cors"`
- Data still gets saved to Google Sheets
- The error message doesn't affect functionality

### **Problem: "Headers not created automatically"**

**Solution:**

- The headers are created on the FIRST submission
- Submit a test form to trigger header creation
- If still not working, manually add headers:
  ```
  Timestamp | Name | Email | Phone | Course | Message | Source | Status
  ```

## 🎯 **Advanced Features**

### **Enable Email Notifications**

1. **Update Email Address**

   ```javascript
   const emailAddress = "your-email@gmail.com"; // Replace with your email
   ```

2. **Uncomment Email Function**

   ```javascript
   // Remove the // from this line:
   MailApp.sendEmail(emailAddress, subject, emailBody);
   ```

3. **Save and Redeploy**

### **Add Data Validation**

Add this code to validate phone numbers:

```javascript
// Add this in the doPost function
if (!data.phone.match(/^\+?[\d\s\-\(\)]+$/)) {
  throw new Error("Invalid phone number format");
}
```

## 🔒 **Security & Privacy**

### **What's Secure:**

- ✅ Script URL is public but only accepts POST requests
- ✅ No sensitive data is exposed in the URL
- ✅ Google handles all security and encryption
- ✅ Only you can access the Google Sheet data

### **Additional Security (Optional):**

- Add reCAPTCHA to your form
- Validate email formats in the script
- Set up IP restrictions in Google Apps Script

## 📊 **Data Management**

### **Export Your Data**

- **Excel**: File → Download → Microsoft Excel (.xlsx)
- **CSV**: File → Download → Comma-separated values (.csv)
- **PDF**: File → Download → PDF Document (.pdf)

### **Share with Team**

- Click **Share** button (top right)
- Add team members' email addresses
- Set permissions (Viewer/Editor/Owner)

### **Create Reports**

- Select your data range
- Insert → Chart
- Create enrollment trends, course popularity, etc.

## 📞 **Getting Help**

### **If Something Goes Wrong:**

1. **Check Google Apps Script Logs**

   - Go to Google Apps Script
   - Click **Executions** (left sidebar)
   - Look for error messages

2. **Test the Script Manually**

   - In Google Apps Script, click **Run** → **testFunction**
   - Check if test data appears in your sheet

3. **Common Issues:**
   - **"Script not found"** → Check the URL in your code
   - **"Permission denied"** → Re-authorize the script
   - **"No data appearing"** → Check if comments are removed from code

---

**🎉 Once set up, you'll have a professional enrollment system that costs $0 and works perfectly!**
