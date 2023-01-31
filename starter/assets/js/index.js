  $(document).ready(function() {

    // listen to save-button clicks

    $(".saveBtn").on("click", function(){
        console.log('It saved');


        let timeID = $(this).parent().attr("id")
        let value = $(this).siblings(".description").val();

        console.log(timeID);
        console.log(value);

        localStorage.setItem(timeID, value);

        $(".notification").addClass('show');

        setTimeout(function(){
            $("notification").removeClass("show");
        }, 5000)
    })


    function hourUpdate(){
        let currentHour = moment().hours();
        
        $(".time-block").each(function(){
            let blockHour = parseInt($(this).attr("id").split("-")[9]);
            alert(blockHour);
        })

    }



  })

