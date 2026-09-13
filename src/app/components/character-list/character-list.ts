import { Component, inject } from '@angular/core';
import { CharacterService } from '../../services/character.service';

@Component({
  selector: 'app-character-list',
  imports: [],
  templateUrl: './character-list.html',
  styleUrl: './character-list.css',
})
export class CharacterList {
  // Inyección del servicio
  private characterService = inject(CharacterService);

  // Se apunta a la propiedad del servicio.
  resource = this.characterService.charactersResource;
}
