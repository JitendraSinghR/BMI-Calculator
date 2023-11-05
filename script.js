const form = document.querySelector("form");
form.addEventListener("submit", (e) => {
  e.preventDefault();

  const height = parseInt(document.querySelector("#height").value);
  const weight = parseInt(document.querySelector("#weight").value);
  const result = document.querySelector("#result");

  if (height === "" || height <= 0 || isNaN(height)) {
    result.innerHTML = `Please enter a valid height`;
  } else if (weight === "" || weight <= 0 || isNaN(weight)) {
    result.innerHTML = `Please enter a valid weight`;
  } else {
    let bmi = (result.innerHTML = (
      weight /
      ((height * height) / 10000)
    ).toFixed(2));

    if (bmi < 18.6) {
      result.innerHTML = `${bmi} : You are under weight`;
    } else if (bmi > 18.6 && bmi < 24.9) {
      result.innerHTML = `${bmi} : Your weight is in normal range`;
    } else {
      result.innerHTML = `${bmi} : You are overweight`;
    }
  }
});
