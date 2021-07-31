import React, { ReactNode, FunctionComponent } from 'react';

import PokemonListPage from './pokemon-list/pokemon-list.page';
import PokemonDetailPage from './pokemon-detail/pokemon-detail.page';
import { RoutingModulesInterface } from '../../shared/modules/routing/interface/routing-modules.interface';
import { RoutingModulesDecorator, RoutingSubModulesDecorator } from '../../shared/modules/routing/decorator/router.decorator';
import LoadingScreenComponent from '../../shared/components/loading-screen/loading-screen.component';

/**
 * Pokemon Router
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2020.08.22
 */
@RoutingModulesDecorator('')
class PokemonRouter implements RoutingModulesInterface {
    render(): ReactNode {
        return ((): ReactNode => (
            <>
                <LoadingScreenComponent show={true} />
            </>
        ))();
    }

    /**
     * Pokemon Detail Path
     * @return {FunctionComponent}
     */
    @RoutingSubModulesDecorator('/detail/:id')
    public pokemonDetailPath(): FunctionComponent {
        return PokemonDetailPage;
    }

    /**
     * Pokemon Search Path
     * @return {FunctionComponent}
     */
    @RoutingSubModulesDecorator('/')
    public PokemonListPage(): FunctionComponent {
        return PokemonListPage;
    }
}

export default PokemonRouter;