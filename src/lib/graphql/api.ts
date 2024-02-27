import {GraphQLClient} from 'graphql-request';
const API_URL = 'http://localhost:9000/api'

export const apiClient = new GraphQLClient(API_URL);
