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
      let student_control_panel_profile = {};
      let personal_details_flag = {}
      let address_details = {}
      let current_address_detail_flag = {}
      let permanent_address_detail_flag = {}
      let family_details = {}
      let father_details_flag = {}
      let mother_details_flag = {}
      let academic_details = {}
      let ssc_qualifications_flag = {}
      let hsc_qualifications_flag = {}
      let graduation_qualification_flag = {}
      let post_graduation_qualification_flag = {}
      let mphil_qualification_flag = {}
      let other_personal_details_flag = {}

      let verified = token.verify(req.headers.token);
      if(verified === 'Token Verified') {
        let result = await StudentProfile.findOne({student_id: student_id})
        if(!result) {
          return res.status(400).json({
            message: 'No such student present'
          })
        }
        else {
          let profile_flags = await StudentControlPanel.findOne({student_id: student_id})
          if(profile_flags.personal_details) {
            for (let [key, value] of Object.entries(profile_flags.personal_details)) {
              if(value == true && key && key !== '$init') {
                personal_details_flag[key] = value
              }
            }
            let personal_details = {}
            for(let [student_key, student_value] of Object.entries(personal_details_flag)) {
              for(let [key, value] of Object.entries(result.personal_details)) {
                if(key !== '$init') {
                  if(key == student_key && value !== undefined) {
                    personal_details[key] = value
                  }
                }
              }
            }
            if(Object.keys(personal_details).length !== 0) {
              student_control_panel_profile.personal_details = personal_details
            }
          }

          if(profile_flags.address_details) {
            let current_address_detail = {}
            let permanent_address_detail = {}
            if(profile_flags.address_details.current_address_detail && result.address_details.current_address_detail) {
              for (let [key, value] of Object.entries(profile_flags.address_details.current_address_detail)) {
                if(value == true && key && key !== '$init') {
                  current_address_detail_flag[key] = value
                }
              }
              for(let [address_key, address_value] of Object.entries(current_address_detail_flag)) {
                for(let [key, value] of Object.entries(result.address_details.current_address_detail)) {
                  if(key !== '$init') {
                    if(key == address_key && value !== undefined) {
                      current_address_detail[key] = value
                    }
                  }
                }
              }
              if(Object.keys(current_address_detail).length !== 0) {
                address_details.current_address_detail = current_address_detail
              }
            }
  
            if(profile_flags.address_details.permanent_address_detail && result.address_details.permanent_address_detail) {
              for (let [key, value] of Object.entries(profile_flags.address_details.permanent_address_detail)) {
                if(value == true && key && key !== '$init') {
                  permanent_address_detail_flag[key] = value
                }
              }
              for(let [address_key, address_value] of Object.entries(permanent_address_detail_flag)) {
                for(let [key, value] of Object.entries(result.address_details.permanent_address_detail)) {
                  if(key !== '$init') {
                    if(key == address_key && value !== undefined) {
                      permanent_address_detail[key] = value
                    }
                  }
                }
              }
              if(Object.keys(permanent_address_detail).length !== 0) {
                address_details.permanent_address_detail = permanent_address_detail
              }
            }
            student_control_panel_profile.address_details = address_details
          }

          if(profile_flags.family_details) {
            let father_details = {}
            let mother_details = {}
            if(profile_flags.family_details.father_details && result.family_details.father_details) {
              for (let [key, value] of Object.entries(profile_flags.family_details.father_details)) {
                if(value == true && key && key !== '$init') {
                  father_details_flag[key] = value
                }
              }
              for(let [father_key, father_value] of Object.entries(father_details_flag)) {
                for(let [key, value] of Object.entries(result.family_details.father_details)) {
                  if(key !== '$init') {
                    if(key == father_key && value !== undefined) {
                      father_details[key] = value
                    }
                  }
                }
              }
              if(Object.keys(father_details).length !== 0) {
                family_details.father_details = father_details;
              }
            }
  
            if(profile_flags.family_details.mother_details && result.family_details.mother_details) {
              for (let [key, value] of Object.entries(profile_flags.family_details.mother_details)) {
                if(value == true && key && key !== '$init') {
                  mother_details_flag[key] = value
                }
              }
              for(let [mother_key, mother_value] of Object.entries(mother_details_flag)) {
                for(let [key, value] of Object.entries(result.family_details.mother_details)) {
                  if(key !== '$init') {
                    if(key == mother_key && value !== undefined) {
                      mother_details[key] = value
                    }
                  }
                }
              }
              if(Object.keys(mother_details).length !== 0) {
                family_details.mother_details = mother_details;
              }
            }
            student_control_panel_profile.family_details = family_details
          }

          if(profile_flags.academic_details) {
            if(profile_flags.academic_details.highest_qualification && profile_flags.academic_details.highest_qualification == true) {
              academic_details.highest_qualification = result.academic_details.highest_qualification
            }
            if(profile_flags.academic_details.ssc_qualifications && result.academic_details.ssc_qualifications.total_marks) {
              for (let [key, value] of Object.entries(profile_flags.academic_details.ssc_qualifications)) {
                if(value == true && key && key !== '$init') {
                  ssc_qualifications_flag[key] = value
                }
              }
              let ssc_qualifications = {}
              for(let [ssc_key, ssc_value] of Object.entries(ssc_qualifications_flag)) {
                for(let [key, value] of Object.entries(result.academic_details.ssc_qualifications)) {
                  if(key !== '$init') {
                    if(key == ssc_key) {
                      ssc_qualifications[key] = value
                    }
                  }
                }
              }
              academic_details.ssc_qualifications = ssc_qualifications
            }

            if(profile_flags.academic_details.hsc_qualifications && result.academic_details.hsc_qualifications.total_marks) {
              for (let [key, value] of Object.entries(profile_flags.academic_details.hsc_qualifications)) {
                if(value == true && key && key !== '$init') {
                  hsc_qualifications_flag[key] = value
                }
              }
              let hsc_qualifications = {}
              for(let [hsc_key, hsc_value] of Object.entries(hsc_qualifications_flag)) {
                for(let [key, value] of Object.entries(result.academic_details.hsc_qualifications)) {
                  if(key !== '$init') {
                    if(key == hsc_key) {
                      hsc_qualifications[key] = value
                    }
                  }
                }
              }
              academic_details.hsc_qualifications = hsc_qualifications
            }

            if(profile_flags.academic_details.graduation_qualification && result.academic_details.graduation_qualification.total_marks) {
              for (let [key, value] of Object.entries(profile_flags.academic_details.graduation_qualification)) {
                if(value == true && key && key !== '$init') {
                  graduation_qualification_flag[key] = value
                }
              }
              let graduation_qualification = {}
              for(let [graduation_key, graduation_value] of Object.entries(graduation_qualification_flag)) {
                for(let [key, value] of Object.entries(result.academic_details.graduation_qualification)) {
                  if(key !== '$init') {
                    if(key == graduation_key) {
                      graduation_qualification[key] = value
                    }
                  }
                }
              }
              academic_details.graduation_qualification = graduation_qualification
            }

            if(profile_flags.academic_details.post_graduation_qualification && result.academic_details.post_graduation_qualification.total_marks) {
              for (let [key, value] of Object.entries(profile_flags.academic_details.post_graduation_qualification)) {
                if(value == true && key && key !== '$init') {
                  post_graduation_qualification_flag[key] = value
                }
              }
              let post_graduation_qualification = {}
              for(let [post_graduation_key, post_graduation_value] of Object.entries(post_graduation_qualification_flag)) {
                for(let [key, value] of Object.entries(result.academic_details.ssc_qualifications)) {
                  if(key !== '$init') {
                    if(key == post_graduation_key) {
                      post_graduation_qualification[key] = value
                    }
                  }
                }
              }
              academic_details.post_graduation_qualification = post_graduation_qualification
            }

            if(profile_flags.academic_details.mphil_qualification && result.academic_details.mphil_qualification.total_marks) {
              for (let [key, value] of Object.entries(profile_flags.academic_details.mphil_qualification)) {
                if(value == true && key && key !== '$init') {
                  mphil_qualification_flag[key] = value
                }
              }
              let mphil_qualification = {}
              for(let [mphil_key, mphil_value] of Object.entries(mphil_qualification_flag)) {
                for(let [key, value] of Object.entries(result.academic_details.mphil_qualification)) {
                  if(key !== '$init') {
                    if(key == mphil_key) {
                      mphil_qualification[key] = value
                    }
                  }
                }
              }
              academic_details.mphil_qualification = mphil_qualification
            }
            student_control_panel_profile.academic_details = academic_details
          }

          if(profile_flags.hobbies && profile_flags.hobbies == true) {
            student_control_panel_profile.hobbies = result.hobbies
          }

          if(profile_flags.other_personal_details && result.other_personal_details) {
            for (let [key, value] of Object.entries(profile_flags.other_personal_details)) {
              if(value == true && key && key !== '$init') {
                other_personal_details_flag[key] = value
              }
            }
            let other_personal_details = {}
            for(let [other_key, other_value] of Object.entries(other_personal_details_flag)) {
              for(let [key, value] of Object.entries(result.other_personal_details)) {
                if(key !== '$init') {
                  if(key == other_key && value !== undefined) {
                    other_personal_details[key] = value
                  }
                }
              }
            }
            if(Object.keys(other_personal_details).length !== 0) {
              student_control_panel_profile.other_personal_details = other_personal_details
            }
          }

          student_control_panel_profile.student_id = result.student_id;
          student_control_panel_profile._id = result._id

          // console.log('student', student_control_panel_profile)
          return res.status(200).json({
            data: student_control_panel_profile,
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