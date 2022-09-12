const db = require('mongoose')
const bcrypt = require('bcrypt')

let AdminSchema = new db.Schema({
  username: {
    type: String, required: [true, 'Please enter a username.'],
    unique: [true, 'Username already taken.']
  },
  password: { type: String, required: [true, 'Please enter a password.'] },
  email: { type: String, required: [true, 'Please enter a email.'], unique: [true, 'Email Address already taken'] },
  role: {
    type: String, required: [true, 'Role already taken'], enum: {
    values:  ['admin','user'],
    message: 'Please enter a role be it user or admin.'
    },
  },
},
  {
    collection: 'Admin'
  }
);

AdminSchema.pre('save', async function (next) {
  this.password = await bcrypt.hash(this.password, 12);
  next();
})

AdminSchema.method('isCorrectPassword', async function (userPassword) {
  return await bcrypt.compare(userPassword, this.password)
});

module.exports = db.model('admin', AdminSchema)
