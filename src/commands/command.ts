import { SlashCommandBuilder } from '@discordjs/builders'
import { Client, CommandInteraction } from 'discord.js'

export type CommandRunner =
  | ((client: Client, interaction: CommandInteraction) => void)
  | ((client: Client, interaction: CommandInteraction) => Promise<void>)
export interface CommandOptions {
  name: string
  runner: CommandRunner
  builder: SlashCommandBuilder
}

export default class Command {
  runner: CommandRunner
  name: string
  builder: SlashCommandBuilder

  constructor(options: CommandOptions) {
    this.runner = options.runner
    this.builder = options.builder
    this.name = options.name
  }
}
