import {
    ApolloCache,
    ApolloClient,
    NormalizedCacheObject as Cache
} from '@apollo/client';

import ValidatorHelper from '../../../helper/validator.helper';
import GraphqlGeneratorHelper from '../helper/graphql-generator.helper';
import { GraphqlBuilderInterface } from '../interface/graphql.interface';
import {
    GRAPHQL_URI,
    GRAPHQL_CACHE
} from '../../../../env/env.config';

/**
 * Graphql Builder
 * @author Irfan Andriansyah <irfan@99.co>
 * @description
 * @since 2020.09.06
 */
class GraphqlBuilder {
    private cache?: ApolloCache<Cache>;

    private host?: string;

    private port?: number;

    /**
     * Set Cache Graphql Client
     * @param {ApolloCache<Cache>} cache - cache option
     * @return {this}
     */
    public setCache(cache: ApolloCache<Cache>): this {
        this.cache = cache;
        return this;
    }

    /**
     * Set Host Graphql Client
     * @param {string} host - host graphql server
     * @return {this}
     */
    public setHost(host: string): this {
        this.host = host;
        return this;
    }

    /**
     * Set Post Graphql Client
     * @param {string} host - post graphql server
     * @return {this}
     */
    public setPort(port: number): this {
        this.port = port;
        return this;
    }

    /**
     * Execute Generate Graphql Client
     * @return {ApolloClient<Cache>}
     */
    public execute(): ApolloClient<Cache> {
        const { cache, host, port } = this;

        if (
            ValidatorHelper.bulkVerifiedIsNotEmpty([
                cache,
                host
            ])
        ) {
            const param: GraphqlBuilderInterface = {
                cache: (cache as unknown) as ApolloCache<
                    Cache
                >,
                host: (host as unknown) as string,
                port
            };

            return GraphqlGeneratorHelper.generateGrapqhlClient(
                param
            );
        }

        throw new Error(
            '[ERROR] object cacher or host is undefined'
        );
    }

    /**
     * Singleton Builder
     * @return {ApolloClient<Cache>}
     */
    public static singleton(): ApolloClient<Cache> {
        return new GraphqlBuilder()
            .setHost(GRAPHQL_URI)
            .setCache(GRAPHQL_CACHE)
            .execute();
    }
}

export default GraphqlBuilder;
