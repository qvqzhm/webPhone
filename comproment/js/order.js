$('.backindex').on('touchend',function (){
    // window.location.href = './../index.html'
    mui.confirm('是否取消支付','确认',['我再想想','确认'],function (e){
        if (e.index == 1){
            sessionStorage.removeItem('buy')
            window.history.back()
        }
    })

})


//渲染
var orderList = ''
if (JSON.parse(sessionStorage.getItem('buy')) == null){
    orderList = JSON.parse(sessionStorage.getItem('buynow'))
    var paymoney = 0
    var youhuimoney = 0
    paymoney += parseInt(orderList.goods_nowprice)
    youhuimoney += (-parseInt(orderList.goods_nowprice)+parseInt(orderList.goods_oldprice))*parseInt(orderList.goods_num)
    $('<li></li>').html(`
        <div class="order_img">
            <img src="${orderList.goods_img}" alt="">
        </div>
        <div class="order_canshu">
            <p class="order_name">
                ${orderList.goods_peizhi}
            </p>
            <div class="order_fuli">
                <span>7天价保</span>
                <span>7天无理由退货</span>
            </div>
        <div class="order_price">
            <div class="order_buyprice">
                <p class="nowbuyprice">￥
                    <span>${orderList.goods_nowprice}</span>
                </p>
                <p class="oldbuyprice">￥
                    <span>${orderList.goods_oldprice}</span>
                </p>
            </div>
            <div class="order_num">
                <span>×${orderList.goods_num}</span>
            </div>
        </div>
    </div>
    `).appendTo($('.order_goods>ul'))
    if (orderList.goods_oldprice == null || orderList.goods_oldprice == ''){
        $('.oldbuyprice').css('display','none')
    }
    $('.type1 span').eq(1).html(`￥${paymoney}`)
    $('.type2 span').eq(1).html(`-￥${youhuimoney}`)
}else {
    orderList = JSON.parse(sessionStorage.getItem('buy'))
    var paymoney = 0
    var youhuimoney = 0
    $.each(orderList,function (index,item){
        paymoney += parseInt(item.goods_nowprice)
        youhuimoney += (-parseInt(item.goods_nowprice)+parseInt(item.goods_oldprice))*parseInt(item.goods_num)
        $('<li></li>').html(`
        <div class="order_img">
            <img src="${item.goods_img}" alt="">
        </div>
        <div class="order_canshu">
            <p class="order_name">
                ${item.goods_peizhi}
            </p>
            <div class="order_fuli">
                <span>7天价保</span>
                <span>7天无理由退货</span>
            </div>
        <div class="order_price">
            <div class="order_buyprice">
                <p class="nowbuyprice">￥
                    <span>${item.goods_nowprice}</span>
                </p>
                <p class="oldbuyprice">￥
                    <span>${item.goods_oldprice}</span>
                </p>
            </div>
            <div class="order_num">
                <span>×${item.goods_num}</span>
            </div>
        </div>
    </div>
    `).appendTo($('.order_goods>ul'))
        if (item.goods_oldprice == null || item.goods_oldprice == ''){
            $('.oldbuyprice').css('display','none')
        }
    })
    $('.type1 span').eq(1).html(`￥${paymoney}`)
    $('.order_totalprice span').html(`${paymoney}`)
    $('.type2 span').eq(1).html(`-￥${youhuimoney}`)
}


$('.order_topay').on('touchend',function (){
    mui.confirm('确认支付','确认',['取消','确认'],function (e){
        if (e.index == 1){
            mui.toast('支付成功，共'+paymoney+'元',{ duration:'long', type:'div' })

            var car = JSON.parse(sessionStorage.getItem('cardata'))
            $.each(JSON.parse(sessionStorage.getItem('cardata')),function (index,item){
                var i = index
                var t = item
                $.each(JSON.parse(sessionStorage.getItem('buy')),function (index,item){
                    if (JSON.stringify(item) == JSON.stringify(t)){
                        car.splice(t,1)
                        console.log(car)
                    }
                })
            })
            sessionStorage.setItem('cardata',JSON.stringify(car))
            setTimeout(function (){
                sessionStorage.removeItem('buy')
                window.history.back()
            },3000)
        }
    })
})