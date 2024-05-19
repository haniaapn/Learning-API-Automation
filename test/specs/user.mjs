import request from 'supertest';
import { expect } from 'chai';
import { createToken } from '../function/createToken.mjs';

const baseUrl = 'https://kasir-api.belajarqa.com';

describe("User Test", () => {
    let accessToken;
    let userId;
    
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

        // Save the userId for later use
        userId = response.body.data.userId;
    });

    it("Positive - success get user", async () => {
        const response = await request(baseUrl)
            .get(`/users`)
            .set("Authorization", `Bearer ${accessToken}`);

        expect(response.status).to.equal(200);
    });

    it("Positive - success update user", async () => {
        const payload = {
            "name": "kasir-kasa1-updated",
            "email": "kasa1-updated@example.com"
        };

        const response = await request(baseUrl)
            .put(`/users/${userId}`)
            .send(payload)
            .set("Authorization", `Bearer ${accessToken}`);

        expect(response.status).to.equal(200);
        expect(response.body.data.name).to.equal("kasir-kasa1-updated");
    });

    it("Positive - success delete user", async () => {
        const response = await request(baseUrl)
            .delete(`/users/${userId}`)
            .set("Authorization", `Bearer ${accessToken}`);

        expect(response.status).to.equal(200);
        expect(response.body.message).to.equal("User berhasil dihapus");
    });

});
