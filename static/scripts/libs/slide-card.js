class Slidecard {
  constructor() {
    this.DOM = {};
    this.DOM.cardbox = document.querySelector('.member-card');
    this.contentNum = document.querySelectorAll('.member-card__content').length; //contentのカウント
    this.contentCount = 0;
    this._slidefunction();
  }
  _addClass(index){
    let classname= 'card-in' + (index+1);
    this.DOM.cardbox.classList.add(classname);
  }
  _slidefunction(){

    const intervalId = setInterval(() =>{

      if (!this.contentCount){
        this.DOM.cardbox.classList.remove('card-out');
        this.DOM.cardbox.classList.remove('card-out-700up');
      }
      const windowWidth = window.screen.width;
      const windowSm = 700;
      if (windowWidth <= windowSm) {
        //横幅700px以下のとき（つまりスマホ時）に行う処理を書く
        if (this.contentCount >= (this.contentNum - 1)) {
          this.DOM.cardbox.classList.add('card-out');
          this.DOM.cardbox.classList.remove('card-in1');
          this.DOM.cardbox.classList.remove('card-in2');
          this.DOM.cardbox.classList.remove('card-in3');
          this.DOM.cardbox.classList.remove('card-in4');
          return this.contentCount = 0;
        }
      } else {
        //横幅700px超のとき（タブレット、PC）に行う処理を書く
        if (this.contentCount >= (this.contentNum - 2)) {
          this.DOM.cardbox.classList.add('card-out-700up');
          this.DOM.cardbox.classList.remove('card-in1');
          this.DOM.cardbox.classList.remove('card-in2');
          this.DOM.cardbox.classList.remove('card-in3');
          return this.contentCount = 0;
        }
      }

      this._addClass(this.contentCount);
      this.contentCount++;
    }, 7000);
  }
}


