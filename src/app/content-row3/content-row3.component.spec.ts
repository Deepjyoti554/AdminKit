import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentRow3Component } from './content-row3.component';

describe('ContentRow3Component', () => {
  let component: ContentRow3Component;
  let fixture: ComponentFixture<ContentRow3Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ContentRow3Component]
    });
    fixture = TestBed.createComponent(ContentRow3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
