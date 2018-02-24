import { Injectable } from '@angular/core';

@Injectable()
export class AccountsService {

  accounts = [
    {
      name: 'Master Account',
      status: 'active'
    },
    {
      name: 'Test Account',
      status: 'inactive'
    },
    {
      name: 'Hidden Account',
      status: 'unknow'
    }
  ];

  constructor() { }

  addAccount(name: string, status: string)
  {
    this.accounts.push({name: name , status: status});
  }

  updateStatus(id: number, status: string){
    this.accounts[id].status = status;
  }
}
