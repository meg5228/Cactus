// const Command = require('../base/Command.js');

// class Ping extends Command {
//   constructor(client) {
//     super(client, {
//       name: 'say',
//       description: 'Tell me to say something!',
//       usage: 'say [message you want me to say]',
//       aliases: ['speak'],
//     });
//   }

//   async run(message, args, level) { // eslint-disable-line no-unused-vars
//     try {
//       const sayMessage = args.join(' ');
//       // Delete cmd message, ignore errors
//       message.delete().catch((O_o) => { });
//       message.channel.send(sayMessage);
//     } catch (e) {
//       console.log(e);
//     }
//   }
// }

// module.exports = Ping;
