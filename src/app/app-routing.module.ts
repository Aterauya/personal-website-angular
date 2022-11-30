import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TerminalPromptComponent } from './terminal-prompt/terminal-prompt.component';

const routes: Routes = [
  {
    path: '',
    component: TerminalPromptComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
