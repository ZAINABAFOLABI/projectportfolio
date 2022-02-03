import { Injectable } from '@angular/core';
import { Contact } from '../contact';
import{HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class DataService {
_url='http://localhost:3000/enroll';
  constructor(private _http:HttpClient) { }

  enroll(contactMessage:Contact){
   return this._http.post<any>(this._url, contactMessage);
  } 
}
