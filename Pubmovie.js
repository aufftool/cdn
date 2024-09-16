// Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCkWQqHcf64EvAwMYQlxo8P8xvTU0IZzgw",
  authDomain: "https://ezn3je-default-rtdb.firebaseio.com/",
  databaseURL: "https://ezn3je-default-rtdb.firebaseio.com/",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_STORAGE_BUCKET",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "1:988656765333:android:ab54ce6627f1a47d638e9c"
};
const app = firebase.initializeApp(firebaseConfig);
const database = firebase.database();
let path = '';

// Read data from Firebase
function displayPost(postRef) {
  postRef.on('value', (snapshot) => {
    const post = snapshot.val();
    const postContainer = document.getElementById('post');

    if (post) {
      postContainer.innerHTML = `
        <div class="xcontainer">
          <div class="breadcrumb">
            Home > Download > ${post.title}
          </div>
          <div class="movie-card">
            <img src="${post.imageUrl}" alt="${post.title}">
            <div class="movie-details">
              <h1>${post.title}</h1>
              <p>N/A views, <span class="rating">⭐ N/A</span>, Released: N/A</p>
              <div class="buttons">
                <button onclick="dow()" class="in-app">IN APP</button>
                <button onclick="description()" class="web-link">WEB LINK</button>
                <button onclick="play()" class="play-movie">Play Movie</button>
              </div>
              <div id="dowlo" class="download-options"></div>
              <div id="description" class="download-options" style="display: none;">
                ${post.text || 'No description available'}
              </div>
              <div id="play" class="download-options" style="display: none;">
                play
              </div>
            </div>
          </div>
        </div>
      `;
      dow();
    } else {
      postContainer.innerHTML = '<p>No post found.</p>';
    }
  });
}

function displayPostFromQueryParam() {
  const urlParams = new URLSearchParams(window.location.search);
  path = urlParams.get('p');
  
  if (path) {
    const postRef = database.ref('posts/' + path);
    displayPost(postRef);
  }
}

// Download 
function dow() {
  document.getElementById('description').style.display = 'none';
  document.getElementById('play').style.display = 'none';
  document.getElementById('dowlo').style.display = 'block';
  
  const postsRef = database.ref('posts/' + path + '/download/');
  postsRef.on('value', (snapshot) => {
    const posts = snapshot.val();
    const postsContainer = document.getElementById('dowlo');
    postsContainer.innerHTML = ''; // Clear existing content
    
    if (posts) {
      for (let key in posts) {
        if (posts.hasOwnProperty(key)) {
          const download = posts[key];
          const postElement = document.createElement('div');
          postElement.innerHTML = `<a href="${download.link}" class="download">${download.title}</a>`;
          postsContainer.appendChild(postElement);
        }
      }
    } else {
      postsContainer.innerHTML = '<p>No downloads available.</p>';
    }
  });
}

// Play
function play() {
  document.getElementById('description').style.display = 'none';
  document.getElementById('play').style.display = 'block';
  document.getElementById('dowlo').style.display = 'none';
  
  const postsRef = database.ref('posts/' + path + '/video/');
  postsRef.on('value', (snapshot) => {
    const posts = snapshot.val();
    const postsContainer = document.getElementById('play');
    postsContainer.innerHTML = ''; // Clear existing content
    
    if (posts) {
      for (let key in posts) {
        if (posts.hasOwnProperty(key)) {
          const video = posts[key];
          const postElement = document.createElement('div');
          postElement.innerHTML = `<a href="${video.link}" class="download">${video.title}</a>`;
          postsContainer.appendChild(postElement);
        }
      }
    } else {
      postsContainer.innerHTML = '<p>No videos available.</p>';
    }
  });
}

// Description 
function description() {
  document.getElementById('description').style.display = 'block';
  document.getElementById('play').style.display = 'none';
  document.getElementById('dowlo').style.display = 'none';
}

// Initialize the page
document.addEventListener('DOMContentLoaded', displayPostFromQueryParam);
