document.getElementById('first-btn')
    .addEventListener('click', function () {
        console.log('show add money button clicked');
        document.getElementById('first-btn').style.backgroundColor = '#b4f461';
        document.getElementById('transection-btn').style.backgroundColor = '#FFFFFF';
        
        showSectionById('donate-upper-btn');
    });


document.getElementById('transection-btn')
    .addEventListener('click', function () {
        document.getElementById('transection-btn').style.backgroundColor = '#b4f461';
        document.getElementById('first-btn').style.backgroundColor = '#FFFFFF';
        showSectionById('transection-container');
    });