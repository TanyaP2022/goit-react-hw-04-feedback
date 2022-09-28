import React, { Component } from 'react';
import {Container} from './AppStyle'
import { FeedbackOptions } from 'components/FeedbackOptions/FeedbackOptions';
import { Section } from 'components/Section/Section';
import {Statistics} from 'components/Statistics/Statistics'

class Counter extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  };

  leaveFeedback = options => {
    this.setState({ [options]: this.state[options] + 1 })
  };
  totalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad
  };

  positiveFeedback = () => {
    const { good, neutral, bad } = this.state;
    const total = good + neutral + bad;
    return Math.round(good/total*100)||0
  };

  render() {
    const { good, neutral, bad } = this.state;
    return (
      <Container>
        <Section title = "Please leave your feedback"/>
        <FeedbackOptions
          options={['good', 'neutral', 'bad']}
          onLeaveFeedback={this.leaveFeedback}
        />
        <Section title="Statistics" />
        {this.totalFeedback() ?
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            onTotalFeedback={this.totalFeedback()}
            onPositiveFeedback={this.positiveFeedback()}
          />
          : <h2>There is no feedback</h2>}
    </Container>
  );
}



}
export default Counter;