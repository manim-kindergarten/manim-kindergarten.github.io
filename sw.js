if(!self.define){let s,e={};const l=(l,r)=>(l=new URL(l+".js",r).href,e[l]||new Promise((e=>{if("document"in self){const s=document.createElement("script");s.src=l,s.onload=e,document.head.appendChild(s)}else s=l,importScripts(l),e()})).then((()=>{let s=e[l];if(!s)throw new Error(`Module ${l} didn’t register its module`);return s})));self.define=(r,i)=>{const n=s||("document"in self?document.currentScript.src:"")||location.href;if(e[n])return;let o={};const u=s=>l(s,n),a={module:{uri:n},exports:o,require:u};e[n]=Promise.all(r.map((s=>a[s]||u(s)))).then((s=>(i(...s),o)))}}define(["./workbox-f51ab5e4"],(function(s){"use strict";self.skipWaiting(),s.clientsClaim(),s.precacheAndRoute([{url:"about.html",revision:"3548ada6b90cbdd1de1641a6f9b859f7"},{url:"assets/_...all_.6046b7e1.js",revision:null},{url:"assets/404.a3b70be8.js",revision:null},{url:"assets/about.7c62d00f.js",revision:null},{url:"assets/about.f039358e.js",revision:null},{url:"assets/AnimateComponent.ec8fc2a7.js",revision:null},{url:"assets/app.2a6d0fe4.js",revision:null},{url:"assets/app.5565772f.css",revision:null},{url:"assets/Back.ac8dcfee.js",revision:null},{url:"assets/color.6f1c29c9.js",revision:null},{url:"assets/color.f4842313.css",revision:null},{url:"assets/docs.cdd080cb.js",revision:null},{url:"assets/downloadPath.87a5f4c5.js",revision:null},{url:"assets/home.96b9c22d.js",revision:null},{url:"assets/Logo.1465b54c.css",revision:null},{url:"assets/Logo.9d5fd8f8.js",revision:null},{url:"assets/manim-cairo.c1ef969e.js",revision:null},{url:"assets/manimgl.108b7fde.js",revision:null},{url:"assets/membership.3b86129d.js",revision:null},{url:"assets/new_usage.8bd0bee8.js",revision:null},{url:"assets/persuade2quit.61d43e3d.js",revision:null},{url:"assets/PureCard.3e5a7dbd.js",revision:null},{url:"assets/tools.37fc34a2.js",revision:null},{url:"assets/turn_to_grant.d69f0649.js",revision:null},{url:"assets/virtual_pwa-register.80a10119.js",revision:null},{url:"docs.html",revision:"e846d77ce2d7ad641d41e0bf2c3cc190"},{url:"en/about.html",revision:"1c0cacb1de8576af8521a0216322e423"},{url:"index.html",revision:"fccdb740efec105431429ecb5d5e1b4d"},{url:"membership.html",revision:"d8177322d56fe84718dd9b3132e099da"},{url:"problems/manim-cairo.html",revision:"6ededcf7084d7d3e61f98d961db74950"},{url:"problems/manimgl.html",revision:"f3d93b4c1fa752d60d03cd7d187c6bc5"},{url:"problems/new_usage.html",revision:"cbb59087197a42f974cf9147179a46f4"},{url:"problems/persuade2quit.html",revision:"9ec23c1f2944e101ef23ab496fa2a508"},{url:"tool/color.html",revision:"e0b5143506d7c915b42fee57e2d0e8cf"},{url:"tools.html",revision:"7482374bf761cbce26f0ce6dc2b3a230"},{url:"safari-pinned-tab.svg",revision:"8fbde6c2c1152dbe7778dc42222ba70b"},{url:"pwa-192x192.png",revision:"23189652df344edf4e6ffb5094169d5e"},{url:"pwa-512x512.png",revision:"5aa59620900e4e858f073b96fb763c21"},{url:"manifest.webmanifest",revision:"37e8d18026b05432f623fc5efac2b4b1"}],{}),s.cleanupOutdatedCaches(),s.registerRoute(new s.NavigationRoute(s.createHandlerBoundToURL("index.html")))}));
