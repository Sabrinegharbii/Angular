import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArticlesComponent } from './articles/articles.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { OffresEmploiComponent } from './offres-emploi/offres-emploi.component';

const routes: Routes = [
  {path:'',redirectTo:'articles',pathMatch:'full'},
  {path:'offres',component:OffresEmploiComponent},
  {path:'articles',component:ArticlesComponent},
  {path:'**',component:NotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
