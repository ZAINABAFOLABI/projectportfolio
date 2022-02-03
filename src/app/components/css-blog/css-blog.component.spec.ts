import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CssBlogComponent } from './css-blog.component';

describe('CssBlogComponent', () => {
  let component: CssBlogComponent;
  let fixture: ComponentFixture<CssBlogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CssBlogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CssBlogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
