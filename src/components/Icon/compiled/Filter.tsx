import * as React from 'react';

function SvgFilter(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 240 240" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M190 40l-60.001 94.287L130 200h-20l-.001-65.716L50 40h140zm-36.434 20H86.433L120 112.747 153.566 60z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgFilter;
