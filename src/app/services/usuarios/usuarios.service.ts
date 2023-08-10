import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ConfigurationService } from '../configuration.service';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  private URL_BASE: string;

  constructor(
    private configuration: ConfigurationService,
    private http: HttpClient,
    private router: Router
  ) {
    this.URL_BASE = this.configuration.getUrlBase();
  }

  crearUsuario(data: any) {
    return this.http.post(this.URL_BASE + 'user', data);
  }

  obtenerUsuarios() {
    return this.http.get<any>(this.URL_BASE + 'user');
  }

  obtenerUsuariosId(id: any) {
    return this.http.get<any>(this.URL_BASE + 'user' + '/' + id);
  }

  iniciarSesion(data: any) {
    return this.http.post(this.URL_BASE + 'user/login', data);
  }

  eliminarUsuario(id: number) {
    return this.http.delete(this.URL_BASE + 'user' + '/' + id);
  }
}
