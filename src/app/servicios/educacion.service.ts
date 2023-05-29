import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Educacion } from '../models/educacion';

@Injectable({
  providedIn: 'root'
})
export class EducacionService {
private apiServerUrl='https://tpback.onrender.com/';

  constructor(private http:HttpClient) { }
  public getEducation():Observable<Educacion[]>{

    return this.http.get<Educacion[]>('${this.apiServerUrl}/educacion/all')
  }
  public AddEducacion(educacion: Educacion):Observable<Educacion>{
    return this.http.post<Educacion>('${this.apiServerUrl}/educacion/add',educacion);

  }
  public UpdateEducacion(educacion: Educacion):Observable<Educacion>{
    return this.http.put<Educacion>('${this.apiServerUrl}/educacion/update',educacion);

  }
  public DeleteEducacion(educacion: Educacion):Observable<void>{
    return this.http.delete<void>('${this.apiServerUrl}/educacion/delete/${educacionId}');

  }
}
