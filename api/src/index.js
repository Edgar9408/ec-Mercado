const express = require('express');
const app = express();
const morgan = require('morgan');
const cors = require("cors")

//middelware
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());
//rutas
app.use(require("./routes/index"))
app.use('/api', require("./routes/Mercado"))



// iniciar server
app.listen(3001, () => {
    console.log(`server on port ${3001}`);
})