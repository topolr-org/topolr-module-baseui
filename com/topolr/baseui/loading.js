/**
 * @packet baseui.loading;
 * @css baseui.style.ui;
 * @template baseui.template.temp;
 * @icon baseui.icons;
 */
Module({
    name:"area",
    extend:"view",
    template:"@temp.arealoading",
    className:"mt-arealoading",
    autodom:true,
    showLoading:function (desc) {
        this.update({
            icon:"t-icon-autorenew",
            desc:desc,
            state:"t-icon-spin"
        });
    },
    showError:function(desc){
        this.update({
            icon:"t-icon-error",
            desc:desc,
            state:"icon-state-error"
        });
    },
    showSuccess:function(desc){
        this.update({
            icon:"t-icon-check_circle",
            desc:desc,
            state:"icon-state-success"
        });
    }
});