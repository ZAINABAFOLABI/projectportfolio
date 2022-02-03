import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApicallsBlogComponent } from './apicalls-blog.component';

describe('ApicallsBlogComponent', () => {
  let component: ApicallsBlogComponent;
  let fixture: ComponentFixture<ApicallsBlogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApicallsBlogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ApicallsBlogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
