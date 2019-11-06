import moment from 'moment';
import chai, { expect } from "chai";
import run from "../server";
import Request from "request";
import uuidv4 from 'uuid/v4';
// import db from '../db/helpers/db';
import {query} from '../db/helpers/db';
import chaihttp from "chai-http";
import helpers from "../helpers/password";
import {createTables} from '../db/migrations/db';
import {
  loginUser,
  loginUserWrongPass,
  newUser,
  wrongNewUser,
  testUser,
  loginUserNotFound,
} from './data/data'
import {
  CREATE_USER
} from '../db/helpers/query'
const serverUrl = "http://localhost:3400";
chai.use(chaihttp);
describe("User:", () => {
  let server;
  let userId=uuidv4();
  before(async done => {
    server = run(4040);
    createTables().then(() => {
      helpers.hashPassword(testUser.password).then((pass) => {
        const values = [userId, testUser.firstName, testUser.lastName, testUser.email, pass, moment(new Date())];
        query(CREATE_USER,values);
      });
    });
    done();
  });
  after(done => {
    server.close();
    done();
  });
  describe("POST User signup /auth/signup:", () => {
    it("Should Return Error if wrong input", done => {
      Request.post(
        `${serverUrl}/api/v2/auth/signup`,
        {json: true, form: wrongNewUser},(err, res, body) => {
          if (!err) {
            expect(body).to.be.an("object");
            expect(body)
              .to.have.property("status")
              .eql(400);
          }
          done();
        }
      );
    });
    it("Should Return 400 if client user is already created", done => {
      Request.post(
        `${serverUrl}/api/v2/auth/signup`,
        {json: true, form: testUser },(err, res, body) => {
          if (!err) {
            expect(body).to.be.an("object");
            expect(body)
              .to.have.property("status")
              .eql(400);
          }
          done();
        }
      );
    });

    it("Should Return 200 if client user is created ", done => {
      Request.post(
        `${serverUrl}/api/v2/auth/signin`,
        {json: true, form: newUser},(err, res, body) => {
          if (!err) {
            expect(body).to.be.an("object");
            expect(body)
              .to.have.property("status")
              .eql(200);
          }
          done();
        }
      );
    });


    //login tests


    it("Should Return 200 if client user is  signed in ", done => {
      Request.post(
        `${serverUrl}/api/v2/auth/signin`,
        {json: true,form: loginUser},(err, res, body) => {
          if (!err) {
            expect(body).to.be.an("object");
            expect(body)
              .to.have.property("status")
              .eql(200);
          }
          done();
        }
      );
    });
    it("Should Return 400 when password is wrong ", done => {
      Request.post(
        `${serverUrl}/api/v2/auth/signin`,
        {json: true,form: loginUserWrongPass},(err, res, body) => {
          if (!err) {
            expect(body).to.be.an("object");
            expect(body)
              .to.have.property("status")
              .eql(400);
          }
          done();
        }
      );
    });
    it("Should Return 404 if client user is not found ", done => {
      Request.post(
        `${serverUrl}/api/v2/auth/signin`,
        {json: true,form: loginUserNotFound},(err, res, body) => {
          if (!err) {
            expect(body).to.be.an("object");
            expect(body)
              .to.have.property("status")
              .eql(404);
          }
          done();
        }
      );
    });
  });
});
