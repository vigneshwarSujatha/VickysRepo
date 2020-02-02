import { Component, OnInit , Input} from '@angular/core';
import {HttpServiceService} from '../http-service.service'

@Component({
  selector: 'app-test-new-app1',
  templateUrl: './test-new-app1.component.html',
  styleUrls: ['./test-new-app1.component.css']
})
export class TestNewApp1Component implements OnInit {
  userList = [];
  constructor(public httpService: HttpServiceService) { }

  ngOnInit() {
    this.httpService.getApi('getAllEmployee').subscribe(res => {
      this.userList = res['data'];
    });
  }

  searchValue(event) {
    if(event.target.value.length > 0){
      this.httpService.getApi('findEmployee/'+event.target.value).subscribe(res => {
        this.userList = res['data'];
      });
    } else {
      this.handleClick();
    }
  }
  handleClick() {
    this.httpService.getApi('getAllEmployee').subscribe(res => {
      this.userList = res['data'];
    });
  }

}
