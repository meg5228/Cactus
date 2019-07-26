/* eslint-disable consistent-return */
module.exports = class {
  constructor(client) {
    this.client = client;
  }

  async run(message) {
    // Don't reply to bots
    if (message.author.bot) return;

    // Ignore messages that arn't for you
    if (message.content.indexOf(this.client.config.prefix) !== 0) return;

    // Cancel command execution if Cactus can't reply
    if (message.guild && !message.channel.permissionsFor(message.guild.me).missing('SEND_MESSAGES')) return;

    // If the bot is @'d, replies with its prefix
    const prefixMention = new RegExp(`^<@!?${this.client.user.id}>( |)$`);
    if (message.content.match(prefixMention)) {
      return message.reply('Thanks for thinking of me! I hope you have a good day! :)');
    }

    // Slice up message into command and args
    // const args = message.content.slice(this.client.config.prefix.length).trim().split(/ +/g);
    // const command = args.shift().toLowerCase();
  }
};
