import 'angular-youtube-embed'

export const videoBox = {
  bindings: {
    video:'<',
    onRemoveClick: '&'
  },
  template: `
  <article class="video-container">
    <header class="video-header" ng-click="$ctrl.onClick();">
      <span class="remove-video">&#10006;</span>
    </header>
    <youtube-video video-id="$ctrl.video" player-width="'320px'" player-height="'240px'"></youtube-video>
  </article>
`,
  controller: class videoBoxCtrl {
    constructor(DataService) {
      ('ngInject')
      this.dataService = DataService;
      this.favVideos = this.dataService.$localStorage.favorites
    }
    onClick() {
      this.onRemoveClick({
        $event: {
          videoId: this.video
        }
      });
    }
  }
};
