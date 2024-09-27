const urlParams = new URLSearchParams(window.location.search);
  const dl = urlParams.get('dl');// Download link
  const dt = urlParams.get('dt');// Download link title 
  const ds = urlParams.get('ds');// Download size 
  const df = urlParams.get('df'); // Download Formet 
function Details(title,link, size, downfromet){
 document.getElementById("file").innerHTML = `<div class="file">
 <table>
  <thead>
    <tr>
      <th>Filename</th>
      <th>File Size</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>${title} (${downfromet})</td>
      <td>${size}</td>
    </tr>
  </tbody>
</table>
<center>

<button id="downloadBtn" class="download-btn" disabled> <span id="countdown">10 Second</span></button></center>
 <!--
 File Neme : 
 <br/>
 file size: 
 <br/>
  formet : ${downfromet}
 <br/>
 Link : ${link}-->
 `;
     // Timer for the download button
     let timeLeft = 10; // Set the countdown time (in seconds)
     const countdownElement = document.getElementById('countdown');
     const downloadBtn = document.getElementById('downloadBtn');
 
     const timerInterval = setInterval(() => {
       timeLeft--;
       countdownElement.textContent = timeLeft+' second';
 
       if (timeLeft <= 0) {
         clearInterval(timerInterval);
         countdownElement.textContent = '0';
         downloadBtn.disabled = false; // Enable the button
         downloadBtn.classList.add('active'); // Change the button style
         downloadBtn.innerHTML = 'Download Now';
       }
     }, 1000); // Update every second
 
     // Link to the file
     downloadBtn.addEventListener('click', function() {
       window.location.href = link; // Replace with the actual download URL
     });
}
  if (dl){
    // 
    if(dt){
      //
      if(ds){
        //
        if (df){
          // all Daone 
          Details(dt,dl, ds, df);
        } else {
          //Empty
        };
      } else {
        //Empty
      };
    } else {
      //Empty
    };
  } else {
    //Empty
  };
