import * as React from 'react';

function SvgMail(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M1.009 5.088l10.99 10.974L22.995 5.133c0 .018.005.035.005.053v13.629c0 .654-.481 1.185-1.073 1.185H2.073C1.48 20 1 19.47 1 18.815V5.185c0-.033.006-.064.009-.097zM21.73 4l-9.729 9.667L2.32 4h19.41z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </svg>
  );
}

export default SvgMail;
