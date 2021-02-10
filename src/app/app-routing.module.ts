import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { MemorialComponent } from './memorial/memorial.component';

const routes: Routes = [
  { path: 'memorial', component: MemorialComponent },
  { path: '', component: MemorialComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
