import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Zippy } from './zippy';

describe('Zippy', () => {
  let component: Zippy;
  let fixture: ComponentFixture<Zippy>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Zippy],
    }).compileComponents();

    fixture = TestBed.createComponent(Zippy);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
