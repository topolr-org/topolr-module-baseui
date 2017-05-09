/**
 * @packet baseui.loading;
 * @css baseui.style.ui;
 * @require icon.loading;
 * @require icon.action;
 * @template baseui.template.temp;
 */
Module({
    name:"area",
    extend:"view",
    template:"@temp.arealoading",
    className:"mt-arealoading",
    autodom:true,
    showLoading:function (desc) {
        this.update({
            icon:"mt-icon-spinner2",
            desc:desc,
            state:"mt-icon-spin"
        });
    },
    showError:function(desc){
        this.update({
            icon:"mt-icon-times-circle",
            desc:desc,
            state:"icon-state-error"
        });
    },
    showSuccess:function(desc){
        this.update({
            icon:"mt-icon-check-circle",
            desc:desc,
            state:"icon-state-success"
        });
    }
});