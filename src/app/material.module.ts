import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';

import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';

@NgModule({
  imports: [
    CommonModule, MatInputModule
  ],
  exports: [
    MatInputModule, MatButtonModule
  ]
})
export class MaterialModule { }
