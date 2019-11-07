import bcrypt from 'bcrypt';
const userDatas =  {
  'id': 'a5fb0450-2da1-4278-ba0f-8b930604b976',
  'email': 'ericrukundo@gmail.com',
  'firstName': 'Yves',
  'lastName': 'byiringiro',
  'password': 'byiriingiro55',
  'createdOn': '2019-03-13T11:39:26.470Z'
};

const wrongNewUser =  {
  'email': '',
  'firstName': '',
  'lastName': '',
  'password': '',
};
const wrongNewEntry =  {
  'title': '',
  'description': '',
};
const newUser =  {
  'firstName': 'example',
  'lastName': 'example',
  'password': 'Eric00005',
  'email': 'mukunzifelix@gmail.com'
};
const testUser = {
  'email': 'example123@gmail.com',
  'firstName': 'example',
  'lastName': 'example',
  'password': 'Eric00005',
};
const testentry = {
  "title":"mylife",
  "description":"when i was child i did have some thing",
  "email":"mukunzifelix@gmail.com"
};

const userDetail = {
  'id': 6,
  'email': 'ericrukundo005@gmail.com',
  'firstName': 'eric',
  'lastName': 'prestein',
  'password': bcrypt.hashSync('13085211', 6),
  'createdOn': '2019-03-05T03:21:04.694Z'
};
const entryDetail = {
  'id': "572601e5-39cf-400b-8a3e-b68ba0c0bab1",
  "title": "jhjhjghjgjghjghfg",
  "description": "jhbjbhvhvhvhvhvh",
  "email": "byiri@gmail.com",
  "createdon": "2019-11-06T13:15:35.278Z"
};
const loginUser = {
  'email': 'example123@gmail.com',
  'password': 'Eric00005',
};
const loginUserWrongPass = {
  'email': 'example123@gmail.com',
  'password': 'Eri004343405',
};

const loginUserNotFound = {
  'email': 'example1234567@gmail.com',
  'password': 'Eri004343405',
};
const loginUserInvalidInput = {
  'email': 'example1234567com',
  'password': 'Eri004343405',
};
const entryl =   {
  'title': 'test entry',
  'description': 'During my life i was not able to fullfill',
};
export {
  userDatas,
  userDetail,
  loginUser,
  loginUserWrongPass,
  newUser,
  wrongNewUser,
  testUser,
  loginUserNotFound,
  loginUserInvalidInput,
  testentry,
  entryDetail ,
  wrongNewEntry,
  entryl
};