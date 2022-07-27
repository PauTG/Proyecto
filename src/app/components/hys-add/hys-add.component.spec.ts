import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HysAddComponent } from './hys-add.component';

describe('HysAddComponent', () => {
  let component: HysAddComponent;
  let fixture: ComponentFixture<HysAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HysAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HysAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
