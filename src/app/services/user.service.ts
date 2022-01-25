import { Subject } from 'rxjs';
import { User } from './../models/User.model';
export class UserService{

    private users: User[] = [
        {
            firstName: 'Mechack',
            lastName: 'MUTOKA',
            email: 'mechackmutoka@gmail.com',
            drinkPreference: 'Coca',
            hobbies:['coder', 'la degustation du café']

        }
    ];

    userSubject = new Subject<User[]>();

    emitUsers(){
        this.userSubject.next(this.users.slice());
    }

    addUser(user: User){
        this.users.push(user);
        this.emitUsers();
    }
}