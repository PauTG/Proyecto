import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HysEditComponent } from './hys-edit.component';

describe('HysEditComponent', () => {
  let component: HysEditComponent;
  let fixture: ComponentFixture<HysEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HysEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HysEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
