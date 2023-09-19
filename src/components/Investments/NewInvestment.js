import { useState } from "react";

function NewInvestment(props) {
  const [userInput, setUserInput] = useState({
    "current-savings": 0,
    "yearly-contribution": 0,
    "expected-return": 0,
    duration: 0,
  });
  function submitHandler(event) {
    event.preventDefault();
    props.onSubmitInvestment(userInput);
  }
  function currentSavingsChangeHandler(event) {
    setUserInput((prevValue) => {
      return { ...prevValue, "current-savings": event.target.value };
    });
  }
  function yearlyContributionChangeHandler(event) {
    setUserInput((prevValue) => {
      return { ...prevValue, "yearly-contribution": event.target.value };
    });
  }
  function expectedReturnChangeHandler(event) {
    setUserInput((prevValue) => {
      return { ...prevValue, "expected-return": event.target.value };
    });
  }
  function durationChangeHandler(event) {
    setUserInput((prevValue) => {
      return { ...prevValue, duration: event.target.value };
    });
  }
  return (
    <form className="form" onSubmit={submitHandler}>
      <div className="input-group">
        <p>
          <label htmlFor="current-savings">Current Savings ($)</label>
          <input
            type="number"
            id="current-savings"
            onChange={currentSavingsChangeHandler}
          />
        </p>
        <p>
          <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
          <input
            type="number"
            id="yearly-contribution"
            onChange={yearlyContributionChangeHandler}
          />
        </p>
      </div>
      <div className="input-group">
        <p>
          <label htmlFor="expected-return">
            Expected Interest (%, per year)
          </label>
          <input
            type="number"
            id="expected-return"
            onChange={expectedReturnChangeHandler}
          />
        </p>
        <p>
          <label htmlFor="duration">Investment Duration (years)</label>
          <input type="number" id="duration" onChange={durationChangeHandler} />
        </p>
      </div>
      <p className="actions">
        <button type="reset" className="buttonAlt">
          Reset
        </button>
        <button type="submit" className="button">
          Calculate
        </button>
      </p>
    </form>
  );
}

export default NewInvestment;
