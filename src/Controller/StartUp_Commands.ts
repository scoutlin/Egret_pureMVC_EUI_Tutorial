class StartUp_Commands extends puremvc.MacroCommand
{
	/**
	 * @override
     *
     * Add the Subcommands to startup the PureMVC apparatus.
	 *
	 * Generally, it is best to prep the Model (mostly registering  proxies)followed by
	 * preparation of the View (mostly registering Mediators).
	 */
	initializeMacroCommand()
	{
		this.addSubCommand(PreModle_Command);
		this.addSubCommand(PreView_Command);
	}
}
