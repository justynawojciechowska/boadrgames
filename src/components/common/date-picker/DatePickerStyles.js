import React from 'react';
import { colors, font } from '../../../styleVariables';

const ButtonStyles = props => {
  return (
    /*language=CSS*/
    <style jsx>{`
      .date-picker {
        background-color: ${colors.gray};
        border-radius: 50%;
        display: inline-flex;
        justify-content: center;
        align-items: center;
        position: relative;
        height: 44px;
        padding-left: 10px;
        width: 250px;
      }

      .date-picker .anticon {
        display: none;
      }

      .date-picker__icon {
        position: absolute;
        right: 20px;
        top: 50%;
        transform: translateY(-50%);
      }

      .date-picker__icon--left {
        left: 20px;
        right: auto;
      }

      .date-picker__button,
      .date-picker__button .ant-calendar-picker-input {
        display: inline-block;
        position: relative;
        width: 100%;
      }

      .date-picker__button .ant-calendar-picker-input {
        cursor: pointer;
        padding: 20px 0;
        z-index: 1;
      }

      .date-picker__dropdown,
      .date-picker__dropdown .ant-calendar-range {
        width: 670px;
        z-index: 9;
      }

      .date-picker__dropdown .ant-calendar-range {
        background-color: ${colors.gray};
        border-radius: 4px;
        position: absolute;
        padding-top: 15px;
      }

      .date-picker__dropdown .ant-calendar-panel {
        position: relative;
      }

      .date-picker__dropdown .ant-calendar-date-panel {
        display: flex;
        margin-bottom: 5px;
      }

      .date-picker__button .ant-calendar-range-picker-input,
      .date-picker__dropdown .ant-calendar-input {
        border: 0;
        color: ${font.color};
        font-size: 1.3rem;
        width: 74px;
      }

      .date-picker__dropdown .ant-calendar-input {
        position: absolute;
        top: -54px;
        left: 0;
        z-index: 2;
      }

      .date-picker__dropdown .ant-calendar-range-right .ant-calendar-input {
        left: 84px;
      }

      .date-picker__dropdown.slide-up-leave .ant-calendar-input {
        display: none;
      }

      /* stylelint-disable  no-descending-specificity, property-no-vendor-prefix */

      .date-picker__dropdown .ant-calendar-input::placeholder,
      .date-picker__button .ant-calendar-range-picker-input::placeholder {
        color: ${colors.gray};
        opacity: 1;
      }

      .date-picker__dropdown .ant-calendar-input:-ms-input-placeholder,
      .date-picker__button input:-ms-input-placeholder {
        color: ${colors.gray};
      }

      .date-picker__dropdown .ant-calendar-input::-ms-input-placeholder,
      .date-picker__button
        .ant-calendar-range-picker-input::-ms-input-placeholder {
        color: ${colors.gray};
      }

      /* stylelint-enable */

      .date-picker__dropdown .ant-calendar-range-left {
        margin-left: 20px;
      }

      .date-picker__button .ant-calendar-range-picker-separator,
      .date-picker__dropdown .ant-calendar-range-middle {
        display: inline-block;
        font-size: 0;
        margin-right: 3px;
        text-align: center;
        width: 5px;
      }

      .date-picker__button .ant-calendar-range-picker-separator:after {
        content: '-';
        font-size: 1.2rem;
      }

      .date-picker__dropdown .ant-calendar-range-right {
        margin: 0 20px 0 auto;
      }

      .date-picker__dropdown .ant-calendar-range-part > div:nth-child(2) {
        background-color: ${colors.white};
        border-radius: 10px;
        height: 100%;
        margin-top: 5px;
        padding: 30px 15px 10px;
      }

      .date-picker__dropdown .ant-calendar-in-range-cell .ant-calendar-date {
        background-color: ${colors.gray};
      }

      .date-picker__dropdown .ant-calendar-column-header,
      .date-picker__dropdown .ant-calendar-cell {
        height: 40px;
        padding: 0;
        text-align: center;
        width: 40px;
      }

      .date-picker__dropdown .ant-calendar-table {
        margin-top: 5px;
      }

      .date-picker__dropdown .ant-calendar-cell .ant-calendar-date {
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        height: 30px;
        width: 40px;
      }

      .date-picker__dropdown .ant-calendar-column-header {
        color: ${colors.gray};
      }

      .date-picker__dropdown .ant-calendar-header {
        text-align: center;
      }

      .date-picker__dropdown .ant-calendar-my-select a {
        font-size: 1.3rem;
        pointer-events: none;
      }

      .date-picker__dropdown .ant-calendar-month-select {
        margin-right: 5px;
      }

      .date-picker__dropdown .ant-calendar-prev-month-btn,
      .date-picker__dropdown .ant-calendar-next-month-btn {
        cursor: pointer;
        position: absolute;
        height: 13px;
        width: 8px;
      }

      .date-picker__dropdown .ant-calendar-next-month-btn {
        background: url('./assets/arrow-right.svg');
        right: 0;
      }

      .date-picker__dropdown .ant-calendar-prev-month-btn {
        background: url('./assets/arrow-left.svg');
        left: 0;
      }

      .date-picker__dropdown .ant-calendar-last-month-cell,
      .date-picker__dropdown .ant-calendar-next-month-btn-day,
      .date-picker__dropdown .ant-calendar-last-month-cell .ant-calendar-date,
      .date-picker__dropdown
        .ant-calendar-next-month-btn-day
        .ant-calendar-date {
        opacity: 0;
        pointer-events: none;
        height: 0;
        width: 0;
        padding: 0;
        font-size: 0;
      }

      .date-picker__dropdown .ant-calendar-today .ant-calendar-date {
        position: relative;
        z-index: 0;
      }

      .date-picker__dropdown .ant-calendar-today .ant-calendar-date:after {
        position: absolute;
        content: '';
        border: 2px solid ${colors.white};
        border-radius: 50%;
        height: 26px;
        width: 26px;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        z-index: -1;
      }

      .date-picker__dropdown .ant-calendar-selected-end-date .ant-calendar-date,
      .date-picker__dropdown
        .ant-calendar-selected-start-date
        .ant-calendar-date {
        background-color: ${colors.gray};
        color: ${colors.white};
        position: relative;
        width: 30px;
        z-index: 0;
      }

      .date-picker__dropdown
        .ant-calendar-selected-start-date
        .ant-calendar-date {
        border-top-left-radius: 50%;
        border-bottom-left-radius: 50%;
        margin: 0 0 0 auto;
        padding-right: 10px;
      }

      .date-picker__dropdown
        .ant-calendar-selected-end-date
        .ant-calendar-date {
        border-top-right-radius: 50%;
        border-bottom-right-radius: 50%;
        margin: 0 auto 0 0;
        padding-left: 10px;
      }

      .date-picker__dropdown
        .ant-calendar-selected-end-date
        .ant-calendar-date:after,
      .date-picker__dropdown
        .ant-calendar-selected-start-date
        .ant-calendar-date:after {
        position: absolute;
        content: '';
        border: 0;
        border-radius: 50%;
        height: 30px;
        width: 30px;
        bottom: auto;
        right: 5px;
        left: auto;
        top: 0;
        transform: none;
        z-index: -1;
      }

      .date-picker__dropdown
        .ant-calendar-selected-end-date
        .ant-calendar-date:after {
        right: -5px;
      }

      .date-picker__dropdown.ant-calendar-selected-end-date.ant-calendar-selected-start-date
        .ant-calendar-date:after {
        right: -5px;
      }

      .date-picker__dropdown
        .ant-calendar-tbody
        tr
        .ant-calendar-in-range-cell:first-of-type
        .ant-calendar-date {
        border-top-left-radius: 17px;
        border-bottom-left-radius: 17px;
      }

      .date-picker__dropdown
        .ant-calendar-tbody
        tr
        .ant-calendar-in-range-cell:last-of-type
        .ant-calendar-date,
      .date-picker__dropdown
        .ant-calendar-tbody
        tr
        .ant-calendar-in-range-cell.ant-calendar-last-day-of-month
        .ant-calendar-date {
        border-top-right-radius: 17px;
        border-bottom-right-radius: 17px;
      }

      .date-picker__dropdown .ant-calendar-footer-extra {
        padding: 10px 20px 20px;
      }

      .date-picker__dropdown .ant-tag,
      .date-picker__dropdown .ant-calendar-footer-extra a {
        background-color: ${colors.white};
        box-shadow: 0 0 0 0 rgba(0, 0, 0, 0);
        border-radius: 17px;
        cursor: pointer;
        display: inline-block;
        padding: 10px 20px;
        margin-right: 10px;
        transition: background 0.3s, box-shadow 0.3s, color 0.2s linear 0.1s;
        text-transform: capitalize;
      }

      .date-picker__dropdown .ant-tag:hover,
      .date-picker__dropdown .ant-calendar-footer-extra a:hover {
        background-color: ${colors.white};
      }

      .date-picker__button:focus,
      .date-picker__button .ant-calendar-picker-input:focus,
      .date-picker__dropdown .ant-calendar:focus,
      .date-picker__dropdown .ant-calendar-date-panel:focus,
      .date-picker__dropdown .ant-calendar-panel:focus,
      .date-picker__dropdown .ant-calendar-input:focus {
        outline: none;
      }

      .date-picker__dropdown.slide-up-appear,
      .date-picker__dropdown.slide-up-enter {
        animation-name: SlideUpIn;
        animation-duration: 0.3s;
        animation-fill-mode: forwards;
        animation-iteration-count: 1;
      }

      .date-picker__dropdown.slide-up-leave.slide-up-leave-active {
        animation-name: fadeOut;
        animation-duration: 0.4s;
        animation-play-state: running;
        pointer-events: none;
      }
    `}</style>
  );
};

export default ButtonStyles;
