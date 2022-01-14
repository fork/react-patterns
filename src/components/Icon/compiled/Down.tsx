import * as React from 'react';

function SvgDown(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 240 240" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        fill="currentColor"
        d="M130 40v125.857l62.929-62.928 14.142 14.142L120 204.142l-87.071-87.07 14.142-14.143L110 165.857V40z"
      />
    </svg>
  );
}

export default SvgDown;
