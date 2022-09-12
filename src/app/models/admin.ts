export class Admin{
  _id:String;
  username: String;
  password: String;
  email: String;
  role: String;

  constructor(_id?: String,  username?:String, password?:String, email?:String, role?:String, ){
    this._id = _id!;
    this.username = username!;
    this.password = password!;
    this.email = email!;
    this.role = role!;
  }
  }
