export const searchPanel = {
  bindings: {},
  template: `
    <header class="logo">    
      <img src="/img/youtube.png">    
      <span>Favorites</span>
    </header>
    <form class="search-videos" ng-submit="$ctrl.onSubmit($ctrl.query)">
      <input type="text" name="search" id="search" placeholder="Search videos" ng-model="$ctrl.query">
    </form>
    <search-result ng-repeat="item in $ctrl.searchResults.items " metadata="item"
    on-result-click="$ctrl.starVideo($event);" faved="$ctrl.dataService.isFaved(item.id.videoId)">
    </search-result>
`,
  controller: class searchPanelCtrl {
    constructor(DataService) {
      ('ngInject')
      this.dataService = DataService;
      this.query = '';
      this.searchResults = {};
    }
    starVideo({videoId}) {
      // changing and managing the state is done here and not in child 
      this.dataService.toggleFavorite(videoId);
    }
    onSubmit(query) {
      this.dataService.searchYoutube(query)
        .then(results => {
          this.searchResults = Object.assign(this.searchResults,results)
        });
    }
  }
};
