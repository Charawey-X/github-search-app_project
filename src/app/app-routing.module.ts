import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ResultpageComponent } from './components/resultpage/resultpage.component';
import { SearchpageComponent } from './components/searchpage/searchpage.component';

const routes: Routes = [
  { path: 'search', component: SearchpageComponent},
  { path: 'results', component: ResultpageComponent},
  { path: '', redirectTo:'search', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
