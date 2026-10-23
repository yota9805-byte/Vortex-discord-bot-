
import {
  Client,
  Events,
  GatewayIntentBits
} from "discord.js";

const token = process.env.DISCORD_TOKEN;

if (!token) {
  throw new Error("Missing DISCORD_TOKEN in environment variables.");
}

const client = new Client({
  intents: [GatewayIntentBits.Guilds]
});

client.once(Events.ClientReady, (bot) => {
  console.log(`VORTEX BOT ONLINE: ${bot.user.tag}`);
});

client.on(Events.InteractionCreate, async (interaction) => {
  if (!interaction.isChatInputCommand()) return;

  if (interaction.commandName === "ping") {
    await interaction.reply({
      content: "VORTEX BOT ONLINE ✅",
      ephemeral: true
    });
  }
});

client.login(token);
