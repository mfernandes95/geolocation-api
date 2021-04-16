import request from "supertest";
import app from "../../src/app";

import mongoose from "mongoose";
import MongoConnection from "../utils/MongoConnection";
import MongoConnectionClose from "../utils/MongoConnectionClose";

import City from "../../src/app/schemas/City";

const cityPayload = {
  name: "Paulínia",
  uf: "SP",
};

describe("City", () => {
  beforeAll(async () => {
    if (!process.env.MONGO_URL)
      throw new Error("MongoDB server not initialized");

    await MongoConnection(process.env.MONGO_URL);
  });

  afterAll(async (done) => {
    // await mongoose.connection.close();
    await MongoConnectionClose();
    done();
  });

  beforeEach(async () => {
    await City.deleteMany({});
  });

  it("Should create a client", async () => {
    const response = await request(app).post("/cities").send(cityPayload);

    expect(response.status).toBe(201);
  });

  it("Should get client by NAME", async () => {
    const city = await City.create(cityPayload);

    const response = await request(app).get(`/name-cities/${city.name}`);

    expect(response.status).toBe(200);
  });

  it("Should return error 400 when get client by NAME nonexistent", async () => {
    const response = await request(app).get("/name-cities/sasasa");

    expect(response.status).toBe(400);
  });

  it("Should get client by UF", async () => {
    const city = await City.create(cityPayload);

    const response = await request(app).get(`/uf-cities/${city.uf}`);

    expect(response.status).toBe(200);
  });

  it("Should return error 400 when get client by UF nonexistent", async () => {
    const response = await request(app).get("/uf-cities/sjaosja");

    expect(response.status).toBe(400);
  });
});
