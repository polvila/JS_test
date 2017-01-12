mergeInto(LibraryManager.library, {
    OnMessage__deps: ['OnMessage'],
    OnMessage: function (messageEvent) {
        if (messageEvent.data.action == 'buy') {
            console.log(messageEvent.data.action);
            SendMessage('Canvas', 'FillText');
            window.removeEventListener('message', _OnMessage, false);
        }
    },
    OpenRechargePopup__deps: ['OnMessage'],
    OpenRechargePopup: function () {
        window.parent.postMessage({ 'action': 'chips' }, '*');
        window.addEventListener('message', _OnMessage, false);
    }
});
