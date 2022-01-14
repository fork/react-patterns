import * as React from 'react';

function SvgReveal(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 240 240" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path fill="currentColor" d="M60 90l60 80 60-80z" fillRule="evenodd" />
    </svg>
  );
}

export default SvgReveal;
