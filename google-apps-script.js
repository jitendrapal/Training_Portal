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
    // Get the active spreadsheet (or create one)
    const sheet = SpreadsheetApp.getActiveSheet();
    
    // Parse the incoming data
    const data = JSON.parse(e.postData.contents);
    
    // Check if headers exist, if not create them
    if (sheet.getLastRow() === 0) {
      const headers = [
        'Timestamp',
        'Name',
        'Email',
        'Phone',
        'Course',
        'Message',
        'Source',
        'Status'
      ];
      sheet.getRange(1, 1, 1, headers.length).setValues([headers]);
      
      // Format headers
      const headerRange = sheet.getRange(1, 1, 1, headers.length);
      headerRange.setBackground('#4285f4');
      headerRange.setFontColor('white');
      headerRange.setFontWeight('bold');
    }
    
    // Prepare the row data
    const rowData = [
      data.timestamp || new Date().toLocaleString(),
      data.name || '',
      data.email || '',
      data.phone || '',
      data.course || '',
      data.message || '',
      data.source || 'Website',
      'New'
    ];
    
    // Add the data to the sheet
    sheet.appendRow(rowData);
    
    // Auto-resize columns for better readability
    sheet.autoResizeColumns(1, 8);
    
    // Send email notification (optional)
    sendEmailNotification(data);
    
    // Return success response
    return ContentService
      .createTextOutput(JSON.stringify({
        status: 'success',
        message: 'Data saved successfully'
      }))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch (error) {
    // Log error for debugging
    console.error('Error in doPost:', error);
    
    // Return error response
    return ContentService
      .createTextOutput(JSON.stringify({
        status: 'error',
        message: error.toString()
      }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

function doGet(e) {
  // Handle GET requests (for testing)
  return ContentService
    .createTextOutput('TechAcademy Enrollment Form Handler is working!')
    .setMimeType(ContentService.MimeType.TEXT);
}

function sendEmailNotification(data) {
  try {
    // Configure email settings
    const emailAddress = 'info@techacademy.com'; // Replace with your email
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
    console.error('Error sending email:', error);
  }
}

function testFunction() {
  // Test function to verify the script works
  const testData = {
    name: 'Test Student',
    email: 'test@example.com',
    phone: '+91-9876543210',
    course: 'Java Full Stack Developer',
    message: 'This is a test submission',
    timestamp: new Date().toLocaleString(),
    source: 'Test'
  };
  
  const mockEvent = {
    postData: {
      contents: JSON.stringify(testData)
    }
  };
  
  const result = doPost(mockEvent);
  console.log('Test result:', result.getContent());
}
