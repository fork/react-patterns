import * as React from 'react';

function SvgExternal(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 240 240" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M120 60v20H80v80h80v-40h20v60H60V60h60zm100-40v70h-20V54.142l-62.929 62.93-14.142-14.143L185.856 40H150V20h70z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgExternal;
