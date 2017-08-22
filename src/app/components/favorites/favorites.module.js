import angular from 'angular';
import { DataService } from './data.service';
import { searchPanel } from './search/searchPanel.component'
import { searchResult } from './search/searchResult.component'
import { videoLibrary } from './library/videoLibrary.component'
import { videoBox } from './library/videoBox.component'

export const favoritesModule = angular
  .module('youtube', [])
  .service('DataService',DataService )
  .component('searchPanel', searchPanel)
  .component('searchResult', searchResult)
  .component('videoLibrary', videoLibrary)
  .component('videoBox', videoBox)
  .name;