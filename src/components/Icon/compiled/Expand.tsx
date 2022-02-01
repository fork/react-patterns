import * as React from 'react';

function SvgExpand(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 240 240" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        fill="currentColor"
        d="M192.929 82.929L207.07 97.07 120 184.142l-87.071-87.07L47.07 82.928 120 155.857z"
      />
    </svg>
  );
}

export default SvgExpand;
