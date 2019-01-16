var root_folder =  {
  name: "root",
  subfolders: [],
  videos: []
}

// creating a folder
function createFolder (name) {
  let folder = {
    name: name,
    subfolders: [],
    videos: []
  };
  return folder;
}

// returns the index of the folder in folders subfolders; returns -1 if not found
function checkFolder (folderSearch, currFolder) {
  for (let i=0; i<currFolder.subfolders.length; i++) {
    if (folderSearch == currFolder.subfolders[i].name) {
      return i;
    }
  }
  return -1;
}

// used to add a video, given a directory; will create the folders if they don't exist
function addVideoToDir (directory, video) {
  let dirs = directory.split("->");
  // console.log(dirs);  //["Junior", "Health", "Personal Development"]
  // check if root is empty
  // if empty
    // create and add first folder
  var currF = root_folder;

  // now pass next folder, and search if in first folder
    // use recursion to check for next folder in subfolders
  for (let i=0; i<dirs.length; i++) {
    let folderInd = checkFolder(dirs[i], currF);  // retireve index of folder
    if (folderInd == -1) {
      let prevF = currF;
      currF = createFolder(dirs[i]);
      prevF.subfolders.push(currF);
    }
    else {
      currF = currF.subfolders[folderInd];
    }
  }
  currF.videos.push(video);
}

// UI implementation: displays the subfolders of a folder
function displayFolders (subfolders) {
  for (let i=0; i<subfolders.length; i++) {
    let div = document.createElement('div');
    div.className = "folder-item";
    let h3 = document.createElement('h3');
    h3.textContent = subfolders[i].name;
    div.appendChild(h3);
    document.getElementById('folder-list-container').appendChild(div);
  }
}

// checks to see if video contains a given tag
function tagInVideo (tag, tags) {
  for (let i=0; i<tags.length; i++) {
    if (tag == tags[i]) {
      return true;
    }
  }
  return false;
}

// filters videos based on given tag
function tagOnlyVideos (tag, videos) {
  let taggedVideos = [];
  for (let i=0; i<videos.length; i++) {
    if (tagInVideo(tag, videos[i].tags)) {
      taggedVideos.push(videos[i]);
    }
  }
  return taggedVideos;
}

// UI implementation: function to display videos
function displayVideos (videos) {
  for (let i=0; i<videos.length; i++) {
    console.log(videos[i]);
    checkFolder(videos[i].folder);
    var vidItem = document.createElement('div');
    vidItem.className = "vid-item";
    var vidImg = document.createElement('div');
    vidImg.className = "vid-img";
    var vidText = document.createElement('div');
    vidText.className = "vid-text";
    var img = document.createElement('img');
    img.className = "vid-thumb";
    img.src = videos[i].thumbnail;
    var title = document.createElement('h2');
    title.className = "vid-title";
    title.textContent = videos[i].name;
    var desc = document.createElement('p');
    desc.className = "vid-desc";
    desc.textContent = videos[i].description;
    vidImg.appendChild(img);
    vidText.appendChild(title);
    vidText.appendChild(desc);
    vidItem.appendChild(vidImg);
    vidItem.appendChild(vidText);
    document.getElementById("vid-grid-container").appendChild(vidItem);
  }
}

// super function to over look folder contents
function displayContents (folder) {
  displayFolders(folder.subfolders);
  displayVideos(folder.videos);
}

// on start function
$( document ).ready(function() {
  // displayAllVideos();
  addAllVideosToFolders();
  displayContents(root_folder);
});

// adds all videos to folders
function addAllVideosToFolders () {
  for (let i=0; i<window.videos.length; i++) {
    addVideoToDir(window.videos[i].folder, window.videos[i]);
  }
}

// dislpays all videos
function displayAllVideos () {
  for (let i=0; i<window.videos.length; i++) {
    console.log(window.videos[i]);
    checkFolder(window.videos[i].folder);
    var vidItem = document.createElement('div');
    vidItem.className = "vid-item";
    var vidImg = document.createElement('div');
    vidImg.className = "vid-img";
    var vidText = document.createElement('div');
    vidText.className = "vid-text";
    var img = document.createElement('img');
    img.className = "vid-thumb";
    img.src = window.videos[i].thumbnail;
    var title = document.createElement('h2');
    title.className = "vid-title";
    title.textContent = window.videos[i].name;
    var desc = document.createElement('p');
    desc.className = "vid-desc";
    desc.textContent = window.videos[i].description;
    vidImg.appendChild(img);
    vidText.appendChild(title);
    vidText.appendChild(desc);
    vidItem.appendChild(vidImg);
    vidItem.appendChild(vidText);
    document.getElementById("vid-grid-container").appendChild(vidItem);
  }
}
