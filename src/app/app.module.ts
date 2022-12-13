import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TerminalPromptComponent } from './terminal-prompt/terminal-prompt.component';
import { TerminalTypedTextComponent } from './terminal-typed-text/terminal-typed-text.component';
import { DragDropModule } from '@angular/cdk/drag-drop';

@NgModule({
  declarations: [
    AppComponent,
    TerminalPromptComponent,
    TerminalTypedTextComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, DragDropModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
