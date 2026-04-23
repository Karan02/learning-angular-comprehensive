import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ControlFormAssignment } from './control-form-assignment';

describe('ControlFormAssignment', () => {
  let component: ControlFormAssignment;
  let fixture: ComponentFixture<ControlFormAssignment>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ControlFormAssignment],
    }).compileComponents();

    fixture = TestBed.createComponent(ControlFormAssignment);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
