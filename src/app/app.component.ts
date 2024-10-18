import { Component, OnInit } from '@angular/core';
import { AuthService } from './services/auth.service';
import { Router } from '@angular/router';
import { Foto } from './models/foto';
import { FotoService } from './services/foto.service';
import { AuthGuard } from './guard/auth.guard';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  isAuthenticated = false;
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

  ngOnInit() {
    this.auth.authStatus.subscribe(status => {
      this.isAuthenticated = status; // Actualiza cuando el usuario se loguea
    });
  }

  canActivate(): boolean {
    if (this.auth.isAuthenticated()) {
      return true;
    } else {
      return false;
    }
  }

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
