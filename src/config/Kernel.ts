import 'reflect-metadata'
import { ContainerBuilder } from 'node-dependency-injection'

import { load as ApplicationLoad } from '../DependencyInjection/ApplicationExtension'
import { logger } from '../util/logger'

export interface ContainerLoaders {
    [key: string]: (container: ContainerBuilder) => Promise<ContainerBuilder>
}

const containerLoader: ContainerLoaders = {
    ApplicationLoad,
}

/**
 * Load application Container
 *
 * @return {Promise<ContainerBuilder>} a promise of ContainerBuilder
 */
export async function loadContainer (): Promise<ContainerBuilder> {
    /**
     * Intentionally synchronous to ensure load order is in sequence.  Don't
     * make this into `await promise.all`, you'll introduce bugs by removing
     * deterministic load order.
     */
    let container = new ContainerBuilder()

    for (const containerName in containerLoader) {
        logger.info(`Loading ${containerName} container...`)
        container = await containerLoader[containerName](container)
        logger.info(`End Loading ${containerName} container...`)
    }

    container.compile()

    return container
}
