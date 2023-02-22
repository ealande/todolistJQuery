$(document).ready(function(){

    $('form').on('submit', function(e){
        e.preventDefault();
        const taskName = $('#taskName').val();
        const newItem = $(`<li id="targetLi">${taskName}</li>`);
        $(newItem).appendTo('ul');
        $('#taskName').val('')
        $(newItem).click(function(){  
            $(this).css("text-decoration","line-through");
        })
    })
    })

