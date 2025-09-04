const asyncHandler = require("express-async-handler");
const { getAllStudents, addNewStudent, getStudentDetail, setStudentStatus, updateStudent } = require("./students-service");

const handleGetAllStudents = asyncHandler(async (req, res) => {
    //write your code
    console.log("here!!")
    const { name, className, section, roll } = req.query;
    const students=getAllStudents({ name, className, section, roll });
    res.json({students});
  
});

const handleAddStudent = asyncHandler(async (req, res) => {
    //write your code
    const { name, className, section, roll, ...rest } = req.body;
    // Call service to add new student
    console.log(name, className, section, roll);
    const newStudent = await addNewStudent({ name, className, section, roll, ...rest });
    // Respond with the created student
    res.status(201).json({ student: newStudent });

});

const handleUpdateStudent = asyncHandler(async (req, res) => {
    //write your code
     console.log("here!!")

});

const handleGetStudentDetail = asyncHandler(async (req, res) => {
    //write your code
     console.log("here!!")

});

const handleStudentStatus = asyncHandler(async (req, res) => {
    //write your code
     console.log("here!!")

});

module.exports = {
    handleGetAllStudents,
    handleGetStudentDetail,
    handleAddStudent,
    handleStudentStatus,
    handleUpdateStudent,
};
