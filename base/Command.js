class Command {
  constructor(client, {
    name = null,
    description = 'No description provided.',
    category = 'Miscellaneous',
    usage = 'No usage provided.',
    enabled = true,
    guildOnly = true,
    aliases = [],
  }) {
    this.client = client;
    this.conf = { enabled, guildOnly, aliases };
    this.help = {
      name, description, category, usage,
    };
  }
}
module.exports = Command;
