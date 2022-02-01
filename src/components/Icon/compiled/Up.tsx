import * as React from 'react';

function SvgUp(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 240 240" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        fill="currentColor"
        d="M120 35.858l87.071 87.07-14.142 14.143-62.93-62.928L130 200h-20V74.143L47.07 137.07l-14.14-14.14z"
      />
    </svg>
  );
}

export default SvgUp;
