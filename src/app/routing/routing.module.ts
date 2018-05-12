import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from '../list/list.component';
import { AddComponent } from '../add/add.component';

const routes: Routes =  [{path: '', redirectTo: '/list', pathMatch: 'full'},
                         {path: 'list', component: ListComponent},
                         {path: 'add', component: AddComponent}];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  declarations: [],
  exports: [RouterModule]
})
export class RoutingModule { }
