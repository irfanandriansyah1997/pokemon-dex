import PropTypes from 'prop-types';
import React, { FunctionComponent, Validator } from 'react';

import style from './style/style.module.css';

import { PokemonType } from '../../interface/pokemon.interface';
import { PokemonCardInterface } from './interface/component.interface';
import { POKEMON_TYPES_COLOR } from '../../constant/pokemon-type.contant';

/**
 * Pokemon Card Component
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2020.09.07
 */
const PokemonCardComponent: FunctionComponent<PokemonCardInterface> = ({
    images,
    link,
    name,
    number,
    types
}) => {
    return (
        <a href={link} className={style.card}>
            <img className={style.image} src={images} alt={name} />
            <h4 className={style.id}>#{number}</h4>
            <h5 className={style.name}>{name}</h5>
            <div className={style['type-container']}>
                {types.map((item) => (
                    <p
                        className={style.types}
                        style={{
                            color: POKEMON_TYPES_COLOR[item],
                            borderColor: POKEMON_TYPES_COLOR[item]
                        }}
                        key={`${number}-${item}`}
                    >
                        {item}
                    </p>
                ))}
            </div>
            
        </a>
    );
};

PokemonCardComponent.propTypes = {
    images: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    types: PropTypes.arrayOf(
        PropTypes.oneOf<PokemonType>([
            'Grass',
            'Poison',
            'Fire',
            'Flying',
            'Water',
            'Bug',
            'Normal',
            'Electric',
            'Ground',
            'Fairy',
            'Fighting',
            'Psychic',
            'Rock',
            'Steel',
            'Ice',
            'Ghost',
            'Dragon'
        ])
    ).isRequired as Validator<PokemonType[]>
};

PokemonCardComponent.defaultProps = {
    types: []
};

export default PokemonCardComponent;