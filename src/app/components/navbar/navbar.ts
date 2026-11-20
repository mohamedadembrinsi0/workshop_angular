import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-navbar',
  imports: [],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {
  links = signal([
    { name: 'Accueil', path: '/home' },
    { name: 'Profil', path: '/profil' },
    { name: 'Conferences', path: '/conferences' },
    { name: 'Friends', path: '/friends' },
    { name: 'Notifications', path: '/notifications' },
    { name: 'Admin', path: '/admin' },

  ]);
}
