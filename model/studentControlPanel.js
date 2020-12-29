const mongoose = require('mongoose');

var studentControlPanelSchema = new mongoose.Schema({
    student_id: {
        type: mongoose.Types.ObjectId,
    },
    personal_details: {
        first_name: {
            type: Boolean,
            default: true
        },
        middle_name: {
            type: Boolean,
            default: true
        },
        last_name: {
            type: Boolean,
            default: true
        },
        father_name: {
            type: Boolean,
            default: true 
        },
        mother_name: {
            type: Boolean,
            default: true
        },
        gender: {
            type: Boolean,
            default: true
        },
        blood_group: {
            type: Boolean,
            default: true
        },
        marital_status: {
            type: Boolean,
            default: true
        },
        Boolean_of_birth: {
            type: Boolean,
            default: true
        },
        mobile_Boolean: {
            type: Boolean,
            default: true
        },
        email_address: {
            type: Boolean,
            default: true
        },
        alternate_contact: {
            type: Boolean,
            default: true
        }
    },

    address_details: {
        current_address_detail: {
            house_Boolean: {
                type: Boolean,
                default: true
            },
            street_Boolean: {
                type: Boolean,
                default: true
            },
            pin_code: {
                type: Boolean,
                default: true
            },
            city: {
                type: Boolean,
                default: true
            },
            state: {
                type: Boolean,
                default: true
            },
        },

        permanent_address_detail: {
            house_Boolean: {
                type: Boolean,
                default: true
            },
            street_Boolean: {
                type: Boolean,
                default: true
            },
            pin_code: {
                type: Boolean,
                default: true
            },
            city: {
                type: Boolean,
                default: true
            },
            state: {
                type: Boolean,
                default: true
            }
        }
    },

    family_details: {
        father_details: {
            name: {
                type: Boolean,
                default: true
            },
            Boolean_of_birth: {
                type: Boolean,
                default: true
            },
            age: {
                type: Boolean,
                default: true
            },
            email_address: {
                type: Boolean,
                default: true
            },
            contact_Boolean: {
                type: Boolean,
                default: true
            },
            qualification: {
                type: Boolean,
                default: true
            },
            occupation: {
                type: Boolean,
                default: true
            }           
        },

        mother_details: {
            name: {
                type: Boolean,
                default: true
            },
            Boolean_of_birth: {
                type: Boolean,
                default: true
            },
            age: {
                type: Boolean,
                default: true
            },
            email_address: {
                type: Boolean,
                default: true
            },
            contact_Boolean: {
                type: Boolean,
                default: true
            },
            qualification: {
                type: Boolean,
                default: true
            },
            occupation: {
                type: Boolean,
                default: true
            }           
        }
    },

    academic_details: {
        highest_education: {
            type: Boolean,
            default: true
        },
        ssc_qualifications: {
            state: {
                type: Boolean,
                default: true
            },
            name_of_board: {
                type: Boolean,
                default: true
            },
            institute_name: {
                type: Boolean,
                default: true
            },
            institute_address: {
                type: Boolean,
                default: true
            },
            mode_of_clearance: {
                type: Boolean,
                default: true
            },
            passing_year: {
                type: Boolean,
                default: true
            },
            marks_obtained: {
                type: Boolean,
                default: true
            },
            total_marks: {
                type: Boolean,
                default: true
            },
            grade_obtained: {
                type: Boolean,
                default: true
            },
            medium_of_education: {
                type: Boolean,
                default: true
            },
            enrollment_Boolean: {
                type: Boolean,
                default: true
            },
            Strings: {
                passing_certificate: {
                    type: Boolean,
                    default: true
                },
                leaving_certificate: {
                    type:Boolean,
                    default: true
                },
                bonafide: {
                    type: Boolean,
                    default: true
                },
                provisional_certificate: {
                    type:Boolean,
                    default: true
                },
                migration_certificate: {
                    type: Boolean,
                    default: true
                }
            }
        },

        hsc_qualifications: {
            state: {
                type: Boolean,
                default: true
            },
            name_of_board: {
                type: Boolean,
                default: true
            },
            institute_name: {
                type: Boolean,
                default: true
            },
            institute_address: {
                type: Boolean,
                default: true
            },
            mode_of_clearance: {
                type: Boolean,
                default: true
            },
            stream:{
                type: Boolean,
                default: true
            },
            passing_year: {
                type: Boolean,
                default: true
            },
            passing_month: {
                type: Boolean,
                default: true
            },
            marks_obtained: {
                type: Boolean,
                default: true
            },
            total_marks: {
                type: Boolean,
                default: true
            },
            grade_obtained: {
                type: Boolean,
                default: true
            },
            medium_of_education: {
                type: Boolean,
                default: true
            },
            enrollment_Boolean: {
                type: Boolean,
                default: true
            },
            Strings: {
                passing_certificate: {
                    type: Boolean,
                    default: true
                },
                leaving_certificate: {
                    type:Boolean,
                    default: true
                },
                bonafide: {
                    type: Boolean,
                    default: true
                },
                provisional_certificate: {
                    type:Boolean,
                    default: true
                },
                migration_certificate: {
                    type: Boolean,
                    default: true
                }
            }
        },

        graduation_qualification: {
            state: {
                type: Boolean,
                default: true
            },
            name_of_board: {
                type: Boolean,
                default: true
            },
            institute_name: {
                type: Boolean,
                default: true
            },
            institute_address: {
                type: Boolean,
                default: true
            },
            mode_of_clearance: {
                type: Boolean,
                default: true
            },
            stream: {
                type: Boolean,
                default: true
            },
            passing_year: {
                type: Boolean,
                default: true
            },
            passing_month: {
                type: Boolean,
                default: true
            },
            marks_obtained: {
                type: Boolean,
                default: true
            },
            total_marks: {
                type: Boolean,
                default: true
            },
            grade_obtained: {
                type: Boolean,
                default: true
            },
            medium_of_education: {
                type: Boolean,
                default: true
            },
            enrollment_Boolean: {
                type: Boolean,
                default: true
            },
            Strings: {
                passing_certificate: {
                    type: Boolean,
                    default: true
                },
                leaving_certificate: {
                    type:Boolean,
                    default: true
                },
                bonafide: {
                    type: Boolean,
                    default: true
                },
                provisional_certificate: {
                    type:Boolean,
                    default: true
                },
                migration_certificate: {
                    type: Boolean,
                    default: true
                }
            }
        },

        post_graduation_qualification: {
            state: {
                type: Boolean,
                default: true
            },
            name_of_board: {
                type: Boolean,
                default: true
            },
            institute_name: {
                type: Boolean,
                default: true
            },
            institute_address: {
                type: Boolean,
                default: true
            },
            mode_of_clearance: {
                type: Boolean,
                default: true
            },
            stream: {
                type: Boolean,
                default: true
            },
            passing_year: {
                type: Boolean,
                default: true
            },
            passing_month: {
                type: Boolean,
                default: true
            },
            marks_obtained: {
                type: Boolean,
                default: true
            },
            total_marks: {
                type: Boolean,
                default: true
            },
            grade_obtained: {
                type: Boolean,
                default: true
            },
            medium_of_education: {
                type: Boolean,
                default: true
            },
            enrollment_Boolean: {
                type: Boolean,
                default: true
            },
            Strings: {
                passing_certificate: {
                    type: Boolean,
                    default: true
                },
                leaving_certificate: {
                    type:Boolean,
                    default: true
                },
                bonafide: {
                    type: Boolean,
                    default: true
                },
                provisional_certificate: {
                    type:Boolean,
                    default: true
                },
                migration_certificate: {
                    type: Boolean,
                    default: true
                }
            }
        },

        mphil_qualification: {
            state: {
                type: Boolean,
                default: true
            },
            name_of_board: {
                type: Boolean,
                default: true
            },
            institute_name: {
                type: Boolean,
                default: true
            },
            institute_address: {
                type: Boolean,
                default: true
            },
            mode_of_clearance: {
                type: Boolean,
                default: true
            },
            stream: {
                type: Boolean,
                default: true
            },
            passing_year: {
                type: Boolean,
                default: true
            },
            passing_month: {
                type: Boolean,
                default: true
            },
            marks_obtained: {
                type: Boolean,
                default: true
            },
            total_marks: {
                type: Boolean,
                default: true
            },
            grade_obtained: {
                type: Boolean,
                default: true
            },
            medium_of_education: {
                type: Boolean,
                default: true
            },
            enrollment_Boolean: {
                type: Boolean,
                default: true
            },
            Strings: {
                passing_certificate: {
                    type: Boolean,
                    default: true
                },
                leaving_certificate: {
                    type:Boolean,
                    default: true
                },
                bonafide: {
                    type: Boolean,
                    default: true
                },
                provisional_certificate: {
                    type:Boolean,
                    default: true
                },
                migration_certificate: {
                    type: Boolean,
                    default: true
                }
            }
        }
    },

    hobbies: {
        type: Boolean,
        default: true
    },

    other_personal_details: {
        category: {
            type: Boolean,
            default: true
        },
        caste: {
            type: Boolean,
            default: true
        },
        special_category: {
            type: Boolean,
            default: true
        },
        is_physically_handicapped: {
            type: Boolean,
            default: true
        },
        other_Booleans: {
            photo: {
                type: Boolean,
                default: true
            },
            signature: {
                type: Boolean,
                default: true
            },
            address_details: {
                type: Boolean,
                default: true
            }
        }
    }
})

var StudentControlPanel = mongoose.model('StudentControlPanel', studentControlPanelSchema);
module.exports = StudentControlPanel;