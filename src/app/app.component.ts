import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { AuthService } from './services/auth.service';
import { Router } from '@angular/router';
import { Foto } from './models/foto';
import { FotoService } from './services/foto.service';

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
    public fotoService: FotoService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit() {
    this.auth.authStatus.subscribe((status) => {
      this.isAuthenticated = status;
      console.log('Autenticado:', this.isAuthenticated); // Para depurar
      this.cdr.detectChanges(); // Forzar la detección de cambios
      if (this.isAuthenticated) {
        this.obtenerFoto(); // Cargar foto solo si está autenticado
      }
    });
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
