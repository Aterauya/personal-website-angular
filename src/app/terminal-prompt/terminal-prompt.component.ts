import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-terminal-prompt',
  templateUrl: './terminal-prompt.component.html',
  styleUrls: ['./terminal-prompt.component.scss'],
})
export class TerminalPromptComponent implements OnInit {
  private name = 'Adam Duboczky';
  private job = 'Software Developer';
  private employment = 'Synectics';

  public nameText = '';
  public jobText = '';
  public employmentText = '';

  public nameCursor = true;
  public jobCursor = true;
  public employmentCursor = true;

  constructor() {}

  ngOnInit(): void {
    this.populateText(this.name, (name) => this.setName(name));
    this.populateText(this.job, (job) => this.setJob(job));
    this.populateText(this.employment, (employment) =>
      this.setEmployment(employment)
    );
  }

  populateText = (
    word: string,
    callback: (word: string) => void,
    index = 0
  ) => {
    if (word.length === index - 1) {
      return;
    }

    callback(word.slice(0, index));
    setTimeout(() => {
      this.populateText(word, callback, index + 1);
    }, 200);
  };

  setName(character: string) {
    this.nameText = character;
  }

  getNameCursor(): boolean {
    return this.name !== this.nameText;
  }

  setJob(character: string) {
    this.jobText = character;
  }

  getJobCursor(): boolean {
    return this.job !== this.jobText;
  }

  setEmployment(character: string) {
    this.employmentText = character;
  }

  getEmploymentCursor(): boolean {
    return this.employment !== this.employmentText;
  }
}
