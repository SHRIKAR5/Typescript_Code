import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TypeScriptTutorial1Component } from './type-script-tutorial1.component';

describe('TypeScriptTutorial1Component', () => {
  let component: TypeScriptTutorial1Component;
  let fixture: ComponentFixture<TypeScriptTutorial1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TypeScriptTutorial1Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TypeScriptTutorial1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
