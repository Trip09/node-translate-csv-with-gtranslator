/* globals process */
import * as commander from 'commander'

import { TranslatorInterface } from './Services/Translator'
import { loadContainer } from './config/Kernel'
import { logger } from './util/logger'

const program = new commander.Command()

async function translator () {
    logger.info('Starting translator process')

    const container = await loadContainer(),
        mediator: TranslatorInterface = container.get('TranslatorService')

    await mediator.translate('en', 'en', 'merda')

}

program
    .command('worker:translate')
    .description('Process message to translate',)
    .action(translator)

program.command('*').action((env) => {

    logger.info('Not sure what you wanted to do: "%s"', env)

})

program.parse(process.argv)
