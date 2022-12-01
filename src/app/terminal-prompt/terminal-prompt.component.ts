import { Component, OnInit } from '@angular/core';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { fab, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-terminal-prompt',
  templateUrl: './terminal-prompt.component.html',
  styleUrls: ['./terminal-prompt.component.scss'],
})
export class TerminalPromptComponent implements OnInit {
  constructor(private library: FaIconLibrary) {}

  ngOnInit(): void {
    this.library.addIcons(faGithub, faLinkedin);
  }
}
