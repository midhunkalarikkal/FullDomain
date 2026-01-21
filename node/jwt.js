const jwt = require("jsonwebtoken");

const secret = "midhun";

const pyaload = {
  userId: "1",
  name: "Midhun",
};

const token = jwt.sign(pyaload, secret, { expiresIn: "1d" });
console.log("token : ", token);


setTimeout(() => {
    const decode = jwt.verify(token, secret);
    console.log("decode : ",decode);
},1000);