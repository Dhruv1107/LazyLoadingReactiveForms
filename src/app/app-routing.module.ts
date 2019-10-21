import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RootComponent } from './root/root.component';


const routes: Routes = [
  { path: "root", component: RootComponent },
  { path: "", redirectTo: "root", pathMatch: "full" },
  { path: 'lazy', loadChildren: './lazy.module#LazyModule'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [
  RootComponent
];
