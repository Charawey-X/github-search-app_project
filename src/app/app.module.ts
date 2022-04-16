import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { SearchpageComponent } from './components/searchpage/searchpage.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ResultpageComponent } from './components/resultpage/resultpage.component';
import { GithubService } from './services/github.service';
import { DatePipe } from './pipes/date.pipe';
import { UsersComponent } from './components/users/users.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


@NgModule({
  declarations: [
    AppComponent,
    SearchpageComponent,
    ResultpageComponent,
    DatePipe,
    UsersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FontAwesomeModule
  ],
  providers: [ GithubService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
