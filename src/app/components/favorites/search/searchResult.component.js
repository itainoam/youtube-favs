export const searchResult = {
  // stateless component to render search results
  bindings: {
    metadata: '<',
    onResultClick: '&',
    faved: '<'
  },
  template: `<div class="fv-search-result" ng-click="$ctrl.onClick();">
  <header>
    <div class="video-title">{{$ctrl.metadata.snippet.title}}</div>
  </header>
  <div>
    <span class="video-date">{{$ctrl.metadata.snippet.publishedAt | date }}</span>
    <span id="toggle-star">{{ !$ctrl.faved ? ' &#9734;': '&#9733;' }}</span>
  </div>
  
</div>
`,
  controller: class searchResultCtrl {
    onClick() {
      this.onResultClick({
        $event: {
          videoId: this.metadata.id.videoId,
          title: this.metadata.snippet.title
        }
      });
    }
  }
};
