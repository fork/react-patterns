import * as React from 'react';

function SvgCheckmark(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 240 240" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        fill="currentColor"
        d="M188.9 49.91l22.2 20.18-109.665 120.631-71.038-59.198 19.206-23.046 48.961 40.801z"
      />
    </svg>
  );
}

export default SvgCheckmark;
