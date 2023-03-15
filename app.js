const btns = document.querySelectorAll(".tab-btn");
const about = document.querySelector(".about");
const contents = document.querySelectorAll(".content");

about.addEventListener("click", function (e) {
  let id = e.target.dataset.id;

  if (id) {
    btns.forEach(function (btn) {
      btn.classList.remove("active");
      e.target.classList.add("active");
    });

    const element = document.getElementById(id);

    contents.forEach(function (content) {
      content.classList.remove("active");
      element.classList.add("active");
    });
  }
});
