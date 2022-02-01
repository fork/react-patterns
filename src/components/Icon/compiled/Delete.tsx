import * as React from 'react';

function SvgDelete(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 240 240" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M140 40v20h60v20h-20v120H60V80H40V60h60V40h40zm20 40H80v100h80V80zm-20 20v60h-10v-60h10zm-30 0v60h-10v-60h10z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgDelete;
