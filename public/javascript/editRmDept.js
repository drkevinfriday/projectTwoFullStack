async function editDept(){
    let isChecked = false;
    $('.deptSelected').each(function(){
        if($(this).is(':checked'))
            isChecked = true;
    });
    //only if there are any checked boxes
    if(isChecked){
        //Replace text for Edit employee to Save changes
        $(".removeDept").addClass("actionBtn");
        $(".editDept").addClass("saveDeptBtn actionBtn");
        $(".saveDeptBtn").removeClass("editDept").html("Save changes");

        //get all the elements where the checkbox is checked
        $('.deptSelected:checked').closest("tr").each(function(){  
            //refers to the table row that is checked
            $(this).find('p').each(function(){

                //get <p> text and transfer it over to textarea
                var text = $(this).text().trim();
                var textInput = $("<textarea>").val(text);
                $(this).replaceWith(textInput);
                textInput.trigger("focus"); 
            });
        });

        //disable all the checked boxes
        $('.deptSelected:checked').each(function(){
            $(this).prop("disabled",true);
        })
        //disable the remove button
        $('.removeDept').prop("disabled",true);
    }
    else
        alert("No deparment selected to edit!");
}

async function removeDept(){
    console.log("remove was clicked");
    //get all the inputs where the box is checked and remove each of them.
    $('.deptSelected:checked').closest("tr").each(function(){
        //selected.push($(this).attr("id"));
        $(this).remove();
    });
    $(".editDept").removeClass("actionBtn").html("Edit Department");
    $(".removeDept").removeClass("actionBtn");

};

//similar to edit Employee but will save revert text areas back to p tags
async function saveDept(){
    //get all the textareas
    $('textarea').each(function(info){
        var text = $(this).val().trim();
        var savedText = $("<p>").text(text);
        $(this).replaceWith(savedText);
    });

    $('.deptSelected').each(function(){
        $(this).prop("disabled",false);
        //reenable the delete button
        $('.removeDept').prop("disabled",false);
    })

    //Revert text back
    $(".saveDeptBtn").addClass("editDept");
    $(".editDept").removeClass("saveDeptBtn").html("Edit Department");
}

//listen to see if any rows are selected
$('.deptSelected').change(function(){
    let isChecked = false;
    $('.deptSelected').each(function(){
        if($(this).is(':checked'))
            isChecked = true;
    });

    if(isChecked){
        $('.removeDept').addClass('actionBtn');
        $('.editDept').addClass('actionBtn');
    }
    else{
        $('.removeDept').removeClass('actionBtn');
        $('.editDept').removeClass('actionBtn');
    }
});

$('.removeDept').on('click',removeDept);
//save button only appears when Edit button is clicked.
//when clicked will save changes and revert <textarea> back to <p>
$('.mobileButtons').on("click", '.saveDeptBtn',saveDept);
$('.leftButtons').on("click", '.saveDeptBtn',saveDept);
$('.mobileButtons').on("click", ".editDept", editDept);
$('.leftButtons').on("click", ".editDept", editDept);
