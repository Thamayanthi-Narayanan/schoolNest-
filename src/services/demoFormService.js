const WEB3FORMS_SUBMIT_URL = 'https://api.web3forms.com/submit';

function buildDemoRequestPayload(formData, accessKey) {
  return {
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
    botcheck: '',
  };
}

async function parseWeb3FormsResponse(response) {
  const responseText = await response.text();

  try {
    return JSON.parse(responseText);
  } catch {
    if (responseText.includes('Just a moment') || responseText.includes('cloudflare')) {
      throw new Error(
        'Form service was blocked by network protection. Please try again in your browser.'
      );
    }

    throw new Error('Unexpected response from form service. Please try again.');
  }
}

export async function submitDemoRequest(formData) {
  const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;

  if (!accessKey || accessKey === 'your_access_key_here') {
    throw new Error(
      'Demo form is not configured. Add your real Web3Forms key in the .env file and restart the dev server.'
    );
  }

  const payload = buildDemoRequestPayload(formData, accessKey);

  const response = await fetch(WEB3FORMS_SUBMIT_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify(payload),
  });

  const result = await parseWeb3FormsResponse(response);

  if (!response.ok || !result.success) {
    throw new Error(result.message || 'Unable to send your request. Please try again.');
  }

  return result;
}
