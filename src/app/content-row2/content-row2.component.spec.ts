import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentRow2Component } from './content-row2.component';

describe('ContentRow2Component', () => {
  let component: ContentRow2Component;
  let fixture: ComponentFixture<ContentRow2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ContentRow2Component]
    });
    fixture = TestBed.createComponent(ContentRow2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
