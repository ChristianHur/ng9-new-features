import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'home', loadChildren: () => import('../home/home.module').then( m => m.HomeModule) },
  { path: 'cat', loadChildren: () => import('../cat/cat.module').then(m => m.CatModule) },
  { path: 'away', loadChildren: () => import('./away/away.module').then(m => m.AwayModule) },
  { path: 'dog', loadChildren: () => import('./dog/dog.module').then(m => m.DogModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
