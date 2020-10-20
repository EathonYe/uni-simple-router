import {InstantiateConfig} from '../options/config';
import {RoutesRule} from '../options/base';
import {baseConfig} from '../helpers/config';
const merge = require('lodash.merge');

export function assertNewOptions<T extends InstantiateConfig>(
    options: T
): T | never {
    const {platform, routes} = options;
    if (platform == null) {
        throw new Error(`你在实例化路由时必须传递 'platform'`);
    }
    if (routes == null || routes.length === 0) {
        throw new Error(`你在实例化路由时必须传递 routes 为空，这是无意义的。`);
    }
    const mergeOptions:T = merge(baseConfig, options);
    return mergeOptions;
}

export function routesForMapRoute(routes:RoutesRule[], path:string) {

}
