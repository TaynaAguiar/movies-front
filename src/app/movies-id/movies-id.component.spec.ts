import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoviesIdComponent } from './movies-id.component';

describe('MoviesIdComponent', () => {
  let component: MoviesIdComponent;
  let fixture: ComponentFixture<MoviesIdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MoviesIdComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MoviesIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
