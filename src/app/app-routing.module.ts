import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/pages/home/home.component';
import { DetailsScreenComponent } from './components/pages/details-screen/details-screen.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent},
  { path: 'datails', component: DetailsScreenComponent},
  { path: '',   redirectTo: '/home', pathMatch: 'full' },
  { path: '**',  redirectTo: '/home'},

];

@NgModule({   
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
