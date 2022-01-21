const fiverr_order = document.getElementById('fiverr_order');

// fiverr_order.addEventListener('submit', function(e){
// e.preventDefault();

// let date = this.querySelector('input[type="date"]').value;
// let time = this.querySelector('input[type="time"]').value;

// let counter = document.querySelector('#count')


// setInterval(function(){

// let start_time = new Date();

// let end_time =  new Date(date + ' ' + time)

// let time_diff = Math.floor(Math.floor(end_time.getTime() - start_time.getTime()) / 1000);



// let total_sec = Math.floor(time_diff);
// let total_min = Math.floor(total_sec / 60);
// let total_hour = Math.floor(total_min / 60);
// let total_day = Math.floor(total_hour / 24);



// // let total_sec = time_diff;
// // let total_min = total_sec / 60;
// // let total_hours = total_min / 60;
// // let total_days = total_hours / 24;

// let hour = total_hour - (total_day * 24)
// let min = total_min - (total_day * 24 * 60 ) - ( hour * 60 );
// let sec = total_sec - (total_day * 24 * 60 * 60) - ( hour * 60 * 60) - ( min * 60 );


// // console.log(total_day + ' ' + ' ' + (hour > 9 ? hour : '0'+ hour) + ' ' + (min > 9 ? min : '0'+ min) +  ' ' + (sec > 9 ? sec : '0'+ sec));


// counter.innerHTML = `

// <h1 class="red">${total_day} Days: ${hour > 9 ? hour : '0'+ hour}Hours : ${min > 9 ? min : '0'+ min}Min : ${sec > 9 ? sec : '0'+ sec}sec</h1>


// `
// }, 1000);






// })


fiverr_order.addEventListener('submit', function (e) {
    e.preventDefault();

    let date = this.querySelector('input[type="date"]').value;
    let time = this.querySelector('input[type="time"]').value;



    if(date ==  '' || time ==  ''){
        alert('All fields are required')
    }else{

        let counter = document.querySelector('#count')

    setInterval(function () {

        let start_date = new Date();
        let end_date = new Date(date + ' ' + time)

        let time_diff = Math.floor(end_date.getTime() - start_date.getTime());


        let time_sec = Math.floor(time_diff / 1000);
        let time_min = Math.floor(time_sec / 60);
        let time_hour = Math.floor(time_min / 60);
        let time_day = Math.floor(time_hour / 24);



        let hour = time_hour - (time_day * 24);
        let min = time_min - (time_day * 24 * 60) - (hour * 60);
        let sec = time_sec - (time_day * 24 * 60 * 60) - (hour * 60 * 60) - (min * 60)


        counter.innerHTML = `<h1 class="alert alert-success" style="font-size: 65px !important; font-weight: 400; line-height:20px;"><p style="color:green;font-size:18px;margin-bottom: 5px;">Time Remaining...</p> </br>
        ${time_day}:<span style="font-size:22px;color:red;">Days</span> ${hour > 9 ? hour : '0'+ hour}:<span style="font-size:22px;color:red;">Hours</span> ${min > 9 ? min : '0'+min}:<span style="font-size:22px;color:red;">Minutes</span> ${sec > 9 ? sec: '0'+ sec}:<span style="font-size:22px;color:red;">Sec</span></h1> `
    }, 1000)
    }

    
})



// fiverr_order.addEventListener('submit', function(e){
// e.preventDefault();


// let date = this.querySelector('input[type="date"]').value;
// let time = this.querySelector('input[type="time"]').value;



// let start_time = new Date();
// let end_time = new Date(date + ' ' + ' ' + time)

// let time_diff = end_time.getTime() - start_time.getTime();

// let set_sec = Math.floor(time_diff / 1000);
// let set_min = Math.floor(set_sec / 60);
// let set_hour = Math.floor(set_min / 60);
// let set_day = Math.floor(set_hour / 24);


// let hour = set_hour - (set_day * 24);
// let min = set_min - (set_day * 24 * 60) - ( hour * 60 );
// let sec = set_sec - (set_day * 24 * 60 * 60) - ( hour * 60 * 60 ) - ( min * 60 )



// })



const sent_2 = document.querySelector('#sent_2');


sent_2.addEventListener('submit', function (g) {
    g.preventDefault();


    let name = this.querySelector('input[type="text"]').value;
    let bday = this.querySelector('input[type="date"]').value;
    let gender = this.querySelector('input[type="radio"]:checked').value;
    let result_2 = this.querySelector('#result_2');
    let result_3 = this.querySelector('#result_3');

    if (name == '' || bday == '') {
       alert('Fields Must be fulfill');
    } else {

        let start_one = new Date();
        let end_two = new Date(name + ' ' + ' ' + bday);


        let time_difff = end_two.getTime() - start_one.getTime();


        let set_sec = Math.floor(Math.abs(time_difff / 1000));
        let set_secc = Math.floor(Math.abs(time_difff));
        let set_min = Math.floor(set_sec / 60);
        let set_hour = Math.floor(set_min / 60);
        let set_day = Math.floor(set_hour / 24);
        let set_week = Math.floor(set_day / 7);
        let set_month = Math.floor(set_day / agc_cal());
        let set_year = Math.floor(set_month / 12);

        let month = set_month - (set_year * 12);
        let day = set_day - (set_year * 12 * agc_cal()) - (month * agc_cal())

        result_2.innerHTML = `
       <p class="alert alert-success mt-2"> 
       Hi ${name} </br>
       Your status: ${gender}
       </p>`

        result_3.innerHTML = `
        <p class="alert alert-success"> Your Actual age is:
         ${set_year} Year ${month} Month   ${day} Day <br>
         Or ${set_week} Week.<br>
         Or ${set_hour} Hours.<br>
         Or ${set_min}  Minutes.<br>
         Or ${set_sec}  Seconds.<br>
         Or ${set_secc} Milisecondes<br>
         
         </p>`
    }
})


// calculator end

// to-do start

const do_form = document.querySelector('#do_form');


do_form.addEventListener('submit', function (b) {
    b.preventDefault();


    
    let do_name = this.querySelector('input[name="do-name"]').value;
    let opt = this.querySelector('select[name="opt"]').value;

    let list = document.querySelector('#list')
    let li = document.createElement('li');

    if(do_name == ''){
        alert('Name fields must be fulfill');
    }else if(opt == "select"){

       alert('plz select priority')
    }else{

        li.classList.add('list-group-item');
        li.classList.add(uicolor());
        li.classList.add('text-white');
    
    
        let closebtn = document.createElement('button');
        closebtn.className = 'close'
        closebtn.innerHTML = '&times'
    
    
        li.appendChild(closebtn);
        list.appendChild(li);
        let habijabi = do_name + " " + opt;
    
        let nodeli = document.createTextNode(habijabi);

    
        
        li.insertBefore(nodeli, closebtn)
        closebtn.addEventListener('click', function () {
            closebtn.parentElement.remove();
        })

        do_name == ''
        opt == "select"
    }
   
   
})

