import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RegistrarseService } from 'src/app/services/registrarse/registrarse.service';
import { UsuariosService } from 'src/app/services/usuarios/usuarios.service';

@Component({
  selector: 'app-registrarse',
  templateUrl: './registrarse.component.html',
  styleUrls: ['./registrarse.component.css'],
})
export class RegistrarseComponent implements OnInit {
  formulario: any = {};

  constructor(private router: Router, private usuarioService: UsuariosService) { }

  ngOnInit(): void { }

  /*
   ************************************************
   *                  REGISTRARSE                 *
   ************************************************
   */
  registrase() {
    this.usuarioService.crearUsuario(this.formulario).subscribe({
      next: (data) => {
        this.router.navigate(['/lista-usuarios']);
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}
