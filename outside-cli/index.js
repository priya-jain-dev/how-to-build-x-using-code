const minimist = require('minimist');
const error = require('./utils/error')

module.exports = () => {
    console.log('Welcome to the outside!');
    const args = minimist(process.argv.slice(2));
    console.log(args);

    if (args.version || args.v) {
        cmd = 'version'
    }

    if (args.help || args.h) {
        cmd = 'help'
    }
    const cmd = args._[0];


    switch (cmd) {
        case 'today':
            require('./cmds/today')(args)
            break
        case 'version':
            require('./cmds/version')(args)
            break

        case 'help':
            require('./cmds/help')(args)
            break

        case 'forecast':
            require('./cmds/forecast')(args)
            break
            default:
                error(`"${cmd}" is not a valid command!`, true)
                break
    }
}