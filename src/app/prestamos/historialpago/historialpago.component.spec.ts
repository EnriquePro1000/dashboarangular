import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistorialpagoComponent } from './historialpago.component';

describe('HistorialpagoComponent', () => {
  let component: HistorialpagoComponent;
  let fixture: ComponentFixture<HistorialpagoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HistorialpagoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HistorialpagoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
