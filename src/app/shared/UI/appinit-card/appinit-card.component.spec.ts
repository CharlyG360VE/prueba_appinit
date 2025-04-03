import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppinitCardComponent } from './appinit-card.component';

describe('AppinitCardComponent', () => {
  let component: AppinitCardComponent;
  let fixture: ComponentFixture<AppinitCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppinitCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppinitCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
