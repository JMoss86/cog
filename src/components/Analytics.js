import React, { useEffect } from 'react';
import ReactGA from 'react-ga';

export default function Analytics() {
  useEffect(() => {
    ReactGA.initialize('UA-166762121-4');
    ReactGA.pageview(window.location.pathname);
  }, []);

  return <div />;
}
