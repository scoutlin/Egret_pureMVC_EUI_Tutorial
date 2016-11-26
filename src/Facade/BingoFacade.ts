class BingoFacade extends puremvc.Facade
{
    static printLog(log:string)
    {
        alert(log);
    }

       /**
        * Singleton implementation for the <code>ApplicationFacade</code>.
        *
        * @return
        * 		The <code>Facade</code> subclass instance used throughout the application.
        */
    static getInstance(facadeID:string):BingoFacade
    {
        if(!puremvc.Facade.instanceMap[facadeID])
        {
            puremvc.Facade.instanceMap
            puremvc.Facade.instanceMap["BingoFacade"] = new BingoFacade("BingoFacade");
        }

        return <BingoFacade>puremvc.Facade.instanceMap["BingoFacade"];

    }

    /**
         * @override
         *
         * The <code>Model</code> <code>View</code> and <code>Controller</code> are initialized in a
         * deliberate order to ensure internal dependencies are satisfied before operations are
         * performed.
         *
         * <code>initializeController()</code> should be overridden for the specific purpose of
         * registering your commands. Any attempt to register <code>Mediator</code>s here will
         * result in an error being thrown because the View has not yet been initialized calling
         * <code>this.parent()</code> is also required.
         */
    initializeController():void
    {
        super.initializeController();   
        this.registerCommand(CommandNames.StartUp_Commands, StartUp_Commands);
    }




    startup(app:Object):void
    {
        this.sendNotification(NotificationNames.START_UP, app);
        var main:Main = <Main>app;       

        var nodeList:NodeListOf<Element> = main.HTML_BODY.getElementsByClassName("rd04_h1");       
        nodeList[0].innerHTML = "StartUP!!";
    }
}