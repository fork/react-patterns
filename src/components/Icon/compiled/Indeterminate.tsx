import * as React from 'react';

function SvgIndeterminate(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 240 240" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path fill="currentColor" d="M40 100h160v40H40z" fillRule="evenodd" />
    </svg>
  );
}

export default SvgIndeterminate;
