import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { NgxPasswordyComponent } from './ngx-passwordy.component';

@NgModule({
  declarations: [NgxPasswordyComponent],
  imports: [
    CommonModule,
    FormsModule,
    MatIconModule,
  ],
  exports: [NgxPasswordyComponent]
})
export class NgxPasswordyModule { }
