import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { persona } from '../components/model/persona.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {
  URL="https://tpback.onrender.com/personas/";

  constructor(private http: HttpClient) { }
  public getPersona(): Observable<persona>{
    return this.http.get<persona>(this.URL+'traer/perfil');
    
  }

}
