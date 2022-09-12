import { Component, OnInit } from '@angular/core';
import { RosterService } from '../service/roster.service';
import { ActivatedRoute } from '@angular/router';
import { Roster } from '../models/roster';
@Component({
  selector: 'app-roster',
  templateUrl: './roster.component.html',
  styleUrls: ['./roster.component.css']
})
export class RosterComponent implements OnInit {

  constructor(
    private rosterService: RosterService,
    private route:ActivatedRoute,
    ) { }

  agents: any [] = [];

  ngOnInit(): void {
    this.getAgents();

  }

  getAgents () {
    this.rosterService.getAllAgents().subscribe(request => this.agents = request.data);
  }

  deleteAgent(datas:any) {
    this.rosterService.deleteAgent(datas._id).subscribe(data  => { console.log(data)});
    this.agents =   this.agents.filter((u:any)=>u!==datas)
    alert(`${datas.firstName} ${datas.lastName} was deleted from database`);
  }

  getstudent(){

    const id = this.route.snapshot.params['id'];

    this.rosterService.getAgent(id).subscribe((data:any[]) => {
      this.agents = data;
  })
  }

}
