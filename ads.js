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
