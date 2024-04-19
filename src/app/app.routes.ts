import { Routes } from '@angular/router';
import { ProjectOverviewComponent } from './project-overview/project-overview.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { LoginComponent } from './login/login.component';

export const routes: Routes = [
  {
    path: '', component: LandingPageComponent,
  },
  {
    path: 'login', component: LoginComponent
  },
  {
    path: 'project/:projectId', component: ProjectOverviewComponent
  },

];
