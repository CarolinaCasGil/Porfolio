import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DassboardComponent } from './dassboard.component';

describe('DassboardComponent', () => {
  let component: DassboardComponent;
  let fixture: ComponentFixture<DassboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DassboardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DassboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
