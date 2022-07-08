async function editEmployee(){
    let isChecked = false;
    $('.selected').each(function(){
        if($(this).is(':checked'))
            isChecked = true;
    });
    //only if there are any checked boxes
    if(isChecked){
        //Replace text for Edit employee to Save changes
        $(".removeBtn").addClass("actionBtn");
        $(".editBtn").addClass("saveBtn actionBtn");
        $(".saveBtn").removeClass("editBtn").html("Save changes");

        //get all the elements where the checkbox is checked
        $('.selected:checked').closest("tr").each(function(){  
            //refers to the table row that is checked
            $(this).find('p').each(function(){
                //if the data being worked on is the name, make sure to disable link
                let profileURL =$(this).parent().prop("href");
                $(this).parent().attr("data",profileURL);
                $(this).parent().removeAttr("href");

                //get <p> text and transfer it over to textarea
                var text = $(this).text().trim();
                var textInput = $("<textarea>").val(text);
                $(this).replaceWith(textInput);
                textInput.trigger("focus"); 
            });
        });

        //disable all the checked boxes
        $('.selected:checked').each(function(){
            $(this).prop("disabled",true);
        })
        //disable the remove button
        $('.removeBtn').prop("disabled",true);
    }
    else
        alert("No employee selected to edit!");
}

async function removeEmployee(){
    console.log("remove was clicked");
    //get all the inputs where the box is checked and remove each of them.
    $('.selected:checked').closest("tr").each(function(){
        //selected.push($(this).attr("id"));
        $(this).remove();
    });
    $(".editBtn").removeClass("actionBtn").html("Edit Employee");
    $(".removeBtn").removeClass("actionBtn");

};

//similar to edit Employee but will save revert text areas back to p tags
async function saveChanges(){
    //get all the textareas
    $('textarea').each(function(info){
        var text = $(this).val().trim();
        var savedText = $("<p>").text(text);
        $(this).replaceWith(savedText);
    });

    $('.selected').each(function(){
        $(this).prop("disabled",false);
        //reenable the delete button
        $('.removeBtn').prop("disabled",false);
    })

    //add links back
    console.log($('.nameLink a'));
    $('.nameLink a').each(function(){  
        let profileURL = $(this).attr("data");
        $(this).attr("href",profileURL);
        $(this).removeAttr("data");
    });

    //Revert text back
    $(".saveBtn").addClass("editBtn");
    $(".editBtn").removeClass("saveBtn").html("Edit Employee");
}

//listen to see if any rows are selected
$('.selected').change(function(){
    let isChecked = false;
    $('.selected').each(function(){
        if($(this).is(':checked'))
            isChecked = true;
    });

    if(isChecked){
        $('.removeBtn').addClass('actionBtn');
        $('.editBtn').addClass('actionBtn');
    }
    else{
        $('.removeBtn').removeClass('actionBtn');
        $('.editBtn').removeClass('actionBtn');
    }
});

$('.removeBtn').click(removeEmployee);
//save button only appears when Edit button is clicked.
//when clicked will save changes and revert <textarea> back to <p>
$('.mobileButtons').on("click", '.saveBtn',saveChanges);
$('.leftButtons').on("click", '.saveBtn',saveChanges);
$('.mobileButtons').on("click", ".editBtn", editEmployee);
$('.leftButtons').on("click", ".editBtn", editEmployee);
