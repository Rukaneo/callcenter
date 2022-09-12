
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RosterComponent } from './roster/roster.component';
import { AdminComponent } from './admin/admin.component';
import { HomeComponent } from './home/home.component';
import { ChartsComponent } from './charts/charts.component';
import { EditComponent } from './edit/edit.component';
import { CreateComponent } from './create/create.component';



const routes: Routes = [
  {path: '', component:RosterComponent},
  {path:'roster', component:RosterComponent},
  {path:'admin', component:AdminComponent},
  {path:'home', component:HomeComponent},
  {path:'charts', component:ChartsComponent},
  {path:'roster/edit', component:EditComponent},
  {path:'roster/edit/:id', component:EditComponent},
  {path:'create', component:CreateComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
