module.exports = class {
    constructor (client) {
      this.client = client;
    }
  
    async run () {
  
      // Waits for guild/discord info to become avalible
      await this.client.wait(1000);
  
      // This loop ensures that client.appInfo always contains up to date data
      this.client.appInfo = await this.client.fetchApplication();
      setInterval( async () => {
        this.client.appInfo = await this.client.fetchApplication();
      }, 60000);
  
      this.client.user.setActivity(`A numbers game`);
    
      // Log that we're ready to serve, so we know the bot accepts commands.
      this.client.logger.log(`${this.client.user.tag}, ready to serve ${this.client.users.size} users in ${this.client.guilds.size} servers.`, "ready");
    }
  };