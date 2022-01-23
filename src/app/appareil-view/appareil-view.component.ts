import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AppareilService } from './../services/appareil.service';

@Component({
  selector: 'app-appareil-view',
  templateUrl: './appareil-view.component.html',
  styleUrls: ['./appareil-view.component.scss']
})
export class AppareilViewComponent implements OnInit {

  isAuth = false;

  //UILISATION DU PIPE DATE
  //lastUpdate = new Date();

  //UTILISATION DU PIPE ASYNC
  lastUpdate = new Promise<Date>(
    (resolve, rejects) =>{
      const date = new Date();
      setTimeout(
        () =>{
          resolve(date);
        }, 2000
      );
    }
  );

    appareils: any[];
    appareilSubscription: Subscription;

  constructor(private appareilService : AppareilService){
    setTimeout(
      ()=>{
        this.isAuth = true;
      }, 4000
    );
  }

  ngOnInit(){
    this.appareilSubscription = this.appareilService.appareilSubject.subscribe(
      (appareils: any[]) =>{
        this.appareils = appareils;
      }
    );
    this.appareilService.emitAppareilSubject();
  }

  onAllumer(){
    this.appareilService.switchOnAll();
  }

  onEteindre(){
    this.appareilService.switchOffAll();
  }

}
