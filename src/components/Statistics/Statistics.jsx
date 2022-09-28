import PropTypes from 'prop-types'
import {StatisticsStyle, StatisticsItem} from './StatisticsStyle'

export const Statistics = ({ good, neutral, bad, onTotalFeedback, onPositiveFeedback }) => {
    return (
        <StatisticsStyle>
          <StatisticsItem>Good: {good}</StatisticsItem>
          <StatisticsItem>Neutral: {neutral}</StatisticsItem>
          <StatisticsItem>Bad: {bad}</StatisticsItem>
          <StatisticsItem>Total: {onTotalFeedback}</StatisticsItem>
          <StatisticsItem>Positive feedback: {onPositiveFeedback}%</StatisticsItem>
        </StatisticsStyle>
    )
    };

Statistics.propTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    onCalculateStat: PropTypes.number,
    onPositiveFeedback: PropTypes.number,
}    