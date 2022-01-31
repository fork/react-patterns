import * as React from 'react';

function SvgCancel(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 240 240" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        fill="currentColor"
        d="M152.929 72.929L167.07 87.07 134.141 120l32.93 32.929-14.142 14.142-32.93-32.93-32.928 32.93L72.93 152.93 105.859 120l-32.93-32.928L87.072 72.93 120 105.858z"
      />
    </svg>
  );
}

export default SvgCancel;
