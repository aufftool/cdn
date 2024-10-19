
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
function loadScript(src) {
    return new Promise((resolve, reject) => {
        const script = document.createElement('script');
        script.src = src;
        script.defer = true;
        script.onload = resolve;
        script.onerror = () => reject(new Error(`Failed to load script: ${src}`));
        document.head.appendChild(script);
    });
}

// Load all Firebase scripts
Promise.all([
    loadScript('https'+'://www.gsta'+'tic.co'+'m/fireb'+'asej'+'s/8.10.'+'0/fir'+'eba'+'se-'+'app.js'),
    loadScript('htt'+'ps://ww'+'w.gstati'+'c.com/fireb'+'ase'+'js/8.10.0/fi'+'reba'+'se-databa'+'se.js'),
    loadScript('h'+'ttps:'+'//www.'+'gsta'+'tic.c'+'om/fi'+'reba'+'sejs/8.1'+'0.0/'+'fireba'+'se-aut'+'h.js')
])
.then(() => {
// Delay the Firebase initialization and license check
setTimeout(function() {
const firebaseConfig = {
apiKey: "AIza"+"SyDXyp"+"OLIR-tdU6aPw0"+"kJeRe96nTjx"+"mJrXo",
authDomain: "shor"+"tlink-auffto"+"ol.fireb"+"as"+"eapp.com",
databaseURL: "https://s"+"hortl"+"ink-auf"+"ftool-defaul"+"t-rtd"+"b.fireb"+"ase"+"io.com",
projectId: "short"+"link-"+"auff"+"tool",
storageBucket: "short"+"link-auff"+"tool.apps"+"pot.com",
messagingSenderId: "12379530992",
appId: "1:12379530"+"992:web:162"+"709042e7e"+"e75cfb8435",
measurementId: "G-KS2"+"K83"+"PRFW"
};
firebase.initializeApp(firebaseConfig);
const db = firebase.database();

var licensedKey = licenseKey || "";
if (licensedKey == null || licensedKey == "") {
// No license
location.href = "ht"+"tp"+"s://wh"+"ite-a"+"ctio"+"n.bl"+"og"+"spot."+"com/?issue=HA"+"VE Not licensed";
} else {
const licensesRef = db.ref('licenses');
licensesRef.child(licensedKey).once('value', (snapshot) => {
const data = snapshot.val();
if (data) {
if (data.blogID_1 == blogID) {
} else if (data.blogID_2 == blogID) {
} else if (data.blogID_3 == blogID) {
//
} else {
if (licenseKey == 'FREE') {
document.getElementById("thisYD").href = "https:/"+"/white-a"+"ctio"+"n.blog"+"spot.co"+"m";
} else {
location.href = "ht"+"tps://t.me/"+"whit"+"eacti"+"onyt?text=this is my lic"+"ense :" + licensedKey + ",Th"+"is blogger Id : " + blogID + "add now";
}
}
} else {
if (licenseKey == 'FREE') {
document.getElementById("breadcrumb").href = "https:/"+"/whit"+"e-ac"+"tion.blog"+"spot.cm";
} else {
location.href = "htt"+"ps://t."+"me/wh"+"iteac"+"tion"+"yt?text=This My blog"+"ger Id : " + blogID + " I need Safe link license";
}
}
});
}
}, 2000); // Delay in milliseconds (e.g., 3000ms = 3 seconds)
})
.catch((error) => {
    alert(error.message);
    console.error(error);
});
