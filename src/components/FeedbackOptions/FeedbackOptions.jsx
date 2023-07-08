import PropTypes from 'prop-types';
import css from './FeedbackOptions.module.css';
import { nanoid } from 'nanoid';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {

    const getButtonClass = (item) => {
        switch (item) {
            case 'good':
                return css.btnGood;
            case 'neutral':
                return css.btnNeutral;
            case 'bad':
                return css.btnBad;
            default:
                return '';
        }
    };

    return (
        <ul className={css.buttonsFeedback}>
            {options.map((item) => (
                <li key={nanoid()}>
                    <button
                        className={`${css.btn} ${getButtonClass(item)}`}
                        type="button"
                        onClick={() => onLeaveFeedback(item)}>{item}</button>
                </li>
            ))}
        </ul>
    ); 
};

FeedbackOptions.propTypes = {
    options: PropTypes.arrayOf(
        PropTypes.string).isRequired,
};

export default FeedbackOptions;

