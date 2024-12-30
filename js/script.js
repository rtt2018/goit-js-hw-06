const firstResButton = document.getElementById("first-task-res-button");
const messageField = document.getElementById("classInputField");
const boxSize = document.getElementById("box-size");
const resField = document.getElementById("first-task-result-field");

firstResButton.addEventListener("click", () => {
  resField.value = String(
    isEnoughCapacity(
      JSON.parse(
        messageField.value.replace(/([{,]\s*)(\w+)(\s*:)/g, '$1"$2"$3')
      ),
      Number.parseInt(boxSize.value)
    )
  );
});

// Друге завдання

const secondResButton = document.getElementById("second-task-res-button");
const firstArray = document.getElementById("firstArrayField");
const resSecondField = document.getElementById("second-task-result-field");

secondResButton.addEventListener("click", () => {
  if (firstArray.value) {
    resSecondField.value = calcAverageCalories(
      JSON.parse(
        firstArray.value
          .replace(/(\w+)(?=:)/g, '"$1"')
          .replace(/,(\s*[}\]])/g, "$1")
      )
    );
  } else {
    resSecondField.value = "Введіть масив у текстове поле!";
  }
});

// Третє завдання

const thirdResButton = document.getElementById("third-task-res-button");
const switchRadio = document.getElementsByName("third-tasc-method");
const changeUsernameInput = document.getElementById("third-tasc-name-value");
const changeTimeInput = document.getElementById("third-radio-time-value");
const resThirdField = document.getElementById("third-task-result-field");

thirdResButton.addEventListener("click", () => {
  for (const radioChecked of switchRadio) {
    if (radioChecked.checked) {
      switch (Number.parseInt(radioChecked.value)) {
        case 1:
          console.log("Змінюємо ім'я", changeUsernameInput.value);

          profile.changeUsername(changeUsernameInput.value);
          resThirdField.value = `Ім'я спортсмена змінено на ${changeUsernameInput.value}`;
          break;
        case 2:
          profile.updatePlayTime(
            Number.parseInt(Number.parseInt(changeTimeInput.value))
          );
          resThirdField.value = `Кількість годин збільшено на ${Number.parseInt(
            changeTimeInput.value
          )}`;
          break;
        case 3:
          resThirdField.value = profile.getInfo();
          break;
        default:
          resThirdField.value = "Виберіть метод!";
          break;
      }
    }
  }
});
