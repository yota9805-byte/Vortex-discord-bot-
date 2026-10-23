
import {
  REST,
  Routes,
  SlashCommandBuilder
} from "discord.js";

const token = process.env.DISCORD_TOKEN;
const clientId = process.env.CLIENT_ID;
const guildId = process.env.GUILD_ID;

if (!token || !clientId || !guildId) {
  throw new Error("Missing bot environment variables.");
}

const commands = [
  new SlashCommandBuilder()
    .setName("ping")
    .setDescription("اختبار تشغيل بوت VORTEX")
    .toJSON()
];

const rest = new REST({ version: "10" }).setToken(token);

await rest.put(
  Routes.applicationGuildCommands(clientId, guildId),
  { body: commands }
);

console.log("تم تسجيل أوامر VORTEX بنجاح.");
