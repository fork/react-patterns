import * as React from 'react';

function SvgSearch(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 240 240" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M95 29c36.45 0 66 29.55 66 66 0 14.617-4.752 28.125-12.795 39.062l48.866 48.867-14.142 14.142-48.867-48.866C123.125 156.248 109.617 161 95 161c-36.45 0-66-29.55-66-66s29.55-66 66-66zm0 20c-25.405 0-46 20.595-46 46s20.595 46 46 46 46-20.595 46-46-20.595-46-46-46z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgSearch;
