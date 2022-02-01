import * as React from 'react';

function SvgMenu(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 240 240" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M200 160v20H40v-20h160zm0-50v20H40v-20h160zm0-50v20H40V60h160z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </svg>
  );
}

export default SvgMenu;
