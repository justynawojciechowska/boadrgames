/**
 * {@link https://ant.design/components/date-picker/}
 */
import React from 'react';
import moment from 'moment';

import Loader from '../loader';

import DatePickerStyles from './DatePickerStyles';

class DatePickerComponent extends React.Component {
  DatePicker = null;

  state = {
    isLoading: true
  };

  componentDidMount() {
    this.loadDatePicker();
  }

  async loadDatePicker() {
    const [{ RangePicker }] = await Promise.all([
      import('antd/lib/date-picker'),
      import('antd/lib/style/index.css')
    ]);
    this.DatePicker = RangePicker;

    this.setState({
      isLoading: false
    });
  }

  render() {
    if (this.state.isLoading) {
      return <Loader />;
    }

    const { DatePicker } = this;

    return (
      <div>
        <DatePickerStyles />
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
        />
      </div>
    );
  }
}

export default DatePickerComponent;
