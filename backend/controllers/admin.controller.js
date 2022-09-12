const { JSONResponse } = require('../lib/helper');
const jwt = require('jsonwebtoken');
const { findById } = require('../models/admin.model');
const Admin = require('../models/admin.model');
const catchAsync = require('../lib/catchAsync');
const AppError = require('../lib/appError');



exports.adminlogin = catchAsync(async (req, res, next) => {

  const data = req.body;

  const user = await Admin.findOne({ username: data.username, });

  if (!user) throw new AppError('No such user', 404)
  if (!(await user.isCorrectPassword(data.password))) throw new AppError('Invalid password', 400)

  const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
    expiresIn: '90d',
  });

  user.password = undefined;
  res.status(200).json({
		status: 'success',
		data: {
			token: token,
			user: user,
		},
	});

});

exports.createAdmin = catchAsync(async (req, res, next) => {

  const data = req.body;
  const newAdmin = await Admin.create(data)
  const token = jwt.sign({ id: newAdmin._id }, process.env.JWT_SECRET)

  newAdmin.password = undefined;
  JSONResponse.success(res, 'Success', {
    user: newAdmin,
    token: token,

  }, 201,)


});

exports.getAllAdmin = async (req, res) => {

  try {
    const admin = await Admin.find()
    JSONResponse.success(res, 'Success.', admin, 200)
  } catch (error) {
    JSONResponse.error(res, "Failure handling admin model.", error, 500)
  }
}





exports.deleteAdmin = async (req, res) => {
  try {
    const admin = await Admin.findById(req.params.id)
    if (admin) await admin.delete()
    JSONResponse.success(res, 'Success.', admin, 200)
  } catch (error) {
    JSONResponse.error(res, 'Failure handling admin model.', error, 500)
  }
};

exports.getAdminById = async (req, res) => {
  try {
    const admin = await Admin.findById(req.params.id)

    JSONResponse.success(res, 'Success', admin, 200)
  } catch (error) {
    JSONResponse.error(res, 'Failure handling roster model.', error, 500)
  }


};

exports.updateAdminbyId = async (req, res) => {
  try {
    const admin = await Admin.findByIdAndUpdate(req.params.id, req.body,)
    JSONResponse.success(res, 'Success.', admin, 200, { $set: req.body })
  } catch (error) {
    JSONResponse.error(res, 'Failure handling roster model.', error, 500)
  }


};



//MIDDLE WARE

exports.myLogger =  (req, res, next) => {
  console.log('LOGGED')
  next()
}

//Server Protection from unauthorized users
exports.restrictTo = (allowedRoles) =>
	catchAsync(async (req, res, next) => {
		if (allowedRoles.includes(req.user.role)) return next();
		else throw new AppError('You do not have access to this url', 400);
	});

//PROTECTED ROUTES MIDDLEWARE FOR ADMINS
  exports.protect =  catchAsync(async (req, res, next) => {
    const token = req.get('Authorization')
    if (!token || !token.startsWith('Bearer')) throw new AppError('Token is invalid or missing', 400);
    // console.log(token)
    let encryptedString = token.split(' ')[1];
    console.log(encryptedString)
    const decoded = jwt.verify(encryptedString, process.env.JWT_SECRET);



    if (!decoded) throw new AppError('Token is invalid or missing from the', 400);

    const user = await Admin.findById(decoded.id);

    user.password = undefined;
    req.user = user;
    next();

  }

  );
