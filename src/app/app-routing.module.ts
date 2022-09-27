import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { HomepageComponent } from './homepage/homepage.component';
import { SkillComponent } from './skill/skill.component';

const routes: Routes = [
  {path: '',  component: HomepageComponent},// default route
  {path: 'about',  component: AboutComponent},
  {path: 'skills',  component: SkillComponent},
  {path: 'projects',  component: HomepageComponent}, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
