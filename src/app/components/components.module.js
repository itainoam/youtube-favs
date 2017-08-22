import angular from 'angular';
import { favoritesModule } from './favorites/favorites.module'

export const ComponentsModule = angular
  .module('app.components', [
    favoritesModule
  ])
  .name;