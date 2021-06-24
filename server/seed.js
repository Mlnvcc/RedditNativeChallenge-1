const { disconnect, connect } = require('./src/db/connect');
const mongoose = require('mongoose');
const Cathegory = require('./src/models/cathegoryModel');
const Questions = require('./src/models/questionsModel');

const cathegory = [
  {
    title: 'Космос',
  },
  {
    title: 'Кино',
  },
];

const questionsCosmos = [
  {
    questions: 'Какая страна первой запустила спутник?',
    answers: 'Ссср',
    points: 200,
  },
  {
    questions: 'Кто является первой женщиной-космонавтом?',
    answers: 'Валентина Терешкова',
    points: 400,
  },
  {
    questions:
      'Как назывался корабль, на котором 12 апреля 1961 года Юрий Гагарин совершил первый полёт в космос?',
    answers: 'Восток',
    points: 600,
  },
  {
    questions: 'Что в переводе с греческого означает "комета"?',
    answers: 'Хвостатая звезда',
    points: 800,
  },
  {
    questions:
      'Какие планеты солнечной системы вращаются в направлении, противоположном Земле?',
    answers: 'Венера и Уран',
    points: 1000,
  },
];

const questionsKino = [
  {
    questions: 'Имя актера сыгравшего роль персонажа "Deadpool"?',
    answers: 'Райан Рейнольдс',
    points: 200,
  },
  {
    questions: 'В скольких номинациях получил «Оскара» фильм «Титаник»?',
    answers: '11',
    points: 400,
  },
  {
    questions:
      'Кто является режиссером культового российского фильма «Покровские ворота»?',
    answers: 'Михаил Козаков',
    points: 600,
  },
  {
    questions:
      'Какой советский фильм первым получил «Оскара», как лучший иностранный фильм?',
    answers: 'Война и мир',
    points: 800,
  },
  {
    questions: 'Кто был режиссером-постановщиком фильма «Пятый элемент»?',
    answers: 'Люк Бессон',
    points: 1000,
  },
];

const seed = async () => {
  connect();

  await Promise.all(cathegory.map(el => Cathegory.create(el)));

  const kino = await Cathegory.findOne({ title: 'Кино' });
  const kosmos = await Cathegory.findOne({ title: 'Космос' });
  console.log(kino);
  await Promise.all(
    questionsCosmos.map(el =>
      Questions.create({ ...el, cathegoryid: kosmos._id })
    )
  );
  await Promise.all(
    questionsKino.map(el => Questions.create({ ...el, cathegoryid: kino._id }))
  );

  disconnect();
};

seed();
