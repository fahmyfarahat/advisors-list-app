const express = require("express");
const faker = require("faker");
const app = express();

const createAdvisor = (num = 15) => {
  return new Array(num)
    .fill({})
    .map((currnet, index) => {
      return {
        ...currnet,
        id: index+1,
        name: faker.name.findName(),
        avatar: faker.image.avatar(),
        status: faker.random.arrayElement(["online", "offline"]),
        language: faker.random.arrayElement(["english", "german", "spanish", "italian"]),
        rating: faker.random.number({ "min": 3, "max": 5, precision: 0.5 }),
        reviews: faker.random.number({ "min": 100, "max": 10000 })
    };
  });
};

app.set("port", process.env.PORT ||8080);

app.get("/api/advisors", (req, res) => {
  const advisorList = createAdvisor();
  setTimeout(function(){ 
    res.json(advisorList);    
  }, 1000);
});

app.listen(app.get("port"), () => {
  console.log(`Find the server at: http://localhost:${app.get("port")}/`); // eslint-disable-line no-console
});