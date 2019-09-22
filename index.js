const dataConector = require('./data_conector')
const { ApolloServer, gql } = require('apollo-server');

const typeDefs = gql`

type Norma {
    fecha: String
}

type XMLQuery {
    normas: [Norma]
}

type Query {
    fecha(term: String!, quantity: String!): String
}
`;


const resolvers = {
    Query: {
        // normas: (obj, args) => dataConector.getNormsByTerm(args.term, args.quantity)
        fecha: (obj, args) => dataConector.getDateOfFirstResult(args.term, args.quantity)
    },
    // Norma: {
    //     tituloNorma: (obj, args) => dataConector.getSingleNormTitle(obj.args.term)
    // }
};


const server = new ApolloServer({ typeDefs, resolvers });


server.listen().then(({ url }) => {
    console.log(`🚀  Server ready at ${url}`);
    // console.log(dataConector.getDateOfFirstResult('campesino', '2'));
});