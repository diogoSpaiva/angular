import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { SERVER_API_URL } from './../../../../moviedb-config';

@Injectable({
  providedIn: 'root'
})
export class FormService {

  constructor(
    private httpClient: HttpClient,
  ) { }

  getMovie(idMovie) {
    return this.httpClient.get<any>(`${SERVER_API_URL}/3/movie/${idMovie}?language=pt-BR`);
  }

  sendReservation(obj) {
    let headers = new HttpHeaders();
    headers = headers.set('Authorization', '#ASDFGW#ERWQERTRYT#%$%$@#$%==');
    return this.httpClient.post<any>(`http://localhost/reserva`, obj, { headers });
  }

  getCep(cep){
    return this.httpClient.get<any>(`https://proxier.now.sh/api?url=https://viacep.com.br/ws/${cep}/json`);
  }

}
