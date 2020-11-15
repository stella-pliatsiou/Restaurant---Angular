import { Component, OnInit } from '@angular/core';
import { Leader } from '../shared/leader';
import { LeaderService } from '../services/leader.service';
import { LEADERS } from '../shared/leaders';



@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {


  leader : Leader;
  

  constructor( private leaderService : LeaderService) { }

  ngOnInit() {
   
    this.leaderService.getFeaturedLeader()
    .then(leader =>this.leader=leader);
  }

  Leader = LEADERS [0];
  Leader1 = LEADERS [1];
  Leader2 = LEADERS [2];
  Leader3 = LEADERS [3];






}
