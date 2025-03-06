document.addEventListener('DOMContentLoaded', () => {
    const quizzes = [
        { title: 'Stress Level Test', description: 'Find out your stress levels' },
        { title: 'Emotional Well-being Quiz', description: 'How emotionally balanced are you?' },
        { title: 'Personality Traits Quiz', description: 'Discover your personality traits' },
        { title: 'What Kind of Thinker Are You?', description: 'Understand your thinking style' },
        { title: 'How Well Do You Understand Emotions?', description: 'Test your emotional intelligence' },
        { title: 'Quiz 6', description: 'Description for Quiz 6' },
        { title: 'Quiz 7', description: 'Description for Quiz 7' },
        { title: 'Quiz 8', description: 'Description for Quiz 8' },
        { title: 'Quiz 9', description: 'Description for Quiz 9' },
        { title: 'Quiz 10', description: 'Description for Quiz 10' },
        { title: 'Quiz 11', description: 'Description for Quiz 11' },
        { title: 'Quiz 12', description: 'Description for Quiz 12' },
        { title: 'Quiz 13', description: 'Description for Quiz 13' },
        { title: 'Quiz 14', description: 'Description for Quiz 14' },
        { title: 'Quiz 15', description: 'Description for Quiz 15' },
        { title: 'Quiz 16', description: 'Description for Quiz 16' },
        { title: 'Quiz 17', description: 'Description for Quiz 17' },
        { title: 'Quiz 18', description: 'Description for Quiz 18' },
        { title: 'Quiz 19', description: 'Description for Quiz 19' },
        { title: 'Quiz 20', description: 'Description for Quiz 20' }
    ];
    
    const quizList = document.querySelector('.quiz-list');
    quizzes.forEach(quiz => {
        const quizCard = document.createElement('div');
        quizCard.className = 'quiz-card';
        quizCard.innerHTML = `
            <h3>${quiz.title}</h3>
            <p>${quiz.description}</p>
            <button onclick="startQuiz('${quiz.title}')">Start Quiz</button>
        `;
        quizList.appendChild(quizCard);
    });
});

function startQuiz(quizTitle) {
    alert(`Starting quiz: ${quizTitle}`);
    // Implement quiz logic here
}