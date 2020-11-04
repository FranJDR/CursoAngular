import { SessionService } from './../../services/session/session.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  name: string = '';
  img: string = '';

  constructor(
    private sessionService: SessionService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.name = this.sessionService.name;
    this.img = this.sessionService.urlImg;
    console.log(name + "  " + this.img);
  }

  singOff() {
    this.sessionService.signOff();
  }

}
