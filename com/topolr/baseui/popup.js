/**
 * @packet baseui.popup;
 * @style baseui.style.msgbox;
 * @style baseui.style.alert;
 * @template baseui.template.temp;
 */
(function () {
    var query = window.location.href.split("?")[1];
    if (query) {
        var _a = query.split("&"),_b={};
        for (var i = 0; i < _a.length; i++) {
            var _c = _a[i].split("=");
            _b[_c[0]] = _c[1];
        }
        var querystr=[];
        for(var i in _b){
            if(i!=="popup") {
                querystr.push(i + "=" + _b[i]);
            }
        }
        if(querystr.length>0) {
            window.history.pushState({
                __page__:"",

            }, "", window.location.href.split("?")[0] + "?" + querystr.join("&"));
        }else{
            window.history.pushState({}, "", window.location.href.split("?")[0]);
        }
    }
})();
Module({
    name: "messagebox",
    extend: "viewgroup",
    className: "messagebox",
    style: "@msgbox",
    layout: "@temp.msgbox",
    option: {
        width: "500px",
        title: "msgbox",
        content: [],
        btns: [{name: "", type: ""}]
    },
    init: function () {
        var info = this.getQueryInfo();
        if (info.popup) {
            info.popup = info.popup + ":" + this.instanceId();
        } else {
            info.popup = this.instanceId();
        }
        var query = [];
        for (var i in info) {
            query.push(i + "=" + info[i]);
        }
        var url = window.location.href.substring(sitePath.length).split("?")[0] + "?" + query.join("&");
        this._url = url;
        this.dispatchEvent("openPage", {
            url: url
        });
        var ths=this;
        setTimeout(function () {
            ths.dom.addClass(ths.className+"-open");
        },0);
    },
    oninitchild: function (module) {
        var id = module.getId();
        if (this.option.content[id]) {
            $.extend(module.option, this.option.content[id].option);
        }
    },
    bind_btn: function (dom) {
        if (dom.cache().type === "close") {
            this.close();
        } else {
            this.dispatchEvent("btn", dom.cache());
        }
    },
    bind_back: function () {
        this.close();
    },
    close: function () {
        var info = this.getQueryInfo();
        if (info.popup) {
            window.history.back();
        } else {
            this.removeIt();
        }
    },
    removeIt:function () {
        var ths=this;
        this.dom.transition().set("transform",{
            time:300
        }).done(function () {
            ths.remove();
        }).scope().removeClass(this.className+"-open");
    },
    getQueryInfo: function () {
        var baseurl = window.location.href.substring(sitePath.length);
        var query = baseurl.split("?")[1];
        if (query) {
            var _a = query.split("&");
            var _b = {};
            for (var i = 0; i < _a.length; i++) {
                var _c = _a[i].split("=");
                _b[_c[0]] = _c[1];
            }
            return _b;
        } else {
            return {};
        }
    },
    event_urlchange: function (e) {
        if (window.location.href != this._url) {
            var info = this.getQueryInfo();
            if (info.popup) {
                var ids = info.popup.split(":");
                if (ids.indexOf(this.instanceId()) === -1) {
                    this.removeIt();
                }
            } else {
                this.removeIt();
            }
        }
    }
});
Module({
    name:'alert',
    extend:"@.messagebox",
    layout:"@temp.alert",
    className:"alert",
    style:"@alert",
    option:{
        width: "500px",
        title: "系统提示",
        content: "this is alert",
        btns: [{name: "", type: ""}]
    }
});