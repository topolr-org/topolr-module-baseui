/**
 * @packet baseui.loading;
 * @css baseui.style.ui;
 * @require icon.base;
 * @template baseui.template.temp;
 */
Module({
    name:"area",
    extend:"view",
    template:"@temp.arealoading",
    className:"arealoading",
    autodom:true,
    showLoading:function (desc) {
        this.update({
            icon:"icon-spinner2",
            desc:desc,
            state:"icon-spin"
        });
    },
    showError:function(desc){
        this.update({
            icon:"icon-cross",
            desc:desc,
            state:"icon-state-error"
        });
    },
    showSuccess:function(desc){
        this.update({
            icon:"icon-checkmark",
            desc:desc,
            state:"icon-state-success"
        });
    }
});