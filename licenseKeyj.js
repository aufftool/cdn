/*<![CDATA[*/
  const firebaseConfig = {
  apiKey: "AIzaSyDXypOLIR-tdU6aPw0kJeRe96nTjxmJrXo",
  authDomain: "shortlink-aufftool.firebaseapp.com",
  databaseURL: "https://shortlink-aufftool-default-rtdb.firebaseio.com",
  projectId: "shortlink-aufftool",
  storageBucket: "shortlink-aufftool.appspot.com",
  messagingSenderId: "12379530992",
  appId: "1:12379530992:web:162709042e7ee75cfb8435",
  measurementId: "G-KS2K83PRFW"
};
 firebase.initializeApp(firebaseConfig);
const db = firebase.database();
function checkLicense(){
var licensedKey = licenseKey;
if(licensedKey==null||licensedKey==""){
location.href = "https://t.me/whiteactionyt?text=I have not license : this safe license price?";
}else {
const licensesRef = db.ref('licenses');
licensesRef.child(licensedKey).once('value', (snapshot) => {
	const data = snapshot.val();
if (data) {
if (data.blogID_1 === blogID) {
    // Do something for blogID_1
} else if (data.blogID_2 === blogID) {
    // Do something for blogID_2
} else if (data.blogID_3 === blogID) {
    // Do something for blogID_3
} else {
    // Redirect to a default location
    location.href = "https://t.me/whiteactionyt?text=this is my license :"+ licensedKey + ",This  blogger Id : " + blogID +  "add now";
}
} else {
location.href = "https://t.me/whiteactionyt?text=I have not license : this safe license price";
}
});
};
};
setTimeout(checkLicense(),2000) 
/*]]>*/
