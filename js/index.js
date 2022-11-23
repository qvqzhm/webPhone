
var navlist = ['comproment/home.html', 'comproment/classify.html', 'comproment/buycar.html', 'comproment/my.html']

mui.init({
    subpages:[
        {
            url:'comproment/home.html',
            id:'page1',
            styles:{
                top:'0px',//子页面顶部位置
                bottom:'0',//子页面底部位置
            },
            extras:{}//额外扩展参数
        }
    ],
    preloadPages:[//缓存其他页面
        {
            url:'comproment/classify.html',
            id:'page2',
            styles:{
                top:'0px',//子页面顶部位置
                bottom:'0',//子页面底部位置
            },
            extras:{}//额外扩展参数
        },
            {
            url:'comproment/buycar.html',
            id:'page3',
            styles:{
                top:'0px',//子页面顶部位置
                bottom:'0',//子页面底部位置
            },
            extras:{}//额外扩展参数
        },
            {
            url:'comproment/my.html',
            id:'page4',
            styles:{
                top:'0px',//子页面顶部位置
                bottom:'0',//子页面底部位置
            },
            extras:{}//额外扩展参数
        }
    ]
});



// $('.mynav a').on('touchend',function (){
//     window.location.href = navlist[$(this).index()]
// })


// if(window.plus){
//     mui.plusReady(function(){
//
//         var winAll=plus.webview.all();
//
//         console.log(JSON.stringify(winAll))
//         var a1,a2,a3
//         $("#nav").on("tap","#page2",function(){//点击触发
//             a1=plus.webview.getWebviewById("page1");
//             a1.show()
//             a2.hide()//这一步必须有
//             a3.hide()//这一步必须有
//         })
//         mui("#nav").on("tap","#page2",function(){//点击触发
//             a2=plus.webview.getWebviewById("page2");
//             a2.show()
//
//         })
//         mui("#nav").on("tap","#page3",function(){//点击触发
//             a3=plus.webview.getWebviewById("page3");
//             a3.show()
//
//         })
//         mui("#nav").on("tap","#page4",function(){//点击触发
//             a3=plus.webview.getWebviewById("page4");
//             a3.show()
//
//         })
//     });
//     console.log("window.plus");
// }else{
//     console.log("plusReady");
// }


// if (sessionStorage.getItem('buycrnum') !=null){
//     $('.jiaobiao').html(sessionStorage.getItem('buycrnum'))
// }else {
//     $('.jiaobiao').hide()
// }





