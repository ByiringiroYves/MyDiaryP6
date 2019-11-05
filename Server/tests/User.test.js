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
        `${serverUrl}/api/v2/auth/signup`,
        {
          
          json: true,
          form: {
            "firstName":"BYIRINGIROdryhh",
            "lastName":"Yvesdfjjjjuio",
            "email":"dahabshirerjhhuyu@gmail.com",
            "password":"byidvdhjftryrehhuuringirdxo055"
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
    it("Should Return 400 if client user is already created", done => {
      Request.post(
        `${serverUrl}/api/v2/auth/signup`,
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
   
    //login tests
    it("Should Return 200 if client user is  signed in ", done => {
      Request.post(
        `${serverUrl}/api/v2/auth/signin`,
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
    // it("Should Return 401 if client user is not exists ", done => {
    //   Request.post(
    //     `${serverUrl}/api/v2/auth/signin`,
    //     {
    //       json: true,
    //       form: {
    //         email: "erichnhghjhgug@gmail.com",
    //         password: "behanbjbjhikjhihhjkjhve23456"
    //       }
    //     },
    //     (err, res, body) => {
    //       if (!err) {
    //         expect(body).to.be.an("object");
    //         expect(body)
    //           .to.have.property("status")
    //           .eql(401);
    //       }
    //       done();
    //     }
    //   );
    // });
    it("Should Return 400 if client user password is invalid ", done => {
      Request.post(
        `${serverUrl}/api/v2/auth/signin`,
        {
          json: true,
          form: {
            email: "erich@gmail.com",
            password: "behahjk"
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
  });
});
