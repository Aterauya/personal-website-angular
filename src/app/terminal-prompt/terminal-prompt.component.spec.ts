import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TerminalPromptComponent } from './terminal-prompt.component';

describe('TerminalPromptComponent', () => {
  let component: TerminalPromptComponent;
  let fixture: ComponentFixture<TerminalPromptComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TerminalPromptComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TerminalPromptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
