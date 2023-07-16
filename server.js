const express = require('express');
const connectDB = require('./Utils/ConfigDB');
const cors = require('cors')
const Router = require('./Routes/routes.js')
const bodyParser = require("body-parser");

const app = express();
app.use(express.json());
app.use(
    bodyParser.urlencoded({
        extended: false
    })
)
const corsOptions = {
    origin: '*',
    credentials: true,
    optionSuccessStatus: 200,
}

app.use(cors(corsOptions))
connectDB();
app.use('/api', Router)


const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});