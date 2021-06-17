const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors());
app.use(express.static('build'));
const morgan = require('morgan');
app.use(
  morgan(':method :url :status :res[content-length] - :response-time ms :body')
);

const errorHandler = (error, req, res, next) => {
  console.error(error.message);
  return res.status(400).send({ error });
  next(error);
};

app.use(errorHandler);
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
