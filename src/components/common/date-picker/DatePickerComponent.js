/**
 * {@link https://ant.design/components/date-picker/}
 */
import React from 'react';
import moment from 'moment';
import classnames from 'classnames';
import PropTypes from 'prop-types';

import Loader from '../loader';

import DatePickerStyles from './DatePickerStyles';
import DatePickerLoaderStyles from './DatePickerLoaderStyles';

class DatePickerComponent extends React.Component {
  static propTypes = {
    className: PropTypes.string
  };

  DatePicker = null;

  state = {
    isLoading: true
  };

  componentDidMount() {
    this.loadDatePicker();
  }

  async loadDatePicker() {
    const { RangePicker } = await import('antd/lib/date-picker');
    this.DatePicker = RangePicker;

    this.setState({
      isLoading: false
    });
  }

  render() {
    const loaderStyles = DatePickerLoaderStyles();
    const datePickerStyles = DatePickerStyles();

    if (this.state.isLoading) {
      return (
        <div className={classnames('date-picker-loader', this.props.className)}>
          <style jsx>{loaderStyles}</style>
          <Loader />
        </div>
      );
    }

    const { DatePicker } = this;

    return (
      <div
        ref={node => {
          this.container = node;
        }}
        className={classnames('date-picker', this.props.className)}
      >
        <style jsx global>
          {datePickerStyles}
        </style>
        <DatePicker
          ranges={{
            Dziś: [moment(), moment()],
            'Ten tydzień': [moment(), moment().endOf('week')],
            'Ten miesiąc': [moment(), moment().endOf('month')],
            'Ten rok': [moment(), moment().endOf('year')]
          }}
          className="date-picker__button"
          dropdownClassName="date-picker__dropdown"
          placeholder={['dd.mm.yyyy', 'dd.mm.yyyy']}
          defaultValue={[moment(), moment()]}
          getCalendarContainer={() => this.container}
        />
      </div>
    );
  }
}

export default DatePickerComponent;
