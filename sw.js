if(!self.define){let s,e={};const l=(l,r)=>(l=new URL(l+".js",r).href,e[l]||new Promise((e=>{if("document"in self){const s=document.createElement("script");s.src=l,s.onload=e,document.head.appendChild(s)}else s=l,importScripts(l),e()})).then((()=>{let s=e[l];if(!s)throw new Error(`Module ${l} didn’t register its module`);return s})));self.define=(r,i)=>{const n=s||("document"in self?document.currentScript.src:"")||location.href;if(e[n])return;let a={};const o=s=>l(s,n),u={module:{uri:n},exports:a,require:o};e[n]=Promise.all(r.map((s=>u[s]||o(s)))).then((s=>(i(...s),a)))}}define(["./workbox-f51ab5e4"],(function(s){"use strict";self.skipWaiting(),s.clientsClaim(),s.precacheAndRoute([{url:"about.html",revision:"72c9440a4a0754418c583d82adefbe5a"},{url:"assets/_...all_.9c178c44.js",revision:null},{url:"assets/404.083d3159.js",revision:null},{url:"assets/about.2016be96.js",revision:null},{url:"assets/about.d5daa817.js",revision:null},{url:"assets/AnimateComponent.e9b00996.js",revision:null},{url:"assets/app.1303d032.js",revision:null},{url:"assets/app.5565772f.css",revision:null},{url:"assets/Back.1be22899.js",revision:null},{url:"assets/color.15b3f84d.js",revision:null},{url:"assets/color.f4842313.css",revision:null},{url:"assets/docs.56068a1d.js",revision:null},{url:"assets/downloadPath.59fc5a8e.js",revision:null},{url:"assets/home.56cf8bec.js",revision:null},{url:"assets/Logo.1465b54c.css",revision:null},{url:"assets/Logo.4f9f3701.js",revision:null},{url:"assets/manim-cairo.77bafb13.js",revision:null},{url:"assets/manimgl.a198905f.js",revision:null},{url:"assets/membership.e3bd6317.js",revision:null},{url:"assets/new_usage.a3a26abd.js",revision:null},{url:"assets/persuade2quit.be7ababe.js",revision:null},{url:"assets/PureCard.955fde95.js",revision:null},{url:"assets/tools.ed8524af.js",revision:null},{url:"assets/turn_to_grant.d69f0649.js",revision:null},{url:"assets/virtual_pwa-register.80a10119.js",revision:null},{url:"docs.html",revision:"7e4d37a3fdd04552873928deaa6d8d75"},{url:"en/about.html",revision:"2b2e59f218e5116012b156e74d22f694"},{url:"index.html",revision:"f85e0f76a002ea3fe764458776d34075"},{url:"membership.html",revision:"4592d635abc0101f4047101d889d64ff"},{url:"problems/manim-cairo.html",revision:"be6aa977d544d081102e1473ad1f3a04"},{url:"problems/manimgl.html",revision:"5c2e710d11e89b771fd0827ea3d97327"},{url:"problems/new_usage.html",revision:"eb9a890cecabb34bdf3113979da852be"},{url:"problems/persuade2quit.html",revision:"80b6e1ada88273e8ce24905788a1d28f"},{url:"tool/color.html",revision:"255d8548fea05832155b78d3fd4113e7"},{url:"tools.html",revision:"cc0ed3d36fc2e60b94e9610e35abd2fc"},{url:"favicon.svg",revision:"8fbde6c2c1152dbe7778dc42222ba70b"},{url:"safari-pinned-tab.svg",revision:"8fbde6c2c1152dbe7778dc42222ba70b"},{url:"pwa-192x192.png",revision:"23189652df344edf4e6ffb5094169d5e"},{url:"pwa-512x512.png",revision:"5aa59620900e4e858f073b96fb763c21"},{url:"manifest.webmanifest",revision:"37e8d18026b05432f623fc5efac2b4b1"}],{}),s.cleanupOutdatedCaches(),s.registerRoute(new s.NavigationRoute(s.createHandlerBoundToURL("index.html")))}));
