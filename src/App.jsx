import { useState } from 'react';
import {Container} from './AppStyle'
import { FeedbackOptions } from 'components/FeedbackOptions/FeedbackOptions';
import { Section } from 'components/Section/Section';
import {Statistics} from 'components/Statistics/Statistics'

export default function Component() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const feedback = { good, neutral, bad };

  const leaveFeedback = options => {
    switch (options) {
      case 'good':
        setGood(good + 1);
        break;
      
      case 'neutral':
        setNeutral(neutral + 1);
        break;
      
      case 'bad':
        setBad(bad + 1);
        break;
      
      default:
        return;
    }
  };
  const totalFeedback = () => {
    return good + neutral + bad;
  };

  const total = totalFeedback();

  const positiveFeedback = () => {
    return Math.round((good/total)*100)||0
  };

    return (
      <Container>
        <Section title = "Please leave your feedback"/>
        <FeedbackOptions
          options={Object.keys(feedback)}
          onLeaveFeedback={leaveFeedback}
        />
        <Section title="Statistics" />
        {total > 0 ?
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            onTotalFeedback={total}
            onPositiveFeedback={positiveFeedback()}
          />
          : <h2>There is no feedback</h2>}
    </Container>
  );
};