const adminAuth = (req, res, next) => {
    const token = "xyz";
    const authenticate = token === "xyz";
    if (authenticate) {
      next();
    } else {
      res.send("Unautherized request");
    }
  }

  module.exports = {
    adminAuth
  }