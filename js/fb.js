$(document).ready(function(){
    $("form[id='input-padding']").validate({
        rules: {
            fname:{
                required:true,
                minlength:4
            }
        },
    })
})

