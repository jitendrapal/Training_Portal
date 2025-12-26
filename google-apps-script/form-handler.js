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

/**
 * Handle enrollment form submissions
 */
function handleEnrollmentForm(formData) {
  try {
    // Open the spreadsheet and get the enrollment sheet
    const spreadsheet = SpreadsheetApp.openById(SHEET_ID);
    let sheet = spreadsheet.getSheetByName(ENROLLMENT_SHEET);

    // Create sheet if it doesn't exist
    if (!sheet) {
      sheet = spreadsheet.insertSheet(ENROLLMENT_SHEET);
      // Add headers
      sheet
        .getRange(1, 1, 1, 8)
        .setValues([
          [
            "Timestamp",
            "Name",
            "Email",
            "Phone",
            "Course",
            "Message",
            "Source",
            "Status",
          ],
        ]);
      sheet.getRange(1, 1, 1, 8).setFontWeight("bold");
    }

    // Prepare data row
    const timestamp = new Date();
    const rowData = [
      timestamp,
      formData.name || "",
      formData.email || "",
      formData.phone || "",
      formData.course || "",
      formData.message || "",
      formData.source || "Website",
      "New",
    ];

    // Add data to sheet
    sheet.appendRow(rowData);

    // Auto-resize columns for better readability
    sheet.autoResizeColumns(1, 8);

    console.log("Enrollment form data saved successfully");

    return ContentService.createTextOutput(
      JSON.stringify({
        success: true,
        message: "Enrollment form submitted successfully",
      })
    ).setMimeType(ContentService.MimeType.JSON);
  } catch (error) {
    console.error("Error handling enrollment form:", error);
    throw error;
  }
}

/**
 * Handle contact form submissions
 */
function handleContactForm(formData) {
  try {
    console.log("Handling contact form with data:", formData);

    // Open the spreadsheet and get the contact sheet
    const spreadsheet = SpreadsheetApp.openById(SHEET_ID);
    let sheet = spreadsheet.getSheetByName(CONTACT_SHEET);

    console.log("Contact sheet found:", sheet ? "Yes" : "No");

    // Create sheet if it doesn't exist
    if (!sheet) {
      sheet = spreadsheet.insertSheet(CONTACT_SHEET);
      // Add headers
      sheet
        .getRange(1, 1, 1, 8)
        .setValues([
          [
            "Timestamp",
            "Name",
            "Email",
            "Phone",
            "Subject",
            "Message",
            "Source",
            "Status",
          ],
        ]);
      sheet.getRange(1, 1, 1, 8).setFontWeight("bold");
    }

    // Prepare data row
    const timestamp = new Date();
    const rowData = [
      timestamp,
      formData.name || "",
      formData.email || "",
      formData.phone || "",
      formData.subject || "",
      formData.message || "",
      formData.source || "Website",
      "New",
    ];

    console.log("Contact form row data:", rowData);

    // Add data to sheet
    sheet.appendRow(rowData);

    console.log("Contact form data added to sheet successfully");

    // Auto-resize columns for better readability
    sheet.autoResizeColumns(1, 8);

    console.log("Contact form data saved successfully");

    return ContentService.createTextOutput(
      JSON.stringify({
        success: true,
        message: "Contact form submitted successfully",
      })
    ).setMimeType(ContentService.MimeType.JSON);
  } catch (error) {
    console.error("Error handling contact form:", error);
    throw error;
  }
}

/**
 * Handle service form submissions
 */
function handleServiceForm(formData) {
  try {
    console.log("Handling service form with data:", formData);

    // Open the spreadsheet and get the service sheet
    const spreadsheet = SpreadsheetApp.openById(SHEET_ID);
    let sheet = spreadsheet.getSheetByName(SERVICE_SHEET);

    console.log("Service sheet found:", sheet ? "Yes" : "No");

    // Create sheet if it doesn't exist
    if (!sheet) {
      sheet = spreadsheet.insertSheet(SERVICE_SHEET);
      // Add headers
      sheet
        .getRange(1, 1, 1, 8)
        .setValues([
          [
            "Timestamp",
            "Name",
            "Email",
            "Phone",
            "Service",
            "Message",
            "Source",
            "Status",
          ],
        ]);
      sheet.getRange(1, 1, 1, 8).setFontWeight("bold");
    }

    // Prepare data row
    const timestamp = new Date();
    const rowData = [
      timestamp,
      formData.name || "",
      formData.email || "",
      formData.phone || "",
      formData.service || "",
      formData.message || "",
      formData.source || "Website",
      "New",
    ];

    console.log("Service form row data:", rowData);

    // Add data to sheet
    sheet.appendRow(rowData);

    console.log("Service form data added to sheet successfully");

    // Auto-resize columns for better readability
    sheet.autoResizeColumns(1, 8);

    console.log("Service form data saved successfully");

    return ContentService.createTextOutput(
      JSON.stringify({
        success: true,
        message: "Service form submitted successfully",
      })
    ).setMimeType(ContentService.MimeType.JSON);
  } catch (error) {
    console.error("Error handling service form:", error);
    throw error;
  }
}

/**
 * Test function to verify the script is working
 */
function testScript() {
  console.log("Google Apps Script is working correctly!");
  return "Script test successful";
}
