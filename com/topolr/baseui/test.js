/**
 * @packet baseui.test;
 * @require baseui.loading;
 */
Option({
    name:'boot',
    option:{
        override:{
            onendinit:function () {
                this.addChild({
                    type:"@loading.area"
                });
            }
        }
    }
});