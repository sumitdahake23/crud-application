const express = require("express");
// rOUTER cREting
const route = express.Router();
const apimodel = require("../model/usemodel");

// Getting All userr
route.get("/", async (req, res) => {
  try {
    const alluser = await apimodel.find();
    res.json(alluser);
  } catch (err) {
    res.json(err);
  }
});

// Search
route.get("/:id", async (req, res) => {
  try {
    const oneuser = await apimodel.findById(req.params.id);
    res.send(oneuser);
  } catch (err) {
    res.json(err);
  }
});
// Search Using Email
// route.get("/email/:email", async (req, res) => {
//   try {
//     const emailuser = await apimodel.findOne(email,req.params.email);
//     res.send(emailuser);
//   } catch (err) {
//     res.json(err);
//   }
// });

route.delete("/remove/:id", async (req, res) => {
  try {
    const removeuser = await apimodel.remove({ _id: req.params.id });
    res.send(removeuser);
  } catch (err) {
    res.json(err);
  }
});


route.post("/createuser", (req, res) => {
  const user = new apimodel({
    email: req.body.email,
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    avatar: req.body.avatar,
    password: req.body.password,
  });
  user
    .save()
    .then(() => res.send(user))
    .catch((error) => {
      res.send(error);
    });
});

route.post("/login", (req, res) => {
  const { email, password } = req.body;
  apimodel.findOne({ email: email }, (err, user) => {
    if (user) {
      if (password === user.password) {
        res.send({ message: "Succefull", user: user });
      } else {
        res.send({ message: "Password Didn't  Match" });
      }
    } else {
      res.send({ message: "User Not Registered" });
    }
  });
});

route.put('/:id',async(req,res)=> {
  try{
      const user= await apimodel.findById(req.params.id) 
      user.first_name = req.body.first_name
      user.last = req.body.last_name
      user.email = req.body.email
      user.avatar=req.body.avatar 
      user.password = req.body.password

      const a1 = await user.save()
      res.json(a1)   
  }catch(err){
      res.send('Error')
  }

})



// route.post("/login",(req,res)=>{

//     const{email,password}=req.body
//         user.findOne({email:email},(err,user)=>{
//             if(user){
//                 if(password===user.password){
//                     res.send({message:"Login SuccessFully",user:user})
//                 }else{
//                     res.send({message:"Password Didn't  Match"})
//                 }

//             }else{
//                 res.send({message:"User Not Registered"})
//             }
//         })
// })

// route.put("/up/:id",(req,res) => {
//   const user = new apimodel({
//     email: req.body.email,
//     first_name: req.body.first_name,
//     last_name: req.body.last_name,
//     avatar: req.body.avatar,
//     password: req.body.password
//   });
//   const dataup=user.updateOne({_id:req.params.id},user)
//   dataup.save()
//   .then (() =>{
//     res.status(201).json({
//       message:"User Updated SUccefully"
     
//     })
//   })
//   .catch((err)=>console.log(err))
// })

// route.put('/api/stuff/:id', (req, res, next) => {
//   const thing = new apimodel({
//     email: req.body.email,
//     first_name: req.body.first_name,
//     last_name: req.body.last_name,
//     avatar: req.body.avatar,
//     password: req.body.password
//   });

//   thing.updateOne({_id: req.params.id}, thing).then(
//     () => {
     
//       res.status(201).json({
//         message: 'Thing updated successfully!'
//       });
//     }
//   ).catch(
//     (error) => {
//       res.status(400).json({
//         error: error
//       });
//     }
//   );
// });



// route.put("/api/stuff/:id", async (req, res) => {
//   const thing = new apimodel({
//     email: req.body.email,
//     first_name: req.body.first_name,
//     last_name: req.body.last_name,
//     avatar: req.body.avatar,
//     password: req.body.password
//   });
//   try {
//     const updateOne = await apimodel.put({ _id: req.params.id},thing);
//     res.send(updateOne);
//   } catch (err) {
//     res.json(err);
//   }
// });

//  moralies


// thing.updateOne({_id: req.params.id}, thing).then(
  //     () => {
       
  //       res.status(201).json({
  //         message: 'Thing updated successfully!'
  //       });
  //     }
  //   ).catch(
  //     (error) => {
  //       res.status(400).json({
  //         error: error
  //       });
  //     }
  //   );
  // });



// route.put("/up/:id", async (req, res, next) => {
//   console.log(req.params.id);
//   const thing =new apimodel({
//     email: req.body.email,
//     first_name: req.body.first_name,
//     last_name: req.body.last_name,
//     avatar: req.body.avatar, 
//     password: req.body.password
//   });
//   apimodel.findOneAndUpdate({_id:req.params.id},thing)
//   .then(
//         () => {
         
//           res.status(201).json({
//             message: 'Thing updated successfully!'
//           });
//         }
//       ).catch(
//         (error) => {
//           res.status(400).json({
//             error: error
//           });
//         }
//       );
    // });

// })

// route.put('/updateuser/:id', function(req, res) {
//     var db = req.db;
//     var userToUpdate = req.params.id;
//     const thing =new apimodel({
//           email: req.body.email,
//           first_name: req.body.first_name,
//           last_name: req.body.last_name,
//           avatar: req.body.avatar, 
//           password: req.body.password
//         });
//     db.collection('demouser').update({ _id: ObjectId(userToUpdate)}, thing, function (err, result) {
//         res.send(
//             (err === null) ? {msg: ''} : {msg: err}
//         );
//     });
// });


// route.put('/api/:id', update = function(req, res) {
// 	var id = parseInt(req.params.id);
// 	const user = new apimodel({
//     email: req.body.email,
//     first_name: req.body.first_name,
//     last_name: req.body.last_name,
//     avatar: req.body.avatar,
//     password: req.body.password,
//   });
// 	if(user["user" + id != null]){
// 		// update data
// 		apimodel["user" + id] = user;

// 		console.log("--->Update Successfully, customers: \n" + JSON.stringify(user, null, 4))
		
// 		// return
// 		res.end("Update Successfully! \n" + JSON.stringify(user, null, 4));
// 	}else{
// 		res.end("Don't Exist Customer:\n:" + JSON.stringify(user, null, 4));
// 	}
// });



module.exports = route;
