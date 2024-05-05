import request from 'supertest';
import { expect } from 'chai';
import { createToken } from '../function/createToken.mjs';

const baseUrl = 'https://kasir-api.belajarqa.com';

describe("User Test", () => {
    let accessToken;
    before(async () => {
        accessToken = await createToken();
    });

    it("Positive - success create a new user", async () => {
        const payload = {
            "name": "kasir-kasa1",
            "email": "kasa1@example.com",
            "password": "kasa1adm"
        };

        const response = await request(baseUrl)
            .post("/users")
            .send(payload)
            .set("Authorization", `Bearer ${accessToken}`);

        expect(response.status).to.equal(201);
        expect(response.body.data.name).to.equal("kasir-kasa1");
    });

    it("Positive - success get user details", async () => {
        //menyusul
        
    });

    it("Positive - success update user", async () => {
        //menyusul
    });

    it("Positive - success delete user", async () => {
        //menyusul
    });

});
