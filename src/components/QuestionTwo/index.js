import React, { useState, useEffect } from 'react';

const solution = (list) => {
  let acc = {};
  console.log(list);
  for (let item of list) {
    const sumLocation = acc[item.location] ? acc[item.location] + item.grandTotal : item.grandTotal;
    acc = { ...acc, [item.location]: sumLocation };
  }

  return acc;
};

function QuestionTwo(props) {
  const DataList = props.dataList;

  const [answer, setAnswer] = useState({});

  useEffect(() => {
    setAnswer(solution(DataList));
  }, [props.dataList]);

  return (
    <div className="question-container">
      <div className="question">
        2 ดึงข้อมูลธุรกรรมการขาย API : q2 แล้ว process ดังนี้
        <br />- รวมยอดขายของแต่ละภาค location
      </div>
      <div className="answer">
        {Object.keys(answer).map((item, ind) => {
          return (
            <p key={ind}>
              {item} : {answer[item]}
            </p>
          );
        })}
      </div>
    </div>
  );
}
export default QuestionTwo;
