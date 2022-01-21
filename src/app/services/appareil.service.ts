export class AppareilService{
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