const express = require('express');
const router = express.Router();
const StudentControlPanel = require('../../model/studentControlPanel');
const token = require('../../middleware/token');
const mongoose = require('mongoose');
var ObjectId = mongoose.Types.ObjectId;

router.post("/setStudentControlPanel", async (req, res, next) => {
    const student_id = req.body.student_id;
    try {
      let verified = token.verify(req.headers.token);
      if(verified === 'Token Verified') {
        let result = await StudentControlPanel.findOne({student_id: ObjectId(student_id)})
        if(!result) {
          const student_control_panel = new StudentControlPanel();
          student_control_panel.student_id = ObjectId(req.body.student_id);
          student_control_panel.personal_details = req.body.personal_details;
          student_control_panel.address_details = req.body.address_details;
          student_control_panel.family_details = req.body.family_details;
          student_control_panel.academic_details = req.body.academic_details;
          student_control_panel.hobbies = req.body.hobbies;
          student_control_panel.other_personal_details = req.body.other_personal_details;
          await student_control_panel.save();
          return res.status(200).json({
            data: student_control_panel,
            message: 'Set Student Control Panel successfully'
          })
        } else {
          return res.status(400).json({
            message: "Panel already exist"
          })
        }
      } else {
        return res.status(400).json({
          message: 'Unauthorized user'
        })
      }
    } catch (err) {
      console.log(err)
    }
  })

  module.exports = router