export const formatTime = (time) => {
  if (time === undefined || typeof time === 'string' || typeof time === 'function' || time < 0) return null;
  else return timeToHHMMSS(time);
};

const timeToHHMMSS = (time) => {
  let seconds = Math.floor(time % 60);
  let minutes = Math.floor((time / 60) % 60);
  let hours = Math.floor((time / 3600) % 60);

  if (hours < 10) {
    hours = '0' + hours;
  }
  if (minutes < 10) {
    minutes = '0' + minutes;
  }
  if (seconds < 10) {
    seconds = '0' + seconds;
  }

  return `${hours}:${minutes}:${seconds}`;
};
