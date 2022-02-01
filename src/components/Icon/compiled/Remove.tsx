import * as React from 'react';

function SvgRemove(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 240 240" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path fill="currentColor" d="M60 110h120v20H60z" fillRule="evenodd" />
    </svg>
  );
}

export default SvgRemove;
