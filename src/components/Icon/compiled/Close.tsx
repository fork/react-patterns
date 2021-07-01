import * as React from 'react';

function SvgClose(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" {...props}>
      <path
        fill="currentColor"
        d="M78.284 89.598L50 61.314 21.716 89.598a8 8 0 01-11.314 0 8 8 0 010-11.314L38.686 50 10.402 21.716a8 8 0 010-11.314 8 8 0 0111.314 0L50 38.686l28.284-28.284a8 8 0 0111.314 0 8 8 0 010 11.314L61.313 50l28.284 28.284a8 8 0 010 11.314 7.974 7.974 0 01-5.656 2.344 7.974 7.974 0 01-5.657-2.344z"
      />
    </svg>
  );
}

export default SvgClose;
