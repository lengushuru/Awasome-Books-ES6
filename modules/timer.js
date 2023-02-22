import { DateTime } from './luxon/src/luxon.js';

const time = () => {
  const Date = document.querySelector('.time');
  Date.textContent = DateTime.now().toLocaleString({
    hour12: false,
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
  });
};

export default time;