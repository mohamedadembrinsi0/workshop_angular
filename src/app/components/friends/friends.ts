import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-list-amis',
  imports: [FormsModule],
  templateUrl: './friends.html',
  styleUrl: './friends.css',
})
export class Friends {
  friends = signal([
    { name :'Ahmed'},
    {name : 'Sami'},
    {name : 'Sarra'}
  ])
}
