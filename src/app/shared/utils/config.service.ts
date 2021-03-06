import { Injectable } from '@angular/core';

@Injectable()
export class ConfigService {
    
    _apiURI : string;

    constructor() {
        this._apiURI = 'http://schedulerapi20190329042733.azurewebsites.net/api/';
     }

     getApiURI() {
         return this._apiURI;
     }

     getApiHost() {
         return this._apiURI.replace('api/','');
     }
}