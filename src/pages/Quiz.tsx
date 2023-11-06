import React, { useState } from "react";
import { Container, Card, Form, Button } from "react-bootstrap";

const Quiz: React.FC = () => {
  const questions = [
    {
      question: "Сколько будет 2 + 2?",
      correctAnswer: "4",
    },
    {
      question: "Какой год основания Рима?",
      correctAnswer: "753 г. до н.э.",
    },
    {
      question: "Что такое React?",
      correctAnswer: "Библиотека JavaScript",
    },
  ];

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswer, setUserAnswer] = useState("");
  const [isCorrect, setIsCorrect] = useState<Boolean>();
  const [showAnswer, setShowAnswer] = useState<Boolean>();

  const handleAnswer = () => {
    if (
      userAnswer.toLowerCase() ===
      questions[currentQuestionIndex].correctAnswer.toLowerCase()
    ) {
      setIsCorrect(true);
    } else {
      setIsCorrect(false);
    }
    setShowAnswer(true);
  };

  const handleNextQuestion = () => {
    setCurrentQuestionIndex(currentQuestionIndex + 1);
    setUserAnswer("");
    setShowAnswer(false);
  };

  return (
    <Container className="mt-5">
      {currentQuestionIndex < questions.length ? (
        <Card>
          <Card.Header>
            <h2 className="mb-0">Вопрос {currentQuestionIndex + 1}</h2>
          </Card.Header>
          <Card.Body>
            <Card.Text>{questions[currentQuestionIndex].question}</Card.Text>
            <Form.Control
              type="text"
              value={userAnswer}
              onChange={(e) => setUserAnswer(e.target.value)}
            />
            <Button
              variant="primary"
              onClick={handleAnswer}
              className="mt-3"
              style={{ marginRight: 5 }}
            >
              Ответить
            </Button>
            <Button
              variant="primary"
              onClick={handleNextQuestion}
              className="mt-3"
            >
              Далее
            </Button>
            {showAnswer && isCorrect && (
              <p className="mt-3 text-success">Правильный ответ!</p>
            )}
            {showAnswer && !isCorrect && (
              <p className="mt-3 text-danger">
                Правильный ответ:{" "}
                {questions[currentQuestionIndex].correctAnswer}
              </p>
            )}
          </Card.Body>
        </Card>
      ) : (
        <Card>
          <Card.Body>
            <Card.Text className="text-center">
              Вы прошли квиз! Поздравляем!
            </Card.Text>
          </Card.Body>
        </Card>
      )}
    </Container>
  );
};

export default Quiz;
