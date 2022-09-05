import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddressFormComponent } from './address-form/address-form.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DragDropComponent } from './drag-drop/drag-drop.component';
import { NavigationComponent } from './navigation/navigation.component';
import { TableComponent } from './table/table.component';
import { TreeComponent } from './tree/tree.component';

const routes: Routes = [
  { path: 'dragNdrop', component: DragDropComponent },
  { path: 'tree', component: TreeComponent },
  { path: 'adressForm', component: AddressFormComponent },
  { path: 'dash', component: DashboardComponent },
  { path: 'nav', component: NavigationComponent },
  { path: 'table', component: TableComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
