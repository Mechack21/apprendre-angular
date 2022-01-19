import { Component } from '@angular/core';
import { AppareilService } from './services/appareil.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
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

  appareils = [
    {
      name:'Machine à laver',
      status: 'allumer'
    },
    {
      name:'Television',
      status: 'allumer'
    },
    {
      name:'Ordinateur',
      status: 'eteint'
    }
  ];

  constructor(private appareilService : AppareilService){
    setTimeout(
      ()=>{
        this.isAuth = true;
      }, 4000
    );
  }
  onAllumer(){
    console.log('On allume tout');
  }
}
