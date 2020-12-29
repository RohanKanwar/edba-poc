const express = require('express');
const router = express.Router();
const StudentProfile = require('../../model/studentProfile');
const StudentControlPanel = require('../../model/studentControlPanel');
const token = require('../../middleware/token');
const mongoose = require('mongoose');
var ObjectId = mongoose.Types.ObjectId;

router.post("/createProfile", async (req, res, next) => {
    const student_id = req.body.student_id;
    try {
      let verified = token.verify(req.headers.token);
      if(verified === 'Token Verified') {
        let result = await StudentProfile.findOne({student_id: ObjectId(student_id)})
        if(!result) {
          const student_profile = new StudentProfile();
          student_profile.student_id = ObjectId(req.body.student_id);
          student_profile.personal_details = req.body.personal_details;
          student_profile.address_details = req.body.address_details;
          student_profile.family_details = req.body.family_details;
          student_profile.academic_details = req.body.academic_details;
          student_profile.hobbies = req.body.hobbies;
          student_profile.other_personal_details = req.body.other_personal_details;
          await student_profile.save();
          return res.status(200).json({
            data: student_profile,
            message: 'Created profile successfully'
          })
        } else {
          return res.status(400).json({
            message: "Profile already exist"
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

// Get student profile details
  // router.get("/getProfileDetails/:student_id", async (req, res, next) => {
  //   const student_id = req.params.student_id;
  //   try {
  //     let verified = token.verify(req.headers.token);
  //     if(verified === 'Token Verified') {
  //       let result = await StudentProfile.findOne({student_id: student_id})
  //       if(!result) {
  //         return res.status(400).json({
  //           message: 'No such student present'
  //         })
  //       } else {
  //         return res.status(200).json({
  //           data: result,
  //           message: 'Fetched details successfully'
  //         })
  //       }
  //     } else {
  //       return res.status(400).json({
  //         message: 'Unauthorized user'
  //       })
  //     }
  //   } catch (err) {
  //     console.log(err)
  //   }
  // })

  // Get student profile details with respect to student control panel
  router.get("/getProfileDetails/:student_id", async (req, res, next) => {
    const student_id = req.params.student_id;
    try {
      let verified = token.verify(req.headers.token);
      if(verified === 'Token Verified') {
        // let student = [];
        let result = await StudentProfile.findOne({student_id: student_id})
        if(!result) {
          return res.status(400).json({
            message: 'No such student present'
          })
        }
        else {
          let profile_flags = await StudentControlPanel.findOne({student_id: student_id})
          console.log('profile_flags', profile_flags)
          // for(let i=0; i < result.length; i++){
          //   for(let j=0; j < profile_flags.length; j++){
          //     if(result[i]._id == profile_flags[j]._id){
          //       student.push(result[i])
          //     }
          //     console.log(student)
          //   }
          // }
          return res.status(200).json({
            data: result,
            message: 'Fetched details successfully'
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


  // Edit profile details
  router.post("/editProfileDetails", async (req, res, next) => {
    const student_id = req.body.student_id;
    try {
      let verified = token.verify(req.headers.token);
      if(verified === 'Token Verified') {
        await StudentProfile.findOneAndUpdate(student_id, {
          personal_details: req.body.personal_details,
          address_details: req.body.address_details,
          family_details: req.body.family_details,
          academic_details: req.body.academic_details,
          hobbies: req.body.hobbies,
          other_personal_details: req.body.other_personal_details
        }, function(err, details) {
          if(err) {
            console.log(err)
            return res.status(400).json({
              message: "No such student present"
            })
          }
          else {
            console.log(details)
            return res.status(200).json({
              message: "Updated profile successfully"
            })
          }
        })
      } else {
        return res.status(400).json({
          message: 'Unauthorized user'
        })
      }
    } catch (error) {
      console.log(err)
    }
  })

  module.exports = router