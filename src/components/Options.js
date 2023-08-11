function Options({ question, answer, dispatch }) {
  //khi có answer rồi thì mới có corect hay wrong  answer = null thì không có class ở bên dưới
  const hasAnswered = answer !== null;
  return (
    <div className="options">
      {question.options.map((option, index) => (
        <button
          className={`btn btn-option ${index === answer ? "answer" : ""} ${
            hasAnswered
              ? index === question.correctOption
                ? "correct"
                : "wrong"
              : ""
          }`}
          key={option}
          onClick={() => dispatch({ type: "newAnswer", payload: index })}
        >
          {option}
        </button>
      ))}
    </div>
  );
}

export default Options;
// ${index === answer ? "answer" : ""} //1 trong 4 chỉ mục khi map mà bằng đáp án answer mình onCLick thì mình áp dụng class answer cho nó lùi vào đáp án mình chọn đó
