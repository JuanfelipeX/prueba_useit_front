import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UsuariosService } from 'src/app/services/usuarios/usuarios.service';

@Component({
  selector: 'app-lista-detalles',
  templateUrl: './lista-detalles.component.html',
  styleUrls: ['./lista-detalles.component.css']
})
export class ListaDetallesComponent implements OnInit {

  userId: any;
  userDetalles: any; // Asegúrate de definir correctamente el tipo de usuario

  constructor(
    private route: ActivatedRoute, // Para obtener el parámetro de ruta
    private router: Router, // Para la navegación entre páginas
    private usuariosService: UsuariosService // Servicio para manejar operaciones relacionadas con los usuarios
  ) { }

  ngOnInit() {
    // Se ejecuta al inicializar el componente
    this.route.params.subscribe(params => {
      this.userId = +params['id'];

      // Llama al servicio para obtener los detalles del usuario con el ID proporcionado
      this.usuariosService.obtenerUsuariosId(this.userId).subscribe(response => {
          this.userDetalles = response;
      });
    });
  }

  // Función para regresar a la página de lista de usuarios
  regresar() {
    this.router.navigate(['/lista-usuarios']);
  }
}
