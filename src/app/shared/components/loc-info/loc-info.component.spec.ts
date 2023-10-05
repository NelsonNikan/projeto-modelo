import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LocInfoComponent } from './loc-info.component';

describe('LocInfoComponent', () => {
  let component: LocInfoComponent;
  let fixture: ComponentFixture<LocInfoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LocInfoComponent]
    });
    fixture = TestBed.createComponent(LocInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
