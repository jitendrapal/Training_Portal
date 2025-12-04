/**
 * SIMPLE Google Apps Script for Neuro Edge Technologies Enrollment Form
 * This version is more reliable and easier to debug
 */

function doPost(e) {
  try {
    // Log everything we receive for debugging
    console.log("Full event object:", JSON.stringify(e));

    // Get the spreadsheet by ID (more reliable than getActiveSheet)
    // Replace 'YOUR_SHEET_ID' with your actual Google Sheet ID
    const spreadsheetId = "YOUR_SHEET_ID"; // Get this from your Google Sheet URL
    const spreadsheet = SpreadsheetApp.openById(spreadsheetId);
    const sheet = spreadsheet.getActiveSheet();

    // Get data from the request
    let data = {};

    if (e.parameter) {
      // Form data parameters
      data = e.parameter;
      console.log("Received form parameters:", JSON.stringify(data));
    } else if (e.postData && e.postData.contents) {
      // JSON data
      data = JSON.parse(e.postData.contents);
      console.log("Received JSON data:", JSON.stringify(data));
    } else {
      console.log("No data found in request");
      return ContentService.createTextOutput("No data received");
    }

    // Create headers if this is the first row
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
      headerRange.setFontWeight("bold");
      headerRange.setBackground("#4285f4");
      headerRange.setFontColor("white");
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

    console.log("Data successfully added to sheet:", rowData);

    // Return success response
    return ContentService.createTextOutput("Success: Data saved to sheet");
  } catch (error) {
    console.error("Error in doPost:", error.toString());
    return ContentService.createTextOutput("Error: " + error.toString());
  }
}

function doGet(e) {
  // Test function for GET requests
  return ContentService.createTextOutput(
    "Neuro Edge Technologies Form Handler is working! Use POST to submit data."
  );
}

function testFunction() {
  // Test function to verify the script works
  const testData = {
    parameter: {
      name: "Test Student",
      email: "test@example.com",
      phone: "+91-8055006652",
      course: "Java Full Stack Developer",
      message: "This is a test submission",
      timestamp: new Date().toLocaleString(),
      source: "Test Function",
    },
  };

  console.log("Running test function...");
  const result = doPost(testData);
  console.log("Test result:", result.getContent());
  return result;
}

/**
 * SETUP INSTRUCTIONS:
 *
 * 1. Create a new Google Sheet
 * 2. Copy the Sheet ID from the URL (the long string between /d/ and /edit)
 *    Example: https://docs.google.com/spreadsheets/d/1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms/edit
 *    Sheet ID: 1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms
 * 3. Replace 'YOUR_SHEET_ID' above with your actual Sheet ID
 * 4. Save this script
 * 5. Deploy as Web App:
 *    - Deploy > New deployment
 *    - Type: Web app
 *    - Execute as: Me
 *    - Who has access: Anyone
 * 6. Copy the deployment URL
 * 7. Test by running the testFunction
 */
