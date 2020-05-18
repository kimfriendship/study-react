import React, { useEffect } from "react";
import classNames from "classnames/bind";
import style from "./App.css";
import Category from "./Category";

const st = classNames.bind(style);

const Board = ({
  status,
  count,
  category,
  todos,
  createTitle,
  boardInputs,
  changeTitle,
  createTodo,
  deleteTodos,
}) => {
  // const getCount = useCallback((category) => {
  //   console.log(category);
  //   return category.length;
  // }, []);

  // const count = getCount(category);
  // const getCount = (category) => {
  //   console.log(category);
  //   return category.length;
  // };

  // const count = useMemo(() => getCount(category));
  // const getCount = useCallback(
  //   (categories, user) => {
  //     console.log(categories[user].length);
  //     return categories[user].length;
  //   },
  //   [categories]
  // );

  // const count = getCount(categories, user);

  useEffect(() => {
    console.log("보드 페이지 mount");
    return () => {
      console.log("보드 페이지 unmount");
    };
  }, [status]);

  return (
    <div className={st("boardWrapper")}>
      <h2 className={st("boardTitle")}>New Board</h2>
      <input
        type="text"
        placeholder="보드 제목을 입력하세요"
        className={st("inputTitle")}
        onKeyUp={createTitle}
        value={boardInputs}
        onChange={changeTitle}
      />
      <div className={st("count")}>총 {count}개</div>
      <Category
        category={category}
        todos={todos}
        boardInputs={boardInputs}
        changeTitle={changeTitle}
        createTodo={createTodo}
        deleteTodos={deleteTodos}
      />
    </div>
  );
};

export default React.memo(Board);
