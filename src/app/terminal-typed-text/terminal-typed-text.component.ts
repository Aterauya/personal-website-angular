import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-terminal-typed-text',
  templateUrl: './terminal-typed-text.component.html',
  styleUrls: ['./terminal-typed-text.component.scss'],
})
export class TerminalTypedTextComponent implements OnInit {
  @Input() textToType: string = '';
  @Input() url: string = '';
  public typedText: string = '';
  constructor() {}

  ngOnInit(): void {
    this.populateText(this.textToType, (text) => this.setText(text));
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
    }, 150);
  };

  setText(name: string) {
    this.typedText = name;
  }

  getCursor(): boolean {
    return this.textToType !== this.typedText;
  }
}
