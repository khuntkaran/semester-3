import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Morethen10expComponent } from './morethen10exp.component';

describe('Morethen10expComponent', () => {
  let component: Morethen10expComponent;
  let fixture: ComponentFixture<Morethen10expComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Morethen10expComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Morethen10expComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
