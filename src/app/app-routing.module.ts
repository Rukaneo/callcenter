
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RosterComponent } from './roster/roster.component';
import { AdminComponent } from './admin/admin.component';
import { HomeComponent } from './home/home.component';
import { ChartsComponent } from './charts/charts.component';
import { EditComponent } from './edit/edit.component';
import { CreateComponent } from './create/create.component';
import { RequiresAuthGuard } from './guard/requires-auth.guard';



const routes: Routes = [



  // {path: '**', component:HomeComponent},

  {path:'roster', component:RosterComponent, canActivate: [RequiresAuthGuard]},
  // {path:'admin', component:AdminComponent},
  {path:'home', component:HomeComponent},
  {path:'charts', component:ChartsComponent , canActivate: [RequiresAuthGuard]},
  {path:'roster/edit', component:EditComponent , canActivate: [RequiresAuthGuard]},
  {path:'roster/edit/:id', component:EditComponent , canActivate: [RequiresAuthGuard]},
  {path:'create', component:CreateComponent, canActivate: [RequiresAuthGuard]},

  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', redirectTo: 'home' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
