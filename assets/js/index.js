  $(document).ready(function(){

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
            $(".notification").removeClass("show");
        }, 5000)
    })


    function hourUpdate(){
        let currentHour = moment().hours();
        
        for(let i = 0; i < $(".time-block").length; i++){
            let hour = parseInt($(".time-block")[i].getAttribute("id").split("-")[1])
            console.log(hour)
            console.log(currentHour)
            if(hour < currentHour) {
                $(".time-block")[i].classList.add("past")
            }  else if(hour === currentHour){
                $(".time-block")[i].classList.remove("past")
                $(".time-block")[i].classList.add("present")
            }  else {
                $(".time-block")[i].classList.remove("past")
                $(".time-block")[i].classList.remove("present")
                $(".time-block")[i].classList.add("future")
            }
        }
            

    }

    hourUpdate();


    let interval = setInterval(hourUpdate, 15000);

    $("#9-hour .description").val(localStorage.getItem("9-hour"))
    $("#10-hour .description").val(localStorage.getItem("10-hour"))
    $("#11-hour .description").val(localStorage.getItem("11-hour"))
    $("#12-hour .description").val(localStorage.getItem("12-hour"))
    $("#13-hour .description").val(localStorage.getItem("13-hour"))
    $("#14-hour .description").val(localStorage.getItem("14-hour"))
    $("#15-hour .description").val(localStorage.getItem("15-hour"))
    $("#16-hour .description").val(localStorage.getItem("16-hour"))
    $("#17-hour .description").val(localStorage.getItem("17-hour"))


    $("#currentDay").text(moment().format("dddd, MMMM, Do"))


  })


