# 🧪 Test Unified Enrollment Form

## Quick Test Guide

### **Step 1: Start Development Server**

```bash
npm run dev
```

---

## ✅ Test 1: Course Enrollment from Courses Page

1. Open: `http://localhost:5173/courses`
2. Scroll to any course card
3. Click **"Enroll Now"** button
4. **Expected Result:**
   - ✅ Redirects to `/enroll`
   - ✅ Form scrolls into view
   - ✅ Selected course is pre-filled in dropdown
   - ✅ Dropdown shows both courses and services

5. Fill the form:
   - Name: Test User
   - Email: test@example.com
   - Phone: 9876543210
   - Course: (already selected)
   - Message: I want to enroll in this course

6. Click **Submit**
7. **Expected Result:**
   - ✅ Success message appears
   - ✅ Redirects to home page after 3 seconds
   - ✅ Data appears in Google Sheets "Enrollments" tab

---

## ✅ Test 2: Service Request from Services Page

1. Open: `http://localhost:5173/services`
2. Scroll to any service card
3. Click **"Get Started"** button
4. **Expected Result:**
   - ✅ Redirects to `/enroll`
   - ✅ Form scrolls into view
   - ✅ Selected service is pre-filled in dropdown
   - ✅ Dropdown shows both courses and services

5. Fill the form:
   - Name: Service User
   - Email: service@example.com
   - Phone: 9876543211
   - Service: (already selected)
   - Message: I need this service for my business

6. Click **Submit**
7. **Expected Result:**
   - ✅ Success message appears
   - ✅ Redirects to home page after 3 seconds
   - ✅ Data appears in Google Sheets "Enrollments" tab

---

## ✅ Test 3: Manual Selection from Enrollment Page

1. Open: `http://localhost:5173/enroll`
2. Check the dropdown
3. **Expected Result:**
   - ✅ Dropdown shows "Select Course or Service *"
   - ✅ Two optgroups visible:
     - 📚 Training Courses (9 options)
     - 💼 IT Services (10 options)

4. Select a course from "Training Courses" group
5. Fill the form and submit
6. **Expected Result:**
   - ✅ Submission successful
   - ✅ Data in "Enrollments" sheet with course name

7. Go back to `/enroll`
8. Select a service from "IT Services" group
9. Fill the form and submit
10. **Expected Result:**
    - ✅ Submission successful
    - ✅ Data in "Enrollments" sheet with service name

---

## ✅ Test 4: "Request a Service" CTA Button

1. Open: `http://localhost:5173/services`
2. Scroll to bottom CTA section
3. Click **"Request a Service"** button
4. **Expected Result:**
   - ✅ Redirects to `/enroll`
   - ✅ Form scrolls into view
   - ✅ No pre-selection (user can choose any option)

---

## 📊 Test 5: Verify Google Sheets Data

1. Open your Google Sheet: [Your Sheet](https://docs.google.com/spreadsheets/d/1dLwMdDf8Is7lKbbcYVDftUJwyzI-saPB9vU2_A0ps7A/edit)
2. Go to **"Enrollments"** tab
3. **Expected Result:**
   - ✅ All submissions (courses + services) in same sheet
   - ✅ Course column contains both course names and service names
   - ✅ All data properly formatted

**Example Data:**

| Timestamp | Name | Email | Phone | Course | Message | Source | Status |
|-----------|------|-------|-------|--------|---------|--------|--------|
| 2025-12-26 10:30 | Test User | test@example.com | 9876543210 | Java Full Stack Developer | I want to enroll | Neuro Edge Technologies Website | New |
| 2025-12-26 10:35 | Service User | service@example.com | 9876543211 | Website Development | Need a website | Neuro Edge Technologies Website | New |

---

## ✅ Test 6: Form Validation

1. Go to: `http://localhost:5173/enroll`
2. Try submitting empty form
3. **Expected Result:**
   - ✅ Validation errors appear for all required fields

4. Fill invalid data:
   - Name: A (too short)
   - Email: invalid-email (no @ or domain)
   - Phone: 123 (too short)
   - Course: (empty)

5. **Expected Result:**
   - ✅ Real-time validation shows errors
   - ✅ Fields turn red with error messages

6. Fix all errors and submit
7. **Expected Result:**
   - ✅ Form submits successfully

---

## ✅ Test 7: Dropdown Organization

1. Go to: `http://localhost:5173/enroll`
2. Click on "Select Course or Service" dropdown
3. **Expected Result:**
   - ✅ First group: "📚 Training Courses"
     - Java Full Stack Developer
     - React + Node Full Stack Developer
     - Python Full Stack Developer
     - .NET Development
     - C & C++ Programming
     - PHP Development
     - AI & Machine Learning
     - HTML, CSS & jQuery
     - Android / iOS Development
   
   - ✅ Second group: "💼 IT Services"
     - Website Development
     - Desktop Development
     - Software Development
     - Software Testing
     - Mobile Application Development
     - Workflow Automation
     - Digital Marketing
     - UI/UX Design
     - Cloud & DevOps Services
     - IT Support & IT Outsourcing

---

## 🎯 Success Criteria

All tests pass if:

- ✅ Course enrollments work from courses page
- ✅ Service requests work from services page
- ✅ Manual selection works from enrollment page
- ✅ All data saves to "Enrollments" sheet
- ✅ Dropdown shows both courses and services
- ✅ Pre-selection works correctly
- ✅ Form validation works properly
- ✅ Success message and redirect work

---

## 🚀 All Done!

If all tests pass, your unified enrollment form is working perfectly! Both courses and services now use the same form and save to the same Google Sheet. 🎉

