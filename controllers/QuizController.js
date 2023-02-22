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
            deviceId,
            questions: allOptions
        });

        const savedQuiz = await newQuiz.save();
        res.status(200).json(allOptions);
    } catch (err) {
        return res.status(500).json(err)
    }
}

const getListOfQuizs = async (req, res) => {
    try {
        const deviceId = req.query.deviceId;
        const quizs = await Quiz.find({ deviceId });
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



module.exports = { getListOfQuizs, getQuestionsOfQuiz, createQuiz };