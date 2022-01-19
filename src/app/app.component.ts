import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  isAuth = false;

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

  constructor(){
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
