import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FacultynameComponent } from './facultyname.component';

describe('FacultynameComponent', () => {
  let component: FacultynameComponent;
  let fixture: ComponentFixture<FacultynameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FacultynameComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FacultynameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
