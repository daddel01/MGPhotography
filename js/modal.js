var curr = {};
function loadContent(id) {
  curr.id = id;
  id -= 1;
  document.querySelector(".menu-btn").classList.add("hide");
  document.querySelector(".modal").classList.add("show");

  var xhr = new XMLHttpRequest();
  xhr.open("GET", "gallery/gallery_id/id.json", true);
  xhr.onload = function() {
    if (this.status == 200) {
      var content = JSON.parse(this.responseText);
      if (content[id].isVertical == true) {
        document.querySelector("#modal-img").setAttribute("class", "vertical");
        document.querySelector(".modal-loc").classList.add("vertical");
        document.querySelector(".modal-time").classList.add("vertical");
        document.querySelector(".modal-desc").classList.add("vertical");
      }
      document
        .querySelector("#modal-img")
        .setAttribute("src", content[id].path);
      document.querySelector(".modal-time").innerHTML = content[id].time;
      document.querySelector(".modal-desc").innerHTML = content[id].desc;
      document.querySelector(".modal-loc").innerHTML = content[id].loc;
    }
  };
  xhr.send();
}
document.querySelector(".shot-btn").addEventListener("click", function() {
  document.querySelector(".menu-btn").classList.remove("hide");
  document.querySelector(".modal").classList.remove("show");
  document.querySelector("#modal-img").classList.remove("vertical");
  document.querySelector(".modal-loc").classList.remove("vertical");
  document.querySelector(".modal-time").classList.remove("vertical");
  document.querySelector(".modal-desc").classList.remove("vertical");
});

document.querySelector("#right").addEventListener("click", function() {
  document.querySelector("#modal-img").classList.remove("vertical");
  document.querySelector(".modal-loc").classList.remove("vertical");
  document.querySelector(".modal-time").classList.remove("vertical");
  document.querySelector(".modal-desc").classList.remove("vertical");
  if (curr.id < 13) {
    loadContent(curr.id + 1);
  } else {
    loadContent(curr.id);
  }
});
document.querySelector("#left").addEventListener("click", function() {
  document.querySelector("#modal-img").classList.remove("vertical");
  document.querySelector(".modal-loc").classList.remove("vertical");
  document.querySelector(".modal-time").classList.remove("vertical");
  document.querySelector(".modal-desc").classList.remove("vertical");

  if (curr.id > 1) {
    loadContent(curr.id - 1);
  } else {
    loadContent(curr.id);
  }
});
