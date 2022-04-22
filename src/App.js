import { useRef, useState } from 'react'
import LoadingBar from 'react-top-loading-bar'

const quizzes = [
    {
        question_text: 'What is the capital of Bangladesh?',
        answer_options: [
            { option: 'Chittagong', isCorrect: false },
            { option: 'Rajshahi', isCorrect: false },
            { option: 'Dhaka', isCorrect: true },
            { option: 'Barisal', isCorrect: false }
        ]
    },
    {
        question_text: 'How many districts are there in Bangladesh?',
        answer_options: [
            { option: '48', isCorrect: false },
            { option: '64', isCorrect: true },
            { option: '65', isCorrect: false },
            { option: '38', isCorrect: false }
        ]
    },
    {
        question_text: 'Who is the current President of Bangladesh?',
        answer_options: [
            { option: 'Obaidul Kader', isCorrect: false },
            { option: 'Shiekh Hasina', isCorrect: false },
            { option: 'Abdul Hamid', isCorrect: true },
            { option: 'AHM Mostafa', isCorrect: false }
        ]
    },
    {
        question_text: 'Bangladesh is a country of which continent?',
        answer_options: [
            { option: 'Europe', isCorrect: false },
            { option: 'Africa', isCorrect: false },
            { option: 'North America', isCorrect: false },
            { option: 'Asia', isCorrect: true }
        ]
    }
]

function App() {
    const [currentQuestion, setCurrentQuestion] = useState(0)
    const [correct, setCorrect] = useState(0)
    const [isEnd, setIsEnd] = useState(false)
    const ref = useRef(null)

    const handleButton = (isCorrect, e) => {
        if (isCorrect) {
            setCorrect(correct + 1)
        }

        let pos = currentQuestion
        pos++

        if (pos < quizzes.length) {
            ref.current.continuousStart()
            setTimeout(() => {
                ref.current.complete()
                setCurrentQuestion(currentQuestion + 1)
            }, 1000)
        } else {
            setIsEnd(true)
        }
    }

    return (
        <div className="bg-blue-400 h-screen flex justify-center items-center">
            <div className="w-1/3 h-64 flex justify-center items-center p-4 bg-[#231c40] rounded-2xl text-white">
                {isEnd ? (
                    <p className="text-xl">
                        {correct === 4 ? (
                            <span className="block text-center">Congratulations 🎉</span>
                        ) : (
                            <span className="block text-center">Sad 😌</span>
                        )}
                        You scored {correct} out of {quizzes.length}
                        <button
                            onClick={() => window.location.reload()}
                            className="block mx-auto border-2 rounded-lg outline-none my-3 p-2 text-sm"
                        >
                            Retry
                        </button>
                    </p>
                ) : (
                    <div className="flex justify-between gap-8">
                        <LoadingBar color="#FFBF00" ref={ref} waitingTime="0" />
                        <div>
                            <p>
                                <span className="text-2xl">Question {currentQuestion + 1}</span>/{quizzes.length}
                            </p>
                            <p className="mt-1">{quizzes[currentQuestion].question_text}</p>
                        </div>
                        <div>
                            {quizzes[currentQuestion].answer_options.map(option => (
                                <button
                                    onClick={e => handleButton(option.isCorrect, e)}
                                    className="w-36 block border-2 rounded-xl outline-none my-3 p-1 hover:bg-blue-900"
                                >
                                    {option.option}
                                </button>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default App
