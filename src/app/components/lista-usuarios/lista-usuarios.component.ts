import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HerramientasService } from 'src/app/services/herramientas/herramientas.service';
import { UsuariosService } from 'src/app/services/usuarios/usuarios.service';

@Component({
  selector: 'app-lista-usuarios',
  templateUrl: './lista-usuarios.component.html',
  styleUrls: ['./lista-usuarios.component.css']
})
export class ListaUsuariosComponent implements OnInit {

  //lista de Usuarios
  listaUsuarios: any = {};

  // Verificar Logeo
  verificadorBool: boolean = false;

  // variable para almacenar la consulta de búsqueda
  query: string = '';

  constructor(
    private usuariosService: UsuariosService,
    private router: Router
  ) { }

  ngOnInit(): void {
    // this.verifyLooged();
    this.getUsuarios();
  }

  verifyLooged() {
    if (localStorage.getItem('token')) {
      this.verificadorBool = true;
    } else {
      this.verificadorBool = false;
    }
  }

  /*
   ************************************************
   *              OBTENER USUARIOS                *
   ************************************************
   */
  getUsuarios() {
    this.usuariosService.obtenerUsuarios().subscribe({
      next: (data) => {
        if (this.query) {
          // filtra los elementos de la lista según la consulta de búsqueda
          this.listaUsuarios = data.filter((element: any) =>
            element.name.toLowerCase().includes(this.query.toLowerCase())
          );
        } else {
          this.listaUsuarios = data;
        }
      },
      error: (err) => { },
    });
  }

  borrarHerramienta(id: any) {
    this.usuariosService.eliminarUsuario(id).subscribe({
      next: (data) => {
        window.location.reload();
      },
      error: (err) => { },
    });
  }

  /*
  ************************************************
  *                    BUSQUEDA                  *
  ************************************************
  */
  onSearch(value: string) {
    if (value && value.length > 3) {
      this.query = value; // actualiza la variable de consulta
      this.getUsuarios(); // filtra la lista de herramientas
    } else {
      this.query = '';
      this.getUsuarios();
    }
  }

  /*
  ************************************************
  *              MOSTRAR DETALLES                *
  ************************************************
  */
  mostrarDetalles(user: any) {
    this.router.navigate(['/lista-detalles', user.id]);
  }
}
