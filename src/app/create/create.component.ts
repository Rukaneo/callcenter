import { Component, OnInit } from '@angular/core';
import { Form, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RosterService } from '../service/roster.service';
import { Roster } from '../models/roster';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  addAgent: any;
  constructor(
    private router: Router,
    private fb: FormBuilder,
    private rosterservice: RosterService,

  ) {
    this.addAgent = fb.group(
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

}

createAgent(): void {

  this.rosterservice.createAgent(this.addAgent.value).subscribe((data:any) =>{console.log(data);
  });
  console.log(this.addAgent.value);

  // this.router.navigate(['roster'])
  window.location.reload();
  alert("Agent Added");

}

}
