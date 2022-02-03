import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirebaseBlogComponent } from './firebase-blog.component';

describe('FirebaseBlogComponent', () => {
  let component: FirebaseBlogComponent;
  let fixture: ComponentFixture<FirebaseBlogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FirebaseBlogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FirebaseBlogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
