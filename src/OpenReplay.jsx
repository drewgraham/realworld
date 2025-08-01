import React, { useEffect } from 'react';

const OpenReplay = () => {
  useEffect(() => {
    (function(w, d, s, o, u, a, i) {
      w['OpenReplayObject'] = o;
      w[o] = w[o] || function() {
        (w[o].q = w[o].q || []).push(arguments);
      };
      w[o].l = 1 * new Date();
      a = d.createElement(s);
      i = d.getElementsByTagName(s)[0];
      a.async = 1;
      a.src = u;
      i.parentNode.insertBefore(a, i);
    })(window, document, 'script', 'openreplay', 'https://cdn.openreplay.com/oss.js');

    openreplay('init', { projectKey: 'your-project-key' });
  }, []);

  return null;
};

export default OpenReplay;