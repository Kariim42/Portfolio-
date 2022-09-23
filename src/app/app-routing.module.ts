import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';

const routes: Routes = [
  {path: '',  component: HomepageComponent},// default route
  {path: 'about',  component: HomepageComponent},
  {path: 'skills',  component: HomepageComponent},
  {path: 'projects',  component: HomepageComponent}, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
