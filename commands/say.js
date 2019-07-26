/* eslint-disable class-methods-use-this */

const Command = require('../base/Command.js');

class Say extends Command {
  constructor(client) {
    super(client, {
      name: 'say',
      description: 'Tell me to say something!',
      usage: 'say [message you want me to say]',
      aliases: ['speak'],
    });
  }

  async run(message, args, level) { // eslint-disable-line no-unused-vars
    try {
      const sayMessage = args.join(' ');
      message.delete().catch((e) => { console.log(e); });
      message.channel.send(sayMessage);
    } catch (e) {
      console.log(e);
    }
  }
}

module.exports = Say;
