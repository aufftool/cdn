        
        // Initialize Firebase
        firebase.initializeApp(firebaseConfig);
        const dbRef = firebase.database().ref("links");
        
        // Display post from URL parameter
        function displayPostFromQueryParam() {
            const postId = new URLSearchParams(window.location.search).get("id");
            
            if (postId) {
                dbRef.child(postId).once("value").then((snapshot) => {
                    const postData = snapshot.val();
                    const postContent = document.getElementById("postContent");
                    
                    if (postData) {
                        postContent.innerHTML = `
                            <h1 class="animate__animated animate__fadeIn">${postData.postTitle || 'Untitled Post'}</h1>
                            ${postData.links && Array.isArray(postData.links) && postData.links.length > 0 ? 
                                postData.links.map(link => `
                                    <div class="link-card animate__animated animate__fadeInUp">
                                        <h3 class="link-title">${link.title || 'Untitled Link'}</h3>
                                        <button class="btn btn-primary" onclick="linkload('${link.url}', '${(link.title || 'Untitled Link').replace(/'/g, "\\'")}', 'You are being redirected to: ${link.url}')">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                                                <polyline points="15 3 21 3 21 9"></polyline>
                                                <line x1="10" y1="14" x2="21" y2="3"></line>
                                            </svg>
                                            <span>Open Link</span>
                                        </button>
                                    </div>
                                `).join('') : 
                                `<p class="animate__animated animate__fadeIn">This post contains no links.</p>`
                            }
                        `;
                        
                        document.getElementById("postLinkInput").value = window.location.href;
                    } else {
                        postContent.innerHTML = `
                            <div class="animate__animated animate__fadeIn">
                                <h1>Oops!</h1>
                                <p>Post not found or has been deleted.</p>
                            </div>
                        `;
                    }
                }).catch(error => {
                    console.error("Error loading post:", error);
                    document.getElementById("postContent").innerHTML = `
                        <div class="animate__animated animate__fadeIn">
                            <h1>Error</h1>
                            <p>Could not load post. Please try again later.</p>
                        </div>
                    `;
                });
            } else {
                document.getElementById("postContent").innerHTML = `
                    <div class="animate__animated animate__fadeIn">
                        <h1>Invalid Link</h1>
                        <p>No post ID specified in URL.</p>
                    </div>
                `;
            }
        }
        
        // Link loader with countdown
        function linkload(link, titleText, description) {
            const popup = document.createElement("div");
            popup.className = "popup";
            popup.innerHTML = `
                <div class="popup-content">
                    <span class="close-btn" onclick="this.parentNode.parentNode.style.display='none'">&times;</span>
                    <h2>${titleText}</h2>
                    <p>${description}</p>
                    
                    <div class="progress-bar">
                        <div class="progress" id="progressBar"></div>
                    </div>
                    
                    <div id="countdown">Redirecting in 5 seconds...</div>
                    <a href="${link}" class="download-link" target="_blank">Continue to Link</a>
                </div>
            `;
            
            document.body.appendChild(popup);
            popup.style.display = "block";
            
            // Countdown timer with progress bar
            let timeLeft = 5;
            const countdownEl = popup.querySelector("#countdown");
            const progressBar = popup.querySelector("#progressBar");
            const downloadLink = popup.querySelector(".download-link");
            
            const timer = setInterval(() => {
                timeLeft--;
                const progressWidth = (timeLeft / 5) * 100;
                progressBar.style.width = `${progressWidth}%`;
                countdownEl.textContent = `Redirecting in ${timeLeft} second${timeLeft !== 1 ? 's' : ''}...`;
                
                if (timeLeft <= 0) {
                    clearInterval(timer);
                    countdownEl.textContent = "Redirecting now!";
                    progressBar.style.width = "0%";
                    downloadLink.style.display = "block";
                    downloadLink.click();
                }
            }, 1000);
            
            // Close when clicking outside
            popup.addEventListener("click", (e) => {
                if (e.target === popup) {
                    popup.style.display = "none";
                    clearInterval(timer);
                }
            });
        }
        
        // Copy post link
        function copyPostLink() {
            const copyText = document.getElementById("postLinkInput");
            copyText.select();
            copyText.setSelectionRange(0, 99999);
            document.execCommand("copy");
            
            // Show temporary feedback
            const originalText = copyText.value;
            copyText.value = "Copied to clipboard!";
            copyText.style.color = "green";
            
            setTimeout(() => {
                copyText.value = originalText;
                copyText.style.color = "";
            }, 2000);
        }
        
        // Load post when page loads
        window.onload = displayPostFromQueryParam;
