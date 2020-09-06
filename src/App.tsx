import PokemonRouter from './content/pokemon/pokemon.router';
import RoutingAppAbstract from './shared/modules/routing/abstract/routing-app.abstract';

/**
 * Apps Instance
 * @returns {ReactElement}
 */
class App extends RoutingAppAbstract {
    /**
     * Modules
     * @return {Object[]}
     */
    get modules(): Object[] {
        return [
            PokemonRouter
        ];
    }
}

export default App;
