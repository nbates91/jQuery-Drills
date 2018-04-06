$('body').append('<div></div>');
$('div').append('<h2></h2>');
var ul = $('<ul></ul>');
$('body').append(ul);

function insertLi() {
    var inputTxt = $('#submit').val();
    var li = $('<li>' + inputTxt +'</li>');
    li.click(generateColor);
    ul.append(li);
}





$('li').dblclick(function(){
$('li').remove();

});
// This function turned my bg color green and gave the bg rounded edges. h2 got replaced by ul so the code doesnt style anymnore.
// $('h2').mouseover(function () {
    // $('h2').css({
        // 'background-color': 'green',
        // 'border-radius': '5px'
    // });
// });



function showAlert() {
    var typedMsg = $('#submit').val();
    if (typedMsg == '') {
        $('#button1').attr("disabled")
    } else {
        alert(typedMsg)
        $('li').append(typedMsg)
    }
};



function generateColor() {
    var randomColor1 = Math.floor((Math.random() * 256));
    var randomColor2 = Math.floor((Math.random() * 256));
    var randomColor3 = Math.floor((Math.random() * 256));
    $(this).css('color', 'rgb(' + randomColor1 + ',' + randomColor2 + ',' + randomColor3 + ')');
console.log(this);
};
