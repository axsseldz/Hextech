import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
    uri: "https://mositai.stepzen.net/api/modest-salamander/__graphql ",
    headers: {
        Authorization: `Apikey ${process.env.API_KEY}`
    },
    cache: new InMemoryCache(),
});

export default client;