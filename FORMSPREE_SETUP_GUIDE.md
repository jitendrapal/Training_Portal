# 🚀 Formspree Setup Guide (Easiest Option)

Formspree is the **easiest way** to collect form submissions. It's free for up to 50 submissions per month.

## ✅ Why Choose Formspree?

- ✅ **Super easy setup** (2 minutes)
- ✅ **No coding required**
- ✅ **Email notifications included**
- ✅ **Free tier: 50 submissions/month**
- ✅ **Spam protection built-in**
- ✅ **Export to CSV**

## 📋 Quick Setup (2 Minutes)

### **Step 1: Create Formspree Account**

1. Go to [Formspree.io](https://formspree.io)
2. Click **"Get Started"**
3. Sign up with your email
4. Verify your email address

### **Step 2: Create New Form**

1. Click **"+ New Form"**
2. Enter form name: **"TechAcademy Enrollments"**
3. Enter your email address (where you want to receive notifications)
4. Click **"Create Form"**
5. **Copy the Form ID** (looks like: `xpzgkqyw`)

### **Step 3: Update Your Website**

1. Open `src/components/EnrollmentForm.jsx`
2. Find line with: `https://formspree.io/f/YOUR_FORM_ID`
3. Replace `YOUR_FORM_ID` with your actual Form ID
4. Save the file

**Example:**
```javascript
// Replace this:
const response = await fetch("https://formspree.io/f/YOUR_FORM_ID", {

// With this (using your actual Form ID):
const response = await fetch("https://formspree.io/f/xpzgkqyw", {
```

### **Step 4: Deploy and Test**

1. Deploy your website to Vercel
2. Fill out the enrollment form
3. Check your email - you should receive the submission!
4. Check your Formspree dashboard for all submissions

## 📊 What You Get

### **Email Notifications**
Every form submission sends you an email with:
- Student's name and contact info
- Selected course
- Their message
- Submission timestamp

### **Dashboard View**
In your Formspree dashboard you can:
- View all submissions
- Export to CSV
- See submission analytics
- Manage spam protection

### **Data Export**
- Click **"Export"** in your dashboard
- Download CSV file with all submissions
- Import into Excel or Google Sheets

## 💰 Pricing

| Plan | Price | Submissions | Features |
|------|-------|-------------|----------|
| **Free** | $0/month | 50/month | Email notifications, Dashboard, Export |
| **Bronze** | $10/month | 1,000/month | Everything + Custom redirects |
| **Silver** | $20/month | 5,000/month | Everything + Webhooks |

## 🔧 Advanced Features

### **Custom Thank You Page**
Add this to your form submission:
```javascript
body: JSON.stringify({
  // ... your form data
  _next: "https://your-website.com/thank-you"
})
```

### **Spam Protection**
Formspree automatically filters spam, but you can add:
```javascript
body: JSON.stringify({
  // ... your form data
  _gotcha: "" // Honeypot field
})
```

## 🆚 Comparison: Formspree vs Google Sheets

| Feature | Formspree | Google Sheets |
|---------|-----------|---------------|
| **Setup Time** | 2 minutes | 10 minutes |
| **Email Notifications** | ✅ Built-in | ⚙️ Manual setup |
| **Monthly Limit** | 50 submissions | Unlimited |
| **Data Export** | ✅ CSV | ✅ Excel/CSV/PDF |
| **Spam Protection** | ✅ Built-in | ❌ Manual |
| **Cost** | Free/Paid plans | Completely free |

## 🎯 Recommendation

### **Choose Formspree if:**
- You want the easiest setup
- You expect less than 50 enrollments/month
- You want built-in spam protection
- You prefer email notifications

### **Choose Google Sheets if:**
- You expect more than 50 enrollments/month
- You want unlimited submissions
- You prefer spreadsheet format
- You want complete control

## 🔄 Switching Between Options

You can easily switch between Formspree and Google Sheets by:

1. **Commenting out** the current option
2. **Uncommenting** the other option
3. **Adding your credentials**

Both options are already coded in your `EnrollmentForm.jsx` file!

---

**🎉 With Formspree, you'll be collecting enrollment data in under 2 minutes!**
