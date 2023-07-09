"use client";

import { useEffect } from "react";

import Script from "next/script";

declare global {
  interface Window {
    pendo: any;
  }
}

export const Pendo = () => {
  useEffect(() => {
    if (window.pendo) window.pendo.identify({ visitor: {} });
  }, [window.pendo]);

  const API_KEY = process.env["NEXT_PUBLIC_PENDO_API_KEY"];
  if (!API_KEY) return null;

  return (
    <Script
      id="pendo-analytics"
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{
        __html: `
          (function(apiKey) {
            (function(p, e, n, d, o) {
              var v, w, x, y, z;
              o = p[d] = p[d] || {};
              o._q = o._q || [];
              v = ['initialize', 'identify', 'updateOptions', 'pageLoad', 'track'];
              for (w = 0, x = v.length; w < x; ++w)
                (function(m) {
                  o[m] =
                    o[m] ||
                    function() {
                      o._q[m === v[0] ? 'unshift' : 'push'](
                        [m].concat([].slice.call(arguments, 0))
                      );
                    };
                })(v[w]);
              y = e.createElement(n);
              y.async = !0;
              y.src = 'https://cdn.eu.pendo.io/agent/static/' + apiKey + '/pendo.js';
              z = e.getElementsByTagName(n)[0];
              z.parentNode.insertBefore(y, z);
            })(window, document, 'script', 'pendo');

            pendo.initialize({
              visitor: {},
            });
          })('${API_KEY}');
        `,
      }}
    />
  );
};
