import { localStorage } from 'global';

const LocalStorage = {
  setValue(key, value) {
    try {
      return localStorage.setItem(`BOARDGAMES_${key}`, JSON.stringify(value));
    } catch (err) {
      return false;
    }
  },
  getValue(key, defaultValue) {
    let value;

    try {
      value = JSON.parse(localStorage.getItem(`BOARDGAMES_${key}`));
    } catch (err) {
      value = defaultValue;
    }

    return value || defaultValue;
  },
  removeItem(key) {
    localStorage.removeItem(`BOARDGAMES_${key}`);
  }
};

export default LocalStorage;
