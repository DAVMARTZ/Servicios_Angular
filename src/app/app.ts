import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Anime } from './components/anime/anime';
import { Pokelistcomponent } from './components/pokelistcomponent/pokelistcomponent';
import { CharacterList } from './components/character-list/character-list';
import { CommonModule } from '@angular/common';
import { UserComponent } from './components/user/user';
import { FormReactive } from './components/form-reactive/form-reactive';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Anime, CommonModule, Pokelistcomponent, CharacterList, UserComponent, FormReactive],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Agular_Services');
}
