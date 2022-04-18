import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorpageComponent } from './components/errorpage/errorpage.component';
import { ResultpageComponent } from './components/resultpage/resultpage.component';
import { SearchpageComponent } from './components/searchpage/searchpage.component';
import { UsersComponent } from './components/users/users.component';

const routes: Routes = [
  { path: 'search', component: SearchpageComponent},
  { path: 'user', component: UsersComponent},
  { path: 'results', component: ResultpageComponent},
  { path: '404', component: ErrorpageComponent},
  { path: '', redirectTo:'search', pathMatch:'full'},
  { path: '**', redirectTo:'404', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
