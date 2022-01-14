import * as React from 'react';

function SvgCollapse(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 240 240" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        fill="currentColor"
        d="M120 55.858l87.071 87.07-14.142 14.143L120 84.143l-72.929 72.928L32.93 142.93z"
      />
    </svg>
  );
}

export default SvgCollapse;
