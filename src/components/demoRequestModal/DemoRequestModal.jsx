import { useEffect, useState } from 'react';
import { CalendarCheck, CheckCircle2, X } from 'lucide-react';
import { useDemoForm } from '../../contexts/demoFormContext/DemoFormContext';
import { hasValidationErrors, sanitizeDemoFormInput, validateDemoField, validateDemoForm } from '../../utils/demoFormValidation';
import './DemoRequestModal.css';

const initialFormState = {
  schoolName: '',
  contactName: '',
  phone: '',
  email: '',
  studentStrength: '',
  serviceNeeded: '',
  message: '',
};

function FormField({
  id,
  label,
  optional,
  error,
  children,
}) {
  return (
    <div className="demoRequestField">
      <label className="demoRequestLabel" htmlFor={id}>
        {label}
        {optional && <span className="demoRequestOptional"> (optional)</span>}
      </label>
      {children}
      {error && (
        <p className="demoRequestError" id={`${id}-error`} role="alert">
          {error}
        </p>
      )}
    </div>
  );
}

export default function DemoRequestModal() {
  const { isDemoFormOpen, closeDemoForm } = useDemoForm();
  const [formData, setFormData] = useState(initialFormState);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    if (!isDemoFormOpen) {
      return undefined;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const handleEscape = (event) => {
      if (event.key === 'Escape') {
        closeDemoForm();
      }
    };

    window.addEventListener('keydown', handleEscape);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', handleEscape);
    };
  }, [isDemoFormOpen, closeDemoForm]);

  useEffect(() => {
    if (!isDemoFormOpen) {
      setIsSubmitted(false);
      setFormData(initialFormState);
      setFormErrors({});
    }
  }, [isDemoFormOpen]);

  if (!isDemoFormOpen) {
    return null;
  }

  const handleChange = (event) => {
    const { name, value } = event.target;
    const sanitizedValue = sanitizeDemoFormInput(name, value);

    setFormData((previous) => ({
      ...previous,
      [name]: sanitizedValue,
    }));

    if (formErrors[name]) {
      setFormErrors((previous) => {
        const nextErrors = { ...previous };
        delete nextErrors[name];
        return nextErrors;
      });
    }
  };

  const handleBlur = (event) => {
    const { name, value } = event.target;
    const sanitizedValue = sanitizeDemoFormInput(name, value);
    const dataForValidation = { ...formData, [name]: sanitizedValue };
    const fieldError = validateDemoField(name, dataForValidation);

    setFormErrors((previous) => {
      const nextErrors = { ...previous };

      if (fieldError) {
        nextErrors[name] = fieldError;
      } else {
        delete nextErrors[name];
      }

      return nextErrors;
    });
  };

  const getInputClassName = (fieldName) =>
    `demoRequestInput${formErrors[fieldName] ? ' demoRequestInputError' : ''}`;

  const handleSubmit = (event) => {
    event.preventDefault();

    const errors = validateDemoForm(formData);
    setFormErrors(errors);

    if (hasValidationErrors(errors)) {
      return;
    }

    setIsSubmitted(true);
  };

  const handleOverlayClick = (event) => {
    if (event.target === event.currentTarget) {
      closeDemoForm();
    }
  };

  return (
    <div className="demoRequestOverlay" onClick={handleOverlayClick} role="presentation">
      <div
        className="demoRequestModal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="demoRequestTitle"
        aria-describedby="demoRequestDescription"
      >
        <div className="demoRequestHeader">
          <div className="demoRequestHeaderGlow" aria-hidden="true" />

          <div className="demoRequestHeaderContent">
            <span className="demoRequestBadge">
              <CalendarCheck size={14} strokeWidth={2.5} />
              Free personalised walkthrough
            </span>

            <h2 id="demoRequestTitle" className="demoRequestTitle">
              {isSubmitted ? 'Request received' : 'Request a Demo'}
            </h2>

            <p id="demoRequestDescription" className="demoRequestDescription">
              {isSubmitted
                ? `Thank you, ${formData.contactName.trim()}. Our team will contact you shortly to schedule your Schoolnest demo.`
                : "Share your school details and we'll show you Schoolnest with your own numbers."}
            </p>
          </div>

          <button
            type="button"
            className="demoRequestClose"
            onClick={closeDemoForm}
            aria-label="Close demo request form"
          >
            <X size={20} strokeWidth={2} />
          </button>
        </div>

        <div className="demoRequestBody">
          {isSubmitted ? (
            <div className="demoRequestSuccess">
              <div className="demoRequestSuccessIcon">
                <CheckCircle2 size={34} strokeWidth={2} />
              </div>
              <p className="demoRequestSuccessText">
                We&apos;ll reach out on <strong>{formData.phone.trim()}</strong> or{' '}
                <strong>{formData.email.trim()}</strong> within one business day.
              </p>
              <button type="button" className="demoRequestSubmit" onClick={closeDemoForm}>
                Close
              </button>
            </div>
          ) : (
            <form className="demoRequestForm" onSubmit={handleSubmit} noValidate>
              <FormField id="schoolName" label="School name" error={formErrors.schoolName}>
                <input
                  id="schoolName"
                  name="schoolName"
                  type="text"
                  className={getInputClassName('schoolName')}
                  value={formData.schoolName}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="e.g. Green Valley Matric School"
                  aria-invalid={Boolean(formErrors.schoolName)}
                  aria-describedby={formErrors.schoolName ? 'schoolName-error' : undefined}
                />
              </FormField>

              <div className="demoRequestFieldRow">
                <FormField id="contactName" label="Your name" error={formErrors.contactName}>
                  <input
                    id="contactName"
                    name="contactName"
                    type="text"
                    className={getInputClassName('contactName')}
                    value={formData.contactName}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="Full name"
                    aria-invalid={Boolean(formErrors.contactName)}
                    aria-describedby={formErrors.contactName ? 'contactName-error' : undefined}
                  />
                </FormField>

                <FormField id="phone" label="Phone number" error={formErrors.phone}>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    className={getInputClassName('phone')}
                    value={formData.phone}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="9876543210"
                    maxLength={10}
                    inputMode="numeric"
                    aria-invalid={Boolean(formErrors.phone)}
                    aria-describedby={formErrors.phone ? 'phone-error' : undefined}
                  />
                </FormField>
              </div>

              <div className="demoRequestFieldRow">
                <FormField id="email" label="Email address" error={formErrors.email}>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    className={getInputClassName('email')}
                    value={formData.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="you@schoolname.edu"
                    aria-invalid={Boolean(formErrors.email)}
                    aria-describedby={formErrors.email ? 'email-error' : undefined}
                  />
                </FormField>

                <FormField id="studentStrength" label="Student strength" error={formErrors.studentStrength}>
                  <input
                    id="studentStrength"
                    name="studentStrength"
                    type="text"
                    inputMode="numeric"
                    className={getInputClassName('studentStrength')}
                    value={formData.studentStrength}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="e.g. 450"
                    maxLength={5}
                    aria-invalid={Boolean(formErrors.studentStrength)}
                    aria-describedby={formErrors.studentStrength ? 'studentStrength-error' : undefined}
                  />
                </FormField>
              </div>

              <FormField id="serviceNeeded" label="Service needed" error={formErrors.serviceNeeded}>
                <input
                  id="serviceNeeded"
                  name="serviceNeeded"
                  type="text"
                  className={getInputClassName('serviceNeeded')}
                  value={formData.serviceNeeded}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="e.g. Fee recovery, BLE safety, Attendance"
                  maxLength={120}
                  aria-invalid={Boolean(formErrors.serviceNeeded)}
                  aria-describedby={formErrors.serviceNeeded ? 'serviceNeeded-error' : undefined}
                />
              </FormField>

              <FormField id="message" label="Message" optional error={formErrors.message}>
                <textarea
                  id="message"
                  name="message"
                  className={`${getInputClassName('message')} demoRequestTextarea`}
                  value={formData.message}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="Tell us what you'd like to see in the demo"
                  rows={4}
                  maxLength={500}
                  aria-invalid={Boolean(formErrors.message)}
                  aria-describedby={formErrors.message ? 'message-error' : undefined}
                />
              </FormField>

              <button type="submit" className="demoRequestSubmit">
                Submit Request
              </button>

              <p className="demoRequestFootnote">
                No spam. A real person from our Tamil Nadu team will follow up.
              </p>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
