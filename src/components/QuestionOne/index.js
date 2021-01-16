import React, { useState, useEffect } from 'react';

const solution = (list) => {
  const acc = list
    .filter((item, ind) => {
      return item >= 100 && item <= 500 && (item % 3 === 0 || item % 5 === 0) && list.indexOf(item) === ind;
    })
    .sort((a, b) => {
      return a - b;
    });
  return acc;
};

function QuestionOne(props) {
  const numberList = props.numberList;

  const [answer, setAnswer] = useState([]);

  useEffect(() => {
    setAnswer(solution(numberList));
  }, [props.numberList]);

  return (
    <div className="question-container">
      <div className="question">
        1 ดึงข้อมูลชุดตัวเลขจาก API : q1 แล้ว process ดังนี้
        <br />
        - เรียงลำดับ จากน้อยไปมาก
        <br />
        - เอาตัวเลขเฉพาะ between 100 - 500 (รวมตัวเลข 100, 500ด้วย)
        <br />
        - เอาตัวเลขเฉพาะ หารด้วย แม่3 หรือ แม่5 ลงตัว (เอาที่ทั้ง3และ5ลงตัวด้วย)
        <br />- แสดงเฉพาะเลขที่ unique (ไม่ต้องแสดงเลขซ้ำ ถ้าซ้ำเอาตัวเดียว)
      </div>
      <div className="answer" style={{ wordWrap: 'break-word' }}>
        {answer ? '[' + answer.toString() + ']' : null}
      </div>
    </div>
  );
}
export default QuestionOne;
