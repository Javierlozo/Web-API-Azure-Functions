const CosmosClient = require("@azure/cosmos").CosmosClient;



const client = new CosmosClient({ endpoint, key})


module.exports = async function (context, req) {
    context.res = {
        // status: 200, /* Defaults to 200 */
        body: responseMessage
    };
}