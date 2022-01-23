import { Component, OnDestroy, OnInit } from '@angular/core';
import { interval, Observable, Subscription } from 'rxjs';
import 'rxjs';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
   
  secondes: number;
  counterSubscription: Subscription;

  constructor(){}
  
    ngOnInit() {

      const counter = interval(1000);
      this.counterSubscription = counter.subscribe(
        (value: number) =>{
          this.secondes = value;
        }
      );
      /*counter.subscribe(
        (value: number) =>{
          this.secondes = value;
        },
        (error: any) =>{
          console.log('Une erreur a ete rencontré')
        },
        () =>{
          console.log('Observable completé');
        }
      );*/
  }

  ngOnDestroy(){

    this.counterSubscription.unsubscribe();
  }
}
