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

const userDetail = {
  'id': 6,
  'email': 'ericrukundo005@gmail.com',
  'firstName': 'eric',
  'lastName': 'prestein',
  'password': bcrypt.hashSync('13085211', 6),
  'createdOn': '2019-03-05T03:21:04.694Z'
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
export {
  userDatas,
  userDetail,
  loginUser,
  loginUserWrongPass,
  newUser,
  wrongNewUser,
  testUser,
  loginUserNotFound,
  loginUserInvalidInput
};