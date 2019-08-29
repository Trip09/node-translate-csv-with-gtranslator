import { ContainerBuilder } from 'node-dependency-injection'

import { Translator } from '../Services/Translator'
import { LoggerInterface, logger } from '../util/logger'

export const parameters = {
    'TranslatorService': 'Translator',
    'LoggerService': 'LoggerInterface',
}

export async function load (container = new ContainerBuilder()) {
    container = registerLoggerService(container)
    container = registerTranslatorServices(container)

    return container
}

function registerLoggerService (container: ContainerBuilder): ContainerBuilder {
    container.set('LoggerService', logger)

    return container
}

function registerTranslatorServices (container: ContainerBuilder): ContainerBuilder {
    container.register('TranslatorService', Translator)

    return container
}
