
const express = require('express');
const mongoose = require("mongoose");
const app = express();

//To parse the request bodies
app.use(express.json());

console.log(`===== Mongo DB connection =====`);

// mongodb://localhost:27017/user_database

async function mongoConnection(){
    try {
        await mongoose.connect("mongodb://127.0.0.1:27017/user_database");
        console.log("====== Connection successfully ==========");   
    } catch (error) {
        console.log(error);
    }
}
mongoConnection();

//Defining Schema for student
const schemaStudent = mongoose.Schema({
    name: {type:String},
    college: {type:String},
    marks: {type:Number}
},{collection: "student_collection"}
);

//Creating the Model for Schema: schemaStudent
const Student = mongoose.model('Student',schemaStudent);


// To retrieve or fetch the data
app.get('/students',async (request,response)=>{
    const allStudents = await Student.find({});
    response.status(200)
    .json({
        allStudents
    });
});

//To create the resource
app.post('/create',(request,response)=>{
    const {name,college,marks}= request.body;
    Student.create({
        name,
        college,
        marks
    })
    response.send(`Successfully created student`);
});

//To update the resourse
app.put('/update',async (request,response)=>{
    const {name,college,marks} = request.body;
    const studentDocument = await Student.findOneAndUpdate(
        {marks: marks}, //Find the students by marks
        {name: name, college: college}, //update fields
        {new: true, upsert: true}
    )
    response.status(200).json({studentDocument});
});

//To delete the response
app.delete('/delete/:mrk',async (request,response)=>{
    const mrk = request.params.mrk;
    const deletedStudent = await Student.findOneAndDelete({marks:mrk});
    if(!deletedStudent){
        return response.status(404).json({
            "status":404,
            "message": `Not found, Student with marks: ${mrk}`
        })
    }
    return response.status(200).json(deletedStudent);
});

app.listen(8080,()=>{
    console.log(`Server started successfully`);
});