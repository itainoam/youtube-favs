
export class DataService {
  // the service is used to handle api. state/data is stored in the parent component.
  // another common route (which I didn't take here)
  constructor($http,$localStorage) {
    'ngInject';
    this.API_KEY = 'AIzaSyDIEt6ULQXNh0gbzTG7DsmN9aegYuQHdOM';
    this.API_URL = 'https://content.googleapis.com/youtube/v3/search';
    this.$http = $http;
    this.$localStorage = $localStorage;
    // required params for the youtube api call
    this.params = {
      results: 25,
      part: 'snippet',
      key: this.API_KEY,
      fields: 'items(etag,id(videoId),snippet(title,thumbnails,publishedAt)),nextPageToken',
      type:'video'
    };
    // if there's no local storage init it to empty array.
    this.$localStorage.favorites = this.$localStorage.favorites ||  [];
  }
  searchYoutube(query) {
    this.params.q = query;
    return this.$http
      .get(this.API_URL, {
        params: this.params
      })
      .then(response => {
        return response.data;
      });
  }
  addFavorite(etag) {
    if (!this.isFaved(etag)) {
      this.$localStorage.favorites.push(etag);
    }
  }
  removeFavorite(etag) {
    const index = this.$localStorage.favorites.indexOf(etag);
    if (index !== -1) {
      this.$localStorage.favorites.splice(index, 1);
    }
  }
  isFaved(etag) {
    return this.$localStorage.favorites.indexOf(etag) > -1
  }
  toggleFavorite(etag) {
    if (!this.isFaved(etag)) {
      this.addFavorite(etag);
    }
    else {
      this.removeFavorite(etag);
    }
  }

}
