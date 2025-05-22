import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonGrid, IonRow, IonCol, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent, IonIcon } from '@ionic/angular/standalone';
import { AuthService } from '@auth0/auth0-angular';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';


interface Role {
  id: string;
  name: string;
  description: string;
  hp: number;
  pc: number;  // antes mana
  strength: number;
  defense: number;
  magicDMG: number;
  physicalDMG: number;
  crit_chance: number;
  crit_DMG: number;
  gold: number;
  experience: number;
  level: number;
  icon: string;
}
@Component({
  selector: 'app-createplayer',
  templateUrl: './createplayer.page.html',
  styleUrls: ['./createplayer.page.scss'],
  standalone: true,
  imports: [CommonModule,

    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonGrid,
    IonRow,
    IonCol,
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardSubtitle,
    IonCardContent,
    IonIcon]
})


export class CreateplayerPage implements OnInit {

  constructor(private auth: AuthService, private http: HttpClient, private router: Router) { }
  public playerDATA: any = []
  public url_host: string = 'https://back-rpg.onrender.com';

  public roles: Role[] = [
    {
      id: this.playerDATA.email,
      name: 'Druida',
      description: 'Maestro de la naturaleza y sanación.',
      hp: 80,
      pc: 120,
      strength: 50,
      defense: 40,
      magicDMG: 90,
      physicalDMG: 30,
      crit_chance: 10,
      crit_DMG: 150,
      gold: 100,
      experience: 0,
      level: 1,
      icon: 'leaf-outline'
    },
    {
      id: this.playerDATA.email,
      name: 'Mago',
      description: 'Especialista en ataques mágicos poderosos.',
      hp: 70,
      pc: 150,
      strength: 30,
      defense: 30,
      magicDMG: 100,
      physicalDMG: 20,
      crit_chance: 15,
      crit_DMG: 140,
      gold: 100,
      experience: 0,
      level: 1,
      icon: 'flame-outline'
    },
    {
      id: this.playerDATA.email,
      name: 'Pícaro',
      description: 'Ágil y sigiloso, experto en ataques críticos.',
      hp: 75,
      pc: 60,
      strength: 70,
      defense: 35,
      magicDMG: 40,
      physicalDMG: 80,
      crit_chance: 30,
      crit_DMG: 180,
      gold: 120,
      experience: 0,
      level: 1,
      icon: 'eye-outline'
    },
    {
      id: this.playerDATA.email,
      name: 'Sacerdote',
      description: 'Sanador y protector del grupo.',
      hp: 85,
      pc: 130,
      strength: 40,
      defense: 50,
      magicDMG: 85,
      physicalDMG: 25,
      crit_chance: 5,
      crit_DMG: 120,
      gold: 100,
      experience: 0,
      level: 1,
      icon: 'medkit-outline'
    },
    {
      id: this.playerDATA.email,
      name: 'Guerrero',
      description: 'Fuerte en combate cuerpo a cuerpo, con gran defensa.',
      hp: 120,
      pc: 50,
      strength: 90,
      defense: 80,
      magicDMG: 20,
      physicalDMG: 100,
      crit_chance: 10,
      crit_DMG: 130,
      gold: 80,
      experience: 0,
      level: 1,
      icon: 'shield-checkmark-outline'
    },
    {
      id: this.playerDATA.email,
      name: 'Cazador',
      description: 'Experto en ataques a distancia y trampas.',
      hp: 85,
      pc: 70,
      strength: 65,
      defense: 45,
      magicDMG: 50,
      physicalDMG: 75,
      crit_chance: 20,
      crit_DMG: 160,
      gold: 110,
      experience: 0,
      level: 1,
      icon: 'bow-arrow-outline'
    },
    {
      id: this.playerDATA.email,
      name: 'Paladín',
      description: 'Guerrero sagrado, combina fuerza y magia defensiva.',
      hp: 110,
      pc: 90,
      strength: 80,
      defense: 70,
      magicDMG: 60,
      physicalDMG: 90,
      crit_chance: 15,
      crit_DMG: 140,
      gold: 90,
      experience: 0,
      level: 1,
      icon: 'ribbon-outline'
    }
  ];



  ngOnInit() {
    this.auth.user$.subscribe((data) => {
      this.playerDATA = data;
    })
  }


  seleccionarClase(role: Role) {
    const datosnuevos = {
      id: this.playerDATA.email,
      name: role.name,
      description: role.description,
      hp: role.hp,
      pc: role.pc,
      strength: role.strength,
      defense: role.defense,
      magicDMG: role.magicDMG,
      physicalDMG: role.physicalDMG,
      crit_chance: role.crit_chance,
      crit_DMG: role.crit_DMG,
      gold: role.gold,
      experience: role.experience,
      level: role.level,
      icon: role.icon
    };

    this.http.post(`${this.url_host}/crearpersonaje`, datosnuevos).subscribe({
      next: (response) => {
        console.log('Personaje creado:', response);
        this.router.navigate(['/home']);
      },
      error: (err) => {
        console.error('Error al crear personaje:', err);
        alert('Error al crear el personaje');
      }
    });

  }






  
}
