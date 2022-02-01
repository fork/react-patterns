import React from 'react';

import Icon, { IconTypes } from '../Icon';

import StyledShareLinks from './ShareLinks.style';

export type ShareLink = 'Facebook' | 'Instagram' | 'WhatsApp' | 'Mail' | 'Twitter';

export type ShareLinksProps = {
  links: ShareLink[];
  subject: string;
  text: string;
  title: string;
  url: string;
  className?: string;
};

const ShareLinks = ({ links, subject, text, title, url, className }: ShareLinksProps) => {
  const s = encodeURI(subject);
  const t = encodeURI(title);
  const tx = encodeURI(text);
  const u = encodeURI(url);

  const hrefs: { [key: string]: string } = {
    mail: `mailto:?subject=${s}&amp;body=${tx} ${u}`,
    facebook: `https://www.facebook.com/sharer.php?t=${t}&amp;u=${u}`,
    twitter: `https://twitter.com/intent/tweet?text=${tx}&amp;url=${u}`,
    linkedin: `https://www.linkedin.com/shareArticle?mini=true&amp;title=${t}&amp;url=${u}&amp;summary=${tx}`,
    whatsapp: `whatsapp://send?text=${tx} ${u}`
  };

  return (
    <StyledShareLinks className={className}>
      {links.map(link => (
        <a
          key={link}
          className="sharing__item"
          href={hrefs[link.toLowerCase()]}
          target="_blank"
          rel="noopener noreferrer"
          title={`Share via ${link}`}
          aria-label={`Share via ${link}`}
        >
          <Icon icon={link as IconTypes} />
        </a>
      ))}
    </StyledShareLinks>
  );
};

export default ShareLinks;
