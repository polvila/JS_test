function OnMessage(messageEvent) 
{
    if (messageEvent.data.action == "buy"){
    	console.log(messageEvent.data.action);
        SendMessage("Canvas", "FillText");
        window.removeEventListener("message", OnMessage, false);
    }
}

function OpenRechargePopup()
{
    window.parent.postMessage({'action':'chips'},'*');
    window.addEventListener("message", OnMessage, false);
}