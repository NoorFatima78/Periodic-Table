const btnclick = (a) => {

    let value1 = a.childNodes[1].innerHTML;
    let value2 = a.childNodes[3].innerHTML;
    let value3 = a.childNodes[5].innerHTML;
    console.log('click successfully' + value1);
    document.getElementById('popup').style.display='block';
    document.getElementById('cardHeading').innerHTML=value2;
    document.getElementById('cardspan1').innerHTML=value1 + '==>';
    document.getElementById('cardspan2').innerHTML=value3;
}
const closebtn = () => {
    document.getElementById('popup').style.display='none';
    }