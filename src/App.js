import { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
import QuestionOne from './components/QuestionOne';
import QuestionTwo from './components/QuestionTwo';
import QuestionThree from './components/QuestionThree';

function App() {
  const [numberList, setNumberList] = useState([]);
  const [dataListQ2, setDataListQ2] = useState([]);
  const [dataListQ3, setDataListQ3] = useState([]);

  const fetch = async () => {
    const res1 = await axios.get('https://oclmyk0vd0.execute-api.us-east-1.amazonaws.com/codecamp7/q1?token=por');
    setNumberList(res1.data);
    const res2 = await axios.get('https://oclmyk0vd0.execute-api.us-east-1.amazonaws.com/codecamp7/q2?token=por');
    setDataListQ2(res2.data);
    const res3 = await axios.get('https://oclmyk0vd0.execute-api.us-east-1.amazonaws.com/codecamp7/q3?token=por');
    setDataListQ3(res3.data);
  };

  useEffect(() => {
    fetch();
  }, []);

  return (
    <div className="App">
      <QuestionOne numberList={numberList} />
      <QuestionTwo dataList={dataListQ2} />
      <QuestionThree dataList={dataListQ3} />
    </div>
  );
}

export default App;
