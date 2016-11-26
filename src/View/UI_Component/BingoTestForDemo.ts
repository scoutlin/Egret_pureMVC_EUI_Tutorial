class BingoTestForDemo extends eui.Component
{
    public credit:eui.Label;
    public constructor()
    {
        super();
        this.skinName = "resource/eui_BingoSkins/BingoTestForDemo.exml"
    }

    public GetCredit():number
    {
        return parseInt(this.credit.text);
    }

    public SetCredit(credit:number):void
    {
        this.credit.text = credit.toString();
    }
}