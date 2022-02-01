import * as React from 'react';

function SvgDownload(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 240 240" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M60 150l-.001 29.999h120L180 150h20v50H40v-50h20zm70-110v75.857l22.929-22.928 14.142 14.142L120 154.142l-47.071-47.07L87.07 92.928 110 115.857V40h20z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgDownload;
