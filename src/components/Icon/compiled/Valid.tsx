import * as React from 'react';

function SvgValid(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 240 240" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M120 20c55.228 0 100 44.772 100 100s-44.772 100-100 100S20 175.228 20 120 64.772 20 120 20zm0 20c-44.183 0-80 35.817-80 80s35.817 80 80 80 80-35.817 80-80-35.817-80-80-80zm42.929 42.929L177.07 97.07 110 164.142l-37.071-37.07 14.142-14.143L110 135.857l52.929-52.928z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgValid;
