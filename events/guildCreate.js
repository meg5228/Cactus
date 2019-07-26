// Happens when a new guild is joined

module.exports = class {
    constructor(client) {
        this.client = client;
    }

    async run(guild) {
        // This event triggers when the bot joins a guild.
        console.log(`New guild joined: ${guild.name} (id: ${guild.id}). This guild has ${guild.memberCount} members!`);
    }
}