$(document).ready(function () {
    console.log('hello checkout ');

    $('#cuponBtn').click(function () {
        console.log('cupon clicked');
        $('#cuponModal').modal('show');
    })

    $('#applyCupon').click(function () {
        console.log('cupon apply');
        const cuponCode = $('#cuponCode').val();
        if (cuponCode == '') {
            $('#cuponModal').modal('hide');
        } else {
            // console.log(cuponCode);
            applyCupon(cuponCode)

        }
    })


    function applyCupon(code) {
        console.log(code);

        $('#cuponItem').html(` <li class="text-primary">Cupon 
        (<span class="fst-italic" id="applyCupon">${code}</span> )
        </li>
        <li class="text-primary">- <span id="cuponDiscount">${45}</span> ₹</li> `)




    }


})