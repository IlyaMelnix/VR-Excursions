/* global AFRAME */

/**
 * Компонент, который прослушивает событие, делает плавное исчезновение, заменяет текстуру и делает плавное появление
 */
AFRAME.registerComponent('set-video', {
  schema: {
    on: {type: 'string'},
    target: {type: 'selector'},
    src: {type: 'string'},
    dur: {type: 'number', default: 300}
  },

  init: function () {
    var data = this.data;
    var el = this.el;

    this.setupFadeAnimation();

    el.addEventListener(data.on, function () {
      // Исчезновение видео
      data.target.emit('set-video-fade');
      // Ждем, пока выполнится анимация исчезновения
      setTimeout(function () {
        // Устанавливаем новое видео
        data.target.setAttribute('material', 'src', data.src);
      }, data.dur);
    });
  },

  /**
   * Плавное исчезновение и появление
   */
  setupFadeAnimation: function () {
    var data = this.data;
    var targetEl = this.data.target;

    // Чтобы не создавать много копий этой функции
    if (targetEl.dataset.setVideoFadeSetup) { return; }
    targetEl.dataset.setVideoFadeSetup = true;

    // Создание анимации
    targetEl.setAttribute('animation__fade', {
      property: 'material.color',
      startEvents: 'set-video-fade',
      dir: 'alternate',
      dur: data.dur,
      from: '#FFF',
      to: '#000'
    });
  }
});
