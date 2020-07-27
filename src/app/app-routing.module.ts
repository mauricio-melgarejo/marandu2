import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DataTableComponent } from './components/data-table/data-table.component';
import { AddComponent } from './components/add/add.component';

const routes: Routes = [
  { path: 'tabla', component: DataTableComponent },
  { path: 'tabla/:opcion', component: DataTableComponent },
  { path: 'add', component: AddComponent },
  { path: '**', pathMatch: 'full', component: DataTableComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
