/* eslint-disable camelcase, max-len, id-length */
// Commando namespace
const { oneLine, stripIndents } = require('common-tags');

// Error messages
const error = {
	unable_to_send_dm: 'Unable to send you the help DM. You probably have DMs disabled.',
	invalid_command_usage: oneLine`Invalid command usage. 
	The \`{{commandName}}\` command's accepted format is: {{usage}}. 
	Use {{anyUsage}} for more information.`
};

// Validation for class Command
const base = {
	owner_only_command: `The \`{{commandName}}\` command can only be used by the bot owner.`,
	guild_only_command: `The \`{{commandName}}\` command must be used in a server channel.`,
	nsfw_only_command: `The \`{{commandName}}\` command can only be used in NSFW channels.`,
	permission_required: `The \`{{commandName}}\` command requires you to have the "{{permission}}" permission.`,
	permission_required_plural: oneLine`
					The \`{{commandName}}\` command requires you to have the following permissions:
					{{permissionList}}
				`,
	missing_permissions: `You do not have permission to use the \`{{commandName}}\` command.`,
	i_need_permission: `I need the "{{permission}}" permission for the \`{{commandName}}\` command to work.`,
	i_need_permission_plural: oneLine`
					I need the following permissions for the \`{{commandName}}\` command to work:
					{{permissions}}
				`,
	user_ratelimited: `You may not use the \`{{commandName}}\` command again for another {{seconds}} seconds.`,
	unknown_error: stripIndents`
			An error occurred while running the command: \`{{errorName}}: {{errorMessage}}\`
			You shouldn't ever receive an error like this.
			$t(common.contact_owner, {\"count\": \"{{ownerCount}}\", \"invite\": \"{{invite}}\", \"ownerList\": \"{{ownerList}}\" })
		`
};

// Common messages
const common = {
	or: 'or',
	s: 's',
	ms: 'ms',
	on_all_shards: 'on all shards',
	enabled: 'enabled',
	enabled_uppercase: 'Enabled',
	disabled: 'disabled',
	disabled_uppercase: 'Disabled',
	cancel_command: 'cancel',
	contact_owner: `Please contact the bot owner.`,
	contact_owner_plural: `Please contact {{ownerList}}.`,
	contact_owner_invite: `Please contact the bot owner in this server: {{invite}}.`,
	contact_owner_invite_plural: `Please contact {{ownerList}} in this server: {{invite}}.`,
	any_server: 'any server',
	all_commands: 'All commands',
	this_dm: 'this DM',
	available_commands: `Available commands in {{guildOrDm}}`,
	sent_dm_with_information: 'Sent you a DM with information.',
	guild_only: 'Usable only in servers',
	respond_to_cancel: `Respond with \`$t(common.cancel_command)\` to cancel the command.`,
	respond_to_cancel_or_finish: `Respond with \`$t(common.cancel_command)\` to cancel the command, or \`finish\` to finish entry up to this point.`,
	too_long_to_show: 'too long to show',
	command_will_be_canceled: 'The command will automatically be cancelled in {{seconds}} seconds.',
	command_will_be_canceled_unless_respond: 'The command will automatically be cancelled in {{seconds}} seconds, unless you respond.'
};

// Translation of commands
const command = {
	disable: {
		description: 'Disables a command or command group.',
		details: oneLine`
				The argument must be the name/ID (partial or whole) of a command or command group.
				Only administrators may use this command.
			`,
		examples: ['disable util', 'disable Utility', 'disable prefix'],
		args: {
			cmd_or_grp: {
				label: 'command/group',
				prompt: 'Which command or group would you like to disable?'
			}
		},
		run: {
			group_already_disabled: 'The `{{groupName}}` {{type}} is already disabled.',
			cannot_disable_group: 'You cannot disable the `{{groupName}}` {{type}}',
			group_disabled: 'Disabled the `{{groupName}}` {{type}}.'
		}
	},
	enable: {

		description: 'Enables a command or command group.',
		details: oneLine`
				The argument must be the name/ID (partial or whole) of a command or command group.
				Only administrators may use this command.
			`,
		examples: ['enable util', 'enable Utility', 'enable prefix'],
		args: {
			cmd_or_grp: {
				label: 'command/group',
				prompt: 'Which command or group would you like to enable?'
			}
		},
		run: {
			group_already_enabled: `The \`{{group}}\` {{type}} is already enabled{{disabledMessage}}.`,
			group_enabled: `Enabled the \`{{group}}\` {{type}}{{disabledMessage}}.`,
			group_disabled: `, but the \`{{group}}\` group is disabled, so it still can't be used`
		}
	},
	groups: {
		description: 'Lists all command groups.',
		details: 'Only administrators may use this command.',
		run: {
			response: stripIndents`
			__**Groups**__
			{{groups}}
		`
		}
	},
	load: {

		description: 'Loads a new command.',
		details: oneLine`
				The argument must be full name of the command in the format of \`group:memberName\`.
				Only the bot owner(s) may use this command.
			`,
		examples: ['load some-command'],
		args: {
			command: {
				prompt: 'Which command would you like to load?'
			}
		},
		run: {

			command_already_registered: 'That command is already registered.'
		}
	},
	reload: {

		description: 'Reloads a command or command group.',
		details: oneLine`
				The argument must be the name/ID (partial or whole) of a command or command group.
				Providing a command group will reload all of the commands in that group.
				Only the bot owner(s) may use this command.
			`,
		examples: ['reload some-command'],
		args: {
			cmd_or_grp: {
				label: 'command/group',
				prompt: 'Which command or group would you like to reload?'
			}
		},
		run: {
			reload_failed: `Reloaded \`{{groupName}}\` command, but failed to reload on other shards.`,
			reload_failed_plural: `Reloaded all of the commands in the \`{{groupName}}\` group, but failed to reload on other shards.`,
			reload_succeed: `Reloaded \`{{groupName}}\` command{{onShards}}.`,
			reload_succeed_plural: `Reloaded all of the commands in the \`{{groupName}}\` group{{onShards}}.`
		}
	},
	unload: {

		description: 'Unloads a command.',
		details: oneLine`
				The argument must be the name/ID (partial or whole) of a command.
				Only the bot owner(s) may use this command.
			`,
		examples: ['unload some-command'],
		args: {
			command: {
				prompt: 'Which command would you like to unload?'
			}
		},
		run: {
			unload_failed: `Unloaded \`{{commandName}}\` command, but failed to unload on other shards.`,
			unload_succeed: `Unloaded \`{{commandName}}\` command{{onShards}}.`
		}
	},
	eval: {
		description: 'Executes JavaScript code.',
		details: 'Only the bot owner(s) may use this command.',
		args: {
			script: {
				prompt: 'What code would you like to evaluate?'
			}
		},
		run: {
			callback_error: `Callback error: \`{{val}}\``,
			evaluating_error: `Error while evaluating: \`{{err}}\``,
			executed_in: `*Executed in {{s}}{{ms}}.*`,
			executed_after: `Callback executed after {{s}}{{ms}}.`
		}
	},
	help: {
		description: 'Displays a list of available commands, or detailed information for a specified command.',
		details: oneLine`
				The command may be part of a command name or a whole command name.
				If it isn't specified, all available commands will be listed.
			`,
		examples: ['help', 'help prefix'],
		args: {
			command: {
				prompt: 'Which command would you like to view the help for?'
			}
		},
		run: {
			description: oneLine`
						__Command **{{name}}**:__ {{description}}
						{{guildOnly}}
						{{nsfw}}
					`,
			format: '**Format:** {{format}}',
			aliases: `\n**Aliases:** {{aliases}}`,
			group: `\n${oneLine`
					**Group:** {{groupName}}
					(\`{{groupID}}:{{memberName}}\`)
				`}`,
			details: `\n**Details:** {{details}}`,
			examples: `\n**Examples:**\n{{examples}}`,
			multiple_commands_error: 'Multiple commands found. Please be more specific.',
			identify_command_error: 'Unable to identify command. Use {{usage}} to view the list of all commands.',
			command_usage: stripIndents`
					${oneLine`
						To run a command in {{guild}},
						use {{commandUsage}}.
						For example, {{example}}.
					`}
					To run a command in this DM, simply use {{usageWithoutPrefix}} with no prefix.
			
					Use {{usage}} to view detailed information about a specific command.
					Use {{usageAll}} to view a list of *all* commands, not just available ones.
			
						__**{{availableCommands}}**__
			
						{{commandList}}
				`
		}
	},
	ping: {
		description: 'Checks the bot\'s ping to the Discord server.',
		run: {
			pinging: 'Pinging...',
			pong: oneLine`
			{{mention}}
			Pong! The message round-trip took {{duration}}ms.
			{{pingResponse}}
		`,
			heartbeat_ping: `The heartbeat ping is {{heartbeatPing}}ms.`
		}
	},
	prefix: {
		description: 'Shows or sets the command prefix.',
		format: '[prefix/"default"/"none"]',
		details: oneLine`
				If no prefix is provided, the current prefix will be shown.
				If the prefix is "default", the prefix will be reset to the bot's default prefix.
				If the prefix is "none", the prefix will be removed entirely, only allowing mentions to run commands.
				Only administrators may change the prefix.
			`,
		examples: ['prefix', 'prefix -', 'prefix omg!', 'prefix default', 'prefix none'],
		args: {
			prefix: {
				prompt: 'What would you like to set the bot\'s prefix to?'
			}
		},
		run: {
			no_command_prefix: 'There is no command prefix.',
			the_prefix_is: `The command prefix is \`\`{{prefix}}\`\`.`,
			how_to_run: 'To run commands, use {{usage}}.',
			admins_only: 'Only administrators may change the command prefix.',
			owner_only: 'Only the bot owner(s) may change the global command prefix.',
			current_prefix: `Reset the command prefix to the default (currently {{prefix}}).`,
			no_prefix: 'no prefix',
			prefix_set_to: `Set the command prefix to \`\`{{prefix}}\`\`.`,
			prefix_removed: 'Removed the command prefix entirely.',
			prefix_usage: `{{response}} To run commands, use {{usage}}.`
		}
	},
	language: {
		description: 'Shows or sets the guild language.',
		format: `[<languageCode>/"default"] and for actions [<languageCode> <action>]`,
		details: oneLine`
				If no language is provided, the default language will be shown.
				If the language is "default", the language will be reset to the bot's default language.
				You can perform the actions "load" and "reload" on languages, to load/reload language files.
				Only administrators may change the language.
			`,
		examples: ['language', 'language de', 'language default', 'language en load', 'language de reload'],
		args: {
			language: {
				prompt: 'What would you like to set the bot\'s language to?'
			},
			action: {
				prompt: 'What action would you like to perform for the language?'
			}
		},
		run: {
			no_guild_language: 'There is no language defined for this guild.',
			guild_language_is: `The guild language is \`\`{{language}}\`\`.`,
			bot_language_is: `The bot language is \`\`{{language}}\`\`.`,
			admins_only: 'Only administrators may change the guild language.',
			owner_only: 'Only the bot owner(s) may change the global guild language.',
			action_owner_only: 'Only the bot owner(s) may perform actions on languages.',
			current_language: `Reset the guild language to the default (currently {{language}}).`,
			language_set: `Set the bot's global language to \`\`{{language}}\`\`.`,
			language_set_guild: `Set the guild language to \`\`{{language}}\`\`.`,
			no_language_file: `Language file for \`\`{{language}}\`\` could not be loaded.`,
			language_not_supported: `The language \`\`{{language}}\`\` is not available. Available languages are:\`\`\`{{availableLanguages}}\`\`\``,
			language_not_supported_short: `The language \`\`{{language}}\`\` is not available.`,
			load_complete_succeed: `The language \`\`{{language}}\`\` has been loaded successful.`,
			load_complete_failed: `The language \`\`{{language}}\`\` could not be loaded, because there are no files, for this language, to load.`,
			load_failed: `The language \`\`{{language}}\`\` could not be loaded.\n\`\`\`{{error}}\`\`\``,
			reload_complete_succeed: `The language \`\`{{language}}\`\` has been reloaded successful.`,
			reload_complete_failed: `The language \`\`{{language}}\`\` could not be reloaded, because there are no files, for this language, to load.`,
			reload_failed: `The language \`\`{{language}}\`\` could not be reloaded.\n\`\`\`{{error}}\`\`\``,
			action_not_supported: `I cannot handle the action \`{{action}}\`.`
		}
	},
	unknown_command: {
		description: 'Displays help information for when an unknown command is used.',
		examples: ['unknown-command kickeverybodyever'],
		run: {
			response: 'Unknown command. Use {{usage}} to view the command list.'
		}
	}
};

// Translations in class Argument
const argument = {

	invalid_label: 'You provided an invalid {{label}}. Please try again.',
	invalid_label_extended: oneLine`
							You provided an invalid {{label}},
							"{{escaped}}".
							Please try again.
						`
};

const commandoNamespace = {
	error,
	base,
	common,
	argument,
	command
};
const defaultCommandoTranslations = {
	dev: {
		commando: commandoNamespace
	}
};
module.exports = {
	defaultCommandoTranslations
};
