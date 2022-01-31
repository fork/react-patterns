import * as React from 'react';

function SvgBack(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 240 240" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        fill="currentColor"
        d="M122.929 32.929L137.07 47.07 74.143 110H200v20H74.143l62.928 62.929-14.142 14.142L35.858 120z"
      />
    </svg>
  );
}

export default SvgBack;
