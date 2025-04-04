import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppinitTitleComponent } from './appinit-title.component';

describe('AppinitTitleComponent', () => {
  let component: AppinitTitleComponent;
  let fixture: ComponentFixture<AppinitTitleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppinitTitleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppinitTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
