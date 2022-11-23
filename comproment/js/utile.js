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

var carnumber = 0
function carnum(num){
    carnumber =  num
}


var navList = ['./home.html','./classify.html','./buycar.html','./my.html']
function tiaozhuan(){
    $('.daohang li').on('touchend',function (){
        if ($(this).attr('class') == undefined){
            window.location.href = navList[$(this).index()]
        }
    })
}

function suanshu(){
    if (sessionStorage.getItem('buycarnum') !=null){
        $('.jiaobiao').html(sessionStorage.getItem('buycarnum'))
    }else {
        $('.jiaobiao').hide()
    }
}

(function(){
    var calc = function(){
        var rem = 0;
        if (document.documentElement.clientWidth>750){
            rem = 190
        }else {
            rem = document.documentElement.clientWidth/3.75
        }
        document.documentElement.style.fontSize = rem + 'px';
    }
    calc();
    window.addEventListener('resize',calc);

})();