import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test-new-app1',
  templateUrl: './test-new-app1.component.html',
  styleUrls: ['./test-new-app1.component.css']
})
export class TestNewApp1Component implements OnInit {
  
  userList = [];
  constructor() { }

  ngOnInit() {
    this.userList = [{
      name: 'Vicky',
      desig: 'SE'
    },
    {
      name: 'Vimal',
      desig :'TL'
    },
    {
      name: 'Madhu',
      desig : 'Manager'
    },
    {
      name: 'selvam',
      desig : 'TL'
    }
  ]
  }

  searchValue(event) {
    console.log(event.target.value);
    
  }

}
