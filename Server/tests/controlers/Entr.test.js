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
  describe("POST New Entry n/entries:", () => {
    it('Should Return Object with 400 for invalid token', (done) => {
        Request.post(
            `${serverUrl} /api/v1/entries`,
            {
          json:true, headers: {
            'my-dialy-access-token':`${userToken}jhcdjcdjgchghgigiug`,
          }, form: {title: 'myDiary',description :'zasgdsffngm'}},(err, res, body) => {
            if(!err){
              expect(body).to.be.an('object');
              expect(body).to.have.property('error');
              expect(body).to.have.property('status').eql(400);
            }
            done();
          });
      });
    })})