const elemList = document.querySelectorAll(".show-on-scroll");

document.addEventListener("scroll", update);
update();

function isElemInViewPort(elem) {
  const rect = elem.getBoundingClientRect();

  const viewHeight =
    window.innerHeight || document.documentElement.clientHeight;

  return (
    (rect.top <= 0 && rect.bottom >= 0) ||
    (rect.top >= 0 && rect.bottom <= viewHeight) ||
    (rect.top <= viewHeight && rect.bottom >= viewHeight)
  );
}

function update() {
  elemList.forEach((elem) => {
    if (isElemInViewPort(elem)) {
      elem.classList.add("start");
    } else {
      elem.classList.remove("start");
    }
  });
}
