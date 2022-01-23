export class AppareilService{
    appareils = [
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
      }

      switchOffAll(){
          for(let appareil of this.appareils){
              appareil.status = 'eteint';
          }
      }

      switchOnOne(index: number){
            this.appareils[index].status = 'allumer';
      }

      switchOffOne(index: number){
          this.appareils[index].status = 'eteint';
      }
}