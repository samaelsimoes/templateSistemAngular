import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalAnimationsComponent } from './modal-animations.component';

describe('ModalAnimationsComponent', () => {
  let component: ModalAnimationsComponent;
  let fixture: ComponentFixture<ModalAnimationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalAnimationsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalAnimationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
