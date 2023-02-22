`GET` api/v1/quiz/createQuiz?deviceId=???   =>  get quiz

`POST` api/v1/quiz/confirmResult?deviceId=???&&quizId=??? => get quiz. Body must contain correctly answered english words => 
`body` ["apple", "orange", "ice", "king"] 


`GET` api/v1/quiz/quizlist?deviceId=??? => get quizs of device

`GET` api/v1/quiz/quizQuestion?quizId=?? => get quiz's questions with given answers

`GET` api/v1/words/learnedWords?deviceId=?? => get learned words