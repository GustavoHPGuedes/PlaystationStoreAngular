import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JogoCardComponent } from './jogo-card.component';

describe('JogoCardComponent', () => {
  let component: JogoCardComponent;
  let fixture: ComponentFixture<JogoCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JogoCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JogoCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
