import { Component, OnInit } from '@angular/core';

@Component({
  selector: '.app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
    allowNewServer = false;
    serverCreationstatus = 'No server was created!';
    serverName = 'test123';
  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 100);
  }
  ngOnInit() {
  }
  onCreateServer(){
    this.serverCreationstatus = 'Server was created! Name is ' + this.serverName;
  }
  onUpdateServerName(event: Event)
  {
    this.serverName = (<HTMLInputeElement>event.target).value;
  }

}
