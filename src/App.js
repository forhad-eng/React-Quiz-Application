import { useState } from 'react'

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
            { option: 'AHM Mostafa Kamal', isCorrect: false }
        ]
    },
    {
        question_text: 'Bangladesh is a country of?',
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

    return (
        <div className="bg-blue-400 h-screen flex justify-center items-center">
            <div className="w-1/3 flex justify-between p-4 bg-[#231c40] rounded-2xl text-white">
                <div>
                    <p>Question 1/4</p>
                    {quizzes[currentQuestion].question_text}
                </div>
                <div>
                    {quizzes[currentQuestion].answer_options.map(option => (
                        <button className="w-full block border-2 rounded-lg my-3 p-1">{option.option}</button>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default App
