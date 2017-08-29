import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToKPipe } from './to-k.pipe';;

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ToKPipe],
  exports:[ToKPipe]
})
export class SharedProductModule { }
