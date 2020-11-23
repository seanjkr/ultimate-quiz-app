import { Component , OnInit } from '@angular/core';
import { QuestionsService } from '../questions.service';

@Component({
  selector : 'app-welcome-view',
  templateUrl : './welcome-view.component.html',
  styleUrls : [ './welcome-view.component.scss' ]
})

export class WelcomeComponent implements OnInit {

  quizList = [];

  constructor( private questionsService : QuestionsService) {
    this.questionsService.getQuizzes().subscribe( r => {
      r.forEach(( value , index ) => {
        this.quizList.push( r[ index ] );
      });
    });
   }

  ngOnInit() {}

}