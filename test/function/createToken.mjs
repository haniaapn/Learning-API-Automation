import request from 'supertest';
import { expect } from 'chai';

const baseUrl = 'https://kasir-api.belajarqa.com';

export async function createToken(){
    const payload = {
        "email": "Toko1@hania.com",
        "password": "123abc@",
    }
    
    const respone = await request(baseUrl)
    .post("/authentications")
    .send(payload)
    const accessToken = (await respone).body.accessToken
    return accessToken
}