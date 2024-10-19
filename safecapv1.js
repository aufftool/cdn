
 function safecap() {
        $("#safesub").prop("disabled", false).css("opacity", "1");
    }

    $(document).ready(function () {

        $.urlParam = function (name) {
            var hashResults = new RegExp('#' + name + '=([^&]*)').exec(window.location.href);
            if (hashResults == null) {
                return null;
            } else {
                return (hashResults.length >= 1) ? hashResults[1] : null;
            }
        }


        if (window.location.hash !== "") {
            let dest = $.urlParam('o');
            if (dest !== null){
                localStorage.setItem('safeurl', dest);
                localStorage.setItem('page', 1);
            } 
        }

        const safePage = localStorage.getItem('page');
        if(safePage == null || safePage == undefined) return;

        var verify = document.getElementById("verify"), notrobot = document.getElementById("notarobot");
        var isverify = false, isnotrobot = false;

        if(parseInt(safePage) < totalPages){
            document.getElementById("verify").innerHTML = "<a class='safeb' href='javascript:void(0);'>Dual Tap Rapidly 👆</a>";

            // Remove all click event listeners from the verify element
            var oldVerify = verify.cloneNode(true);
            verify.parentNode.replaceChild(oldVerify, verify);
            verify = oldVerify;

            verify.addEventListener("click", () => {
                if (isverify) return;
                isverify = true;
                waitcount("verify", () => {
                    document.getElementById("verify").innerHTML = "<span style='font-size: 1.2rem;'>Scroll Down and Click on <span style='color:blue;'>I Am Not a Robot</span></span>";
                    document.getElementById("notarobot").innerHTML = `<a class='safeb' href='javascript:void(0);' id='notarobot'>I Am Not a Robot</a>`;
                });
            });

            // Remove all click event listeners from the notrobot element
            var oldNotRobot = notrobot.cloneNode(true);
            notrobot.parentNode.replaceChild(oldNotRobot, notrobot);
            notrobot = oldNotRobot;

            notrobot.addEventListener("click", () => {
                if (isnotrobot) return;
                isnotrobot = true;
                waitcount("notarobot", () => {
                    localStorage.setItem('page', parseInt(safePage) + 1);
                    document.getElementById("notarobot").innerHTML = `<a class='safeb' href='${pageURL}'>Continue</a>`;
                });
            });
        }else if(parseInt(safePage) == totalPages){
            var downloadButton = document.getElementById("download");
            var counter = (secondplzt == null) ? 17 : secondplzt;
            downloadButton.innerHTML = `<b>Please Wait ${counter} Seconds To Get Link.</b`;
        
            var id;
            let flag = true;
            id = setInterval(function () {
                if(flag) counter--;
                flag = !flag;
            
                if (counter < 0) {
                    downloadButton.innerHTML = "<span style='font-size: 1.2rem;'>Scroll Down and Click on <span style='color:blue;'>Submit</span></span>";
                    $("#safeform").removeClass("hidden");
                    let safeurl = localStorage.getItem('safeurl');
                    var realurl = (safeurl != null) ? atob(safeurl) : "/";
                   // $("#safeform > form").attr("action", window.location.href=realurl);
$("#safeform > form > button").on("click", function(event) {
    event.preventDefault(); // Prevent the default form submission
    window.location.href = realurl; // Redirect to the real URL
});

                    clearInterval(id);
                    localStorage.removeItem('safeurl');
                    localStorage.removeItem('page');
                } else {
                    downloadButton.innerHTML = "<b>Please Wait " + counter.toString() + " Seconds To Get Link.</b>";
                }
            }, 1000);
        }
    });

    function waitcount(current, callback) {
        var countDown = (plzt == null) ? 14 : plzt;
        document.getElementById(current).innerHTML = `<a class='safeb' style='opacity: 0.5;' href='javascript:void(0);'>Please Wait...</a>`;

        var x = setInterval(function () {
            var distance = countDown -= 1;

            if (distance < 0) {
                clearInterval(x);
                callback();
            }
        }, 1000);
    };
