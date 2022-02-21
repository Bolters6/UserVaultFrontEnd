import { HttpClient, HttpHeaders, HttpUrlEncodingCodec} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable} from 'rxjs';
import { environment } from 'src/environments/environment';
import { Sword } from '../interfaces/Sword';
import { User } from '../interfaces/User';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private urlServer: string = environment.apiBaseUrl;
  constructor(private http: HttpClient) { }

  registerUser(user: User): Observable<User>{
    return this.http.post<User>(`${this.urlServer}/app/user/register`, user);
  }

  async loginUser(username:string, password:string): Promise<void>{

    const data = new FormData();
    data.append('username', username);
    data.append('password', password);
    localStorage.setItem('username', username);
    await this.http.post<any>(`${this.urlServer}/app/user/login`, data).subscribe(res => localStorage.setItem('access_token', res.access_token));
    window.location.assign("http://localhost:4200/uservault");
  }

  getUser(): Observable<User>{
    let headers = new HttpHeaders({'Authorization': `Bearer ${localStorage.getItem('access_token')}`});
    return this.http.get<User>(`${this.urlServer}/app/user/get/${localStorage.getItem('username')}`, {headers});
  }
  
  deleteSimpleItem(simpleItemQuantity: string, id: number, item:string): Observable<any>{
   let headers = new HttpHeaders({'Authorization': `Bearer ${localStorage.getItem('access_token')}`});
   return this.http.delete(`${this.urlServer}/app/vault/${id}/delete${item}?${item}Quantity=${simpleItemQuantity}`, {headers});
  }

  addSimpleItem(simpleItemQuantity: string, id: number, item:string): Observable<any>{
    let headers = new HttpHeaders({'Authorization': `Bearer ${localStorage.getItem('access_token')}`});
    return this.http.post(`${this.urlServer}/app/vault/${id}/add${item}?${item}Quantity=${simpleItemQuantity}`,{}, {headers});
  }

  addSword(sword: Sword, id: number): Observable<Sword>{
    let headers = new HttpHeaders({'Authorization': `Bearer ${localStorage.getItem('access_token')}`});
    return this.http.post<Sword>(`${this.urlServer}/app/vault/${id}/addsword`, sword, {headers});
  }

  addPotion(idp:number, id: number): Observable<any>{
    let headers = new HttpHeaders({'Authorization': `Bearer ${localStorage.getItem('access_token')}`});
    return this.http.post(`${this.urlServer}/app/vault/${id}/addpotion/${idp}`,{}, {headers});
  }

  addWings(typeWings: number, id: number): Observable<any>{
    let headers = new HttpHeaders({'Authorization': `Bearer ${localStorage.getItem('access_token')}`});
    return this.http.post(`${this.urlServer}/app/vault/${id}/addwings?typeWings=${typeWings}`,{}, {headers});
  }

  deletePotion(idp: number, id:number): Observable<any>{
    let headers = new HttpHeaders({'Authorization': `Bearer ${localStorage.getItem('access_token')}`});
    return this.http.delete(`${this.urlServer}/app/vault/${id}/deletepotion/${idp}`, {headers});
  }

  deleteWings(id:number): Observable<any>{
    let headers = new HttpHeaders({'Authorization': `Bearer ${localStorage.getItem('access_token')}`});
    return this.http.delete(`${this.urlServer}/app/vault/${id}/deletewings/`, {headers});
  }

  deleteSword(ids: number, id:number): Observable<any>{
    let headers = new HttpHeaders({'Authorization': `Bearer ${localStorage.getItem('access_token')}`});
    return this.http.delete(`${this.urlServer}/app/vault/${id}/deletesword/${ids}`, {headers});
  }
  
  cleanAccess(): void{
    localStorage.setItem('access_token', '');
    localStorage.setItem('username', '');
  }
}
