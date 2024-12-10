const express = require("express");

const app = express();

// ## one
//  In this the out will be same because the first one is / and it will override the other ones

// app.use('/',(req,res) => {
//     res.send("response from server with / ")
// })
// app.use('/user',(req,res) => {
//     res.send("response from server with user ")
// })
// app.use('/test',(req,res) => {
//     res.send("response from server with test ")
// })

// ## Two
// In this we will get exact response because the / will not order ride the other routes

// app.use('/user',(req,res) => {
//     res.send("response from server with user ");
// })
// app.use('/test',(req,res) => {
//     res.send("response from server with test ");
// })
// app.use("/",(req,res) => {
//     res.send("response from server with / ");
// })

// ## Third
// in this we can get different response

// app.get('/getData',(req,res) => {
//     res.send({fname : "Midhun", lname : "K Paniker"});
// })

// app.post("/postData",(req,res) => {
//     res.send("Data saved successfully.");
// })

// app.delete('/deleteData',(req,res) => {
//     res.send("Data deleted successfully.");
// })

// ## fourth
// just rout example with constraints

// app.get('/use+r',(req,res) => {
//     res.send("user GET call with + in route");
// })
// app.get('/use?r',(req,res) => {
//     res.send("user GET call with ? after e in route");
// })
// app.get('/use*r',(req,res) => {
//     res.send("user GET call with * after e in route");
// })

// ## req.params
// app.get('/user/:userId',(req,res) => {
//     console.log(req.params);
//     res.send("response from server with req.params");
// })

// ## req.query
// app.get('/user',(req,res) => {
//     console.log(req.query);
//     res.send("response from server with req.query");
// })

// ## Five
// ## request hanlder with multiple callback with next parameter

// Sample one

// app.get('/user',(req,res,next) => {
//     console.log("First callback");
//     res.send("Response from first callback");
//     next();
// },(req,res) => {
//     console.log("Second callback");
//     res.send("Response from second callback");
// })

// Sample two

// app.get('/user',(req,res,next) => {
//     console.log("First callback");
//     next();
//     res.send("Response from first callback");
// },(req,res) => {
//     console.log("Second callback");
//     res.send("Response from second callback");
// })

// Sample three

// app.get('/user',(req,res,next) => {
//     console.log("First callback");
//     res.send("Response from first callback");
//     next();
// },(req,res,next) => {
//     console.log("Second callback");
//     res.send("Response from second callback");
//     next();  // From here will not work because the second response will be an error it will not accept by the client
// },(req,res,next) => {
//     console.log("Third callback");
//     res.send("Response from third callback");
// })

// Sample fourth

// app.get('/user',(req,res,next) => {
//     console.log("First callback");
//     next();
// },(req,res,next) => {
//     console.log("Second callback");
//     next();
// },(req,res,next) => {
//     console.log("Third callback");
//     res.send("Response from third callback"); // Here the third response will be send to client and the next() will not make an error because the response is already sended
//     next();
// })

// Sample sixth

// app.get('/user',(req,res,next) => {
//     console.log("First callback");
//     next();
// },(req,res,next) => {
//     console.log("Second callback");
//     next();
// },(req,res,next) => {
//     console.log("Third callback");
//     next();  // Here we will get an error because we are explicitly calling the next function but there is not callback route handler
// })

// Sample seventh

// app.get('/user',(req,res,next) => {
//     console.log("First callback");
//     next();
// },(req,res,next) => {
//     console.log("Second callback");
//     next();
// },(req,res,next) => {
//     console.log("Third callback");
//     next();
// })

// Sample eight
// Wrapping the callback functions inside an array, also we can wrap a set of callbacks inside an array.

// app.get('/user',[(req,res,next) => {
//     console.log("First callback");
//     next();
// },(req,res,next) => {
//     console.log("Second callback");
//     next();
// },(req,res,next) => {
//     console.log("Third callback");
//     res.send("Response from third callback.");
// }])

// Six
// MIddlewares

const { adminAuth } = require('./middlewares/auth')
app.use("/admin",adminAuth);

app.get("/admin/getData", (req, res) => {
  res.send("adin authenticated");
  console.log("data fetched");
});

app.post("/admin/postData", (req, res) => {
  res.send("admin authenticated");
  console.log("data saved");
});

app.listen(4000, () => {
  console.log("Server is listening on port 4000");
});
