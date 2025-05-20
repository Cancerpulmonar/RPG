import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { 
  IonHeader, IonToolbar, IonTitle, IonContent,
  IonButton, IonCol, IonInput, IonRow, IonGrid, IonCard,IonCardHeader,IonItem,IonCardTitle,
  IonCardContent,IonCardSubtitle,IonText,IonLabel,IonList
} from '@ionic/angular/standalone';
import  io  from 'socket.io-client'; // ✅ CORRECTO
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { RouterLink } from '@angular/router';

import { AuthService } from '@auth0/auth0-angular';
import { AnyCatcher } from 'rxjs/internal/AnyCatcher';
import { catchError } from 'rxjs/operators';
import { of } from 'rxjs';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    IonHeader, IonToolbar, IonTitle, IonContent,
    IonButton, IonCol, IonInput, IonRow, IonGrid,
    IonCard,IonCardHeader,IonItem,IonCardTitle,
    IonCardContent,IonCardSubtitle,IonText,IonLabel,IonList
  ],
})
export class HomePage implements OnInit {
  socket: any;
  username = '';
  message = '';
  messages: { username: string, message: string }[] = [];
  users: string[] = [];
  typingUsers: Set<string> = new Set();
  joined = false;

  public player : any = {}
  public playerDATA: any = {}
  public character: any = {}

  public url_host: string = 'http://localhost:3000';
  constructor( private auth: AuthService,private http: HttpClient,private router: Router) {}

 ngOnInit() {
  this.auth.user$.subscribe((data) => {
    this.playerDATA = data;
    console.log('Email autenticado:', this.playerDATA?.email);

    // ⚠️ Mueve la petición AQUÍ dentro del subscribe, para asegurar que el email esté listo
    this.http.get(`${this.url_host}/player/${this.playerDATA.email}`)
  .pipe(
    catchError(err => {
      if (err.status === 404) {
        console.log('Jugador no encontrado, redirigiendo...');
        this.router.navigate(['/createplayer']);
      } else {
        console.error('Error al obtener el jugador:', err);
      }
      return of(null); // Retorna un observable vacío para evitar que el error siga propagándose
    })
  )
  .subscribe((response: any) => {
    if (response) {
      this.character = response;
    }
  });
  });
}


}
