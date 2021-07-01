import * as React from 'react';

function SvgTwitter(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg fill="currentColor" viewBox="0 0 25 20" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M24.494.15a12.167 12.167 0 01-3.496 1.687C19.625.273 17.411-.276 15.456.463s-3.237 2.609-3.209 4.682v1.103a11.902 11.902 0 01-10.02-4.995s-4.453 9.925 5.567 14.336A13.043 13.043 0 010 17.794c10.02 5.514 22.267 0 22.267-12.682a4.926 4.926 0 00-.089-.915A8.494 8.494 0 0024.494.15z" />
    </svg>
  );
}

export default SvgTwitter;
