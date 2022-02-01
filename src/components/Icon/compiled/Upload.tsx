import * as React from 'react';

function SvgUpload(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 240 240" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M60 150l-.001 29.999h120L180 150h20v50H40v-50h20zm60-107.071L167.071 90l-14.142 14.142L130 81.214V150h-20V81.214l-22.929 22.928L72.93 90 120 42.929z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgUpload;
