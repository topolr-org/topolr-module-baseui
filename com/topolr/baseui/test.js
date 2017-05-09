/**
 * @packet baseui.test;
 * @require baseui.loading;
 * @require icon.iconpreviewer;
 */
Option({
    name:'boot',
    option:{
        override:{
            onendinit:function () {
                this.addChild({
                    type:"@loading.area"
                }).then(function (area) {
                    area.showError("loading...");
                });
            }
        }
    }
});