$(document).ready(function(){
    $(".gallery-item").click(function(){
        const itemId = $(this).data("member-id");
        const itemName = $(this).find("h1").text();
        const itemImg = $(this).find("img").attr('src');
        const itemPrice = $(this).find('p').text();
        const itemAuthor = $(this).find('h2').text();
    
        $('#model-heading').text(itemName);
        $('#model-img').attr('src', itemImg);
        $('#model-descr').text(`Author: ${itemAuthor}`);
        $('#model-price').text(`Price: ${itemPrice}`);
        $('#model').fadeIn(300);
    });
    $('#close-btn', '#model').click(function(e){
        if(e.target == this){
            $('#model').fadeOut(300);
        }
    })
})