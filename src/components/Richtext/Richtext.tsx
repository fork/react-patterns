import React, { ReactNode } from 'react';

import StyledRichtext from './Richtext.style';

export type RichttextProps = { content?: string; children?: ReactNode; className?: string };

const Richtext = ({ content, children, className }: RichttextProps) => {
  if (content) {
    return <StyledRichtext className={className} dangerouslySetInnerHTML={{ __html: content }} />;
  }

  return <StyledRichtext className={className}>{children}</StyledRichtext>;
};

export default Richtext;
