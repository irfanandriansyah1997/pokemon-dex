/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { FunctionComponent } from 'react';
import { gql, useQuery } from '@apollo/client';

const GET_POKEMON = gql`
    query GetPokemons($first: Int!) {
        pokemons(first: $first) {
            id
            number
            name
            types
            image
        }
    }
`;

/**
 * Pokemon List Page
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2020.08.22
 */
const PokemonListPage: FunctionComponent = () => {
    const { loading, error, data } = useQuery(GET_POKEMON, {
        variables: { first: 10 },
    });
    
    if (loading) {
        return <div>Loading</div>;
    }

    if (error) {
        return <div>{error.message}</div>;
    }

    return (
        <div className="heading">
            {data && data.pokemons ? data.pokemons.map((item: any) => (
                <div key={item.id}>
                    <img src={item.image} alt={item.name} />
                    {item.name}
                    {item.types.map(((type: string) => (
                        <p key={`${item.id}-${type}`}>{type}</p>
                    )))}
                </div>
            )) : null}
        </div>
        
    );
};

export default PokemonListPage;