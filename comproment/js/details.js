// $('body').css({'overflow-x': 'hidden','width':'100vw'})

var acmove = $('.details_type li').eq(0).offset().left+$('.details_type li').eq(0).width()/4
var move = 0
$('.active_bon').css({'width':$('.details_type li').eq(0).width()/2,'left':acmove})

$('.details_type li').on('touchend',function (){
    move = $('.details_type li').eq(0).width()*$(this).index()*5/4+$('.details_type li').eq(0).offset().left+$('.details_type li').eq(0).width()/4
    acmove = move
    $('.active_bon').animate({'left':acmove},200)
    $(this).addClass('active').siblings().removeClass('active')
    $('.pag div').animate({'left':-100*$(this).index()+'vw'})
})


$('.chance_color span').on('touchend',function (){
    $(this).addClass('chance_avtive').siblings().removeClass('chance_avtive')
})
$('.chance_peizhi span').on('touchend',function (){
    $(this).addClass('chance_avtive').siblings().removeClass('chance_avtive')
})
$('.chance_taocan span').on('touchend',function (){
    $(this).addClass('chance_avtive').siblings().removeClass('chance_avtive')
})
$('.c_number span').eq(0).on('touchend',function (){
    if (parseInt($(this).next().html())>1){
        $(this).next().html(parseInt($(this).next().html())-1)
    }
})
$('.c_number span').eq(2).on('touchend',function (){
    $(this).parent().children().eq(1).html(parseInt($(this).parent().children().eq(1).html())+1)
})


$(function (){
    $(".de_canshu ul").niceScroll({
        autohidemode: true
    })

    $('.backindex').on('touchend',function (){
        // window.location.href = './../index.html'
        window.history.back()
    })


    var datalist = JSON.parse(sessionStorage.getItem('dataList'))
    var datalist2 = JSON.parse(sessionStorage.getItem('dataList2'))

    //渲染
    if (sessionStorage.getItem('dataList') != 'null'){
        console.log(datalist)
        $('.details_img img').attr('src',datalist.url)
        $('.d_nowprice span').html(datalist.priceInfo.price)
        if (datalist.priceInfo.prefix == null || datalist.priceInfo.prefix == ''){
            $('.youhui_price').css('display','none')
            $('.buynow p').eq(0).css('display','none')
        }else {
            $('.youhui_price').html(`
            <span>${datalist.priceInfo.prefix}</span>
            <span>￥</span>
            <span class="y_money">${datalist.priceInfo.buyPrice}</span>
        `)
            $('.buynow p').eq(0).html(`
            ${datalist.priceInfo.prefix}
            <span>￥${datalist.priceInfo.buyPrice}</span>
        `)
        }

        $.each(datalist.activityList,function (index,item){
            if (item.type == 1){
                $('.youhui_type1 p').html(item.activityInfo)
            }else {
                $('<span></span>').html(item.activityInfo).appendTo($('.y_info'))
            }
        })
        $('.name').html(`${datalist.goodsSpuName == null?datalist.title:datalist.goodsSpuName}`)
        $('.de_other p').eq(0).html(datalist.secondTitle)

        if (datalist.skuName != null){
            $.each(datalist.skuName.replace(datalist.goodsSpuName,'').split(' '),function (index,item){
                if (!item == ''){
                    if (item.indexOf('+',0) != -1){
                        $('.chance_peizhi span').eq(0).html(item)
                        if (index == 1){
                            $('.chance_color span').eq(0).html(datalist.skuName.replace(datalist.goodsSpuName,'').split(' ')[2])
                        }else if (index == 2){
                            $('.chance_color span').eq(0).html(datalist.skuName.replace(datalist.goodsSpuName,'').split(' ')[1])
                        }
                    }
                }
            })
        }

    }else {
        $('.details_img img').attr('src',datalist2.mainImg)
        $('.d_nowprice span').html(datalist2.priceInfo.price)
        if (datalist2.priceInfo.prefix == null || datalist2.priceInfo.prefix == ''){
            $('.youhui_price').css('display','none')
            $('.buynow p').eq(0).css('display','none')
        }else {
            $('.youhui_price').html(`
                <span>${datalist2.priceInfo.prefix}</span>
                <span>￥</span>
                <span class="y_money">${datalist2.priceInfo.buyPrice}</span>
            `)
            $('.buynow p').eq(0).html(`
                ${datalist2.priceInfo.prefix}
                <span>￥${datalist2.priceInfo.buyPrice}</span>
            `)
        }

        $.each(datalist2.promotionsList,function (index,item){
            if (item.type == 1){
                $('.youhui_type1 p').html(item.descList[0])
            }else {
                $('<span></span>').html(item.descList[0]).appendTo($('.y_info'))
            }
        })
        $('.name').html(datalist2.spuName)
        $('.de_other p').eq(0).html(datalist2.spuShortDesc)
        $.each(datalist2.skuName.replace(datalist2.spuName,'').split(' '),function (index,item){
            if (!item == ''){
                if (item.indexOf('+',0) != -1){
                    $('.chance_peizhi span').eq(0).html(item)
                    if (index == 1){
                        $('.chance_color span').eq(0).html(datalist2.skuName.replace(datalist2.spuName,'').split(' ')[2])
                    }else if (index == 2){
                        $('.chance_color span').eq(0).html(datalist2.skuName.replace(datalist2.spuName,'').split(' ')[1])
                    }
                }
            }
        })
    }

    var skuName = ''
    if (datalist == null){
        skuName = datalist2.skuName
    }else {
        skuName = datalist.skuName
    }
    var tocardata = {
        goods_name:$('.name').html(),
        goods_img:$('.details_img img').attr('src'),
        goods_peizhi:skuName==null?$('.name').html():skuName,
        goods_num:$('.c_num').html(),
        goods_nowprice:$('.y_money').html(),
        goods_oldprice:$('.d_nowprice span').html()
    }

    $('.addtocar').on('touchend',function (){
        if (sessionStorage.getItem('cardata') != null){
            var list = JSON.parse(sessionStorage.getItem('cardata'))
            list.push(tocardata)
            sessionStorage.setItem('cardata',JSON.stringify(list))
        }else {
            var list = []
            list.push(tocardata)
            sessionStorage.setItem('cardata',JSON.stringify(list))
        }
        jiaobiao()
    })

    function jiaobiao(){
        if (JSON.parse(sessionStorage.getItem('cardata')) == null){
            var shuliang = 0
        }else {
            var shuliang = JSON.parse(sessionStorage.getItem('cardata')).length
        }
        sessionStorage.setItem('buycarnum',shuliang)
        $('.jiao').html(sessionStorage.getItem('buycarnum'))
    }
    jiaobiao()


    $('.buynow').on('touchend',function (){
        sessionStorage.setItem('buynow',JSON.stringify(tocardata))
        window.location.href = './order.html'
    })

    $('.def_icon li').eq(2).on('touchend',function (){
        window.location.href = './buycar.html'
    })

    $('.def_icon li').eq(0).on('touchend',function (){
        window.location.href = './home.html'
    })

})