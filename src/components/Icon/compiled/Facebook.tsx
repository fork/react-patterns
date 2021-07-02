import * as React from 'react';

function SvgFacebook(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg fill="currentColor" viewBox="0 0 13 22" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M12.1 0H8.8a5.5 5.5 0 00-5.5 5.5v3.3H0v4.4h3.3V22h4.4v-8.8H11l1.1-4.4H7.7V5.5a1.1 1.1 0 011.1-1.1h3.3z" />
    </svg>
  );
}

export default SvgFacebook;
