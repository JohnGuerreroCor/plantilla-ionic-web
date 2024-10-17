import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Foto } from 'src/app/models/foto';
import { AuthService } from 'src/app/services/auth.service';
import { FotoService } from 'src/app/services/foto.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  title = 'plantilla-ionic-web';
  foto: Foto = {
    url: '',
  };
  constructor(
    public auth: AuthService,
    private router: Router,
    public fotoService: FotoService
  ) {
    this.obtenerFoto();
  }

  ngOnInit() {}

  obtenerFoto() {
    this.fotoService
      .mirarFoto('' + this.auth.user.personaCodigo)
      .subscribe((data) => {
        var img = new Blob([data], { type: 'application/json' });
        if (img.size !== 4) {
          var blob = new Blob([data], { type: 'image/png' });
          const foto = blob;
          const reader = new FileReader();
          reader.onload = () => {
            this.foto.url = reader.result as string;
          };
          reader.readAsDataURL(foto);
        } else {
          this.fotoService
            .mirarFotoAntigua('' + this.auth.user.personaCodigo)
            .subscribe((data) => {
              this.foto = data;
            });
        }
      });
  }

  logout(): void {
    this.auth.logout();
    this.router.navigate(['/login']);
  }
}
