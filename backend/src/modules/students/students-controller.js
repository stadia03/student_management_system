const asyncHandler = require("express-async-handler");
const { getAllStudents, addNewStudent, getStudentDetail, setStudentStatus, updateStudent } = require("./students-service");

// GET /students
const handleGetAllStudents = asyncHandler(async (req, res) => {
    const { name, className, section, roll } = req.query;
    const students = await getAllStudents({ name, className, section, roll });
    res.json({ students });
});

// POST /students
const handleAddStudent = asyncHandler(async (req, res) => {
    const { name, className, section, roll, ...rest } = req.body;
    const newStudent = await addNewStudent({ name, className, section, roll, ...rest });
    res.status(201).json({ student: newStudent });
});

// PUT /students/:id


const handleUpdateStudent = asyncHandler(async (req, res) => {
       const { id: userId } = req.params;
   const payload = req.body;
   const message= await updateStudent({ ...payload, userId });
   res.json({message});
});



// GET /students/:id
const handleGetStudentDetail = asyncHandler(async (req, res) => {
    const { id } = req.params;
    const student = await getStudentDetail(id);
    res.json(student);
});

// POST /students/:id/status
const handleStudentStatus = asyncHandler(async (req, res) => {
    const { id: userId } = req.params;
    const { status } = req.body;
    const { id: reviewerId } = req.user; // reviewer from auth middleware
    const result = await setStudentStatus({ userId, reviewerId, status });
    res.json(result);
});

module.exports = {
    handleGetAllStudents,
    handleGetStudentDetail,
    handleAddStudent,
    handleStudentStatus,
    handleUpdateStudent,
};