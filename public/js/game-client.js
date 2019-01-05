$(function(){
    let name = $('#name') ;
    let op = $('#op') ;
    let gamescore = $('#score') ;
    let btn = $('#send') ;
    
    
    btn.click(function(){ 
        let details = {
            gname: name.val() ,
            gcountry: op.val() ,
            gscore: gamescore.val()
        } ;
        $.ajax({
            type: "POST",
            url: '/game',
            data:  details,
            success: function (data, textStatus, jqXHR) {
                if(data == 'ok')
                    window.location.href = '/leadboards' ;
            } 
        }) ;
    }) ;
}) ;