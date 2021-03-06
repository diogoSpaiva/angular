import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {SERVER_API_URL} from './../../../../moviedb-config';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(
    private httpClient: HttpClient,
  ) { }


  getListMovies() {
    return this.httpClient.get<any>(`${SERVER_API_URL}/3/movie/upcoming?language=pt-BR&page=1`);
  }

}
