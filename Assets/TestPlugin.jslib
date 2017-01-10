var TestPlugin = {
	OnMessage : function (messageEvent) {
	    //if (messageEvent.data.action == "buy"){
	        console.log("Send message to Unity");
	        SendMessage("Canvas", "FillText");
	        window.removeEventListener("message", OnMessage, false);
	    //}
	},
	OpenRechargePopup: function()
	{
	    window.parent.postMessage({'action':'chips'},'*');
	    window.addEventListener("message", OnMessage, false);
	}
};

mergeInto(LibraryManager.library, TestPlugin);
