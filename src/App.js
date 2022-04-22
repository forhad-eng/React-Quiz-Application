const Quiz = [
    {
        question_text: 'What is the capital of Bangladesh?',
        answer_options: [
            { option_one: 'Chittagong', isCorrect: false },
            { option_two: 'Rajshahi', isCorrect: false },
            { option_three: 'Dhaka', isCorrect: true },
            { option_four: 'Barisal', isCorrect: false }
        ]
    },
    {
        question_text: 'How many districts are there in Bangladesh?',
        answer_options: [
            { option_one: '48', isCorrect: false },
            { option_two: '64', isCorrect: true },
            { option_three: '65', isCorrect: false },
            { option_four: '38', isCorrect: false }
        ]
    },
    {
        question_text: 'Who is the current President of Bangladesh?',
        answer_options: [
            { option_one: 'Obaidul Kader', isCorrect: false },
            { option_two: 'Shiekh Hasina', isCorrect: false },
            { option_three: 'Abdul Hamid', isCorrect: true },
            { option_four: 'AHM Mostafa Kamal', isCorrect: false }
        ]
    },
    {
        question_text: 'Bangladesh is a country of?',
        answer_options: [
            { option_one: 'Europe', isCorrect: false },
            { option_two: 'Africa', isCorrect: false },
            { option_three: 'North America', isCorrect: false },
            { option_four: 'Asia', isCorrect: true }
        ]
    }
]

function App() {
    return (
        <div className="bg-blue-400 h-screen flex justify-center items-center">
            <div className="w-1/3 flex justify-between p-4 bg-[#231c40] rounded-2xl text-white">
                <div>
                    <p>Question 1/4</p>
                </div>
                <div>
                    <p>Dhaka</p>
                    <p>Harare</p>
                    <p>Cape Town</p>
                    <p>Accra</p>
                </div>
            </div>
        </div>
    )
}

export default App
