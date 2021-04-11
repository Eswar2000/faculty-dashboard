const mongoose=require('mongoose');
const Schema=mongoose.Schema;
const Student=require('./studentSchema');

const facultyLeaveSchema=new Schema({
    facultyID:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User',
        required:true
    },
    facultyDepartment:{
      type:String,
      required:true
    },
    reason:{
        type:String,
        required:true
    },
    departureTime:{
        type:Date,
        required:true
    },
    arrivalTime:{
        type:Date,
        required:true
    },
    leaveStatus:{
        type:String,
        enum:['pending','approved','cancelled','facultyCancelled'],
        default:'pending'
    }
});

var facultyLeaveSchema=mongoose.model('FacultyLeave',facultyLeaveSchema);
module.exports=facultyLeaveSchema;