import { useState } from "react";
import Section from './Section/Section';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Statistics from './Statistics/Statistics';
import Notification from "./Notification/Notification";

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  
  const countTotalFeedback = () => { return good + neutral + bad };

  const countPositiveFeedbackPercentage = () => {
    return Math.round(good * 100 / (good + neutral + bad))
  };
  
  const changeFeedback = (item) => {
    if (item === "good") {
      setGood(prev => prev + 1);
    } else if (item === "neutral") {
      setNeutral(prev => prev + 1);
    } else if (item === "bad") {
      setBad(prev => prev + 1);
    };
  };

  const total = countTotalFeedback();
  const positivePercentage = countPositiveFeedbackPercentage();
  const options = ["good", "neutral", "bad"];
  const onLeaveFeedback = (item) => changeFeedback(item);
  
  return (
    <div style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      margin: 0,
      padding: 0,
      marginTop: 150,
    }}>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={options}
          onLeaveFeedback={onLeaveFeedback} />
      </Section>
      <Section title="Statistics">
        {total === 0 ?
          <Notification message="There is no feedback" /> :
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positivePercentage={positivePercentage} />}
      </Section>
    </div>
  );
};
