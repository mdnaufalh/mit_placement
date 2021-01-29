import Knex from "knex";

export const knex = Knex({
  client: "mysql",
  connection: {
    host: "127.0.0.1",
    user: "root",
    password: "",
    database: "placements",
    charset: "utf8",
  },
});

const bookshelf = require("bookshelf")(knex);

export default bookshelf;
