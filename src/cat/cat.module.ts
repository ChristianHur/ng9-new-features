import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CatComponent } from './cat.component';
import { Routes, RouterModule } from '@angular/router';

// routes
export const ROUTES: Routes = [
  { path: '', component: CatComponent }
];

@NgModule({
  declarations: [CatComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTES)
  ]
})
export class CatModule { }
