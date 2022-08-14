import { REST } from '@discordjs/rest'
import { Routes } from 'discord-api-types/v9'
import 'dotenv/config'
import commandsList from './commands'

const commands = commandsList
  .map((command) => command.builder)
  .map((command) => command.toJSON())

const rest = new REST({ version: '9' }).setToken(process.env.DISCORD_TOKEN)

rest
  .put(Routes.applicationCommands(process.env.DISCORD_CLIENT_ID), {
    body: commands,
  })
  .then(() => console.log('Successfully registered application commands.'))
  .catch(console.error)
