const express = require("express");

const app = express();
// const schema = require("./schema");
import schema from "./schema";
const { graphqlHTTP }= require("express-graphql");



console.log(schema);
app.get("/", (req, res) => {
    res.send("Working with graphql")
});

const root = { friend: () => {
    return {
        "id": 89898,
        "firstName": "Jay",
        "lastName": "Sharma",
        "gender": "Male",
        "email": "Jay@gmail.com"

    }
}}

app.use("/graphql", graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true
}))


app.listen(8080, () => {
    console.log("Server is running at 8080/graphql")
})