import angular from 'angular';
import ngStorage from 'ngstorage';
import '../style/app.css';

import { ComponentsModule } from './components/components.module';


let app = () => {
  return {
    template: require('./app.html'),
  }
};

export const RootModule = angular
  .module('app', [ComponentsModule,ngStorage.name,'youtube-embed'])
  .directive('app', app).name;
