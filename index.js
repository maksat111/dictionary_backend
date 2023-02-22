const express = require('express')
const app = express()
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const multer = require('multer')
const path = require('path')

const wordRoute = require('./routes/word')
const categoryRoute = require('./routes/category')
const userRoute = require('./routes/user')
const questionRoute = require('./routes/question')
const quizRoute = require('./routes/quiz')

const cors = require('cors');
dotenv.config();

mongoose.connect(process.env.MONGO_URL)
    .then(() => console.log('DB Connection Successfully'))
    .catch((err) => {
        console.log(err);
    })

app.use('/file', express.static(path.join(__dirname, "public/files")))
app.use(cors())
app.options('*', cors())

app.use(express.json())

//multer
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'public/files')
    },
    filename: (req, file, cb) => {
        console.log(file)
        cb(null, file.fieldname + '.' + file.mimetype.split('/')[1])
    }
})

const upload = multer({ storage: storage });
app.post('/upload', upload.any(), (req, res) => {
    try {
        console.log(req.file)
        return res.status(200).json('File upload succesfully')
    } catch (err) {
        console.log(err)
    }
})

app.use('/api/v1/words', wordRoute)
app.use('/api/v1/category', categoryRoute)
app.use('/api/v1/users', userRoute)
app.use('/api/v1/questions', questionRoute)
app.use("/api/v1/quiz", quizRoute)
app.use('/test', (req, res) => res.send(true))

const PORT = process.env.PORT || 80;

app.listen(PORT, () => {
    console.log(`Backend server is running on http://localhost:${PORT}`)
}) 