import { Injectable } from '@angular/core';
import { environtment } from 'src/environments/environtment';
import { Usuario } from 'src/app/models/usuario';
@Injectable({
  providedIn: 'root'
})
export class HeaderService {
  private apiServerUrl=environment.apiBaseUrl;
  constructor(private http:HttpClient) { }

  public getUser():Observable<usuario>{
      return this.http.get<Usuario>('&{this.apiServerUrl)/usuario/id/1')
    }
    
  public updateUsuario(usuario: Usuario): Observable<Usuario>{

    return

  }
  
    
    }
 
  
