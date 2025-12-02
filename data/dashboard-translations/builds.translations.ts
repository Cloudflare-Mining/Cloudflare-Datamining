{
	product_name: "Workers Builds",
	workers: {
		settings_v2: {
			cards: {
				no_connections: {
					heading: "Git repository",
					github: "GitHub",
					gitlab: "GitLab"
				},
				connect: {
					heading: "Git repository"
				},
				disconnect: {
					heading: "Disconnect git",
					description: "Once disconnected, future pushes will no longer trigger automatic deployments.",
					action: "Disconnect"
				},
				git_connection: {
					heading: "Git repository"
				},
				errorFetchingGithubUserOrOrganization404: {
					title: "It looks like your connected Git account name has recently changed, please <0>re-authenticate</0> to continue deploying. Otherwise, builds may fail."
				},
				errorFetchingGithubUserOrOrganization: {
					title: "Error fetching GitHub User or Organization details. This may cause deployments to fail."
				}
			},
			latestBuildToast: {
				failure: "Your last build failed. <0>View build</0>",
				active: "Build in progress. <0>View build</0>",
				canceled: "Your last build was canceled. <0>View build</0>"
			},
			newConnectionToast: "You can now push a commit to your Git repository to start your first build",
			buildConfiguration: {
				title: "Build configuration",
				description: "Configure the commands that will run on each build."
			},
			branchControl: {
				title: "Branch control",
				production_branch: "Production branch",
				non_production_branch_builds: "Builds for non-production branches",
				description: "Pushes to this branch will automatically trigger builds."
			},
			buildWatchPaths: {
				title: "Build watch paths",
				include_paths: "Include paths",
				exclude_paths: "Exclude paths",
				description: "Configure the paths to watch for changes and automatically rebuild your project."
			},
			apiToken: {
				title: "API token",
				description: "Configure the Cloudflare API token that will be used to deploy builds."
			},
			buildVariables: {
				title: "Variables and secrets",
				description: "Configure the variables and secrets for your Worker used during the build.",
				secret: "Secret",
				variable: "Variable",
				add_build_variable: "Add build variable"
			}
		},
		settings: {
			builds: {
				link: "View build history",
				no_builds_found: "No builds exist yet for this worker",
				created_on_by_author: (0, i.p)(a(), "createdOn", "author"),
				table: {
					column: {
						source: "Source",
						created_on: "Created",
						commit_message: "Commit message",
						status: "Status",
						uuid: "Build UUID"
					},
					actions: {
						cancel: "Cancel build",
						retry: "Retry build",
						delete: "Delete build",
						view: "View build"
					}
				}
			},
			git_connection: {
				heading: "Git connection",
				connect_to_github: "Connect to GitHub",
				connect_to_gitlab: "Connect to GitLab",
				connect_to_existing: "Connect",
				description: "Update the git connection to your Worker to enable Builds.",
				docs_link: "Connecting Workers to git",
				card: {
					disconnected: "Enable deployments on code changes",
					connected: "Connected to source control"
				}
			},
			build_configuration: {
				heading: "Build Configuration",
				description: "Update settings for Workers CI Builds"
			}
		},
		build_history: {
			heading: "Build history",
			subtitle: "View all the builds for this worker",
			back_to_deployments: "<0></0> Back to deployments"
		},
		build_details: {
			header: "Build details",
			buttons: {
				back_to_builds: "<0></0> Back to builds",
				manage: "Manage build",
				cancel: "Cancel build",
				retry: "Retry build",
				preview: "Preview"
			},
			build_settings: {
				heading: "Build settings"
			},
			logs: {
				heading: "Build log",
				loading: "Loading...",
				queued_build: {
					heading: "Build queued",
					sub_heading: "Waiting to start your build."
				},
				stages: {
					install_tools_and_deps: "Installing tools and dependencies"
				}
			},
			terms: {
				repository: "Repository",
				status: "Status",
				branch: "Branch",
				duration: "Duration",
				build_command: "Build command",
				deploy_command: "Deploy command",
				non_production_branch_deploy_command: "Version command",
				root_directory: "Root directory",
				environment_variables: "Environment variables",
				build_token: "Build token"
			},
			pull_request_toast: "You have an outstanding <0>pull request</0> to accept. Please accept the changes before your next deployment to avoid build failure."
		},
		create_worker: {
			header: "Building and deploying",
			buttons: {
				continue_to_project: "Continue to project"
			},
			running_for: "Running for <0></0>..."
		},
		create_worker_from_repo: {
			canceled_build: {
				title: "Build canceled",
				body: "The build has been canceled. Check your <0>build configurations</0> or retry build to restart the build process."
			},
			failed_build: {
				title: "Build failed",
				body: "The build failed due to an error. Check your <0>build configurations</0> or retry build to restart the build process."
			},
			no_repos_on_account: {
				no_repos_found: "No Git repositories found on this account.",
				select_different_account: "Try selecting a different Git account to import a repository."
			},
			no_repos_for_search: {
				no_repos_found: "No Git repositories found for this search term."
			}
		}
	},
	worker_name_toast: (0, i.p)(s(), "config_file"),
	buttons: {
		connect_to_scm: (0, i.p)(d(), "scmProviderType"),
		disconnect: "Disconnect",
		connect: "Connect"
	},
	create_trigger_drawer: {
		title: "Connect to repository",
		description: "Select a repository from your git provider",
		repo_selected_description: (0, i.p)(l(), "branchName"),
		expand_api_token: "API Token",
		expand_root_directory: "Root directory",
		expand_non_production_branch_deploy_command: "Non-production branch deploy command",
		expand_build_variables: "Build variables",
		expand_build_caching: "Build caching",
		submit: "Connect",
		use_existing_token_toast: (0, i.p)(u(), "tokenName"),
		create_new_token_toast: "A new token will be created automatically",
		create_new_token_toast_expanded: (0, i.p)(c(), "accountName"),
		create_new_token_toast_expanded_account_permissions: "<0>Account</0>: Account Settings (read), Workers Scripts (edit), Workers KV Storage (edit), Workers R2 Storage (edit), D1 Storage (edit), Vectorize (edit), Queues (edit), Workers Pipelines (edit), Containers (edit), Cloudchamber (edit)",
		create_new_token_toast_expanded_zone_permissions: "<0>Zone</0>: Workers Routes (edit) for all zones on the account",
		create_new_token_toast_expanded_user_permissions: "<0>User</0>: User Details (read), Memberships (read)",
		build_caching_enabled: "Build Cache Enabled",
		build_caching_disabled: "Build Cache Disabled"
	},
	edit_trigger_drawer: {
		title: "Build",
		build_config_description: "Edit your build configuration settings",
		branch_control_description: "Set the branch you would like to build",
		build_watch_paths_description: "Set the path to watch for changes on, or exclude changes on certain paths.",
		api_token_description: "Set the API token used for your build",
		build_variables_description: "Edit the variables and secrets for your build"
	},
	edit_env_var_drawer: {
		title: "Build environment variable",
		description: "Customize the environment variables sent to your build."
	},
	forms: {
		triggers: {
			createPage: {
				title: "Configure your project",
				subtitle: "Configure automatic builds and deployments for",
				cannot_access_repo: (0, i.p)(p(), "repoName")
			},
			fieldsets: {
				git: {
					title: "Git configurations"
				},
				commands: {
					title: "Build & deploy commands"
				},
				advanced: {
					title: "Advanced settings"
				}
			},
			labels: {
				project_name: "Project name",
				connection: "Git account",
				root_directory: "Root directory",
				path: "Path",
				build_command: "Build command",
				deploy_command: "Deploy command",
				non_production_branch_deploy_command: "Non-production branch deploy command",
				existing_token: "Select an existing token",
				api_token: "API token",
				token_name: "API token name",
				branch: "Branch",
				non_production_branch_builds: "<0>Builds</0> for non-production branches",
				repo: "Repository",
				create_new_token_option: "Create new token",
				scm_account: "Git account",
				scm_account_option_github: "New GitHub Connection",
				scm_account_option_gitlab: "New GitLab Connection",
				environment_variables: "Not yet supported"
			},
			constraints: {
				deploy_command: "Deploy command must be between 1 and 512 characters long",
				non_production_branch_deploy_command: "Verison command must be between 1 and 512 characters long",
				build_command: "Build command must be less than 512 characters long",
				root_directory: "Root directory must be less than 256 characters long"
			},
			help: {
				project_url: "your project will be deployed to %{hostname}",
				root_directory: "Specify the path to your Worker. The root directory describes where the command(s) will run.",
				build_command: "If you need to run a build prior to deployment, specify a command (e.g. npm run build).",
				deploy_command: "Specify a command to deploy your project for builds on the production branch (e.g. npx wrangler deploy).",
				non_production_branch_deploy_command: "When a build runs on a non-production branch, a new <0>Worker version</0> is uploaded. You can adjust this command, such as specifying an <1>environment</1> for the upload.",
				non_production_branch_deploy_command_disabled: 'To setup a deploy command, you first need to enable builds for non-production branches. Enable now through <0>"Branch controls"</0>.',
				build_token: "Select the API token to authenticate your build requests. This token will be used to authorize the upload of your Worker to Cloudflare."
			},
			defaults: {
				token_name: "Workers Builds - %{dateString}",
				trigger_name: "Deploy default branch",
				non_production_branch_trigger_name: "Deploy non-production branches"
			},
			submit: "Connect",
			errors: {
				not_ready: "Form submitted before all dependencies loaded",
				failed_to_delete_env_vars: "An error occurred while syncing your environment variables. The following variables failed to be deleted: %{commaSeparatedEnvVarList}. Please try again.",
				failed_internal: "An internal error prevented the form from submitting. Please try again.",
				project_name_unavailable: "A project with this name already exists on this account.",
				project_name_invalid_characters: "Project name can only contain lowercase letters (a-z), numbers (0-9), dashes",
				invalid_variable_name: "Environment variable names can only contain letters, numbers, hyphens, and underscores. They must start with a letter or underscore."
			}
		}
	},
	status: {
		queued: "Waiting for other builds to finish",
		running: {
			label: "In progress",
			tooltip: "This build is currently in progress"
		},
		stopped: {
			cancelled: "This build was cancelled",
			skipped: "This build was skipped",
			failure: "This build failed",
			success: "This build was successful"
		}
	},
	notifications: {
		pages_to_workers_migration_cta: "<0>Cloudflare Workers</0> now supports nearly all of Pages' features — plus extra tools and integrations not found in Pages.<br /><br />Check out our <1>migration guide</1> and <2>compatibility matrix</2> to learn how to move to Workers today.",
		pages_v2_to_v3_cta: "Pages v3 build system is now available. It updates the default tools, libraries and languages to their LTS versions. Check out our <0>migration guide</0> to learn how to migrate to v3.",
		scm_provider_status: {
			github: {
				degraded: "GitHub is having an incident and push events to Cloudflare are operating in a degraded state. Check their <0>status page</0> for more details.",
				down: "GitHub is having an incident and push events to Cloudflare are down. Check their <0>status page</0> for more details."
			},
			gitlab: {
				degraded: "GitLab is having an incident and push events to Cloudflare are operating in a degraded state. Check their <0>status page</0> for more details.",
				down: "GitLab is having an incident and push events to Cloudflare are down. Check their <0>status page</0> for more details."
			}
		},
		new_git_connections_unsupported: ("\n      Adding new git connections is not currently supported.\n      Please add the connection in Pages first or wait for\n      Christian's PR to land.\n    ").split(" ").map(e => e.trim()).join(" "),
		billing_transition: "Starting April 2nd, 2025, new pricing for Workers Builds will take effect for all builds. <0>Learn more</0> about the updated pricing.",
		auto_convert_to_workers: {
			title: "Convert to Workers",
			description: "Get <0>more</0> with Workers. We'll handle the configuration and deployment with no impact to your live Pages site. <1>Learn more</1>.",
			start: "Get Started",
			status: "View Status",
			modal: {
				header: "<0>Convert to Cloudflare Workers</0>",
				conversion_steps: "Here's what we'll do:",
				conversion_step_1: "Analyze your Pages repository",
				conversion_step_2: "Prepare a pull request with the necessary changes",
				conversion_step_3: "Create and configure Workers with preview and production environments",
				conversion_step_4: "Deploy your project on Workers",
				safety_info: "Your Pages site stays live: review the pull request, and when ready, switch your custom domain to the new Worker. Your existing Access settings will apply to the Worker's preview URLs.",
				converting: {
					step1: "Queuing",
					step2: "Preparing pull request",
					step3: "Creating Worker",
					step4: "Configuring Builds",
					step5: "Building and deploying Worker"
				},
				converted: {
					message: "Done"
				},
				success: {
					header: "Conversion Completed",
					status: "Status: Completed",
					status_description: "The conversion was successful. We've opened a pull request for you to review the changes, check the preview URL if enabled, and switch your custom domain when you're ready.",
					view_pr_button: "View Pull Request"
				},
				fail: {
					header: "Conversion Failed",
					status: "Status: Failed",
					status_description: "The conversion process encountered an issue and could not be completed. Additionally, we were unable to create a pull request with the error details. Please try again, and if the issue persists, contact support.",
					retry_button: "Retry"
				},
				failWithPR: {
					status_description: "The conversion process encountered an issue and could not be completed. However, we've created a pull request with the error details for your review."
				},
				failedDeployment: {
					status_description: "The conversion process encountered an issue and your Worker could not be deployed. We've opened a pull request for you to review the changes. </br> Check the build logs to resolve the errors, then redeploy when you've made the necessary changes."
				},
				action_buttons: {
					convert: "Convert to Workers",
					view_pr: "View Pull Request",
					view_build_logs: "View Build Logs",
					retry: "Retry"
				}
			}
		}
	},
	navigation: {
		applicationBacklink: "Create an application",
		projectBacklink: "Configure your project",
		steps: {
			import: "Import a repository",
			configure: "Configure your project",
			build_and_deploy: "Build and deploy"
		}
	},
	modals: {
		cancel_build: {
			title: "Cancel build?",
			body: "Your build will be canceled and your Worker will not be deployed. You can <0>retry build</0> to restart the build process.",
			confirm: "Cancel build",
			do_not_cancel: "Do not cancel build"
		}
	},
	view_build_logs: "View build logs",
	billing: {
		build_minutes_reached_toast: "Builds paused. You have used all <0></0> included build minutes for the month. It will reset on %{reset_date}. <1>Upgrade your plan</1> to continue building without interruptions.",
		build_minutes_reached_toast_fly_fishing: "Builds paused. You have used all <0></0> included build minutes for the month. It will reset on %{reset_date}. <1>Enable the Workers non-contract plan</1> to continue building without interruptions.",
		build_minutes_warning_toast: "You are nearing your build minutes limit for Workers Builds. Your builds will be paused once you have met the limit for the month. <0>Upgrade your plan</0> to continue building without interruptions.",
		build_minutes_warning_toast_fly_fishing: "You are nearing your build minutes limit for Workers Builds. Your builds will be paused once you have met the limit for the month. <0>Enable the Workers non-contract plan</0> to continue building without interruptions.",
		build_mins_monthly: "Workers build mins",
		build_minutes_monthly: "Workers build minutes",
		build_minutes_this_month: "Workers build minutes this month",
		build_minutes_monthly_info: "Total build minutes used across all Workers with Workers Builds enabled in your account. <0>Learn more</0>",
		build_mins_monthly_value: "<0></0> mins"
	}
}