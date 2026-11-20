import { Component, computed, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DatePipe, UpperCasePipe } from '@angular/common';

export interface Conference {
  id: number;
  title: string;
  description: string;
  date: Date;
  place: string;
  maxParticipants: number;
  nbParticipants: number;
}

export class ConferenceList {
  static readonly conferences: Conference[] = [
    {
      id: 1,
      title: 'Angular 21 Conference',
      description: 'Découvrez les nouveautés d’Angular 21.',
      date: new Date('2027-11-15T09:00:00'),
      place: 'Tunis',
      maxParticipants: 50,
      nbParticipants: 25,
    },
    {
      id: 2,
      title: 'Signals Workshop',
      description: 'Un atelier pratique autour des signaux Angular.',
      date: new Date('2027-11-30T09:00:00'),
      place: 'Ariana',
      maxParticipants: 30,
      nbParticipants: 24,
    },
    {
      id: 3,
      title: 'Web Conference',
      description: 'Les tendances actuelles du développement web.',
      date: new Date('2027-11-20T09:00:00'),
      place: 'Sousse',
      maxParticipants: 40,
      nbParticipants: 40,
    },
  ];
}

@Component({
  selector: 'app-conferences',
  imports: [DatePipe, UpperCasePipe, FormsModule],
  templateUrl: './conferences.html',
  styleUrl: './conferences.css',
})
export class Conferences {
  readonly conferences = signal<Conference[]>(ConferenceList.conferences.map((conference) => ({ ...conference })));
  readonly searchTerm = signal('');
  readonly filteredConferences = computed(() => {
    const search = this.searchTerm().trim().toLocaleLowerCase();
    return this.conferences().filter((conference) =>
      conference.title.toLocaleLowerCase().includes(search),
    );
  });

  remainingPlaces(conference: Conference): number {
    return Math.max(conference.maxParticipants - conference.nbParticipants, 0);
  }

  registrationClass(conference: Conference): string {
    const places = this.remainingPlaces(conference);
    if (places === 0) return 'registration-button registration-button--full';
    if (places < 10) return 'registration-button registration-button--limited';
    return 'registration-button registration-button--available';
  }

  register(conferenceId: number): void {
    this.conferences.update((conferences) =>
      conferences.map((conference) => {
        if (conference.id !== conferenceId || this.remainingPlaces(conference) === 0) return conference;
        return { ...conference, nbParticipants: conference.nbParticipants + 1 };
      }),
    );
  }
}
