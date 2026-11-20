import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  title = signal('GESTION DES CONFÉRENCES')
  title2 = signal('Conference App')
  msg = signal('Bienvenue sur votre espace utilisateur')
}
