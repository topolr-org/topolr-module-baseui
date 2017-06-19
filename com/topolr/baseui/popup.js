/**
 * @packet baseui.popup;
 * @style baseui.style.msgbox;
 * @template baseui.template.temp;
 */
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
    oninitchild: function (module) {
        var id = module.getId();
        if (this.option.content[id]) {
            $.extend(module.option, this.option.content[id].option);
        }
    },
    bind_btn: function (dom) {
        if (dom.cache().type === "close") {
            this.remove();
        } else {
            this.dispatchEvent("btn", dom.cache());
        }
    },
    close: function () {
        this.remove();
    }
});
