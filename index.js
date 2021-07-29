const express = require("express");

const app = express();
// const schema = require("./schema");
import schema from "./schema";
const { graphqlHTTP }= require("express-graphql");
import resolvers from "./resolvers";



console.log(schema);
app.get("/", (req, res) => {
    res.send("Working with graphql")
});

const root = resolvers;

app.use("/graphql", graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true
}))


app.listen(8080, () => {
    console.log("Server is running at 8080/graphql")
})