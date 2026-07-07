const WEB3FORMS_SUBMIT_URL = 'https://api.web3forms.com/submit';

export async function submitDemoRequest(formData) {
  const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;

  if (!accessKey) {
    throw new Error(
      'Demo form is not configured. Add VITE_WEB3FORMS_ACCESS_KEY to your .env file.'
    );
  }

  const payload = {
    access_key: accessKey,
    subject: `Schoolnest Demo Request — ${formData.schoolName.trim()}`,
    from_name: formData.contactName.trim(),
    name: formData.contactName.trim(),
    email: formData.email.trim(),
    phone: formData.phone.trim(),
    school_name: formData.schoolName.trim(),
    student_strength: formData.studentStrength.trim(),
    service_needed: formData.serviceNeeded.trim(),
    message: formData.message.trim() || 'No additional message provided.',
  };

  const response = await fetch(WEB3FORMS_SUBMIT_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify(payload),
  });

  const result = await response.json();

  if (!response.ok || !result.success) {
    throw new Error(result.message || 'Unable to send your request. Please try again.');
  }

  return result;
}
