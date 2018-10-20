const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const path = require("path");
const methodOverride = require("method-override");

const app = express();
app.set("view engine", "ejs");
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: true }));

app.use(
  methodOverride((req, res) => {
    if(typeof req.body === "object" && req.body._method){
      const httpMethod = req.body._method;
      delete req.body._method;
      return httpMethod;
    }
  })
)


console.log("__dirname in ./index.js:", __dirname);
app.use(express.static(path.join(__dirname, "public")));

const teamPickerRouter = require("./routes/superTeamPicker");
app.use("/", teamPickerRouter);

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server is running ð¤ on http://localhost:${PORT}`);
});