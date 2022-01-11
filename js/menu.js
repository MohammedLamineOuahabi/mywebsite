class Navbar {
  constructor(target, menu) {
    // 1. Check parameters type and throw error if not an HTML element
    if (target instanceof HTMLElement && menu instanceof HTMLElement) {
      // 2. If parameters are HTML elements set the attributes
      this.btn = target;
      this.menu = menu;
      this.btn.addEventListener('click', () => {
        this.open();
      });

      this.menu.addEventListener('click', () => {
        this.open();
      });
    } else {
      throw new TypeError('The Target and Menu arguments must be a DOM element.');
    }
    this.isOpen = false;
  }
  open() {
    if (this.isOpen) {
      this.menu.classList.add('nav-hidden');
    } else {
      this.menu.classList.remove('nav-hidden');
    }

    this.isOpen = !this.isOpen;
  }
}

const navbar = new Navbar(
  document.querySelector('.navbar_toggle'),
  document.querySelector('.menu')
);
