const { default: mongoose } = require("mongoose");

const db = {
  connect: async () => {
    try {
      await mongoose.connect(process.env.MONGO_URL);
      console.log("CONNECTED!");
    } catch (err) {
      console.log("Mongodb connection error!!");
      console.log(err);
    }
  },
};

module.exports = {
  db
};
