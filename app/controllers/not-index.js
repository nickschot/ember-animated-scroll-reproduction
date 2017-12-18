import Controller from '@ember/controller';
import ToRight from '../motions/to-right';

function * transition() {
  this.removedSprites.forEach(sprite => {
    this.animate(new ToRight(sprite));
  });
}

export default Controller.extend({
  transition
});

