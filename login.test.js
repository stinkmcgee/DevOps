import assert from 'assert';
import login from '../utils/login.mjs';

it("Test the STEDI Login Endpoint", async({userName, password})=>{ 

    const loginToken= await login({userName: "highground@jedicouncil.com",password:"High!ground69"});
 
    assert.equal(loginToken.length,36);
 } 
 );