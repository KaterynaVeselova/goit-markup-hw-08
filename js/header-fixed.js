//console.log(document.querySelector(".header").getBoundingClientRect().height);
const { height: pageHeaderHeight } = document.querySelector(".header").getBoundingClientRect();
document.body.style.paddingTop = `${pageHeaderHeight}px`;
    

window.onscroll = () => changeHeaderBackground();

function changeHeaderBackground() {
  const header = document.querySelector('[data-header]');
  const headerOffsetTrigger = header.offsetTop;
  const pageOffset = window.pageYOffset;

  if (pageOffset > headerOffsetTrigger) {
    header.classList.add('transparency');
  } else {
    header.classList.remove('transparency');
  }
}

			