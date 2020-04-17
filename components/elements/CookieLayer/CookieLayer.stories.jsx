import React from 'react';
import CookieLayer from './CookieLayer';

export default {
  title: 'Elements/CookieLayer',
  component: CookieLayer
};

export const Normal = () => (
  <CookieLayer
    content="<p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. </p>"
    acceptLabel="Ok,cool"
    rejectLabel="How about no"
    onAccept={() => console.log('Accept')}
    onReject={() => console.log('Reject')}
  />
);
