const Command = require('../base/Command.js');

class Ping extends Command {
  constructor(client) {
    super(client, {
      name: 'ping',
      description: 'Latency and API response times.',
      usage: 'ping',
      aliases: ['pong'],
    });
  }

  async run(message, args) { // eslint-disable-line no-unused-vars
    try {
      const m = await message.channel.send('Ping?');
      m.edit(`Pong! Latency is ${m.createdTimestamp - message.createdTimestamp}ms. API Latency is ${Math.round(this.client.ping)}ms`);
    } catch (e) {
      console.log(e);
    }
  }
}

module.exports = Ping;
