import React, { useState, useEffect } from 'react';

const solution = (list) => {
  let acc = {};
  for (let item of list) {
    if (!item.member) {
      continue;
    }
    const sumMember = acc[item.member.name] ? acc[item.member.name] + item.grandTotal : item.grandTotal;
    acc = { ...acc, [item.member.name]: sumMember };
  }

  return acc;
};

function QuestionThree(props) {
  const DataList = props.dataList;

  const [answer, setAnswer] = useState({});

  useEffect(() => {
    setAnswer(solution(DataList));
  }, [props.dataList]);

  return (
    <div className="question-container">
      <div className="question">
        3 ดึงข้อมูลธุรกรรมการขาย API : q3 แล้ว process ดังนี้
        <br />- รวมยอดขายของสมาชิกแต่ละคนโดยชื่อ member.name
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
export default QuestionThree;
