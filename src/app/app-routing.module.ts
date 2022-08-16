import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutpersonalComponent } from './aboutpersonal/aboutpersonal.component';
import { AboutprofessionalComponent } from './aboutprofessional/aboutprofessional.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { ProjectsComponent } from './projects/projects.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'aboutpersonal', component: AboutpersonalComponent },
  { path: 'aboutprofessional', component: AboutprofessionalComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: 'footer', component: FooterComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
