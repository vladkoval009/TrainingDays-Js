
const name = 'User';

const getRandEvent = () => {

const random = Math.floor(Math.random() * 3);

  if (random === 0) {
    return 'Marathon';
  } else if (random === 1) {
    return 'Triathlon';
  } else if (random === 2) {
    return 'Pentathlon';
  }
};

// The scope of `days` is too tight 
const getTrainingDays = event => {

  let x;

  if (event === 'Marathon') {
    x = 50;
  } else if (event === 'Triathlon') {
    x = 100;
  } else if (event === 'Pentathlon') {
    x = 200;
  }

  return x;
};

// The scope of `name` is too tight 
const logEvent = (name,event) => {
  console.log(`${name}'s event is: ${event}`);
};

const logTime = (name,days) => {
  console.log(`${name}'s time to train is: ${days} days`);
};

const event = getRandEvent();
const days = getTrainingDays(event);
// Define a `name` variable. Use it as an argument after updating logEvent and logTime 


logEvent(name,event);
logTime(name,days);


const event2 = getRandEvent();
const days2 = getTrainingDays(event2);
const name2 = 'Warren';
 
logEvent(name2, event2);
logTime(name2, days2);