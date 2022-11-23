
$('.havegoods').show()
$('.to_pay').hide()
$('.buy_total').hide()
$('.showmingxi').hide()


//渲染
var dataList = JSON.parse(sessionStorage.getItem('cardata'))
$.each(dataList,function (index,item){
    $('<li></li>').html(`
        <img src="../oppo/res/drawable-xxhdpi-v4/check.png" ischeck='true' alt="" class="goods_check">
        <div class="goods_info">
            <img src="${item.goods_img}" alt="">
            <div class="goods_info_txt">
                <p>${item.goods_peizhi}</p>
                <div class="pri">
                    <div class="buycar_price">
                        <p class="buy_newprice">
                            <span>￥</span>
                            <span>${item.goods_nowprice == null?item.goods_oldprice:item.goods_nowprice}</span>
                        </p>
                        <p class="buy_oldprice">￥${item.goods_nowprice == null?item.goods_oldprice:item.goods_oldprice}</p>
                    </div>
                    <div class="buy_num">
                        <span class="jian">-</span>
                        <input type="text" value="${item.goods_num}">
                        <span class="add">+</span>
                    </div>
                </div>
            </div>
        </div>
    `).appendTo($('.buycar_godos>ul'))
})


// 明细列表
var isshowmx = false
$('.mingxi>span').click(function (){
    if (!isshowmx){
        $('.showmingxi').show().animate({'top':'-50vh'},500)
        isshowmx = true
    }else {
        $('.showmingxi').hide().animate({'top':'0'},500)
        isshowmx = false
    }
})

$('.close').click(function (){
    $('.showmingxi').hide().animate({'top':'0'},500)
    isshowmx = false
})


// 商品数量
$('.jian').click(function (){
    if (parseInt($(this).next().val())>1){
        $(this).next().val(parseInt($(this).next().val())-1)
        num =$(this).next().val()
    }
    money()
    goodsnum()
})
$('.add').click(function (){
    $(this).parent().children().eq(1).val(parseInt($(this).parent().children().eq(1).val())+1)
    dataList[$(this).parent().parent().parent().parent().parent().index()].goods_num = $(this).parent().children().eq(1).val()
    money()
    goodsnum()
})

// 全选
$('.goods_check').on('touchend',function (){
    var flah = true
    if ($(this).attr('ischeck') == 'true'){
        $(this).attr('src','../oppo/res/drawable-xxhdpi-v4/check_off.png')
        $(this).attr('ischeck','false')
    }else {
        $(this).attr('src','../oppo/res/drawable-xxhdpi-v4/check.png')
        $(this).attr('ischeck','true')
    }
    $.each($('.goods_check'),function (index,item){
        if ($(item).attr('ischeck') == 'false'){
            $('.checkall').attr('src','../oppo/res/drawable-xxhdpi-v4/check_off.png')
            $('.checkall').attr('ischeckall','false')
            flah = false
        }
    })
    if (flah){
        $('.checkall').attr('src','../oppo/res/drawable-xxhdpi-v4/check.png')
        $('.checkall').attr('ischeckall','true')
    }
    money()
    goodsnum()
})

$('.checkall').on('touchend',function (){
    if ($(this).attr('ischeckall') == 'true'){
        $(this).attr('src','../oppo/res/drawable-xxhdpi-v4/check_off.png')
        $(this).attr('ischeckall','false')
        $.each($('.goods_check'),function (index,item){
            $(item).attr('src','../oppo/res/drawable-xxhdpi-v4/check_off.png')
            $(item).attr('ischeck','false')
        })
    }else {
        $(this).attr('src','../oppo/res/drawable-xxhdpi-v4/check.png')
        $(this).attr('ischeckall','true')
        $.each($('.goods_check'),function (index,item){
            $(this).attr('src','../oppo/res/drawable-xxhdpi-v4/check.png')
            $(this).attr('ischeck','true')
        })
    }
    money()
    goodsnum()
})


// 编辑
var isbianji = false
$('.total_right p').on('touchend',function (){
    if (!isbianji){
        $(this).html('完成').parent().children().eq(0).hide()
        $('.pay_totalprice').hide()
        $('.pay p').html('删除').attr('ispay','false')
        isbianji = true
    }else {
        $(this).html('编辑').parent().children().eq(0).show()
        $('.pay_totalprice').show()
        $('.pay p').html(`去结算
                    <span>(1)</span>`).attr('ispay','true')
        isbianji = false
    }
})

//删除或结算
$('.pay').on('touchend',function (){
    if ($(this).children().attr('ispay') == 'true'){
        var num = 0
        $.each($('.goods_check'),function (index,item){
            if ($(item).attr('ischeck') == 'true'){
                num++
            }
        })
        if (num>0){
            topay()
            window.location.href = './order.html'
        }else {
            mui.toast('没有要结算的商品',{ duration:'long', type:'div' })
        }

    }else {
        mui.confirm('是否删除','确认',['取消','确认'],function (e){
            if (e.index == 1){
                del()
                money()
                goodsnum()
            }
        })
    }
})

// 算钱
function money(){
    var totalmoney = 0
    var youhui = 0
    $.each($('.goods_check'),function (index,item){
        if ($(item).attr('ischeck') == 'true'){
            totalmoney += parseInt($('.buy_newprice').eq(index).children().eq(1).html())*parseInt($('.buy_num').eq(index).children().eq(1).val())
            youhui += (parseInt($('.buy_oldprice').eq(index).html().replace('￥',''))-parseInt($('.buy_newprice').eq(index).children().eq(1).html()))*parseInt($('.buycar_godos li').eq(index).find('input').val())
        }
    })
    $('.total_price p>span').html(totalmoney)
    $('.mx_price span').eq(1).html('￥'+totalmoney)
    $('.total_quan').children().eq(1).children().html(youhui)
    $('.mx_bt span').eq(1).html(`<i>-</i>￥${youhui}`)
    $('.mx_total span').html(`<i>-</i>￥${youhui+parseInt($('.mx_q span').eq(1).text().replace('-￥',''))}`)
    if (totalmoney == 0){
        $('.total_quan').hide()
    }else {
        $('.total_quan').show()
    }
}
money()

//数量
function goodsnum(){
    var totalgoodsnum = 0
    $.each($('.goods_check'),function (index,item){
        if ($(item).attr('ischeck') == 'true'){
            totalgoodsnum += parseInt($('.buy_num').eq(index).children().eq(1).val())
        }
    })
    $('.buy_total').children().eq(0).children().html($('.buycar_godos li').length)
    $('.pay p>span').html('('+totalgoodsnum+')')

    if ($('.goods_check').length == 0){
        $('.to_pay').hide()
        $('.havegoods').show()
        $('.buy_total').hide()
    }else {
        $('.to_pay').show()
        $('.havegoods').hide()
        $('.buy_total').show()
    }
    sessionStorage.setItem('buycarnum',$('.buycar_godos li').length)
}
goodsnum()


// 删除
function del(){
    var newdatalist = []
    $.each($('.goods_check'),function (index,item){
        if ($(item).attr('ischeck') == 'true'){
            $(item).parent().remove()
        }else {
            newdatalist.push(dataList[index])
        }
        if (index == dataList.length-1){
            dataList = newdatalist
            sessionStorage.setItem('cardata',JSON.stringify(dataList))
        }
    })
}

//结账
function topay(){
    var topayList = []
    $.each($('.goods_check'),function (index,item){
        if ($(item).attr('ischeck') == 'true'){
            topayList.push(dataList[index])
        }
    })
    sessionStorage.setItem('buy',JSON.stringify(topayList))
}


tiaozhuan()
suanshu()
