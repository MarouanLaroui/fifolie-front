import Time from "../models/Time";

function calculateTimeLeft(endDate: Date) {
  let difference = +endDate - +new Date();

  let timeLeft = null;

  if (difference > 0) {
    timeLeft = new Time(
      Math.floor((difference / (1000 * 60 * 60)) % 24),
      Math.floor((difference / 1000 / 60) % 60),
      Math.floor((difference / 1000) % 60)
    );
  }

  return timeLeft;
}

function getDateIn24h() {
  return new Date(new Date().getTime() + 60 * 60 * 24 * 1000);
}

export { calculateTimeLeft, getDateIn24h };
