const adminAuth = (req, res, next) => {
  const token = "xyz";
  const authenticate = token === "xyz";
  if (authenticate) {
    next();
  } else {
    //   res.send("Unautherized request");
    next(new Error("Something went wrong."));
  }
};

const userMiddleware = (req,res,next) => {
  console.log("User middleware");
  next();
}

module.exports = {
  adminAuth,
  userMiddleware
};
