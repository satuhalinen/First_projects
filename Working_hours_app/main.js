const workingHours = () => {
  const arrival = document.querySelector("#arrival").value;
  const exit = document.querySelector("#exit").value;
  const answer = document.querySelector("#answer");
  let text;
  const hours = exit - arrival;
  if (hours >= 8) {
    text = `Your working hours are ${hours}. You can go home now!`;
  } else {
    text = `Your working hours are ${hours}. You still have to work ${
      8 - hours
    } hours.`;
  }
  answer.textContent = text;
};
