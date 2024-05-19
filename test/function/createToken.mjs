import request from 'supertest';
import { expect } from 'chai';

const baseUrl = 'https://kasir-api.belajarqa.com';

let accessToken; // Deklarasikan variabel untuk menyimpan token

export async function createToken(){
    const payload = {
        "email": "Toko1@hania.com",
        "password": "123abc@",
    };
    
    const response = await request(baseUrl)
        .post("/authentications")
        .send(payload);

    accessToken = response.body.data.accessToken;
    return accessToken;
}