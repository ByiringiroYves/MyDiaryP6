import moment from 'moment';
import chai, { expect } from "chai";
import run from "../server";
import Request from "request";
import uuidv4 from 'uuid/v4';
import {query} from '../db/helpers/db';
import chaihttp from "chai-http";
import {createTables} from '../db/migrations/db';
import {
    testentry,
    wrongNewEntry,
    entryl
  } from './data/data'
  import {
    CREATE_ENTRY 
  } from '../db/helpers/query'
  const serverUrl = "http://localhost:3400";
  chai.use(chaihttp);
  describe("Entry:", () => {
    let server;
    let userToken;
    let user;
    let EntryId=uuidv4();
    before(async done => {
      server = run(4040);
      createTables().then(() => {
          const values = [EntryId, testentry.title, testentry.description, moment(new Date())];
          query(CREATE_ENTRY,values);
      });
      done();
    });
    after(done => {
      server.close();
      done();
    });        
describe('POST User Login auth/login:', () => {
    it('Should Return Object with status 200', (done) => {
      Request.post(`${serverUrl}/api/v2/auth/signin`,
        {json:true, form: {email: 'example123@gmail.com',password:'Eric12345'}},(err, res, body) => {
          if(!err){
            expect(body).to.be.an('object');
            expect(body).to.have.property('status').eql(200);
            expect(body).to.have.property('data');
            userToken = body.data.token;
            user=body.data.user;
          }
          done();
        });
    }); 
});
describe("POST New Entry /entries:", () => {
    it("Should Return 4000 if null token", done => {
      Request.post(
        `${serverUrl}/api/v2/entries`,
        {json: true, headers: {
        'my-dialy-access-token':undefined},form: entryl},(err, res, body) => {
          if (!err) {
            expect(body).to.be.an("object");
            expect(body).to.have.property("status").eql(400);
            expect(body).to.have.property('data');
          }
          done();
        }
      );
    });
    it('Should Return Object with 400 for invalid token', (done) => {
        Request.post(`${serverUrl}/api/v2/entries`,
          {json:true, headers: {
            'my-dialy-access-token':null,
          },form:entryl},(err, res, body) => {
            if(!err){
              expect(body).to.be.an('object');
              expect(body).to.have.property('error');
              expect(body).to.have.property('status').eql(400);
            }
            done();
          });
      });
});
});