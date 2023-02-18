import { useEffect, useState } from "react";

import "./App.css";

function App() {
  const [math, setmath] = useState({
    firstNo: 0,
    secondNo: 0,
    thirdNo: 0,

    answer: 0,
  });
  const [userAnswer, setuserAnswer] = useState("");

  const [Sucess, setSucess] = useState({
    isSuccess: false,
    message: "",
  });

  const createMath = async () => {
    setmath({
      ...math,
      firstNo: Math.floor(Math.random() * 13),

      secondNo: Math.floor(Math.random() * 40),

      thirdNo: Math.floor(Math.random() * 70),
    });

    setSucess({
      isSuccess: false,
      message: "",
    });
    setuserAnswer("");
  };
  const calculate = async () => {
    let result = math.firstNo * math.secondNo + math.thirdNo;
    setmath({
      ...math,
      answer: result,
    });

    return result;
  };
  const calculateMath = async () => {
    calculate().then((result) => {
      if (result == userAnswer) {
        setSucess({
          isSuccess: true,
          message: "Great! Correct Answer. Lets Try Another One",
        });
      } else {
        setSucess({
          isSuccess: false,
          message: "It's Ok! lets Try Another Time!",
        });
      }
    });
  };
  useEffect(() => {
    createMath();
  }, []);

  return (
    <div className="App">
      <div>
        <h2>Mental Sum Challange </h2>
        <h3>
          {math.firstNo} × {math.secondNo} + {math.thirdNo}{" "}
          {Sucess.isSuccess ? <span>= {math.answer}</span> : ""}
        </h3>
        <div className="">
          <input
            type="text"
            value={userAnswer}
            onChange={(e) => setuserAnswer(e.target.value)}
            placeholder="Your Answer"
          />
          <br />
          {Sucess.isSuccess ? (
            <p className="success">{Sucess.message}</p>
          ) : (
            <p className="fail">{Sucess.message}</p>
          )}
          {Sucess.isSuccess ? (
            <button
              onClick={() => {
                setmath({});
                createMath();
              }}
            >
              Another One
            </button>
          ) : (
            <button onClick={calculateMath}>Submit Answer</button>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
