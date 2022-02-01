import * as React from 'react';

function SvgYoutube(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 240 240" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M120 220c55.228 0 100-44.772 100-100S175.228 20 120 20 20 64.772 20 120s44.772 100 100 100zm50.5-99.5l-75 45v-90l75 45z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </svg>
  );
}

export default SvgYoutube;
