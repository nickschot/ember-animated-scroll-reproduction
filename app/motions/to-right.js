import Motion from 'ember-animated/motion';
import Tween from 'ember-animated/tween';
import { rAF } from 'ember-animated/concurrency-helpers';

export default class ToRight extends Motion {
  constructor(sprite, opts) {
    super(sprite, opts);
  }

  * animate() {
    const sprite = this.sprite;
    const duration = this.duration;

    // make sure the panned element is on top during the Motion
    sprite.applyStyles({
      zIndex: 2
    });

    this.xTween = new Tween(
      sprite.transform.tx,
      sprite.initialBounds.width,
      duration
    );

    while(!this.xTween.done){
      sprite.translate(
        this.xTween.currentValue - sprite.transform.tx,
        0
      );

      yield rAF();
    }
  }
}
