import { Subject } from "rxjs";

export class AppareilService{
    
    appareilSubject = new Subject<any[]>();
    
   private appareils = [
        {
          id: 1,  
          name:'Machine à laver',
          status: 'allumer'
        },
        {
          id: 2,  
          name:'Television',
          status: 'allumer'
        },
        {
          id: 3,  
          name:'Ordinateur',
          status: 'eteint'
        }
      ];

      emitAppareilSubject(){
          this.appareilSubject.next(this.appareils.slice());
      }

      getAppareilById(id: number){
          const appareil = this.appareils.find(
              (appareilObject) => {
                  return appareilObject.id === id;
              }
          );
          return appareil;
      }
      switchOnAll(){
          for(let appareil of this.appareils){
              appareil.status = 'allumer';
          }
          this.emitAppareilSubject();
      }

      switchOffAll(){
          for(let appareil of this.appareils){
              appareil.status = 'eteint';
          }
          this.emitAppareilSubject();
      }

      switchOnOne(index: number){
            this.appareils[index].status = 'allumer';
            this.emitAppareilSubject();
      }

      switchOffOne(index: number){
          this.appareils[index].status = 'eteint';
          this.emitAppareilSubject();
      }
}