import * as React from 'react';

function SvgCheck(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" {...props}>
      <path d="M12.377 4.306l.937.937-7.062 7.062L2.009 8.08l.963-.98 3.285 3.332z" />
    </svg>
  );
}

export default SvgCheck;
