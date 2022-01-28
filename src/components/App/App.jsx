import { useState } from 'react';
import { GlobalStyle } from './GLobalStyle';
import { Statistics, FeedbackOptions, Section, Notification } from 'components';

const arrButton = ['good', 'neutral', 'bad'];

function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const feedbackIncrement = e => {
    const name = e.target.name;
    const getValue = pS => pS + 1;

    switch (name) {
      case 'good':
        setGood(getValue);
        break;
      case 'neutral':
        setNeutral(getValue);
        break;
      case 'bad':
        setBad(getValue);
        break;
      default:
    }
  };

  const countPositiveFeedbackPercentage = () => {
    return Math.round(
      (good * 100) / (good + neutral + bad === 0 ? 1 : good + neutral + bad)
    );
  };

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  return (
    <>
      <GlobalStyle />

      <Section title={'Please leave feedback'}>
        <FeedbackOptions
          options={arrButton}
          onLeaveFeedback={feedbackIncrement}
        />
      </Section>

      <Section title={'Statistics'}>
        {good || neutral || bad ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback()}
            positivePercentage={countPositiveFeedbackPercentage()}
          />
        ) : (
          <Notification message="There is no feedback" />
        )}
      </Section>
    </>
  );
}

export { App };
