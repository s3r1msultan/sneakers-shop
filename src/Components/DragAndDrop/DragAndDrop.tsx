import React, { useContext, useState } from "react";
import "./DragAndDrop.scss";
import { Button } from "react-bootstrap";
import { AppContext } from "../../context";

interface BoardItem {
  id: number;
  title: string;
}

interface Board {
  id: number;
  title: string;
  items: BoardItem[];
}

const DragAndDrop = () => {
  const { setDiscount } = useContext(AppContext);
  const initBoards = [
    {
      id: 1,
      title: "Особенности беговых кроссовок для повседневной носки",
      items: [
        { id: 1, title: "Плоский протектор без переката" },
        { id: 2, title: "Верх без дополнительной фиксации" },
        { id: 3, title: "Верх с улучшениями под погодные условия" },
      ],
    },
    {
      id: 2,
      title: "Особенности беговых кроссовок для фитнеса",
      items: [
        { id: 4, title: "Более твердая промежуточная подошва" },
        { id: 5, title: "Усиление по бокам" },
        { id: 6, title: "Отсутствие переката" },
      ],
    },

    {
      id: 3,
      title: "Особенности кроссовок для бега на стадионе",
      items: [
        { id: 7, title: "Наличие шипов" },
        { id: 8, title: "Жесткая колодка" },
        { id: 9, title: "Легкий верх" },
      ],
    },
  ];

  const [currentStep, setCurrentStep] = useState(1);
  const [correct, setCorrect] = useState<number>(0);

  const components = {
    id: 0,
    title: "Компоненты",
    items: [
      ...initBoards[0].items,
      ...initBoards[1].items,
      ...initBoards[2].items,
    ],
  };

  const [boards, setBoards] = useState<Board[]>([
    components,
    {
      id: 1,
      title: "Особенности беговых кроссовок для повседневной носки",
      items: [],
    },
    { id: 2, title: "Особенности беговых кроссовок для фитнеса", items: [] },
    {
      id: 3,
      title: "Особенности кроссовок для бега на стадионе",
      items: [],
    },
  ]);

  const [currentBoard, setCurrentBoard] = useState<Board>();
  const [currentItem, setCurrentItem] = useState<BoardItem>();

  const clickHandler = async () => {
    for (let i = 0; i < initBoards[currentStep - 1].items.length; ++i) {
      for (let j = 0; j < boards[currentStep].items.length; ++j) {
        if (
          initBoards[currentStep - 1].items[i].id ===
            boards[currentStep].items[j].id &&
          initBoards[currentStep - 1].id === boards[currentStep].id
        ) {
          setCorrect(correct + 1);
        }
      }
    }

    if (currentStep < boards.length - 1) {
      setCurrentStep((prev) => prev + 1);
    }

    if (currentStep === boards.length - 1) {
      console.log(currentStep);
      console.log(correct);
      setDiscount(10);
    }
  };

  const dragStartHandler = (
    e: React.DragEvent<HTMLElement>,
    board: Board,
    item: BoardItem
  ) => {
    setCurrentItem(item);
    setCurrentBoard(board);
  };

  const dragOverHandler = (e: React.DragEvent<HTMLElement>) => {
    e.preventDefault();
    if (e.currentTarget.className === "board__item") {
      e.currentTarget.style.boxShadow = "0 2px 3px gray";
    }
  };

  const dragLeaveHandler = (e: React.DragEvent<HTMLElement>) => {
    e.currentTarget.style.boxShadow = "none";
  };

  const dragEndHandler = (e: React.DragEvent<HTMLElement>) => {
    e.currentTarget.style.boxShadow = "none";
  };

  const dropHandler = (
    e: React.DragEvent<HTMLElement>,
    board: Board,
    item: BoardItem
  ) => {
    e.preventDefault();
    if (currentItem) {
      currentBoard?.items.splice(currentBoard?.items.indexOf(currentItem), 1);
      const dropIndex = board.items.indexOf(item);
      board?.items.splice(dropIndex + 1, 0, currentItem);
      setBoards(
        boards.map((b) => {
          if (b.id === board.id) {
            return board;
          }
          if (b.id === currentBoard?.id) {
            return currentBoard;
          }
          return b;
        })
      );
    }
  };

  const dropCardHandler = (
    e: React.DragEvent<HTMLDivElement>,
    board: Board
  ) => {
    e.preventDefault();
    if (currentItem) {
      board.items.push(currentItem);
      currentBoard?.items.splice(currentBoard?.items.indexOf(currentItem), 1);
      setBoards(
        boards.map((b) => {
          if (b.id === board.id) {
            return board;
          }
          if (b.id === currentBoard?.id) {
            return currentBoard;
          }
          return b;
        })
      );
    }
  };

  return (
    <div>
      {correct === 3 ? (
        <div style={{ marginTop: "20px", textAlign: "center" }}>
          <h3 className="text-success">Вы успешно прошли тест</h3>
        </div>
      ) : (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <div className="drag_and_drop">
            <div
              className="board"
              onDragOver={(e) => dragOverHandler(e)}
              onDrop={(e) => dropCardHandler(e, boards[0])}
              key={boards[0].title + boards[0].id}
            >
              <div className="board__title">{boards[0].title}</div>
              {boards[0].items.map((item) => {
                return (
                  <div
                    key={boards[0].title + boards[0].id + item.title + item.id}
                    draggable={true}
                    className="board__item"
                    onDragOver={(e) => dragOverHandler(e)}
                    onDragLeave={(e) => dragLeaveHandler(e)}
                    onDragStart={(e) => dragStartHandler(e, boards[0], item)}
                    onDragEnd={(e) => dragEndHandler(e)}
                    onDrop={(e) => dropHandler(e, boards[0], item)}
                  >
                    {item.title}
                  </div>
                );
              })}
            </div>

            <div
              className="board"
              onDragOver={(e) => dragOverHandler(e)}
              onDrop={(e) => dropCardHandler(e, boards[currentStep])}
              key={boards[currentStep].title + boards[currentStep].id}
            >
              <div className="board__title">{boards[currentStep].title}</div>
              {boards[currentStep].items.map((item) => {
                return (
                  <div
                    key={
                      boards[currentStep].title +
                      boards[currentStep].id +
                      item.title +
                      item.id
                    }
                    draggable={true}
                    className="board__item"
                    onDragOver={(e) => dragOverHandler(e)}
                    onDragLeave={(e) => dragLeaveHandler(e)}
                    onDragStart={(e) =>
                      dragStartHandler(e, boards[currentStep], item)
                    }
                    onDragEnd={(e) => dragEndHandler(e)}
                    onDrop={(e) => dropHandler(e, boards[currentStep], item)}
                  >
                    {item.title}
                  </div>
                );
              })}
            </div>
          </div>
          <Button
            onClick={clickHandler}
            style={{ width: "200px" }}
          >
            Продолжить
          </Button>
        </div>
      )}
    </div>
  );
};

export default DragAndDrop;
