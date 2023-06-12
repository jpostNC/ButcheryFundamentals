import styles from '../styles/Home.module.css'
import { useState, useEffect } from 'react'

function PlaySound(_Src) {
    new Audio(_Src).play();
}

export default function Quiz(props) {
    const {
        QuestionList,
        type,
        user
    } = props

    const MODULEVALUE = 6;

    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [isDone, setDone] = useState(false)
    const [correctAnswerCount, setCorrectAnswerCount] = useState(0)
    const [importedScore, toggleImportedScore] = useState(false)

    const submitAnswer = (answerIndex) => {
        if (answerIndex == QuestionList[currentQuestion].correctAnswer) {
            setCorrectAnswerCount(correctAnswerCount + 1);
            PlaySound('/audio/CorrectAnswer.wav');
            console.log("CORRECT");
        } else {
            PlaySound('/audio/IncorrectAnswer.wav');
            console.log("INCORRECT");
        }

        if (currentQuestion === (QuestionList.length - 1)) {
            console.log("IS DONE");
            setDone(true);
        } else {
            setCurrentQuestion(currentQuestion + 1);
        }
    }


    useEffect(async () => {
        if (isDone) {
            var myHeaders = new Headers();
            myHeaders.append("Content-Type", "application/x-www-form-urlencoded");
            var urlencoded = new URLSearchParams();
            urlencoded.append("s", correctAnswerCount);
            if (type === "kitchen") {
                urlencoded.append("module", 'orientation');
            } else {
                urlencoded.append("module", type);
            }

            const requestOptions = {
                method: 'POST',
                headers: myHeaders,
                body: urlencoded,
                redirect: 'follow'
            };
            await fetch("/api/completeSection", requestOptions)
        }
    }, [isDone])

    useEffect(() => {
        if (!importedScore && user) {
            if (user.completed) {
                window.location = `/train/${type}1`
            }
            setCorrectAnswerCount(user.score);
            toggleImportedScore(true);
        }
    }, [user])

    return <div className={styles.mainContentQuiz}>
        <div className={styles.topContent}>
            <p id="TopTextLeft">{
                'Score: ' + (correctAnswerCount).toString() + '/' + (QuestionList.length + MODULEVALUE).toString()
            }</p>
            <p className={styles.end} id="TopTextRight">{
                'Question: ' + (currentQuestion + 1 + 2).toString() + '/' + (QuestionList.length + 2)//is +2 as there are the other two drag and drop questions 
            } </p>
        </div>
        <div className={styles.interactiveContent}>
            <div className={styles.quizContainer}>
                <div className={styles.imgContainer}>
                    {!isDone ?
                        (QuestionList[currentQuestion].image ?
                            <img src={QuestionList[currentQuestion].image} />
                            :
                            <h2>{QuestionList[currentQuestion].question}</h2>)
                        :
                        <h2>{'Your score is ' + (correctAnswerCount).toString() + '/' + (QuestionList.length + MODULEVALUE).toString()}</h2>
                    }
                </div>
                <div className={styles.btnSection}>
                    {!isDone && QuestionList[currentQuestion].options.map((answer, index) =>
                        <button
                            key={index}
                            onClick={() => submitAnswer(index)}
                            className={styles.btnEntry}>
                            <p>{answer}</p>
                        </button>
                    )
                    }
                </div>
            </div>
        </div>
        <div className={styles.bottomContent}>
            {!isDone ?
                (!QuestionList[currentQuestion]?.image ?
                    ''
                    :
                    <h2>{QuestionList[currentQuestion].question}</h2>
                )
                :
                <h2>COMPLETED</h2>
            }
            <div>
                <small>Each correct answer will be worth one point,</small>
                <small>You can see your current total score in the top left</small>
            </div>
        </div>
    </div>
}
