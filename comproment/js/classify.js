
$('body').css('overflow','hidden')

tiaozhuan()
suanshu()

var i = -1
var m = -1
// 左侧导航
request('./../json/classifynav.json','get').then(res=>{
    var navlist = JSON.parse(res).data
    $.each(navlist,function (index,item){
        if (index == 0){
            $('<li class="nav_active"></li>').html(`
                <span>${item.name}</span>
            `).appendTo($('.classify_nav>ul'))
        }else {
            $('<li></li>').html(`
                <span>${item.name}</span>
            `).appendTo($('.classify_nav>ul'))
        }
    })
})


// 商品部分
async function req(){
    await request('./../json/classify.json','get').then(res=>{
        var typeList = JSON.parse(res).data[0].category
        $('<li></li>').html(`
        <img src=""  data-original="${typeList.ads[0].logoUrl}" alt="" class="bigtypeimg">
        <div class="type">
            <p>${typeList.name}</p>
            <ul class="t1">
            </ul>
        </div>
    `).appendTo($('.c_g_ul'))
        m++
        $.each(typeList.goods,function (index,item){
            $('<li></li>').attr('dataList',JSON.stringify(item)).html(`
            <img src="" data-original="${item.mainImg}" alt="">
            <div class="t_right">
                <p class="g_name">${item.spuName}</p>
                <p class="g_info">${item.spuShortDesc}</p>
                <p class="g_price">
                    <span>${item.priceInfo.prefix}</span>
                    <span>${item.priceInfo.currencyTag}</span>
                    <span>${item.priceInfo.buyPrice == null?item.priceInfo.price:item.priceInfo.buyPrice}</span>
                </p>
            </div>
        `).appendTo($('.t1').eq(m))
        })
    })
    await request('./../json/classify1.json','get').then(res=>{
        var typeList = JSON.parse(res).data
        $.each(typeList,function (index,item){
            m++
            $('<li></li>').html(`
            <img src=""  data-original="${item.category.ads.length==0?'':item.category.ads[0].logoUrl}" alt="" class="bigtypeimg">
            <div class="type">
                <p>${item.category.name}</p>
                <ul class="t1">
                </ul>
            </div>
        `).appendTo($('.c_g_ul'))
            $.each(item.category.goods,function (index,item){
                $('<li></li>').attr('dataList',JSON.stringify(item)).html(`
            <img src="" data-original="${item.mainImg}" alt="">
            <div class="t_right">
                <p class="g_name">${item.spuName}</p>
                <p class="g_info">${item.spuShortDesc}</p>
                <p class="g_price">
                    <span>${item.priceInfo.prefix}</span>
                    <span>${item.priceInfo.currencyTag}</span>
                    <span>${item.priceInfo.buyPrice == null?item.priceInfo.price:item.priceInfo.buyPrice}</span>
                </p>
            </div>
        `).appendTo($('.t1').eq(m))
            })
        })
    })
    await request('./../json/classify2.json','get').then(res=>{
        var typeList = JSON.parse(res).data[0].category
        $('<li></li>').html(`
        <img src=""  data-original="${typeList.ads[0].logoUrl}" alt="" class="bigtypeimg">
        <div class="type">
            <p>${typeList.name}</p>
            <ul class="t1">
            </ul>
        </div>
    `).appendTo($('.c_g_ul'))
        m++
        $.each(typeList.goods,function (index,item){
            $('<li></li>').attr('dataList',JSON.stringify(item)).html(`
            <img src="" data-original="${item.mainImg}" alt="">
            <div class="t_right">
                <p class="g_name">${item.spuName}</p>
                <p class="g_info">${item.spuShortDesc}</p>
                <p class="g_price">
                    <span>${item.priceInfo.prefix}</span>
                    <span>${item.priceInfo.currencyTag}</span>
                    <span>${item.priceInfo.buyPrice == null?item.priceInfo.price:item.priceInfo.buyPrice}</span>
                </p>
            </div>
        `).appendTo($('.t1').eq(m))
        })
    })
    await request('./../json/classify3.json','get').then(res=>{
        var typeList = JSON.parse(res).data[0].category
        $('<li></li>').html(`
        <img src=""  data-original="${typeList.ads[0].logoUrl}" alt="" class="bigtypeimg">
        <div class="type">
            <p>${typeList.name}</p>
            <ul class="t1">
            </ul>
        </div>
    `).appendTo($('.c_g_ul'))
        m++
        $.each(typeList.goods,function (index,item){
            $('<li></li>').attr('dataList',JSON.stringify(item)).html(`
            <img src="" data-original="${item.mainImg}" alt="">
            <div class="t_right">
                <p class="g_name">${item.spuName}</p>
                <p class="g_info">${item.spuShortDesc}</p>
                <p class="g_price">
                    <span>${item.priceInfo.prefix}</span>
                    <span>${item.priceInfo.currencyTag}</span>
                    <span>${item.priceInfo.buyPrice == null?item.priceInfo.price:item.priceInfo.buyPrice}</span>
                </p>
            </div>
        `).appendTo($('.t1').eq(m))
        })
    })
    await request('./../json/classify4.json','get').then(res=>{
        var typeList = JSON.parse(res).data[0].category
        $('<li></li>').html(`
        <img src=""  data-original="${typeList.ads[0].logoUrl}" alt="" class="bigtypeimg">
        <div class="type">
            <p>${typeList.name}</p>
            <ul class="t1">
            </ul>
        </div>
    `).appendTo($('.c_g_ul'))
        m++
        $.each(typeList.goods,function (index,item){
            $('<li></li>').attr('dataList',JSON.stringify(item)).html(`
            <img src="" data-original="${item.mainImg}" alt="">
            <div class="t_right">
                <p class="g_name">${item.spuName}</p>
                <p class="g_info">${item.spuShortDesc}</p>
                <p class="g_price">
                    <span>${item.priceInfo.prefix}</span>
                    <span>${item.priceInfo.currencyTag}</span>
                    <span>${item.priceInfo.buyPrice == null?item.priceInfo.price:item.priceInfo.buyPrice}</span>
                </p>
            </div>
        `).appendTo($('.t1').eq(m))
        })
    })
    await request('./../json/classify5.json','get').then(res=>{
        var typeList = JSON.parse(res).data[0].category
        $('<li></li>').html(`
        <img src=""  data-original="${typeList.ads[0].logoUrl}" alt="" class="bigtypeimg">
        <div class="type">
            <p>${typeList.name}</p>
            <ul class="t1">
            </ul>
        </div>
    `).appendTo($('.c_g_ul'))
        m++
        $.each(typeList.goods,function (index,item){
            $('<li></li>').attr('dataList',JSON.stringify(item)).html(`
            <img src="" data-original="${item.mainImg}" alt="">
            <div class="t_right">
                <p class="g_name">${item.spuName}</p>
                <p class="g_info">${item.spuShortDesc}</p>
                <p class="g_price">
                    <span>${item.priceInfo.prefix}</span>
                    <span>${item.priceInfo.currencyTag}</span>
                    <span>${item.priceInfo.buyPrice == null?item.priceInfo.price:item.priceInfo.buyPrice}</span>
                </p>
            </div>
        `).appendTo($('.t1').eq(m))
        })
    })
    await request('./../json/classify6.json','get').then(res=>{
        var typeList = JSON.parse(res).data[0].category
        $('<li></li>').html(`
        <img src=""  data-original="${typeList.ads[0].logoUrl}" alt="" class="bigtypeimg">
        <div class="type">
            <p>${typeList.name}</p>
            <ul class="t1">
            </ul>
        </div>
    `).appendTo($('.c_g_ul'))
        m++
        $.each(typeList.goods,function (index,item){
            $('<li></li>').attr('dataList',JSON.stringify(item)).html(`
            <img src="" data-original="${item.mainImg}" alt="">
            <div class="t_right">
                <p class="g_name">${item.spuName}</p>
                <p class="g_info">${item.spuShortDesc}</p>
                <p class="g_price">
                    <span>${item.priceInfo.prefix}</span>
                    <span>${item.priceInfo.currencyTag}</span>
                    <span>${item.priceInfo.buyPrice == null?item.priceInfo.price:item.priceInfo.buyPrice}</span>
                </p>
            </div>
        `).appendTo($('.t1').eq(m))
        })
    })
    await request('./../json/classify7.json','get').then(res=>{
        var typeList = JSON.parse(res).data[0].category
        $('<li></li>').html(`
        <img src=""  data-original="${typeList.ads[0].logoUrl}" alt="" class="bigtypeimg">
        <div class="type">
            <p>${typeList.name}</p>
            <ul class="t1">
            </ul>
        </div>
    `).appendTo($('.c_g_ul'))
        m++
        $.each(typeList.goods,function (index,item){
            $('<li></li>').attr('dataList',JSON.stringify(item)).html(`
            <img src="" data-original="${item.mainImg}" alt="">
            <div class="t_right">
                <p class="g_name">${item.spuName}</p>
                <p class="g_info">${item.spuShortDesc}</p>
                <p class="g_price">
                    <span>${item.priceInfo.prefix}</span>
                    <span>${item.priceInfo.currencyTag}</span>
                    <span>${item.priceInfo.buyPrice == null?item.priceInfo.price:item.priceInfo.buyPrice}</span>
                </p>
            </div>
        `).appendTo($('.t1').eq(m))
        })
    })
    await request('./../json/classify8.json','get').then(res=>{
        var typeList = JSON.parse(res).data
        $.each(typeList,function (index,item){
            i++
            $('<li></li>').html(`
            <img src=""  data-original="${item.category.ads.length == 0?'':item.category.ads[0].logoUrl}" alt="" class="bigtypeimg">
            <div class="type">
                <p>${item.category.name}</p>
                <ul class="t2">
                </ul>
            </div>
        `).appendTo($('.c_g_ul'))
            $.each(item.child,function (index,item){
                $('<li></li>').html(`
                <img src="" data-original="${item.category.logo.mainPic}" alt="">
                <p>${item.category.name}</p>
            `).appendTo($('.t2').eq(i))
            })

            if ($('.t2').eq(i).children().length%3>=1){
                $('<li></li>').css('height',$('.t2').eq(i).children().eq(0).height()+'px').appendTo($('.t2').eq(i))
            }
        })
    })
    await request('./../json/classify9.json','get').then(res=>{
        var typeList = JSON.parse(res).data
        $.each(typeList,function (index,item){
            i++
            $('<li></li>').html(`
            <img src=""  data-original="${item.category.ads.length == 0?'':item.category.ads[0].logoUrl}" alt="" class="bigtypeimg">
            <div class="type">
                <p>${item.category.name}</p>
                <ul class="t2">
                </ul>
            </div>
        `).appendTo($('.c_g_ul'))
            $.each(item.child,function (index,item){
                $('<li></li>').html(`
                <img src="" data-original="${item.category.logo.mainPic}" alt="">
                <p>${item.category.name}</p>
            `).appendTo($('.t2').eq(i))
            })

            if ($('.t2').eq(i).children().length%3>=1){
                $('<li></li>').css('height',$('.t2').eq(i).children().eq(0).height()+'px').appendTo($('.t2').eq(i))
            }
        })
    })
    await request('./../json/classify10.json','get').then(res=>{
        var typeList = JSON.parse(res).data
        $.each(typeList,function (index,item){
            i++
            $('<li></li>').html(`
            <img src=""  data-original="${item.category.ads.length == 0?'':item.category.ads[0].logoUrl}" alt="" class="bigtypeimg">
            <div class="type">
                <p>${item.category.name}</p>
                <ul class="t2">
                </ul>
            </div>
        `).appendTo($('.c_g_ul'))
            $.each(item.child,function (index,item){
                $('<li></li>').html(`
                <img src="" data-original="${item.category.logo.mainPic}" alt="">
                <p>${item.category.name}</p>
            `).appendTo($('.t2').eq(i))
            })

            if ($('.t2').eq(i).children().length%3>=1){
                $('<li></li>').css('height',$('.t2').eq(i).children().eq(0).height()+'px').appendTo($('.t2').eq(i))
            }
        })
    })
    await request('./../json/classify11.json','get').then(res=>{
        var typeList = JSON.parse(res).data
        $.each(typeList,function (index,item){
            i++
            $('<li></li>').html(`
            <img src=""  data-original="${item.category.ads.length == 0?'':item.category.ads[0].logoUrl}" alt="" class="bigtypeimg">
            <div class="type">
                <p>${item.category.name}</p>
                <ul class="t2">
                </ul>
            </div>
        `).appendTo($('.c_g_ul'))
            $.each(item.child,function (index,item){
                $('<li></li>').html(`
                <img src="" data-original="${item.category.logo.mainPic}" alt="">
                <p>${item.category.name}</p>
            `).appendTo($('.t2').eq(i))
            })

            if ($('.t2').eq(i).children().length%3>=1){
                $('<li></li>').css('height',$('.t2').eq(i).children().eq(0).height()+'px').appendTo($('.t2').eq(i))
            }
        })
    })
    await request('./../json/classify12.json','get').then(res=>{
        var typeList = JSON.parse(res).data
        $.each(typeList,function (index,item){
            i++
            $('<li></li>').html(`
            <img src=""  data-original="${item.category.ads.length == 0?'':item.category.ads[0].logoUrl}" alt="" class="bigtypeimg">
            <div class="type">
                <p>${item.category.name}</p>
                <ul class="t2">
                </ul>
            </div>
        `).appendTo($('.c_g_ul'))
            $.each(item.child,function (index,item){
                $('<li></li>').html(`
                <img src="" data-original="${item.category.logo.mainPic}" alt="">
                <p>${item.category.name}</p>
            `).appendTo($('.t2').eq(i))
            })

            if ($('.t2').eq(i).children().length%3>=1){
                $('<li></li>').css('height',$('.t2').eq(i).children().eq(0).height()+'px').appendTo($('.t2').eq(i))
            }
        })
    })
    await request('./../json/classify13.json','get').then(res=>{
        var typeList = JSON.parse(res).data
        $.each(typeList,function (index,item){
            i++
            $('<li></li>').html(`
            <img src=""  data-original="${item.category.ads.length == 0?'':item.category.ads[0].logoUrl}" alt="" class="bigtypeimg">
            <div class="type">
                <p>${item.category.name}</p>
                <ul class="t2">
                </ul>
            </div>
        `).appendTo($('.c_g_ul'))
            $.each(item.child,function (index,item){
                $('<li></li>').html(`
                <img src="" data-original="${item.category.logo.mainPic}" alt="">
                <p>${item.category.name}</p>
            `).appendTo($('.t2').eq(i))
            })

            if ($('.t2').eq(i).children().length%3>=1){
                $('<li></li>').css('height',$('.t2').eq(i).children().eq(0).height()+'px').appendTo($('.t2').eq(i))
            }
        })
    })
    await request('./../json/classify14.json','get').then(res=>{
        var typeList = JSON.parse(res).data
        $.each(typeList,function (index,item){
            i++
            $('<li></li>').html(`
            <img src=""  data-original="${item.category.ads.length == 0?'':item.category.ads[0].logoUrl}" alt="" class="bigtypeimg">
            <div class="type">
                <p>${item.category.name}</p>
                <ul class="t2">
                </ul>
            </div>
        `).appendTo($('.c_g_ul'))
            $.each(item.child,function (index,item){
                $('<li></li>').html(`
                <img src="" data-original="${item.category.logo.mainPic}" alt="">
                <p>${item.category.name}</p>
            `).appendTo($('.t2').eq(i))
            })

            if ($('.t2').eq(i).children().length%3>=1){
                $('<li></li>').css('height',$('.t2').eq(i).children().eq(0).height()+'px').appendTo($('.t2').eq(i))
            }
        })

        // 懒加载
        var obj = new IntersectionObserver(lazyimg)
        $.each($('.classify_goodsList img'),function (index,item){
            obj.observe(item)
        })
        function lazyimg(img){
            $.each(img,function (index,item){
                // 判断img数组中的图片是不是在可视区域
                if (item.isIntersecting){
                    // target属性中含有被监听的图片对象
                    item.target.src = item.target.getAttribute('data-original')
                    // 结束监听
                    obj.unobserve(item.target)
                }
            })
        }

        var k = 0
        $.each($('.bigtypeimg'),function (index,item){
            if ($(item).attr('data-original') != ''){
                $(item).attr('id','select'+k)
                k++
            }
        })

        // 跳转
        $('.classify_nav>ul>li').click(function (){
            $(this).addClass('nav_active').siblings().removeClass('nav_active')
            var scroolnav = $('.classify_nav').scrollTop()
            if ($(this).index()>5 && $(this).index()<11){
                $('.classify_nav').animate({'scrollTop':$(this).offset().top-($(window).height()/2)+$(this).height()+scroolnav+'px'},300)
            }
            $('.classify_goodsList').animate({'scrollTop':$('#select'+$(this).index()).position().top+23+'px'},300)
        })

        sessionStorage.setItem('dataList2',JSON.stringify(null))
        $('.c_g_ul>li .t1>li').on('click',function (){
            sessionStorage.setItem('dataList2',$(this).attr('dataList'))
            window.location.href = './details.html'
        })


        // var gunlist = []
        // $.each($('.bigtypeimg'),function (index,item){
        //     if ($(item).attr('id') != undefined){
        //         gunlist.push($(item).offset().top)
        //     }
        // })
        // $('.classify_goodsList').scroll(function (){
        //     // console.log($('#select1').offset())
        //     $.each(gunlist,function (index,item){
        //         if ($('.classify_goodsList').scrollTop()>item){
        //             $('.classify_nav>ul>li').eq(index).addClass('nav_active').siblings().removeClass('nav_active')
        //         }
        //     })
        // })

    })
}
req()

// request('./../json/classify15.json','get').then(res=>{
//     var typeList = JSON.parse(res).data[0].category
//     console.log(typeList)
//     $('<li></li>').html(`
//         <img src=""  data-original="${typeList.ads[0].logoUrl}" alt="" class="bigtypeimg">
//         <div class="type">
//             <p>${typeList.name}</p>
//             <ul>
//             </ul>
//         </div>
//     `).appendTo($('.c_g_ul'))
//     $.each(typeList.goods,function (index,item){
//         $('<li></li>').html(`
//             <img src="" data-original="${item.mainImg}" alt="">
//             <div class="t_right">
//                 <p class="g_name">${item.spuName}</p>
//                 <p class="g_info">${item.spuShortDesc}</p>
//                 <p class="g_price">
//                     <span>${item.priceInfo.prefix}</span>
//                     <span>${item.priceInfo.currencyTag}</span>
//                     <span>${item.priceInfo.buyPrice == null?item.priceInfo.price:item.priceInfo.buyPrice}</span>
//                 </p>
//             </div>
//         `).appendTo($('.type>ul'))
//     })
//
//     lazyimg()
// })

$(function (){
    $(".classify_nav,body").niceScroll({
        autohidemode: true
    })
})
