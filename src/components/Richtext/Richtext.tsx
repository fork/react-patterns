import React, { ReactNode } from 'react';

import StyledRichtext from './Richtext.style';

export type RichttextProps = { html?: string; children?: ReactNode; className?: string };

const Richtext = ({ html, children, className }: RichttextProps) => {
  if (html) {
    return <StyledRichtext className={className} dangerouslySetInnerHTML={{ __html: html }} />;
  }

  return <StyledRichtext className={className}>{children}</StyledRichtext>;
};

export default Richtext;
