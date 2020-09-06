import {
    ApolloClient,
    NormalizedCacheObject
} from '@apollo/react-hooks';

import ValidatorHelper from '../../../helper/validator.helper';
import { GraphqlBuilderInterface } from '../interface/graphql.interface';

/**
 * Graphql Generator Helper
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2020.09.06
 */
class GraphqlGeneratorHelper {
    /**
     * Genrate Host Graphql
     * @param {Omit<GraphqlBuilderInterface, 'cache'>} param - parameter generate host
     * @return {string}
     */
    private static generateHost({
        host,
        port
    }: Omit<GraphqlBuilderInterface, 'cache'>): string {
        if (ValidatorHelper.verifiedIsNotEmpty(port)) {
            return `${host}:${port}`;
        }

        return `${host}`;
    }

    /**
     * Genrate Graphql Client
     * @param {GraphqlBuilderInterface} param - graphql builder param
     * @return {ApolloClient<NormalizedCacheObject>}
     */
    public static generateGrapqhlClient({
        cache,
        ...res
    }: GraphqlBuilderInterface): ApolloClient<
        NormalizedCacheObject
    > {
        return new ApolloClient({
            cache,
            uri: GraphqlGeneratorHelper.generateHost(res)
        });
    }
}

export default GraphqlGeneratorHelper;
