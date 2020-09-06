import {
    ApolloCache,
    NormalizedCacheObject
} from '@apollo/react-hooks';

/**
 * Graphql Builder Param Interface
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2020.09.06
 */
export interface GraphqlBuilderInterface {
    cache: ApolloCache<NormalizedCacheObject>;
    host: string;
    port?: number;
}
