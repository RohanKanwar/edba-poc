const mongoose = require('mongoose');
const GENDERS = ["M", "F"];
const BLOOD_GROUP = ["A", "B", "AB", "O"];
const MARITAL_STATUS = ["Single", "Married"];
const EDUCATION_FIELDS = ["Phd", "Mphil", "Post Graduation", "Higher Secondary Education", "Schooling"];
const EDUCATION_BOARDS = [];

var profileSchema = new mongoose.Schema({
    student_id: {
        type: mongoose.Types.ObjectId,
        // required: true
    },
    personal_details: {
        first_name: {
            type: String,
            // required: true
        },
        middle_name: {
            type: String,
            // required: true
        },
        last_name: {
            type: String,
            // required: true
        },
        father_name: {
            type: String, 
            // required: true
        },
        mother_name: {
            type: String,
            // required: true
        },
        gender: {
            type: String,
            enum: GENDERS,
            // required: true
        },
        blood_group: {
            type: String,
            enum: BLOOD_GROUP,
            // required: true
        },
        marital_status: {
            type: String,
            enum: MARITAL_STATUS,
            // required: true
        },
        date_of_birth: {
            type: Date,
            // required: true
        },
        mobile_number: {
            type: Number,
            // required: true
        },
        email_address: {
            type: String,
            // required: true
        },
        alternate_contact: {
            type: Number
        }
    },

    address_details: {
        current_address_detail: {
            house_number: {
                type: String
            },
            street_number: {
                type: String
            },
            pin_code: {
                type: String,
                // required: true
            },
            city: {
                type: String,
                // required: true
            },
            state: {
                type: String,
                // required: true
            },
        },

        permanent_address_detail: {
            house_number: {
                type: String
            },
            street_number: {
                type: String
            },
            pin_code: {
                type: String,
                // required: true
            },
            city: {
                type: String,
                // required: true
            },
            state: {
                type: String,
                // required: true
            }
        }
    },

    family_details: {
        father_details: {
            name: {
                type: String,
                // default: personal_details.father_name
                // required: true
            },
            date_of_birth: {
                type: Date,
                // required: true
            },
            age: {
                type: Number,
                // required: true
            },
            email_address: {
                type: String,
                // required: true
            },
            contact_number: {
                type: Number,
                // required: true
            },
            qualification: {
                type: String,
                // required: true
            },
            occupation: {
                type: String,
                // required: true
            }           
        },

        mother_details: {
            name: {
                type: String,
                // default: personal_details.mother_name
                // required: true
            },
            date_of_birth: {
                type: String,
                // required: true
            },
            age: {
                type: Number,
                // required: true
            },
            email_address: {
                type: String,
                // required: true
            },
            contact_number: {
                type: Number,
                // required: true
            },
            qualification: {
                type: String,
                // required: true
            },
            occupation: {
                type: String,
                // required: true
            }           
        }
    },

    academic_details: {
        highest_education: {
            type: String,
            enum: EDUCATION_FIELDS,
            // required: true
        },
        ssc_qualifications: {
            state: {
                type: String,
                // required: true
            },
            name_of_board: {
                type: String,
                enum: EDUCATION_BOARDS,
                // required: true
            },
            institute_name: {
                type: String,
                // required: true
            },
            institute_address: {
                type: String,
                // required: true
            },
            mode_of_clearance: {
                type: String,
                // required: true
            },
            passing_year: {
                type: Date,
                // required: true
            },
            marks_obtained: {
                type: Number,
                // required: true
            },
            total_marks: {
                type: String,
                // required: true
            },
            grade_obtained: {
                type: String,
                // required: true
            },
            medium_of_education: {
                type: String,
                // required: true
            },
            enrollment_number: {
                type: Number,
                // required: true
            },
            Documents: {
                passing_certificate: {
                    type: String,
                    // required: true
                },
                leaving_certificate: {
                    type:String,
                    // required: true
                },
                bonafide: {
                    type: String,
                    // required: true
                },
                provisional_certificate: {
                    type:String,
                    // required: true
                },
                migration_certificate: {
                    type: String,
                    // required: true
                }
            }
        },

        hsc_qualifications: {
            state: {
                type: String,
                // required: true
            },
            name_of_board: {
                type: String,
                // required: true
            },
            institute_name: {
                type: String,
                // required: true
            },
            institute_address: {
                type: String,
                // required: true
            },
            mode_of_clearance: {
                type: String,
                // required: true
            },
            stream:{
                type: String,
                // required: true
            },
            passing_year: {
                type: Date,
                // required: true
            },
            passing_month: {
                type: Date,
                // required: true
            },
            marks_obtained: {
                type: Number,
                // required: true
            },
            total_marks: {
                type: Number,
                // required: true
            },
            grade_obtained: {
                type: String,
                // required: true
            },
            medium_of_education: {
                type: String,
                // required: true
            },
            enrollment_number: {
                type: Number,
                // required: true
            },
            Documents: {
                passing_certificate: {
                    type: String,
                    // required: true
                },
                leaving_certificate: {
                    type:String,
                    // required: true
                },
                bonafide: {
                    type: String,
                    // required: true
                },
                provisional_certificate: {
                    type:String,
                    // required: true
                },
                migration_certificate: {
                    type: String,
                    // required: true
                }
            }
        },

        graduation_qualification: {
            state: {
                type: String,
                // required: true
            },
            name_of_board: {
                type: String,
                // required: true
            },
            institute_name: {
                type: String,
                // required: true
            },
            institute_address: {
                type: String,
                // required: true
            },
            mode_of_clearance: {
                type: String,
                // required: true
            },
            stream: {
                type: String,
                // required: true
            },
            passing_year: {
                type: Date,
                // required: true
            },
            passing_month: {
                type: Date,
                // required: true
            },
            marks_obtained: {
                type: Number,
                // required: true
            },
            total_marks: {
                type: Number,
                // required: true
            },
            grade_obtained: {
                type: String,
                // required: true
            },
            medium_of_education: {
                type: String,
                // required: true
            },
            enrollment_number: {
                type: Number,
                // required: true
            },
            Documents: {
                passing_certificate: {
                    type: String,
                    // required: true
                },
                leaving_certificate: {
                    type:String,
                    // required: true
                },
                bonafide: {
                    type: String,
                    // required: true
                },
                provisional_certificate: {
                    type:String,
                    // required: true
                },
                migration_certificate: {
                    type: String,
                    // required: true
                }
            }
        },

        post_graduation_qualification: {
            state: {
                type: String,
                // required: true
            },
            name_of_board: {
                type: String,
                // required: true
            },
            institute_name: {
                type: String,
                // required: true
            },
            institute_address: {
                type: String,
                // required: true
            },
            mode_of_clearance: {
                type: String,
                // required: true
            },
            stream: {
                type: String,
                // required: true
            },
            passing_year: {
                type: Date,
                // required: true
            },
            passing_month: {
                type: Date,
                // required: true
            },
            marks_obtained: {
                type: Number,
                // required: true
            },
            total_marks: {
                type: Number,
                // required: true
            },
            grade_obtained: {
                type: String,
                // required: true
            },
            medium_of_education: {
                type: String,
                // required: true
            },
            enrollment_number: {
                type: Number,
                // required: true
            },
            Documents: {
                passing_certificate: {
                    type: String,
                    // required: true
                },
                leaving_certificate: {
                    type:String,
                    // required: true
                },
                bonafide: {
                    type: String,
                    // required: true
                },
                provisional_certificate: {
                    type:String,
                    // required: true
                },
                migration_certificate: {
                    type: String,
                    // required: true
                }
            }
        },

        mphil_qualification: {
            state: {
                type: String,
                // required: true
            },
            name_of_board: {
                type: String,
                // required: true
            },
            institute_name: {
                type: String,
                // required: true
            },
            institute_address: {
                type: String,
                // required: true
            },
            mode_of_clearance: {
                type: String,
                // required: true
            },
            stream: {
                type: String,
                // required: true
            },
            passing_year: {
                type: Date,
                // required: true
            },
            passing_month: {
                type: Date,
                // required: true
            },
            marks_obtained: {
                type: Number,
                // required: true
            },
            total_marks: {
                type: Number,
                // required: true
            },
            grade_obtained: {
                type: String,
                // required: true
            },
            medium_of_education: {
                type: String,
                // required: true
            },
            enrollment_number: {
                type: Number,
                // required: true
            },
            Documents: {
                passing_certificate: {
                    type: String,
                    // required: true
                },
                leaving_certificate: {
                    type:String,
                    // required: true
                },
                bonafide: {
                    type: String,
                    // required: true
                },
                provisional_certificate: {
                    type:String,
                    // required: true
                },
                migration_certificate: {
                    type: String,
                    // required: true
                }
            }
        }
    },

    hobbies: [String],

    other_personal_details: {
        category: {
            type: String,
            // required: true
        },
        caste: {
            type: String,
            // required: true
        },
        special_category: {
            type: String,
            // required: true
        },
        is_physically_handicapped: {
            type: Boolean,
            // required: true
        },
        other_documents: {
            photo: {
                type: String,
                // required: true
            },
            signature: {
                type: String,
                // required: true
            },
            address_details: {
                type: String,
                // required: true
            }
        }
    }
})

var StudentProfile = mongoose.model('StudentProfile', profileSchema);
module.exports = StudentProfile;