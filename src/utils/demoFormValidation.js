const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const phonePattern = /^[6-9]\d{9}$/;
const contactNamePattern = /^[a-zA-Z\s]{2,}$/;
const schoolNamePattern = /^[a-zA-Z0-9\s.,'&()-]{2,}$/;
const servicePattern = /^[a-zA-Z0-9\s.,/&+-]{3,}$/;
const messagePattern = /^[a-zA-Z0-9\s.,!?'"()\-/&@]{0,500}$/;

export function sanitizeDemoFormInput(name, value) {
  switch (name) {
    case 'contactName':
      return value.replace(/[^a-zA-Z\s]/g, '').replace(/\s{2,}/g, ' ');
    case 'phone':
      return value.replace(/\D/g, '').slice(0, 10);
    case 'studentStrength':
      return value.replace(/\D/g, '').slice(0, 5);
    case 'schoolName':
      return value.replace(/[^a-zA-Z0-9\s.,'&()-]/g, '');
    case 'serviceNeeded':
      return value.replace(/[^a-zA-Z0-9\s.,/&+-]/g, '');
    case 'email':
      return value.replace(/\s/g, '').slice(0, 100);
    case 'message':
      return value.slice(0, 500);
    default:
      return value;
  }
}

export function validateDemoForm(formData) {
  const errors = {};

  const schoolName = formData.schoolName.trim();
  if (!schoolName) {
    errors.schoolName = 'School name is required.';
  } else if (schoolName.length < 2) {
    errors.schoolName = 'School name must be at least 2 characters.';
  } else if (!schoolNamePattern.test(schoolName)) {
    errors.schoolName = 'Use letters, numbers, and basic punctuation only.';
  }

  const contactName = formData.contactName.trim();
  if (!contactName) {
    errors.contactName = 'Your name is required.';
  } else if (contactName.length < 2) {
    errors.contactName = 'Name must be at least 2 letters.';
  } else if (!contactNamePattern.test(contactName)) {
    errors.contactName = 'Name can contain letters and spaces only.';
  }

  const phone = formData.phone.trim();
  if (!phone) {
    errors.phone = 'Phone number is required.';
  } else if (!/^\d+$/.test(phone)) {
    errors.phone = 'Phone number can contain digits only.';
  } else if (phone.length !== 10) {
    errors.phone = 'Phone number must be exactly 10 digits.';
  } else if (!phonePattern.test(phone)) {
    errors.phone = 'Enter a valid Indian mobile number starting with 6–9.';
  }

  const email = formData.email.trim();
  if (!email) {
    errors.email = 'Email address is required.';
  } else if (!emailPattern.test(email)) {
    errors.email = 'Enter a valid email address.';
  }

  const studentStrength = formData.studentStrength.trim();
  if (!studentStrength) {
    errors.studentStrength = 'Student strength is required.';
  } else if (!/^\d+$/.test(studentStrength)) {
    errors.studentStrength = 'Student strength can contain numbers only.';
  } else {
    const studentCount = Number(studentStrength);
    if (studentCount < 1) {
      errors.studentStrength = 'Student strength must be at least 1.';
    } else if (studentCount > 50000) {
      errors.studentStrength = 'Enter a realistic student count (max 50,000).';
    }
  }

  const serviceNeeded = formData.serviceNeeded.trim();
  if (!serviceNeeded) {
    errors.serviceNeeded = 'Please tell us which service you need.';
  } else if (serviceNeeded.length < 3) {
    errors.serviceNeeded = 'Service description must be at least 3 characters.';
  } else if (!servicePattern.test(serviceNeeded)) {
    errors.serviceNeeded = 'Use letters, numbers, and basic punctuation only.';
  } else if (serviceNeeded.length > 120) {
    errors.serviceNeeded = 'Keep the service description under 120 characters.';
  }

  const message = formData.message.trim();
  if (message && message.length < 3) {
    errors.message = 'Message must be at least 3 characters if provided.';
  } else if (message && !messagePattern.test(message)) {
    errors.message = 'Message contains invalid characters.';
  } else if (message.length > 500) {
    errors.message = 'Message must be 500 characters or less.';
  }

  return errors;
}

export function validateDemoField(fieldName, formData) {
  const errors = validateDemoForm(formData);
  return errors[fieldName] || '';
}

export function hasValidationErrors(errors) {
  return Object.keys(errors).length > 0;
}
