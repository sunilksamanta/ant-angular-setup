import { Component, OnInit } from '@angular/core';
import {AuthService} from '@core/services';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  constructor(
    private authService: AuthService
  ) { }

  ngOnInit(): void {
    this.authService.authState.subscribe(status => {
      console.log(status);
    });
  }

}
