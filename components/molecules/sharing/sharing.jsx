import React from 'react';
import PropTypes from 'prop-types';

export const truncateString = (str, length = 200) => {
  if (!str) return '';

  if (str.length <= length) {
    return str;
  }

  return `${str.substring(0, length)} ...`;
};

const Sharing = ({ title, url, description, ...props }) => {
  return (
    <div {...props}>
      <a
        href={`https://www.facebook.com/sharer.php?t=${title}&u=${url}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        Facebook
      </a>

      <a
        href={`https://twitter.com/intent/tweet?text=${title} - ${truncateString(
          description,
          150
        )}&url=${url}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        Twitter
      </a>

      <a href={`mailto:?subject=${title}&body=${url}`}>Mail</a>
    </div>
  );
};

Sharing.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired
};

export default Sharing;
