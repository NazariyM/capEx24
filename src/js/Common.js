import { $body, detectIE, $scrolledElements } from './_helpers';

export class Common {
  constructor() {
    this.init();
  }

  init() {
    this.addClassIE();
    this.scrollBtn();
  }

  addClassIE() {
    if (detectIE()) $body.addClass('is-ie');
  }

  scrollBtn() {
    const $btn = $('.scroll-btn');
    const $destination = $btn.closest('section').next();

    $btn.on('click', (e) => {
      e.preventDefault();
      $scrolledElements.animate({
        scrollTop: $destination.offset().top
      }, 1000);
    });
  }
}

export default new Common();
