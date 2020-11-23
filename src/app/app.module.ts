import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule , Routes } from '@angular/router';
import { CommonModule } from '@angular/common';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatRadioModule } from '@angular/material/radio';

import { AppComponent } from './app.component';
import { ResultsComponent } from './results/results.component';
import { QuestionFormComponent } from './question-form/question-form.component';
import { QuestionsComponent } from './questions/questions.component';
import { WelcomeComponent } from './welcome-view/welcome-view.component';


const appRoutes: Routes = [
  { path : 'welcome' , component : WelcomeComponent },
  { path : ':quizId' , component : QuestionsComponent },
  { path : '' , redirectTo : "welcome" , pathMatch : "prefix" },
];

@NgModule({
  declarations : [
    AppComponent,
    QuestionFormComponent,
    ResultsComponent,
    WelcomeComponent,
    QuestionsComponent
  ],

  imports : [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    CommonModule,
    RouterModule.forRoot(appRoutes),
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule,
    MatRadioModule
  ],

  providers : [],

  bootstrap : [ AppComponent ]

})

export class AppModule {}
