/**
 * Google Sheets Integration Configuration
 *
 * Replace the URL below with your actual Google Apps Script Web App URL
 * after following the setup guide in GOOGLE_SHEETS_SETUP_GUIDE.md
 */

// Your Google Apps Script Web App URL
// Example: "https://script.google.com/macros/s/AKfycby.../exec"
export const GOOGLE_APPS_SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbw--ryT4gCGTdTzk3v5IlOpeyLqfE3uzWX5I9m7LaWrLtwQHOEyC6pwS0X8PtIL54Ny/exec";

// Form submission configuration
export const FORM_CONFIG = {
  // Timeout for form submission (in milliseconds)
  SUBMISSION_TIMEOUT: 10000,

  // Success redirect delay (in milliseconds)
  SUCCESS_REDIRECT_DELAY: 3000,

  // Default source identifier
  DEFAULT_SOURCE: "Neuro Edge Technologies Website",

  // Form types
  FORM_TYPES: {
    ENROLLMENT: "enrollment",
    CONTACT: "contact",
    SERVICE: "service",
  },
};

/**
 * Submit form data to Google Sheets
 * @param {Object} formData - The form data to submit
 * @param {string} formType - The type of form (enrollment or contact)
 * @returns {Promise} - Promise that resolves when submission is complete
 */
export const submitToGoogleSheets = async (formData, formType) => {
  try {
    // Validate inputs
    if (!formData || !formType) {
      throw new Error("Form data and form type are required");
    }

    if (GOOGLE_APPS_SCRIPT_URL === "YOUR_GOOGLE_APPS_SCRIPT_URL_HERE") {
      console.warn(
        "Google Apps Script URL not configured. Please update src/config/googleSheets.js"
      );
      return;
    }

    // Prepare form data for submission
    const formDataToSend = new FormData();

    // Add all form fields
    Object.keys(formData).forEach((key) => {
      if (formData[key]) {
        formDataToSend.append(key, formData[key]);
      }
    });

    // Add metadata
    formDataToSend.append("form_type", formType);
    formDataToSend.append("source", FORM_CONFIG.DEFAULT_SOURCE);
    formDataToSend.append("timestamp", new Date().toISOString());

    // Submit to Google Sheets
    const response = await fetch(GOOGLE_APPS_SCRIPT_URL, {
      method: "POST",
      mode: "no-cors", // Required for Google Apps Script
      body: formDataToSend,
    });

    console.log(`${formType} form submitted to Google Sheets successfully`);
    console.log("Form data sent:", Object.fromEntries(formDataToSend));
    return response;
  } catch (error) {
    console.error("Error submitting to Google Sheets:", error);
    // Don't throw error to avoid breaking user experience
    return null;
  }
};

/**
 * Validate form data before submission
 * @param {Object} formData - The form data to validate
 * @param {string} formType - The type of form
 * @returns {boolean} - True if valid, false otherwise
 */
export const validateFormData = (formData, formType) => {
  if (!formData || typeof formData !== "object") {
    return false;
  }

  // Common required fields
  const requiredFields = ["name", "email"];

  // Add form-specific required fields
  if (formType === FORM_CONFIG.FORM_TYPES.ENROLLMENT) {
    requiredFields.push("course");
  } else if (formType === FORM_CONFIG.FORM_TYPES.CONTACT) {
    requiredFields.push("subject", "message");
  } else if (formType === FORM_CONFIG.FORM_TYPES.SERVICE) {
    requiredFields.push("service");
  }

  // Check if all required fields are present and not empty
  return requiredFields.every(
    (field) => formData[field] && formData[field].trim().length > 0
  );
};

export default {
  GOOGLE_APPS_SCRIPT_URL,
  FORM_CONFIG,
  submitToGoogleSheets,
  validateFormData,
};
