import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { HomeComponent } from './home/home.component';
// import { AddEmployeeComponent } from './add-employee/add-employee.component';
// import { EditEmployeeComponent } from './edit-employee/edit-employee.component';
// import { ViewEmployeeComponent } from './view-employee/view-employee.component';

const routes: Routes = [
  {
    path : 'home',
    loadComponent: () => import('./home/home.component').then(mod => mod.HomeComponent),
    // component : HomeComponent
  },
  {path : 'add-employee', 
  loadComponent: () => import('./add-employee/add-employee.component').then(mod => mod.AddEmployeeComponent),
  // component : AddEmployeeComponent
},
  {path : 'edit-employee', 
  loadComponent: () => import('./edit-employee/edit-employee.component').then(mod => mod.EditEmployeeComponent),
  // component : EditEmployeeComponent
  },
  {path: 'view-employee', 
  loadComponent: () => import('./view-employee/view-employee.component').then(mod => mod.ViewEmployeeComponent),
  // component: ViewEmployeeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
