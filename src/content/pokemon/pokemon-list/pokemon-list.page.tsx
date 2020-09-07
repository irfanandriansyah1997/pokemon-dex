/* eslint-disable @typescript-eslint/no-explicit-any */
import { gql, useQuery } from '@apollo/client';
import React, { FunctionComponent } from 'react';

import style from './style/style.module.css';
import PokemonCardComponent from '../../../shared/components/pokemon-card/pokemon-card.component';

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
        variables: { first: 150 },
    });
    
    if (loading) {
        return <div>Loading</div>;
    }

    if (error) {
        return <div>{error.message}</div>;
    }

    return (
        <div className={style.container}>
            <img
                className={style.logo}
                src="https://static.dribbble.com/users/674925/screenshots/2861441/pokemon.jpg"
                alt="logo"
            />
            <div className={style.row} style={{ display: 'flex', flexWrap: 'wrap' }}>
                {data && data.pokemons ? data.pokemons.map((item: any) => (
                    <PokemonCardComponent
                        key={item.id}
                        images={item.image}
                        link=""
                        name={item.name}
                        number={item.number}
                        types={item.types}
                    />
                )) : null}
            </div>
        </div>
    );
};

export default PokemonListPage;