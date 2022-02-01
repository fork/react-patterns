import * as React from 'react';

function SvgAdd(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 240 240" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        fill="currentColor"
        d="M130 60v49.999l50 .001v20l-50-.001V180h-20l-.001-50.001L60 130v-20l50-.001V60z"
        fillRule="evenodd"
      />
    </svg>
  );
}

export default SvgAdd;
