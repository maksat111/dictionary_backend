const Quiz = require("../models/Quiz");
const Word = require("../models/Word");

const createQuiz = async (req, res) => {
    try {
        const deviceId = req.query.deviceId;
        const words = await Word.aggregate([{ $sample: { size: 10 } }]);

        const allOptions = []
        for (var i = 0; i < words.length; i++) {
            const allwords = await Word.aggregate([{ $sample: { size: 30 } }]);

            const w = await Promise.all(
                allwords.map((i) => {
                    return (i.turkmen);
                })
            );

            var a = words[i].english
            var j = words[i].turkmen
            var d = [j]

            m = 0;
            for (var k = 0; k < w.length; k++) {

                if (m < 3) {
                    if (j !== w[k]) {
                        d.push(w[k]);
                        m++;
                    }
                }

            }

            allOptions.push({ a, d })

            console.log(allOptions)
        }



        const newQuiz = new Quiz({
            device_id: deviceId,
            questions: allOptions
        });


        await newQuiz.save().then(() => res.status(200).json(allOptions)).catch((err) => res.status(500).json(err));
    } catch (err) {
        return res.status(500).json(err)
    }
}

const getListOfQuizs = async (req, res) => {
    try {
        const deviceId = req.query.deviceId;
        const quizs = await Quiz.find({ device_id: deviceId });
        res.status(200).json(quizs);
    } catch (err) {
        res.status(500).json(err)
    }
}

const getQuestionsOfQuiz = async (req, res) => {
    try {
        const quizId = req.query.quizId;
        const quiz = await Quiz.find({ _id: quizId });
        res.status(200).json(quiz);
    } catch (err) {
        res.status(500).json(err);
    }
}


const confirmResult = async (req, res) => {
    try {
        const result = req.body;
        const deviceId = req.query.deviceId;
        const quizId = req.query.quizId;
        const updated = await Quiz.updateOne({ _id: quizId }, { $set: { correctAnswers: result } });

        result.forEach(async item => {
            const founded = await Word.findOne({ english: item });
            const foundedDeviceIndex = founded.correctCounter?.findIndex(element => element.device_id == deviceId);
            if (foundedDeviceIndex == -1) {
                await Word.updateOne(
                    { english: item },
                    { $push: { correctCounter: { device_id: deviceId, correctAnswered: 1 } } },
                );
            } else {
                founded.correctCounter[foundedDeviceIndex].correctAnswered++;
                await Word.updateOne({ _id: founded._id }, { correctCounter: founded.correctCounter });
            }
        });

        res.status(200).send("succesfully confirmed!")
    } catch (err) {
        res.status(500).json(err)
    }
}

module.exports = { getListOfQuizs, getQuestionsOfQuiz, createQuiz, confirmResult };