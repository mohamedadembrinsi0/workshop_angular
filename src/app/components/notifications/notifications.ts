import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-notifications',
  imports: [],
  templateUrl: './notifications.html',
  styleUrl: './notifications.css',
})
export class Notifications {
  notifications = signal([
    { message: 'Sami vous a envoyé une invitation.' },
    { message: 'Une nouvelle conférence est disponible.' },
    { message: 'Une nouvelle conférence est disponible.' },
  ]);

  show = signal(false)
  btnTxt = 'Afficher les notifications';
  showNotifications () {
    this.show.set(!this.show());
    this.btnTxt = this.show() ? 'Masquer les notifications' : 'Afficher les notifications';
  }

}
