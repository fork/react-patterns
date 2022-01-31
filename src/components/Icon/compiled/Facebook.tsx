import * as React from 'react';

function SvgFacebook(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 240 240"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      {...props}
    >
      <defs>
        <path id="facebook_svg__a" d="M0 0h205v199H0z" />
      </defs>
      <g transform="translate(20 20)" fill="none" fillRule="evenodd">
        <mask id="facebook_svg__b" fill="#fff">
          <use xlinkHref="#facebook_svg__a" />
        </mask>
        <path
          d="M200 100.611C200 45.045 155.229 0 100 0S0 45.045 0 100.611C0 150.83 36.569 192.452 84.375 200v-70.306h-25.39v-29.083h25.39V78.445c0-25.215 14.93-39.144 37.771-39.144 10.941 0 22.385 1.965 22.385 1.965v24.76h-12.61c-12.422 0-16.296 7.756-16.296 15.712v18.873h27.734l-4.433 29.083h-23.301V200C163.431 192.452 200 150.83 200 100.611"
          fill="currentColor"
          mask="url(#facebook_svg__b)"
        />
      </g>
    </svg>
  );
}

export default SvgFacebook;
