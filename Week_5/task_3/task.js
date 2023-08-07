const express = require('express');
const multer = require('multer');
const app = express();
const port = 3000;
const upload = multer({ dest: 'uploads/' })
app.post('/upload', upload.single('myfile'), function (req, res, next) {
  // req.file is the `avatar` file
  // req.body will hold the text fields, if there were any
  res.send("success")
})
app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
