class PreModle_Command extends puremvc.SimpleCommand
{
    /**
    * @override
    */
    execute(notify:puremvc.INotification):void
    {
        /*
         * Data initialization.
     	 */
        var buttonStateProxy:puremvc.IProxy = new ButtonStateProxy(ProxyNames.ButtonStateProxy, this.generateButtonState)
        /*
         * Proxies initialization.
		 */
            
        puremvc.Facade.getInstance("BingoFacade").registerProxy(buttonStateProxy);
    }

    generateButtonState():ButtonStateStruct
    {
        var buttonStateStruct:ButtonStateStruct = new ButtonStateStruct();
        buttonStateStruct.ButtonEnable[0] = false;
        buttonStateStruct.ButtonEnable[1] = false;

        return buttonStateStruct;
    }
}
