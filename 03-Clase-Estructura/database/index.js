const mongoose = require("mongoose");
const BD_URI =
  "mongodb+srv://root:root@cluster0-07urh.mongodb.net/cinta-negra-b43?retryWrites=true&w=majority";

mongoose.connect(BD_URI, {useNewUrlParser: true, useUnifiedTopology: true }, (err) =>
  err ? console.error(err) : console.info("Database connected")
);
