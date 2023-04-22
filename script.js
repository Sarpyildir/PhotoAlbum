for (var i = 1; i <= 25; i++) {
    var img = document.createElement("img");
    img.src = "./images/album1/photo (" + i + ").jpg";
    img.alt = "Photo " + i;
    document.getElementById("album1_1").appendChild(img);
}
for (var i = 25; i >= 1; i--) {
    var img = document.createElement("img");
    img.src = "./images/album1/photo (" + i + ").jpg";
    img.alt = "Photo " + i;
    document.getElementById("album1_2").appendChild(img);
}
for (var i = 1; i <= 25; i++) {
    var img = document.createElement("img");
    img.src = "./images/album2/photo (" + i + ").jpg";
    img.alt = "Photo " + i;
    document.getElementById("album2_1").appendChild(img);
}
for (var i = 25; i >= 1; i--) {
    var img = document.createElement("img");
    img.src = "./images/album2/photo (" + i + ").jpg";
    img.alt = "Photo " + i;
    document.getElementById("album2_2").appendChild(img);
}
  