const dayjs = require("dayjs");

function Birthday(data_nascimento) {
  let anoAtual = dayjs().year();
  const dateBore = dayjs(data_nascimento);
  const date = dayjs(data_nascimento).set("year", anoAtual);

  const today = dayjs();

  const diffDays = date.diff(today, "days");
  const ageToday = today.diff(dateBore, "year");

  if (diffDays > 0) {
    nextBirthday = date.format("DD/MM/YYYY");
  } else {
    nextBirthday = date.add(1, "year").format("DD/MM/YYYY");
  }

  return `Seu próximo aniversário é dia ${nextBirthday} e hoje você possui ${ageToday} anos`;
}

console.log(`${Birthday("2002/01/10")}`);
