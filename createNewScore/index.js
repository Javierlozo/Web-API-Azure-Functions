require('dotenv').config();

const ENDPOINT = process.env.ENDPOINT
const KEY = process.env.KEY

const CosmosClient = require("@azure/cosmos").CosmosClient;

const client = new CosmosClient({ ENDPOINT, KEY})

const databaseId = "ScoreDB";
const containerId = "Scores";

const database = client.database(databaseId);
const container = database.container(containerId);

module.exports = async function (context, req) {

    let scoreItem = {
        "name": req.query.name,
        "score": 0
    }

    const { resource: createdItem } = await container.items.create(scoreItem); 

    const responseMessage = "Done!"

    context.res = {
        // status: 200, /* Defaults to 200 */
        body: responseMessage
    };
}