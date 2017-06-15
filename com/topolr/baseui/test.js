/**
 * @packet baseui.test;
 * @require baseui.loading;
 * @require baseui.popup;
 * @require icon.iconpreviewer;
 */
Module({
    name:"test",
    extend:"view",
    template:"<div>{{data.text}}</div>",
    option:{
        text:""
    },
    init:function () {
        this.render(this.option);
    }
});
Option({
    name:'boot',
    option:{
        override:{
            onendinit:function () {
                // this.addChild({
                //     type:"@loading.area"
                // }).then(function (area) {
                //     area.showError("loading...");
                // });
                this.addChild({
                    type:"@popup.messagebox",
                    option:{
                        width:"300px",
                        btns:[
                            {name:"ok",type:"ok"},
                            {name:"close",type:"close"}
                        ],
                        content:[
                            {type:"@.test",option:{text:"aa"}},
                            {type:"@.test",option:{text:"bb"}},
                            {type:"@.test",option:{text:"cc"}}
                        ]
                    }
                });
            }
        }
    }
});