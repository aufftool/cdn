/*<![CDATA[*/
/* Disable Default Cookie Consent */ cookieChoices = {};
/* @shinsenter/defer.js */ !function(c,i,t){var f,o=/^data-(.+)/,u='IntersectionObserver',r=/p/.test(i.readyState),s=[],a=s.slice,d='lazied',n='load',e='pageshow',l='forEach',m='hasAttribute',h='shift';function p(e){i.head.appendChild(e)}function v(e,n){a.call(e.attributes)[l](n)}function y(e,n,t,o){return o=(o=n?i.getElementById(n):o)||i.createElement(e),n&&(o.id=n),t&&(o.onload=t),o}function b(e,n){return a.call((n||i).querySelectorAll(e))}function g(t,e){b('source',t)[l](g),v(t,function(e,n){(n=o.exec(e.name))&&(t[n[1]]=e.value)}),e&&(t.className+=' '+e),n in t&&t[n]()}function I(e){f(function(o){o=b(e||'[type=deferjs]'),function e(n,t){(n=o[h]())&&(n.parentNode.removeChild(n),(t=y(n.nodeName)).text=n.text,v(n,function(e){'type'!=e.name&&(t[e.name]=e.value)}),t.src&&!t[m]('async')?(t.onload=t.onerror=e,p(t)):(p(t),e()))}()})}(f=function(e,n){r?t(e,n):s.push(e,n)}).all=I,f.js=function(n,t,e,o){f(function(e){(e=y('SCRIPT',t,o)).src=n,p(e)},e)},f.css=function(n,t,e,o){f(function(e){(e=y('LINK',t,o)).rel='stylesheet',e.href=n,p(e)},e)},f.dom=function(e,n,t,o,i){function r(e){o&&!1===o(e)||g(e,t)}f(function(t){t=u in c&&new c[u](function(e){e[l](function(e,n){e.isIntersecting&&(n=e.target)&&(t.unobserve(n),r(n))})},i),b(e||'[data-src]')[l](function(e){e[m](d)||(e.setAttribute(d,''),t?t.observe(e):r(e))})},n)},f.reveal=g,c.Defer=f,c.addEventListener('on'+e in c?e:n,function(){for(I();s[0];t(s[h](),s[h]()))r=1})}(this,document,setTimeout),function(e,n){e.defer=n=e.Defer,e.deferscript=n.js,e.deferstyle=n.css,e.deferimg=e.deferiframe=n.dom}(this);
/* Max Clicks */ function mxAdCl(){var a=document.createElement("style");a.textContent=".adsbygoogle{display:none ! important}",document.head.appendChild(a)}Pu.gC("__Mxc")!=null&&3<=parseInt(Pu.gC("__Mxc"))&&mxAdCl();
/* Push Ads */ function pushAds(){var a=qSell("ins.adsbygoogle:not([data-adsbygoogle-status=done])").length,b=qSell("ins.adsbygoogle:not([data-adsbygoogle-status=done]) + script").length;if(b<a)for(var c=0;c<a-b;c++)(adsbygoogle=window.adsbygoogle||[]).push({})}
/* Middle Ads */ function middleAds(e,n){for(var t=0;t<n.length;t++){var l=document.getElementById("postBody"),d=document.getElementById(n[t][0]),l=l.getElementsByTagName(e);0<l.length?insertAfter(d,l[n[t][1]]):null!=d&&(d.remove())}};
/* Recurring Ads */ function recurAds(e,n){var t=document.getElementById("postBody"),l=n.ads?document.getElementById(n.ads):null,d=t.getElementsByTagName(e);if(0<d.length&&null!=l)for(var r,i=0;i<d.length;i++)i%n.every==0&&0!==i&&((r=document.createElement("div")).classList.add("recAd"),r.innerHTML=l?l.innerHTML:n.html||"",insertAfter(r,d[i])),i==d.length-1&&null!=l&&(l.remove());else null!=l&&(l.remove())};
/* Ads script loaded */ let adScript = adError = function(){if(typeof adsbygoogle.loaded !== 'undefined' ? adsbygoogle.loaded : false){ console.log("Info: Ads are loaded") } else {if (getid("postBody")!=null){getid("postBody").innerHTML="<p class='note wr'><b>Ad blocker detected!</b><br>We have detected that you are using adblocking plugin in your browser.<br>The revenue we earn by the advertisements is used to manage this website, we request you to whitelist our website in your adblocking plugin.</p>"} }};
/*]]>*/
