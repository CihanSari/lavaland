import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LavaLandComponent } from 'src/lavacanvas';


const routes: Routes = [
  { path: 'lavaland', component: LavaLandComponent },
  { path: '', redirectTo: "lavaland", pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
