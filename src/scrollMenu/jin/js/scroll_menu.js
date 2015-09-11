$(function(){
    var menu = $('#top_menu > ul > li');
    var contents = $('#contents > div');
    
    menu.click(function(event){
       event.preventDefault();
       
       var tg = $(this);
       var i = tg.index();
       
       var section = contents.eq(i);
        var tt = section.offset().top;

        $('html, body').stop().animate({scrollTop:tt});
    });
});

function drag (event) {
    event.preventDefault();
    event.dataTransfer.setData("id", event.target.id);

    console.log(event.target);
}

function dropEvent (event) {
    console.log(event);
}

function allowDrop (event) {
    console.log('allowDrop : ', event);
}