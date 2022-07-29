import React from "react";

function QuestionItem({ question, onDeleteItem, onChangeAnswer }) {
  const { id, prompt, answers, correctIndex } = question;

  const options = answers.map((answer, index) => (
    <option key={index} value={index}>
      {answer}
    </option>
  ));

  function handleDeleteItem(){
    onDeleteItem(id)

  }
//  function handleChangeAnswer(e){
//   onChangeAnswer(id, parsent(e.target.value));

//  }
  return (
    <li>
      <h4>Question {id}</h4>
      <h5>Prompt: {prompt}</h5>
      <label>
        Correct Answer:
        <select defaultValue={correctIndex} >{options}</select>
      </label>
      <button onClick={handleDeleteItem}>Delete Question</button>
    </li>
  );
}

export default QuestionItem;
