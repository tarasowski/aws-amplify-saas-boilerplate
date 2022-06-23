import { API } from "aws-amplify";


export const callAPI = async (operation, payload) =>
    await API.graphql(graphqlOperation(operation, payload));
