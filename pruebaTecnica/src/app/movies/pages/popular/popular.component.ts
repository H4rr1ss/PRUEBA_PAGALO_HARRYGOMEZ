import { Component } from '@angular/core';

@Component({
  selector: 'app-popular',
  templateUrl: './popular.component.html',
  styles: [`
    .clip-custom {
      clip-path: polygon(0% 0%, 100% 0%, 100% 90%, 50% 100%, 0% 90%);
    }
  `]
})
export class PopularComponent{
  selectedTab = 'cartelera';
  searchQuery = '';

  movies = [
    ...Array(15).fill({
      id: 0,
      title: "Captain America: Brave New World",
      image: "https://image.tmdb.org/t/p/w300/pzIddUEMWhWzfvLI3TwxUG2wGoi.jpg",
      rating: 6,
    }).map((movie, index) => ({ ...movie, id: index + 2 }))
  ];

  movies_popular = [
    ...Array(15).fill({
      id: 0,
      title: "The Vigilante",
      image: "https://image.tmdb.org/t/p/w300/xD9LpYZYmNch2EhHWIJXXFayENH.jpg",
      rating: 6,
    }).map((movie, index) => ({ ...movie, id: index + 2 }))
  ];

  setTab(tab: string) {
    this.selectedTab = tab;
  }
}
