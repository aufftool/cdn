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
if(licenseKey==null||licenseKey==""){
location.href = "https://shorink.page.link/Lice";
}else {
const licensesRef = db.ref('licenses');
licensesRef.child(licenseKey).once('value', (snapshot) => {
	const data = snapshot.val();
if (data) {
	
//1
if(data.blogID = blogID){
}else{
//2 
if(data.blogID2 = blogID){ } else{
if(data.blogID3 = blogID){}else{
location.href = "https://shorink.page.link/Lice";
}//3
}//2
}//1

} else {
	location.href = "https://shorink.page.link/Lice";
}//key
}
});}
setTimeout(checkLicense(),2000)
/*]]>*/
