import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Anime } from './components/anime/anime';
import { Pokelistcomponent } from './components/pokelistcomponent/pokelistcomponent';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Anime, CommonModule, Pokelistcomponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Agular_Services');
}
