import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ConsoleComponent } from './console/console.component';
import { ConsoleGuard } from './console/console-gurd.guard';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' }, // Redirect to Home component
  { path: 'home', component: HomeComponent },
  { path: 'console', component: ConsoleComponent, canActivate: [ConsoleGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
