

$( document ).ready(function() {
  for (let i=0; i<window.videos.length; i++) {
    console.log(window.videos[i]);
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

});
