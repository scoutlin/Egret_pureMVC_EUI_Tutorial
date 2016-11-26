
var game_file_list = [
    //以下为自动修改，请勿修改
    //----auto game_file_list start----
	"libs/modules/egret/egret.js",
	"libs/modules/egret/egret.native.js",
	"libs/modules/res/res.js",
	"libs/modules/eui/eui.js",
	"libs/modules/tween/tween.js",
	"libs/modules/pureMVC/pureMVC.js",
	"libs/modules/jquery/jquery.js",
	"bin-debug/AssetAdapter.js",
	"bin-debug/Controller/PreModle_Command.js",
	"bin-debug/Controller/PreView_Command.js",
	"bin-debug/Controller/StartUp_Commands.js",
	"bin-debug/Facade/BingoFacade.js",
	"bin-debug/LoadingUI.js",
	"bin-debug/Main.js",
	"bin-debug/Model/ButtonStateProxy.js",
	"bin-debug/Model/struct/ButtonStateStruct.js",
	"bin-debug/Names/CommandNames.js",
	"bin-debug/Names/MediatorNames.js",
	"bin-debug/Names/NotificationNames.js",
	"bin-debug/Names/ProxyNames.js",
	"bin-debug/ThemeAdapter.js",
	"bin-debug/View/BingoCardMediator.js",
	"bin-debug/View/UI_Component/BingoCard_UI.js",
	//----auto game_file_list end----
];

var window = this;

egret_native.setSearchPaths([""]);

egret_native.requireFiles = function () {
    for (var key in game_file_list) {
        var src = game_file_list[key];
        require(src);
    }
};

egret_native.egretInit = function () {
    egret_native.requireFiles();
    egret.TextField.default_fontFamily = "/system/fonts/DroidSansFallback.ttf";
    //egret.dom为空实现
    egret.dom = {};
    egret.dom.drawAsCanvas = function () {
    };
};

egret_native.egretStart = function () {
    var option = {
        //以下为自动修改，请勿修改
        //----auto option start----
		entryClassName: "Main",
		frameRate: 30,
		scaleMode: "showAll",
		contentWidth: 640,
		contentHeight: 1136,
		showPaintRect: false,
		showFPS: false,
		fpsStyles: "x:0,y:0,size:12,textColor:0xffffff,bgAlpha:0.9",
		showLog: false,
		logFilter: "",
		maxTouches: 2,
		textureScaleFactor: 1
		//----auto option end----
    };

    egret.native.NativePlayer.option = option;
    egret.runEgret();
    egret_native.Label.createLabel(egret.TextField.default_fontFamily, 20, "", 0);
    egret_native.EGTView.preSetOffScreenBufferEnable(true);
};