import PropTypes from 'prop-types';
import{ Button, List } from './FeedbackOptionsStyle';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
    return (
        <List>
            <li>
                {options.map(option => {
                    return (
                        <Button
                            key={option}
                            type="button"
                            onClick={() => onLeaveFeedback(option)}
                        >
                            {option}
                        </Button>
                    )
                })} 
            </li>
        </List>
    );
};

FeedbackOptions.propTypes = {
    options: PropTypes.arrayOf(PropTypes.string).isRequired,
    onLeaveFeedback: PropTypes.func,
};