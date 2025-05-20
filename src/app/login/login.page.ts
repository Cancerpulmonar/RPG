import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AuthService } from '@auth0/auth0-angular';
import { IonHeader, IonToolbar, IonMenuButton, IonButton,IonAlert, IonButtons, IonTitle, IonApp, IonSplitPane, IonMenu, IonContent, IonList, IonListHeader, IonNote, IonMenuToggle, IonItem, IonIcon, IonLabel, IonRouterOutlet, IonRouterLink, IonImg } from '@ionic/angular/standalone';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule,IonMenuButton, IonButton,IonAlert, IonButtons, IonTitle, IonApp, IonSplitPane, IonMenu, IonContent, IonList, IonListHeader, IonNote, IonMenuToggle, IonItem, IonIcon, IonLabel, IonRouterOutlet, IonRouterLink, IonImg]
})
export class LoginPage implements OnInit {

  public user: any;
  constructor(public auth: AuthService) { }

  ngOnInit() {
    this.auth.user$.subscribe((data) =>{
      this.user = data;
      console.log(this.user);
  
      if (this.user) {
        let usuario = {
          user: this.user.name,
          email: this.user.email,
          picture: this.user.picture
        };
        localStorage.setItem('user', JSON.stringify(usuario));
      }
    });
  }
  

  login() {
    this.auth.loginWithRedirect({
      appState: {
        target: '/home'
      }
    });
  }
}
