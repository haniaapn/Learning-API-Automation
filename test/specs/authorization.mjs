import request from 'supertest';
import { expect } from 'chai';
import { createToken } from '../function/createToken.mjs';

const baseUrl = 'https://kasir-api.belajarqa.com';

describe("Authorization Test", () => {
  it ("Positive - success registation", async () => {
    const payload = {
      "name": "Toko",
      "email": "Toko@hania.com",
      "password": "123abc@",
    }
    const respone = await request(baseUrl)
    .post("/registration")
    .send(payload)

    expect((await respone).body.data.name).to.equal("Toko");
    expect((await respone).status).to.equal(201);

  })

  it ("Positive - success login ", async () => {
    const payload = {
      "email": "Toko1@hania.com",
      "password": "123abc@",
    }
    const respone = await request(baseUrl)
    .post("/authentications")
    .send(payload)

    expect((await respone).body.data.user.name).to.equal("Toko");
    expect((await respone).status).to.equal(201)
  })

  it ("Positive - success get token", async () => {
    const accessToken = await createToken()
  })
})
