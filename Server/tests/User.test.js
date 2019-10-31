import chai, { expect } from "chai";
import run from "../server";
import Request from "request";
import chaihttp from "chai-http";
const serverUrl = "http://localhost:3400";
chai.use(chaihttp);
describe("User:", () => {
  let server;
  before(async done => {
    server = run(3400);
    done();
  });
  after(done => {
    server.close();
    done();
  });
  describe("POST User signup /auth/signup:", () => {
    it("Should Return 201 if client user is  created ", done => {
      Request.post(
        `${serverUrl}/api/v1/auth/signup`,
        {
          json: true,
          form: {
            firstName: "BYIRINGIRO",
            lastName: "Yves",
            email: "erich@gmail.com",
            password: "behahjkjhve23456"
          }
        },
        (err, res, body) => {
          if (!err) {
            expect(body).to.be.an("object");
            expect(body)
              .to.have.property("status")
              .eql(201);
          }
          done();
        }
      );
    });
    it("Should Return 201 if client user is  created ", done => {
      Request.post(
        `${serverUrl}/api/v1/auth/signup`,
        {
          json: true,
          form: {
            firstName: "BYIRINGIRO",
            lastName: "Yves",
            email: "erichgmail.com",
            password: "behahjkjhve23456"
          }
        },
        (err, res, body) => {
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
    it("Should Return 201 if client user is  created ", done => {
      Request.post(
        `${serverUrl}/api/v1/auth/signup`,
        {
          json: true,
          form: {
            firstName: "BYIRINGIRO",
            lastName: "Yves",
            email: "erich@gmail.com",
            password: "behahjkjhve23456"
          }
        },
        (err, res, body) => {
          if (!err) {
            expect(body).to.be.an("object");
            expect(body)
              .to.have.property("status")
              .eql(400);
          }
          done();
        }
      );
    })
    //login
    it("Should Return 201 if client user is  created ", done => {
      Request.post(
        `${serverUrl}/api/v1/auth/signin`,
        {
          json: true,
          form: {
            email: "erich@gmail.com",
            password: "behahjkjhve23456"
          }
        },
        (err, res, body) => {
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
  });
});
