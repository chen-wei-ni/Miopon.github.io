var time =600
var loading = setInterval(function(){
    time-=1
    $(".loading p").css("letter-spacing",time+"px")
    $("html").css("overflow-y","hidden")
    if(time<2){
        clearInterval(loading)
        $("html").css("overflow-y","scroll")
        
        setTimeout(function(){
            $(".loading").addClass("close")
        },1000)
    }
})