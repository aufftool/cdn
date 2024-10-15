var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        var country_code = this.responseText.replace(/(\r\n|\n|\r)/gm,"").split('loc=');
        country_code = country_code[1].split('tls=');
        country_code = country_code[0];
 // document.getElementById("countrycode").innerHTML = country_code;
 if (country_code === "IN") {
// ind
 const sourcex = ['https://www.cpmrevenuegate.com/e889cteg?key=8afdcc96dd9a49cf69a71113480ba662']
  document.addEventListener("mousedown", tabUnder);
  function tabUnder() {
    var a = document.createElement("a"),
      e = document.createEvent("MouseEvents");
    a.href = sourcex[Math.floor(Math.random() * sourcex.length)]; //the URL of 'popup' tab
    e.initMouseEvent("click", true, true, window, 0, 0, 0, 0, 0, true, false, false, true, 0, null);
    a.dispatchEvent(e);
    document.removeEventListener("mousedown", tabUnder);
  }    
} else {
  // ads
const sourcex = ['https://www.highratecpm.com/hhb2apd0mm?key=3a93063dc172c3322aedeae7425de7c0','https://www.highratecpm.com/hhb2apd0mm?key=3a93063dc172c3322aedeae7425de7c0']
  document.addEventListener("mousedown", tabUnder);
  function tabUnder() {
    var a = document.createElement("a"),
      e = document.createEvent("MouseEvents");
    a.href = sourcex[Math.floor(Math.random() * sourcex.length)]; //the URL of 'popup' tab
    e.initMouseEvent("click", true, true, window, 0, 0, 0, 0, 0, true, false, false, true, 0, null);
    a.dispatchEvent(e);
    document.removeEventListener("mousedown", tabUnder);
  }
// ads
  }
  }
 };
//OPEN HTTP Request
xhttp.open("GET", "https://www.cloudflare.com/cdn-cgi/trace", true);
xhttp.send();
