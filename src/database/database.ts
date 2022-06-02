const dbCoffeApp = {
  database: "coffeApp",
  version: "0.0.1",
  encrypted: false,
  mode: "full",
  tables: [
    {
      name: "user",
      schema: [
        { column: "id", value: "INTEGER PRIMARY KEY NOT NULL" },
        { column: "email", value: "TEXT NOT NULL" },
        { column: "password", value: "TEXT NOT NULL" },
        { column: "address", value: "TEXT" },
      ],
      values: [[1, "teste@teste.com", "1234", "Rua Teste, 123  "]],
    },
    {
      name: "request",
      schema: [
        { column: "id", value: "INTEGER PRIMARY KEY NOT NULL" },
        { column: "user", value: "INTEGER NOT NULL" },
        { column: "description", value: "TEXT NOT NULL" },
        { foreignkey: "userId", value: "REFERENCES user(id)"}
      ],
      values: [[1, 1, "1234", "1 un iced coffee matcha"]],
    },
  ],
};
export default dbCoffeApp;
