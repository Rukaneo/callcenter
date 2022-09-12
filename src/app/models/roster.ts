export class Roster{
  _id:String;
  account: String;
  firstName: String;
  lastName: String;
  phoneNumber: Number;
  emailAddress: String;
  agentId: Number;
  totalCalls: Number;
  dropCalls: Number;
  receivedCalls: Number;


  constructor(_id?: String, account?: String, firstName?:String, lastName?:String, phoneNumber?:Number, emailAddress?:String, agentId?:Number, totalCalls?:Number,
    dropCalls?:Number, receivedCalls?:Number){
    this._id = _id!;
    this.account = account!;
    this.firstName = firstName!;
    this.lastName = lastName!;
    this.phoneNumber = phoneNumber!;
    this.emailAddress = emailAddress!;
    this.agentId = agentId!;
    this.totalCalls = totalCalls!;
    this.dropCalls = dropCalls!;
    this.receivedCalls = receivedCalls!;

  }
  }
