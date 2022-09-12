import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { RosterService } from '../service/roster.service';


@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  updateAgent: any;
  agents: any[] = [];
  id: any;

  constructor(
    private rosterservice: RosterService,
    private fb: FormBuilder,
    private route: ActivatedRoute,

  ) {
    this.updateAgent = fb.group(
      {

        account: [''],
        firstName: [''],
        lastName: [''],
        phoneNumber: [''],
        emailAddress: [''],
        agentId: [''],
        totalCalls: [0],
        dropCalls: [0],
        receivedCalls: [0]

      }

    )

  }

  ngOnInit(): void {

    // this.showAgent2();
    this.showagent();

  }

  onSubmit() {
    this.id = this.route.snapshot.params['id'];
    this.rosterservice.updateAgent(this.id,this.updateAgent.value).subscribe((data:any) =>{console.log(data);
    });
    console.log(this.updateAgent.value);
    window.location.reload();
    alert("Agent Updated");
  }

  showagent() {
    this.id = this.route.snapshot.params['id'];
    this.rosterservice.getAgent(this.id).subscribe(request => this.agents[0] = request.data,);

    this.rosterservice.getAgent(this.id).subscribe(request => {
      this.updateAgent.patchValue(request.data)
    });

  }



}
