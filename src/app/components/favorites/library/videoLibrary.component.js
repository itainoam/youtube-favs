export const videoLibrary = {
  bindings: {},
  template: `
  <section class="favorites">
    <video-box ng-repeat="video in $ctrl.favVideos" video="video" on-remove-click="$ctrl.removeFavorite($event);" ></video-library>
  </section>
`,
  controller: class videoLibraryCtrl {
    constructor(DataService) {
      ('ngInject')
      this.dataService = DataService;
      this.favVideos = this.dataService.$localStorage.favorites
    }
    removeFavorite({videoId}) {
      // changing and managing the state is done here and not in child 
      this.dataService.removeFavorite(videoId);
    }
  }
};
