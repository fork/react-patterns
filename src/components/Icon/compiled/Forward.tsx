import * as React from 'react';

function SvgForward(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 240 240" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        fill="currentColor"
        d="M117.071 32.929L204.142 120l-87.07 87.071-14.143-14.142 62.928-62.93L40 130v-20h125.857l-62.928-62.93z"
      />
    </svg>
  );
}

export default SvgForward;
