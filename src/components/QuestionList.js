import React, {useEffect, useState} from "react";
import QuestionItem from "./QuestionItem"

function QuestionList() {

  const [questions, setQuestions]=useState([])

  useEffect(()=> {
    fetch("http://localhost:4000/questions")
    .then((response)=> response.json())
    .then ((data)=>{
      setQuestions(data)
    })
  }, [])
   function handleDeleteItem(id){
    fetch (`http://localhost:4000/questions/${id}`,{
      method: "DELETE",
    })
    .then((response)=> response.json())
    .then(()=> {const element= questions.filter((question)=> question.id !== id)
      setQuestions(element)
    })
   }
    // const newItemChange= questions.map((question) =>{
    //   if (question.id ===newData.id)
    //   return newData;
    //   return question;
    // })

  //  function handleChangeAnswer(id, correctIndex){
  //   fetch(`http://localhost:4000/questions/${id}`, {
  //     method: "PATCH",
  //     headers:{
  //       "Content-Type":"application/json",
  //     },
  //     body:JSON.stringify({
  //       correctIndex
  //     })
  //     .then((response)=> response.json())
  //     .then((newData)=> {const element= questions.map((question) =>{
  //         if (question.id === newData.id) return newData;
  //         return question;
  //       })
  //       setQuestions(element)
  //     })
      

  //   })
    

  //  }



  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>{questions.map((question)=>(
        <QuestionItem key={question.id} question={question} onDeleteItem={handleDeleteItem} />
      ))}</ul>
    </section>
  );
}

export default QuestionList;
