$(document).ready(function(){
    $("form[id='input-padding']").validate({
        rules: {
            fname:{
                required:true,
                minlength:4,
                maxlength:6
            },
            sname: {
                required:true,
                minlength:4
            },
            emailAddress:{
                required:true,
                email:true
            },
            password:{
                required:true,
                minlength: 6
            },
        },
        messages:{
            fname: "enter firstname"
            //required: "this field should be requir"
        }
    })
    $("form[id='side-heading']").validate({
        rules:{
            day: {
                required:true
            },
            gender:{
                required:true
            }
        }
    })
})

