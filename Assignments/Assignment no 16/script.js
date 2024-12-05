

function newForm() {
    var inp1 = document.getElementById('user name')
    var inp2 = document.getElementById('password')
    var inp3 = document.getElementById('name')
    var inp4 = document.getElementById('email')
    var inp5 = document.getElementById('about')

    var wer1 = inp1.value
    var wer2 = inp2.value
    var wer3 = inp3.value
    var wer4 = inp4.value
    var wer5 = inp5.value

    console.log(wer1);
    console.log(wer2);
    console.log(wer3);
    console.log(wer4);
    console.log(wer5);
    
    var tree1 = document.getElementById('ans1')
    var tree2 = document.getElementById('ans2')
    var tree3 = document.getElementById('ans3')
    var tree4 = document.getElementById('ans4')
    var tree5 = document.getElementById('ans5')

    tree1.innerHTML = wer1
    tree2.innerHTML = wer2
    tree3.innerHTML = wer3
    tree4.innerHTML = wer4
    tree5.innerHTML = wer5

}


















































