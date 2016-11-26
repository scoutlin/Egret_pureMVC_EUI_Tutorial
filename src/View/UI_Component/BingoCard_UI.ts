class BingoCard_UI extends eui.Component
{

    public number_0_0:eui.Image;
    public number_0_1:eui.Image;
    public number_0_2:eui.Image;
    public number_0_3:eui.Image;
    public number_0_4:eui.Image;

    public number_1_0:eui.Image;
    public number_1_1:eui.Image;
    public number_1_2:eui.Image;
    public number_1_3:eui.Image;
    public number_1_4:eui.Image;

    public number_2_0:eui.Image;
    public number_2_1:eui.Image;
    public number_2_2:eui.Image;
    public number_2_3:eui.Image;
    public number_2_4:eui.Image;


    public constructor()
    {
        super();
        this.addEventListener(eui.UIEvent.COMPLETE,this.onComplete,this);
        this.skinName = "resource/eui_BingoSkins/BingoCard_UI.exml"
    }

    public imageDisplay:eui.Image;

    private onComplete():void
    {
        console.log("onComplete");
    }

    public HideNumber(flag:boolean)
    {
        if(flag == true)
        {
            this.number_0_0.alpha = 0;
            this.number_0_1.alpha = 0;
            this.number_0_2.alpha = 0;
            this.number_0_3.alpha = 0;
            this.number_0_4.alpha = 0;

            this.number_1_0.alpha = 0;
            this.number_1_1.alpha = 0;
            this.number_1_2.alpha = 0;
            this.number_1_3.alpha = 0;
            this.number_1_4.alpha = 0;

            this.number_2_0.alpha = 0;
            this.number_2_1.alpha = 0;
            this.number_2_2.alpha = 0;
            this.number_2_3.alpha = 0;
            this.number_2_4.alpha = 0;
        }
        else
        {
            this.number_0_0.alpha = 100;
            this.number_0_1.alpha = 100;
            this.number_0_2.alpha = 100;
            this.number_0_3.alpha = 100;
            this.number_0_4.alpha = 100;

            this.number_1_0.alpha = 100;
            this.number_1_1.alpha = 100;
            this.number_1_2.alpha = 100;
            this.number_1_3.alpha = 100;
            this.number_1_4.alpha = 100;

            this.number_2_0.alpha = 100;
            this.number_2_1.alpha = 100;
            this.number_2_2.alpha = 100;
            this.number_2_3.alpha = 100;
            this.number_2_4.alpha = 100;
        }
    }
}