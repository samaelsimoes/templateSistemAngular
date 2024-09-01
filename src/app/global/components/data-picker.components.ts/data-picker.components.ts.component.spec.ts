import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataPickerComponentsTsComponent } from './data-picker.components.ts.component';

describe('DataPickerComponentsTsComponent', () => {
  let component: DataPickerComponentsTsComponent;
  let fixture: ComponentFixture<DataPickerComponentsTsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DataPickerComponentsTsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DataPickerComponentsTsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
