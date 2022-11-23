$(function(){
    var isLogin = false

    $('.login span').click(function (){
        isLogin = true
        $('.my_img img').attr('src','https://uc-avatar-cn.heytapimage.com/titans-usercenter-avatar-bucket-cn/avatar/2.png?imgModifyTime=null&x-oss-process=image/format,webp')
        $('.my_name p').html('靓仔你好').next().html(`181****1234`)
        $(this).parent().hide()
        $('.f_icon2').next().html(`退出登录`)
        $('.my_jifen span').eq(0).html('0')
        $('.my_jifen span').eq(1).html('0')
    })

    $('.f_icon2').next().click(function (){
        if (isLogin){
            isLogin = true
            $('.my_img img').attr('src','../oppo/res/drawable-xxhdpi-v4/default_profile.png')
            $('.my_name p').html('登录账号').next().html(`体验更多功能`)
            $('.login').show()
            $('.my_jifen span').eq(0).html('--')
            $('.my_jifen span').eq(1).html('--')
            $(this).html(`登录账号`)
        }
    })

    tiaozhuan()
    suanshu()
})