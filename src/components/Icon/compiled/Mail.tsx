import * as React from 'react';

function SvgMail(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 240 240" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M220 40v160H20V40h200zm-20 20H40v120h160V60zm-27.071 12.929L187.07 87.07 120 154.142l-67.071-67.07L67.07 72.928 120 125.857l52.929-52.928z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgMail;
