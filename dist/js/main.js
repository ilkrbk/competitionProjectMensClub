function Navigation(t) {
  this.btn = document.getElementById(t.btnId), this.nav = document.getElementById(t.navigationId), this.overlay = document.createElement("div"), this.openNav_ = () => {
    document.body.appendChild(this.overlay), setTimeout(() => this.nav.classList.add(t.activeNavClass), 200);
  }, this.hideNav_ = e => {
    (document.querySelector(`.${t.overlayClass}`) && 27 === e.keyCode || "click" === e.type || "dragend" === e.type) && (this.nav.classList.remove(t.activeNavClass), this.nav.hasAttribute("style") && this.nav.removeAttribute("style"), setTimeout(() => document.body.removeChild(this.overlay), 200));
  }, this.dragStart_ = t => {
    let e = 270 - t.screenX;e < 270 && (this.nav.style.transform = `translateX(${-e}px)`);
  }, this.events_ = () => {
    this.btn.addEventListener("click", this.openNav_), this.overlay.addEventListener("click", this.hideNav_), window.addEventListener("keyup", this.hideNav_), this.nav.addEventListener("drag", this.dragStart_), this.nav.addEventListener("dragend", this.hideNav_);
  }, this.init_ = () => {
    this.events_(), this.overlay.classList.add(t.overlayClass), console.log(t.navigationId);
  }, this.init_();
}const nav = { btnId: "checkbox", navigationId: "nav", activeNavClass: "nav--active", overlayClass: "overlay" },
      offCanvas = new Navigation(nav);$(".advantages__slider-list").slick({ slidesToShow: 1, arrows: !1, fade: !0, asNavFor: ".advantages__slider-nav-list" }), $(".advantages__slider-nav-list").slick({ arrows: !1, slidesToShow: 3, asNavFor: ".advantages__slider-list", dots: !1, focusOnSelect: !0 });