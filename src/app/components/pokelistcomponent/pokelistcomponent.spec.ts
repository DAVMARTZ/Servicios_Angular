import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Pokelistcomponent } from './pokelistcomponent';

describe('Pokelistcomponent', () => {
  let component: Pokelistcomponent;
  let fixture: ComponentFixture<Pokelistcomponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Pokelistcomponent],
    }).compileComponents();

    fixture = TestBed.createComponent(Pokelistcomponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
