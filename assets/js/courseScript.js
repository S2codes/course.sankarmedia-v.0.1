$(document).ready(function () {
    console.log('hello query');
    
    $.ajax({
        // url: 'https://lms-panel.herokuapp.com/api/courses',
        // url: 'http://localhost:3033/api/courses',
        url: 'http://localhost:3033/api/courses/course101beetabie',
        // url: 'http://45.80.181.112/api/courses',
        type: 'post',
        data: {apiauth: 'apiauth123'},
        success: function (data) {
            data = JSON.stringify(data)

            console.log(data);
            console.log(typeof(data));
            let newdata = JSON.parse(data)
            console.log(typeof(newdata));
            console.log(newdata.title);
            // $('#jsndata').html(data)
            $('#courseTitle').text(newdata.title)
            $('#courseDescription').text(newdata.description)
            $('#courseThumbnail').html(`<img src="http://localhost:3033/uploads/${newdata.thumbnail}" alt="">`);
            $('#courseIntro').html(newdata.intro);
            $('#coursePrice').html(`${newdata.price} ₹`);
        }

    })


 


})
