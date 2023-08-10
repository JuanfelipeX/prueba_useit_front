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

  ngOnInit(): void {
    // Se ejecuta al inicializar el componente
  }

  // Función para iniciar sesión
  iniciarSesion() {
    // Llama al servicio de usuario para iniciar sesión con los datos del formulario
    this.usuarioService.iniciarSesion(this.formulario).subscribe({
      next: (data) => {
        // Guarda el token en el almacenamiento local
        this.token = (data as any).token;
        localStorage.setItem('token', this.token);

        // Redirige a la página de lista de usuarios después de un breve retraso
        setTimeout(() => this.router.navigateByUrl('lista-usuarios'), 500);
      },
      error: (err) => {
        // Muestra el error en la consola si hay un problema con la solicitud
        console.log(err);
      },
    });
  }
}
