const adviewagin = expirymm*0.00066666666666;
const e=sctime,t=not_click_sctime,o=expirymm,i={apiKey:"\x41\x49\x7a\x61\x53\x79\x44\x58\x79\x70\x4f\x4c\x49\x52\x2d\x74\x64\x55\x36\x61\x50\x77\x30\x6b\x4a\x65\x52\x65\x39\x36\x6e\x54\x6a\x78\x6d\x4a\x72\x58\x6f",authDomain:"\x73\x68\x6f\x72\x74\x6c\x69\x6e\x6b\x2d\x61\x75\x66\x66\x74\x6f\x6f\x6c\x2e\x66\x69\x72\x65\x62\x61\x73\x65\x61\x70\x70\x2e\x63\x6f\x6d",databaseURL:"\x68\x74\x74\x70\x73\x3a\x2f\x2f\x73\x68\x6f\x72\x74\x6c\x69\x6e\x6b\x2d\x61\x75\x66\x66\x74\x6f\x6f\x6c\x2d\x64\x65\x66\x61\x75\x6c\x74\x2d\x72\x74\x64\x62\x2e\x66\x69\x72\x65\x62\x61\x73\x65\x69\x6f\x2e\x63\x6f\x6d",projectId:"\x73\x68\x6f\x72\x74\x6c\x69\x6e\x6b\x2d\x61\x75\x66\x66\x74\x6f\x6f\x6c",storageBucket:"\x73\x68\x6f\x72\x74\x6c\x69\x6e\x6b\x2d\x61\x75\x66\x66\x74\x6f\x6f\x6c\x2e\x61\x70\x70\x73\x70\x6f\x74\x2e\x63\x6f\x6d",messagingSenderId:"12379530992",appId:"1:12379530992:web:162709042e7ee75cfb8435",measurementId:"G-KS2K83PRFW"};function loadScript(e){return new Promise(((t,o)=>{const i=document.createElement("script");i.src=e,i.defer=!0,i.onload=()=>t(e),i.onerror=()=>o(new Error(`Failed to load script: ${e}`)),document.head.appendChild(i)}))}function setCookie(e,t,o){let i="";if(o){const e=new Date;e.setTime(e.getTime()+24*o*60*60*1e3),i=`; expires=${e.toUTCString()}`}document.cookie=`${e}=${t||""}${i}; path=/`}function getCookie(e){const t=`${e}=`,o=document.cookie.split(";");for(let i of o){for(;" "===i.charAt(0);)i=i.substring(1,i.length);if(0===i.indexOf(t))return i.substring(t.length,i.length)}return null}function displayOverlay(){const e=document.getElementById("overlay");e&&(e.style.display="flex")}function closeOverlay(t=e){setCookie("lastVisit",(new Date).getTime()+60*o*1e3,0),setTimeout((()=>{const e=document.getElementById("overlay");e&&(e.style.display="none")}),1e3*t)}let s=document.hasFocus();function initializeFirebaseAndValidate(){firebase.initializeApp(i);const e=firebase.database(),o=window.location.hostname.split(",").map((e=>e.trim()));e.ref("\x6c\x69\x63\x65\x6e\x73\x65\x73\x2f"+data_Key).once("value",(i=>{const s=i.val();s?s.isActive?function validateBlogID(e,o){const i=e.some((e=>o.includes(e)));i?(closeOverlay(t),console.log("\x68\x74\x74\x70\x73\x3a\x2f\x2f\x74\x2e\x6d\x65\x2f\x77\x68\x69\x74\x65\x5f\x61\x63\x74\x69\x6f\x6e\x5f\x79\x74")):(closeOverlay(10),console.log("\x68\x74\x74\x70\x73\x3a\x2f\x2f\x74\x2e\x6d\x65\x2f\x77\x68\x69\x74\x65\x5f\x61\x63\x74\x69\x6f\x6e\x5f\x79\x74"))}(o,s.blogIDlist):(console.log("\x68\x74\x74\x70\x73\x3a\x2f\x2f\x74\x2e\x6d\x65\x2f\x77\x68\x69\x74\x65\x5f\x61\x63\x74\x69\x6f\x6e\x5f\x79\x74"),redirectToFallbackLink(e)):(redirectToFallbackLink(e),console.log("\x68\x74\x74\x70\x73\x3a\x2f\x2f\x74\x2e\x6d\x65\x2f\x77\x68\x69\x74\x65\x5f\x61\x63\x74\x69\x6f\x6e\x5f\x79\x74"))}))}function redirectToFallbackLink(e){e.ref("\x6c\x69\x63\x65\x6e\x73\x65\x73\x2f\x6c\x69\x6e\x6b").once("value",(e=>{const t=e.val();t&&(window.location.href=t.link)}))}setInterval((()=>{const e=document.hasFocus();if(e!==s&&(s=e,e)){closeOverlay()}}),500),function handleCookiesAndOverlay(){getCookie("\x76\x69\x73\x69\x74\x65\x64\x42\x65\x66\x6f\x72\x65")||(setCookie("\x76\x69\x73\x69\x74\x65\x64\x42\x65\x66\x6f\x72\x65","true",365),setCookie("\x6c\x69\x63\x65\x6e\x73\x65\x5f\x62\x79","\x68\x74\x74\x70\x73\x3a\x2f\x2f\x74\x2e\x6d\x65\x2f\x77\x68\x69\x74\x65\x5f\x61\x63\x74\x69\x6f\x6e\x5f\x79\x74",365));const e=parseInt(getCookie("lastVisit"),10),t=(new Date).getTime();e&&t<e?console.log("Within 15-minute session window."):displayOverlay();{const e=Number(getCookie("view"))||Number(0);e==Number(view_time)||(displayOverlay(),setCookie("view",Number(e+1),adviewagin))}}(),Promise.all([loadScript("\x68\x74\x74\x70\x73\x3a\x2f\x2f\x77\x77\x77\x2e\x67\x73\x74\x61\x74\x69\x63\x2e\x63\x6f\x6d\x2f\x66\x69\x72\x65\x62\x61\x73\x65\x6a\x73\x2f\x38\x2e\x31\x30\x2e\x30\x2f\x66\x69\x72\x65\x62\x61\x73\x65\x2d\x61\x70\x70\x2e\x6a\x73"),loadScript("\x68\x74\x74\x70\x73\x3a\x2f\x2f\x77\x77\x77\x2e\x67\x73\x74\x61\x74\x69\x63\x2e\x63\x6f\x6d\x2f\x66\x69\x72\x65\x62\x61\x73\x65\x6a\x73\x2f\x38\x2e\x31\x30\x2e\x30\x2f\x66\x69\x72\x65\x62\x61\x73\x65\x2d\x64\x61\x74\x61\x62\x61\x73\x65\x2e\x6a\x73")]).then((()=>{initializeFirebaseAndValidate()}))["catch"]((e=>{console.error(e.message),alert(`Error: ${e.message}`)}));
