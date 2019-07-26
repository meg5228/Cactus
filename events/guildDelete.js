// Executes when bot leaves a guild/server

module.exports = class {
    constructor(client) {
        this.client = client;
    }

    async run(guild) {
        // this event triggers when the bot is removed from a guild.
        console.log(`I have been removed from: ${guild.name} (id: ${guild.id})`);
    }
}