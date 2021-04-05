$(function(){

    $("button").click(function(){
        var dan = parseInt($("#dan").val());

        var res = "";
        for (var no=1; no<=9; no++) {
            res += dan + " * "+ no +" = " + (dan * no) + "<br>";
        }

        /*
        var res = dan + " * 1 = " + (dan * 1);
        */
        $("#res").html(res);
    });


});

