

function request(url,type){
    return new Promise((resolve,reject)=>{
        let xhr = new XMLHttpRequest()
        xhr.open(type,url)
        xhr.send()

        xhr.onreadystatechange = function (){
            if (xhr.readyState === 4){
                if (xhr.status >=200 && xhr.status<300){
                    resolve(xhr.response)
                }else {
                    reject(xhr.status)
                }

            }
        }
    })
}

//nav
request('./../json/navList.json','get').then(res=>{
    var navList = JSON.parse(res).data
    $.each(navList,function (index,item){
        $('<li></li>').html(`
                <img src="${item.url}" alt="">
                <p>${item.title}</p>
            `).appendTo('.home_nav ul')
    })
})

// goods
request('./../json/indexList.json','get').then(res=>{
    var goodsList = JSON.parse(res).data
    var i = 0
    $.each(goodsList,function (index,item){
        i = index;
        if (item.url == null){
           $('<div class="home_goods_type2"></div>').html(`
            <div class="goods_title">
                <div class="gleft">
                    <div class="home_goods_title">今日必抢</div>
                    <div class="time">
                        <span>00</span>
                        <span>:</span>
                        <span>00</span>
                        <span>:</span>
                        <span>00</span>
                    </div>
                    <span>后结束</span>
                </div>
                <div class="gright">
                    更多
                    <span></span>
                </div>
            </div>
            <div class="goods_type2_banner">
                <ul>
                    <li class="last">
                        <p>更多产品</p>
                        <span></span>
                    </li>
                </ul>
            </div>
           `).appendTo($('.home_goodsList'))
            $.each(item.productDetailss,function (index,item){
                var datalist = JSON.stringify(item)
                $('<li></li>').attr('dataList',datalist).html(`
                    <img src="" data-original="${item.url}" alt="">
                    <p class="pro_name">${item.title}</p>
                    <p class="pro_price">
                        <span class="nowprice">
                            <span>￥</span>
                            <span>${item.price}</span>
                        </span>
                        <span class="oldprice">
                            <span>￥</span>
                            <span>${item.originalPrice}</span>
                        </span>
                    </p>`).insertBefore($('.last'))
            })
        }else {
            $('<div class="home_goods_type"></div>').html(`
                <div class="home_goods_title">${item.name}</div>
                <div class="home_goods_type_big ${item.url == ''?'home_goods_bigimg':''}">
                    <img src="" data-original="${item.url}" alt="">
                </div>
                <ul class="ul">
                </ul>
            `).appendTo($('.home_goodsList'))
            $.each(item.productDetailss,function (index,item){
                var datalist = JSON.stringify(item)
                $('<li></li>').attr('dataList',datalist).html(`
                    <img src="" data-original="${item.url}" alt="">
                    <div class="home_goods_info">
                        <p>${item.title}</p>
                        <p>
                            <span class="youhui_type">${item.pricePrefix}</span>
                            <span>￥</span>
                            <span class="info_price">${item.price}</span>
                        </p>
                    </div>
                `).appendTo($('.home_goodsList').children().eq(i).children().eq(2))
            })
        }
    })

    $('.home_goodsList img').lazyload({
        threshold: 0,
        effect : "fadeIn"
    })

    $('.home_fixed').hide()
    $(window).scroll(function (){
        if ($(window).scrollTop()<$('.home_goods_type2').offset().top){
            $('.home_fixed').hide()
        }else {
            $('.home_fixed').show()
        }
    })

    // 移动
    var startX = 0
    var moveX = 0
    var endX = 0
    var w = 0
    $.each($('.goods_type2_banner li'),function (index,item){
        w += item.offsetWidth
    })
    $('.goods_type2_banner ul').css('width',w+'px')
    $('.goods_type2_banner').on({
        touchstart: function (event){
            startX = event.originalEvent.touches[0].pageX - moveX
        },
        touchmove :function (event){
            moveX = event.originalEvent.touches[0].pageX - startX

            if(moveX > 0){
                moveX = 0
            }

            if(moveX < document.body.offsetWidth-w-25){
                moveX = document.body.offsetWidth-w-25
            }

            $('.goods_type2_banner ul').css('left',moveX+'px')
        }
    })

    sessionStorage.setItem('buynow','')
    sessionStorage.setItem('dataList',JSON.stringify(null))
    $('.home_goodsList li').on('click',function (){
        sessionStorage.setItem('dataList',$(this).attr('dataList'))
        window.location.href = './details.html'
    })
})


$(function (){
    var gallery = mui('.mui-slider');
    gallery.slider({
        interval:2000
    });
// gallery.slider().gotoItem(index);

    $('.home_fixed li:last-child').click(function (){
        $('html,body').animate({'scrollTop':0},300)
    })
})

suanshu()
tiaozhuan()