$(document).ready(function () {
    
    $(".cinco").click(function () {
        $(this).css('background', '#aaa');
        $(".seis").css('background', '#e74c3c');
        $(".todas").css('background', '#e74c3c');
        $(".dia-cinco").show();
        $(".dia-seis").hide();

    })
    $(".seis").click(function () {
       
        $(this).css('background', '#aaa');
        $(".todas").css('background', '#e74c3c');
        $(".cinco").css('background', '#e74c3c');
        $(".dia-cinco").hide();
        $(".dia-seis").show();
        
    })
    $(".todas").click(function(){
        $(this).css('background', '#aaa');
        $(".seis").css('background', '#e74c3c');
        $(".cinco").css('background', '#e74c3c');
        $(".dia-cinco").show();
        $(".dia-seis").show();
    })
})