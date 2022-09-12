const express = require('express')
const router = express.Router()


const {
createAdmin,
deleteAdmin,
getAllAdmin,
getAdminById,
updateAdminbyId,
adminlogin,

} = require('../controllers/admin.controller')
const adminModel = require('../models/admin.model');


router.route('/admin').get(getAllAdmin);
router.route('/admin/login').post(adminlogin);
router.route('/admin/signup').post(createAdmin);

router.route('/admin/:id').delete(deleteAdmin).patch(updateAdminbyId).get(getAdminById);





module.exports = router
