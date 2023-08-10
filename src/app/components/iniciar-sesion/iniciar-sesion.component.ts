import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuariosService } from 'src/app/services/usuarios/usuarios.service';

@Component({
  selector: 'app-iniciar-sesion',
  templateUrl: './iniciar-sesion.component.html',
  styleUrls: ['./iniciar-sesion.component.css'],
})
export class IniciarSesionComponent implements OnInit {
  formulario: any = {};
  token: any;


  constructor(
    private usuarioService: UsuariosService,
    private router: Router
  ) { }

  ngOnInit(): void { }

  iniciarSesion() {
    this.usuarioService
      .iniciarSesion(this.formulario)
      .subscribe({
        next: (data) => {
          this.token = (data as any).token;
          localStorage.setItem(
            'token', this.token
          );
          setTimeout(() => {
            this.router.navigateByUrl('lista-usuarios');
          }, 500);
        },
        error: (err) => {
          console.log(err);
        },
      });
  }

}
