import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from './components/navbar/navbar';
import { Header } from './components/header/header';
import { Friends } from './components/friends/friends';
import { Profile } from './components/profile/profile';
import { Footer } from './components/footer/footer';
import { Conferences } from './components/conferences/conferences';
import { Notifications } from './components/notifications/notifications';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Navbar, Header, Friends, Profile, Footer, Conferences, Notifications],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('plateformConf');
}
