import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExperianceCardComponent } from './experiance-card.component';

describe('ExperianceCardComponent', () => {
  let component: ExperianceCardComponent;
  let fixture: ComponentFixture<ExperianceCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    imports: [ExperianceCardComponent]
})
    .compileComponents();

    fixture = TestBed.createComponent(ExperianceCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
