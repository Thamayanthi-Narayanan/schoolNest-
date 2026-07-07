import { useId } from 'react';
import './SchoolNestLogo.css';

function SchoolNestMark({ size = 42, className = '' }) {
  const rawId = useId();
  const gradientId = `schoolNestGrad-${rawId.replace(/:/g, '')}`;
  const shineId = `schoolNestShine-${rawId.replace(/:/g, '')}`;

  return (
    <svg
      className={`schoolNestMark ${className}`.trim()}
      width={size}
      height={size}
      viewBox="0 0 42 42"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id={gradientId} x1="8" y1="5" x2="34" y2="37" gradientUnits="userSpaceOnUse">
          <stop stopColor="#2DD4BF" />
          <stop offset="0.55" stopColor="#00C896" />
          <stop offset="1" stopColor="#0F766E" />
        </linearGradient>
        <linearGradient id={shineId} x1="10" y1="8" x2="28" y2="24" gradientUnits="userSpaceOnUse">
          <stop stopColor="#FFFFFF" stopOpacity="0.42" />
          <stop offset="1" stopColor="#FFFFFF" stopOpacity="0" />
        </linearGradient>
      </defs>

      <rect width="42" height="42" rx="11" fill={`url(#${gradientId})`} />
      <rect width="42" height="42" rx="11" fill={`url(#${shineId})`} />

      <path
        d="M11 18.5L21 10.5L31 18.5"
        stroke="#FFFFFF"
        strokeWidth="2.25"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      <path
        d="M14.5 18.5H27.5V29.5C27.5 30.05 27.05 30.5 26.5 30.5H15.5C14.95 30.5 14.5 30.05 14.5 29.5V18.5Z"
        fill="#FFFFFF"
        fillOpacity="0.96"
      />

      <path
        d="M18.25 24.25H23.75"
        stroke="#0D9488"
        strokeWidth="1.8"
        strokeLinecap="round"
      />

      <circle cx="21" cy="27.1" r="1.35" fill="#0D9488" />

      <path
        d="M9.5 31.25C13.2 34.35 17.1 35.5 21 35.5C24.9 35.5 28.8 34.35 32.5 31.25"
        stroke="#FFFFFF"
        strokeWidth="2"
        strokeLinecap="round"
        opacity="0.92"
      />

      <path
        d="M21 13.5V16.25"
        stroke="#FFFFFF"
        strokeWidth="1.8"
        strokeLinecap="round"
        opacity="0.9"
      />
    </svg>
  );
}

export default function SchoolNestLogo({
  size = 42,
  showWordmark = true,
  wordmarkStyle = 'split',
  className = '',
}) {
  return (
    <span className={`schoolNestLogo ${className}`.trim()}>
      <span className="schoolNestLogoMarkWrap">
        <SchoolNestMark size={size} />
      </span>

      {showWordmark && wordmarkStyle === 'split' && (
        <span className="schoolNestLogoText">
          <span className="schoolNestLogoSchool">School</span>
          <span className="schoolNestLogoNest">nest</span>
        </span>
      )}

      {showWordmark && wordmarkStyle === 'single' && (
        <span className="schoolNestLogoText schoolNestLogoTextSingle">Schoolnest</span>
      )}
    </span>
  );
}

export { SchoolNestMark };
