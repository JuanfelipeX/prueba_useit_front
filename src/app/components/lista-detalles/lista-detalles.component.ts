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

  constructor(private route: ActivatedRoute, private router: Router, private usuariosService: UsuariosService,) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.userId = +params['id'];
      this.usuariosService.obtenerUsuariosId(this.userId).subscribe(response => {
          this.userDetalles = response;
      });
    });
  }

  goBack() {
    this.router.navigate(['/lista-usuarios']);
  }

}
