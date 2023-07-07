import React, { Component } from "react";
import Section from './Section/Section';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Statistics from './Statistics/Statistics';
import Notification from "./Notification/Notification";

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  };

countTotalFeedback = () => {return this.state.good + this.state.neutral + this.state.bad};

countPositiveFeedbackPercentage = () => {
  return Math.round(this.state.good * 100 / (this.state.good + this.state.neutral + this.state.bad))};

changeFeedback = (item) => {
  this.setState(prevState => ({[item]: prevState[item] + 1}));
};

  render() {
    const {good, neutral, bad} = this.state;
    const total = this.countTotalFeedback();
    const positivePercentage = this.countPositiveFeedbackPercentage();
    const options = Object.keys(this.state);
    const onLeaveFeedback = (item) => this.changeFeedback(item);

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
          <FeedbackOptions options={options} onLeaveFeedback={onLeaveFeedback} />
        </Section>
        <Section title="Statistics">
          {total === 0 ?
            <Notification message="There is no feedback" /> :
            <Statistics good={good} neutral={neutral} bad={bad} total={total} positivePercentage={positivePercentage} />}
        </Section>
      </div>
    );
  }
};
