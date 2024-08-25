import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UXComponent } from './ux.component';

describe('UXComponent', () => {
  let component: UXComponent;
  let fixture: ComponentFixture<UXComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UXComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UXComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
