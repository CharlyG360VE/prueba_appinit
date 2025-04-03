import { ComponentFixture, TestBed } from '@angular/core/testing';
import PrivateHomeLayoutComponent from './private-layout.component';


describe('PrivateHomeLayoutComponent', () => {
  let component: PrivateHomeLayoutComponent;
  let fixture: ComponentFixture<PrivateHomeLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PrivateHomeLayoutComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrivateHomeLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
