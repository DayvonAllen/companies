import { NgModule } from '@angular/core';
import {
  MatCardModule,
  MatSlideToggleModule
} from '@angular/material';

const material = [
    MatCardModule,
    MatSlideToggleModule
]
@NgModule({
  imports: [
   material
  ],
  exports: [
   material
  ]
})
export class MaterialModule {}
