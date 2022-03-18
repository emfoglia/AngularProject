import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FrogComponent } from './frog/frog.component';

const routes: Routes = [
  {path: 'mystery', component: FrogComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [FrogComponent]
