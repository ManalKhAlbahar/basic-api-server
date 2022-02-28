"use strict";
const server = require("../src/server");

const supertest = require("supertest");

const request = supertest(server.app);


describe("test my server", () => {
  it("test/", async () => {
    const response = await request.get("/");
    expect(response.text).toEqual("home route");
  });
});

describe("test food route", () => {
  it("test get food", async () => {
    const response = await request.get("/food");
    expect(response.status).toEqual(200);
  });

  it("post new food", async () => {
    const response = await request.post("/food").send({
      foodName: "test",
     ingredient: "test",
    });
    expect(response.status).toEqual(201);
    id = response.body.id;
  });

  it("test get food by id", async () => {
    const response = await request.get(`/food/${id}`);
    expect(response.status).toEqual(200);
  });

  it("test delete food", async () => {
    const response = await request.delete(`/food/${id}`);
    expect(response.status).toEqual(204);
  });

  it("test update food", async () => {
    const response = await request.post(`/food/${id}`).send({
      foodName: "test",
      ingredient: "test",
    });
    expect(response.status).toEqual(201);
  });
});

describe("test clothes route", () => {
  it("test get clothes", async () => {
    const response = await request.get("/clothes");
    expect(response.status).toEqual(200);
  });

  it("post new clothes", async () => {
    const response = await request.post("/clothes").send({
      clothesType: "test",
      fabricType: "test",
    });
    expect(response.status).toEqual(201);
    id = response.body.id;
  });

  it("test delete clothes", async () => {
    const response = await request.delete(`/clothes/${id}`);
    expect(response.status).toEqual(204);
  });

  it("test get clothes by id", async () => {
    const response = await request.get(`/clothes/${id}`);
    expect(response.status).toEqual(200);
  });

  it("test update clothes", async () => {
    const response = await request.put(`/clothes/${id}`).send({
        clothesType: "test",
        fabricType: "test",
    });
    expect(response.status).toEqual(201);
  });
});
