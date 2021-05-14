import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { NgPasswordyComponent } from './ng-passwordy.component';

@NgModule({
  declarations: [NgPasswordyComponent],
  imports: [
    CommonModule,
    FormsModule,
    MatIconModule,
  ],
  exports: [NgPasswordyComponent]
})
export class NgPasswordyModule { }
