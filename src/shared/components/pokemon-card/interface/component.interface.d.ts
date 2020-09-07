import { PokemonType } from '../../../interface/pokemon.interface';

/**
 * Pokemon Card Interface
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2020.09.07
 */
export interface PokemonCardInterface {
    images: string;
    link: string;
    name: string;
    number: string;
    types: PokemonType[];
}
