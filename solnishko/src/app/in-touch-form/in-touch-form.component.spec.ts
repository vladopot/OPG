import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InTouchFormComponent } from './in-touch-form.component';

describe('InTouchFormComponent', () => {
  let component: InTouchFormComponent;
  let fixture: ComponentFixture<InTouchFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InTouchFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InTouchFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
