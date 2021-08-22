class MobileMenu {
  constructor() {
    this.DOM = {};
    this.DOM.btn = document.querySelector('#nav-btn');
    this.DOM.nav = document.querySelector('#header');
    this.eventType = this._getEventType();
    this._addEvent();
  }

  _getEventType() {
    return window.ontouchstart ? 'touchstart' : 'click';
  }

  _toggle() {
    this.DOM.nav.classList.toggle('menu-open');
  }

  _addEvent() {
    this.DOM.btn.addEventListener(this.eventType, this._toggle.bind(this));

  }
}


