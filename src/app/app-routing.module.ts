import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MainPageComponent } from './pages/main-page/main-page.component';
import { ProjectsPageComponent } from './pages/projects-page/projects-page.component';
import { AboutMePageComponent } from './pages/about-me-page/about-me-page.component';
import { TechStackComponent } from './pages/tech-stack/tech-stack.component';

const routes: Routes = [
  {
    path: '',
    component: MainPageComponent,
  },
  {
    path: 'projects',
    component: ProjectsPageComponent,
  },
  {
    path: 'tech-stack',
    component: TechStackComponent,
  },
  {
    path: 'about-me',
    component: AboutMePageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
