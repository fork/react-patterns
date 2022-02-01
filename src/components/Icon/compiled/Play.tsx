import * as React from 'react';

function SvgPlay(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 240 240" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path fill="currentColor" d="M90 180l80-60-80-60z" fillRule="evenodd" />
    </svg>
  );
}

export default SvgPlay;
