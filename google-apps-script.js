/**
 * Google Apps Script for TechAcademy Enrollment Form
 * This script receives form submissions and saves them to Google Sheets
 *
 * Setup Instructions:
 * 1. Create a new Google Sheet
 * 2. Go to Extensions > Apps Script
 * 3. Replace the default code with this script
 * 4. Save and deploy as web app
 * 5. Copy the deployment URL and replace YOUR_SCRIPT_ID in the React form
 */

function doPost(e) {
  try {
    // Log the incoming request for debugging
    console.log("POST request received:", JSON.stringify(e));

    // Get spreadsheet by ID (more reliable than getActiveSheet)
    // Replace with your actual Google Sheet ID from the URL
    const SHEET_ID = "YOUR_SHEET_ID_HERE"; // Get this from your Google Sheet URL
    const spreadsheet = SpreadsheetApp.openById(SHEET_ID);
    const sheet = spreadsheet.getActiveSheet();

    // Parse the incoming data - handle FormData from POST requests
    let data = {};

    if (e.parameter && Object.keys(e.parameter).length > 0) {
      // FormData sent as parameters (most common with FormData)
      data = e.parameter;
      console.log("Using POST form parameters:", JSON.stringify(data));
    } else if (e.postData && e.postData.contents) {
      // JSON data in POST body
      try {
        data = JSON.parse(e.postData.contents);
        console.log("Using POST JSON data:", JSON.stringify(data));
      } catch (parseError) {
        console.log("Failed to parse JSON, using empty data");
      }
    } else {
      console.log("No data found in POST request");
    }

    // Check if headers exist, if not create them
    if (sheet.getLastRow() === 0) {
      const headers = [
        "Timestamp",
        "Name",
        "Email",
        "Phone",
        "Course",
        "Message",
        "Source",
        "Status",
      ];
      sheet.getRange(1, 1, 1, headers.length).setValues([headers]);

      // Format headers
      const headerRange = sheet.getRange(1, 1, 1, headers.length);
      headerRange.setBackground("#4285f4");
      headerRange.setFontColor("white");
      headerRange.setFontWeight("bold");
    }

    // Prepare the row data
    const rowData = [
      data.timestamp || new Date().toLocaleString(),
      data.name || "",
      data.email || "",
      data.phone || "",
      data.course || "",
      data.message || "",
      data.source || "Website",
      "New",
    ];

    // Add the data to the sheet
    sheet.appendRow(rowData);

    // Auto-resize columns for better readability
    sheet.autoResizeColumns(1, 8);

    // Send email notification (optional)
    sendEmailNotification(data);

    // Return success response
    return ContentService.createTextOutput(
      JSON.stringify({
        status: "success",
        message: "Data saved successfully",
      })
    ).setMimeType(ContentService.MimeType.JSON);
  } catch (error) {
    // Log error for debugging
    console.error("Error in doPost:", error);

    // Return error response
    return ContentService.createTextOutput(
      JSON.stringify({
        status: "error",
        message: error.toString(),
      })
    ).setMimeType(ContentService.MimeType.JSON);
  }
}

function doGet(e) {
  try {
    console.log("GET request received:", JSON.stringify(e));

    // Get spreadsheet by ID
    const SHEET_ID = "YOUR_SHEET_ID_HERE"; // Replace with your actual Sheet ID
    const sheet = SpreadsheetApp.openById(SHEET_ID).getActiveSheet();

    // Get parameters from URL
    const data = e.parameter || {};
    console.log("GET parameters:", JSON.stringify(data));

    // Check if we have data
    if (!data.name && !data.email) {
      return ContentService.createTextOutput(
        "TechAcademy Enrollment Form Handler is working! No data to save."
      );
    }

    // Add headers if first time
    if (sheet.getLastRow() === 0) {
      const headers = [
        "Timestamp",
        "Name",
        "Email",
        "Phone",
        "Course",
        "Message",
        "Source",
        "Status",
      ];
      sheet.appendRow(headers);

      // Format headers
      const headerRange = sheet.getRange(1, 1, 1, headers.length);
      headerRange.setFontWeight("bold");
      headerRange.setBackground("#4285f4");
      headerRange.setFontColor("white");
    }

    // Add the data
    const rowData = [
      data.timestamp || new Date().toLocaleString(),
      data.name || "",
      data.email || "",
      data.phone || "",
      data.course || "",
      data.message || "",
      data.source || "Website",
      "New",
    ];

    sheet.appendRow(rowData);
    console.log("Data added to sheet via GET:", rowData);

    return ContentService.createTextOutput("Success: Enrollment data saved!");
  } catch (error) {
    console.error("Error in doGet:", error.toString());
    return ContentService.createTextOutput("Error: " + error.toString());
  }
}

function sendEmailNotification(data) {
  try {
    // Configure email settings
    const emailAddress = "info@techacademy.com"; // Replace with your email
    const subject = `New Enrollment: ${data.name} - ${data.course}`;

    const emailBody = `
New student enrollment received!

Student Details:
- Name: ${data.name}
- Email: ${data.email}
- Phone: ${data.phone}
- Course: ${data.course}
- Message: ${data.message}
- Submitted: ${data.timestamp}

Please follow up within 24 hours.

Best regards,
TechAcademy Enrollment System
    `;

    // Send email (uncomment the line below to enable email notifications)
    // MailApp.sendEmail(emailAddress, subject, emailBody);
  } catch (error) {
    console.error("Error sending email:", error);
  }
}

function testFunction() {
  // Test function to verify the script works
  const testData = {
    name: "Test Student",
    email: "test@example.com",
    phone: "+91-9876543210",
    course: "Java Full Stack Developer",
    message: "This is a test submission",
    timestamp: new Date().toLocaleString(),
    source: "Test",
  };

  const mockEvent = {
    postData: {
      contents: JSON.stringify(testData),
    },
  };

  const result = doPost(mockEvent);
  console.log("Test result:", result.getContent());
}
