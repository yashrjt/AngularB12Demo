import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FLightComponent } from './flight.component';

describe('FLightComponent', () => {
  let component: FLightComponent;
  let fixture: ComponentFixture<FLightComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FLightComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FLightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
