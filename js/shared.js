function output(id) {
    // const totalBalance = document.getElementById(id).innerText;
    return parseFloat(document.getElementById(id).innerText)
}
function amount(id) {
    // const totalBalance = document.getElementById(id).innerText;
    return parseFloat(document.getElementById(id).value)
}


function showSectionById(id){
    document.getElementById('donate-upper-btn').classList.add('hidden');
    document.getElementById('transection-container').classList.add('hidden');
    
    // show the section with the provide id as parameter
    document.getElementById(id).classList.remove('hidden');
}