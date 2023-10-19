const express = require("express");
const bodyParser= require("body-parser");
const { name } = require("ejs");
const app = express();

app.use('/styles',express.static('styles'));
app.set('view engine', 'ejs');


let Studentdetails=[];
let Facultydetails=[];
let courses=[];

let courses1=[];

const coursedetails={
    coursename: "Automata Theory",
    hours: "100 hours" ,
    credits: "5 credits",
    platform: "Classroom",
    language: "English",
    certificate: "Google certificate",
    breif: "Study of abstract machines and computation, focusing on " +
    "formal languages and automata models.",
    complete: "The black-and-yellow broadbill (Eurylaimus ochromalus) is a species of bird in Eurylaimidae, the typical broadbill family. It is small, with a black head, breastband, and upperparts, a white neckband, yellow streaking on the back and wings, and wine-pink underparts that turn yellow towards the belly. The beak is bright blue, with a green tip to the upper mandible and black edges. The black breastband is incomplete in females. The black-and-yellow broadbill occurs in Brunei, Indonesia, Malaysia, Myanmar, Singapore, and Thailand, in lowland forests up to an elevation of 1,220 m (4,000 ft). It is mainly insectivorous, but also eats molluscs and some fruit. It breeds during the dry season with both sexes helping build a large, untidy nest from moss, fungal mycelia, and leaves. The clutch is usually 2–3 eggs, and sometimes includes a fourth runt egg. They are incubated by both sexes. The"
}
courses.push(coursedetails);

const coursedetails1={
    coursename: "The Nuclear physics",
    hours: "300 hours" ,
    credits: "6 credits",
    platform: "Classroom",
    language: "English",
    certificate: "Google certificate",
    breif:"Physics branch that studies atomic nuclei, their properties, reactions,"+ 
    "and applications in energy and medicine.",
    complete: "The black-and-yellow broadbill (Eurylaimus ochromalus) is a species of bird in Eurylaimidae, the typical broadbill family. It is small, with a black head, breastband, and upperparts, a white neckband, yellow streaking on the back and wings, and wine-pink underparts that turn yellow towards the belly. The beak is bright blue, with a green tip to the upper mandible and black edges. The black breastband is incomplete in females. The black-and-yellow broadbill occurs in Brunei, Indonesia, Malaysia, Myanmar, Singapore, and Thailand, in lowland forests up to an elevation of 1,220 m (4,000 ft). It is mainly insectivorous, but also eats molluscs and some fruit. It breeds during the dry season with both sexes helping build a large, untidy nest from moss, fungal mycelia, and leaves. The clutch is usually 2–3 eggs, and sometimes includes a fourth runt egg. They are incubated by both sexes. The"
}

courses.push(coursedetails1);

const coursedetails2={
    coursename: "The World war 2",
    hours: "30 hours" ,
    credits: "2 credits",
    platform: "zoom",
    language: "English",
    certificate: "Google certificate",
    breif:"Global conflict from 1939 to 1945, involving major powers and resulting "+
    "in millions of casualties the world over.",
    complete: "The black-and-yellow broadbill (Eurylaimus ochromalus) is a species of bird in Eurylaimidae, the typical broadbill family. It is small, with a black head, breastband, and upperparts, a white neckband, yellow streaking on the back and wings, and wine-pink underparts that turn yellow towards the belly. The beak is bright blue, with a green tip to the upper mandible and black edges. The black breastband is incomplete in females. The black-and-yellow broadbill occurs in Brunei, Indonesia, Malaysia, Myanmar, Singapore, and Thailand, in lowland forests up to an elevation of 1,220 m (4,000 ft). It is mainly insectivorous, but also eats molluscs and some fruit. It breeds during the dry season with both sexes helping build a large, untidy nest from moss, fungal mycelia, and leaves. The clutch is usually 2–3 eggs, and sometimes includes a fourth runt egg. They are incubated by both sexes. The"
}

courses.push(coursedetails2);

const coursedetails3={
    coursename: "VLSL",
    hours: "30 hours" ,
    credits: "4 credits",
    platform: "Electronics lab",
    language: "English",
    certificate: "Google certificate",
    breif:"Very Large Scale Integration (VLSI) is the process of integrating "+
    "thousands to billions of transistors onto a single chip.",
    complete: "The black-and-yellow broadbill (Eurylaimus ochromalus) is a species of bird in Eurylaimidae, the typical broadbill family. It is small, with a black head, breastband, and upperparts, a white neckband, yellow streaking on the back and wings, and wine-pink underparts that turn yellow towards the belly. The beak is bright blue, with a green tip to the upper mandible and black edges. The black breastband is incomplete in females. The black-and-yellow broadbill occurs in Brunei, Indonesia, Malaysia, Myanmar, Singapore, and Thailand, in lowland forests up to an elevation of 1,220 m (4,000 ft). It is mainly insectivorous, but also eats molluscs and some fruit. It breeds during the dry season with both sexes helping build a large, untidy nest from moss, fungal mycelia, and leaves. The clutch is usually 2–3 eggs, and sometimes includes a fourth runt egg. They are incubated by both sexes. The"
}

courses.push(coursedetails3);

app.use(bodyParser.urlencoded({extended: true}));


app.get("/",function(req,res){
    res.sendFile(__dirname+"/Firstpage.html");
});

app.get("/Studentlogin",function(req,res){
    res.sendFile(__dirname+"/Studentlogin.html");
});

app.post("/Studentlogin",function(req,res){
    console.log("post request of student login recived");
    const Studentname=req.body.name;
    const StudentPassword=req.body.password;
    console.log(Studentname);
    console.log(StudentPassword);
    Studentdetails.forEach(function(Student){
        if(Student.name==Studentname){
            if(Student.password==StudentPassword){
                console.log("Succesful login");
                res.redirect("/home");
            }
            else{
                res.redirect("/Studentlogin");
                
            }
        }
        res.redirect("/Studentlogin");
    });
    
});

app.get("/Facultylogin",function(req,res){
    console.log(Facultydetails);
    res.sendFile(__dirname+"/Facultylogin.html");
});

app.post("/Facultylogin",function(req,res){
    console.log("post request of faculty login recived");
    const Facultyname=req.body.name;
    const FacultyPassword=req.body.password;
    console.log(Facultyname);
    console.log(FacultyPassword);

    if(Facultyname=="dean"){
        res.redirect("/dashboard");
    };
    Facultydetails.forEach(function(faculty){
        if(faculty.name==Facultyname){
            if(faculty.password==FacultyPassword){
                console.log("Succesful login");
                res.redirect("/home1");
            }
            else{
                res.redirect("/Facultylogin");
                
            }
        }
        res.redirect("/Facultylogin");
    });
    
});

app.get("/FacultySignup",function(req,res){
    res.sendFile(__dirname+"/FacultySignup.html");
});

app.post("/FacultySignup",function(req,res){
    console.log("post request recived")
    console.log(Facultydetails);
    const Faculty={
      name: req.body.name,
      registration_no: req.body.registration_no,
      email: req.body.email,
      password: req.body.password
    }
    Facultydetails.push(Faculty);
    console.log(Faculty);
    res.redirect("/Facultylogin");
 });
 

app.get("/StudentSignup",function(req,res){
    res.sendFile(__dirname+"/StudentSignup.html");
});

app.post("/StudentSignup",function(req,res){
   console.log("post request recived student sign up")
   const Student={
     name: req.body.name,
     registration_no: req.body.registration_no,
     email: req.body.email,
     password: req.body.password
   }
   Studentdetails.push(Student);
   console.log(Student);
   res.redirect("/Studentlogin");
});

app.get("/Profile",function(req,res){

    res.render('profile',{Studentdetails:Studentdetails});
     
});


app.get("/Profile1",function(req,res){

    res.render('profile1',{Facultydetails:Facultydetails});
     
});

app.post("/Profile",function(req,res){

    const password=req.body.newpassword;
    Studentdetails[Studentdetails.length-1].password=password;
    console.log(Studentdetails);
    res.redirect('/Profile');

});

app.get("/home",function(req,res){

    res.sendFile(__dirname+"/home.html");
     
});

app.get("/home1",function(req,res){

    res.sendFile(__dirname+"/home1.html");
     
});

app.get("/department",function(req,res){

    res.sendFile(__dirname+"/departments.html");
     
});


app.post("/Profile1",function(req,res){

    const password=req.body.newpassword;
    Facultydetails[Facultydetails.length-1].password=password;
    console.log(Facultydetails);
    res.redirect('/Profile1');

});

app.get("/Autogeneratecourse",function(req,res){

    
    res.render('Autogeneratecourse');
     
});

app.get("/about",function(req,res){
    res.sendFile(__dirname+"/about.html");
});

app.get("/courses1",function(req,res){
    res.render('courses1',{courses:courses});
});



app.get("/science",function(req,res){
    res.sendFile(__dirname+"/departement/science.html");
});

app.get("/engg",function(req,res){
    res.sendFile(__dirname+"/departement/engg.html");
});
app.get("/law",function(req,res){
    res.sendFile(__dirname+"/departement/law.html");
});

app.get("/humanity",function(req,res){
    res.sendFile(__dirname+"/departement/humanity.html");
});

app.get("/medicine",function(req,res){
    res.sendFile(__dirname+"/departement/medicine.html");
});

app.get("/commerce",function(req,res){
    res.sendFile(__dirname+"/departement/commerce.html");
});

app.get("/Addcourses1",function(req,res){
    res.sendFile(__dirname+"/Addcourse1.html");
});


app.post("/Addcourses1",function(req,res){
    console.log("postrequest recived");
    const coursedetails={
         coursename: req.body.coursename,
         hours: req.body.hours,
         credits: req.body.credits,
         platform: req.body.platform,
         certificate: req.body.certificiate,
         breif:req.body.breif,
         complete:req.body.complete
    }
    console.log(coursedetails);
    courses.push(coursedetails);
    res.redirect('/courses1');
});



app.get("/courses1/:course",function(req,res){
    const reqcourse=req.params.course;
    courses.forEach(function(c){
    const course=c.coursename;

    if(reqcourse === course){
    
        res.render('Autogeneratecourse1',{CourseName:c.coursename,hours:c.hours,credits:c.credits,language:c.language,platform:c.platform,certificates:c.certificates,complete_description:c.complete}); 
    };
    });
});

app.get("/courses/:course",function(req,res){
    const reqcourse=req.params.course;
    courses.forEach(function(c){
    const course=c.coursename;

    if(reqcourse === course){
    
        res.render('Autogeneratecourse',{CourseName:c.coursename,hours:c.hours,credits:c.credits,language:c.language,platform:c.platform,certificate:c.certificate,complete_description:c.complete}); 
    };
    });
});


app.post("/courses/:course",function(req,res){
    console.log("post request recieved");
    const reqcourse=req.params.course;
    courses.forEach(function(c){
    const course=c.coursename;
    if(reqcourse === course){
    
        const item={
            coursename:c.coursename,
            name:req.body.name,
            regestration:req.body.registration
        }
        courses1.push(item);
        console.log(courses1);
        
    };
    res.redirect('/courses');

    });
});


app.get("/courses",function(req,res){
    res.render('courses',{courses:courses});
});


app.get("/department1",function(req,res){
    res.sendFile(__dirname+"/department.html");
});




app.get("/science1",function(req,res){
    res.sendFile(__dirname+"/departement1/science1.html");
});

app.get("/engg1",function(req,res){
    res.sendFile(__dirname+"/departement1/engg1.html");
});
app.get("/law1",function(req,res){
    res.sendFile(__dirname+"/departement1/law1.html");
});

app.get("/humanity1",function(req,res){
    res.sendFile(__dirname+"/departement1/humanity1.html");
});

app.get("/medicine1",function(req,res){
    res.sendFile(__dirname+"/departement1/medicine1.html");
});

app.get("/commerce1",function(req,res){
    res.sendFile(__dirname+"/departement1/commerce1.html");
});

app.get("/dashboard",function(req,res){
    const studentlength=Studentdetails.length;
    const facultylength=Facultydetails.length;
    res.render('dashboard',{Studentnum:studentlength, Facultynum:facultylength});
});


app.listen(3000, function(){
    console.log("server has started on port 3000");
});
