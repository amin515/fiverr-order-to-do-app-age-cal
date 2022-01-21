

function agc_cal() {
    let date = new Date();
    let month = date.getMonth();
    
    if( month === 0 ){ // Jan
       return 31;
    }else if( month === 1 ){ // Feb
       return 28;
    }else if( month === 3 ){ // Mar
       return 31;
    }else if( month === 4 ){ // Apr
       return 30;
    }else if( month === 5 ){ // May
       return 31;
    }else if( month === 6 ){ // Jun
       return 30;
    }else if( month === 7 ){ // Jul
       return 31;
    }else if( month === 8 ){ // Agu
       return 31;
    }else if( month === 9 ){ // Sep
       return 30;
    }else if( month === 10 ){ // Oct
       return 31;
    }else if( month === 11 ){ // Nov
       return 30;
    }else if( month === 12 ){ // Dec
       return 31;
    }
 }
 

 function uicolor(){
let licolor = document.querySelector('select[name="opt"]');


if(licolor.value == 'important'){
   return 'bg-success';
}else if(licolor.value == 'Not-Important'){
   return 'bg-primary'
}else if(licolor.value == 'Un-neccessary'){
   return 'bg-warning' 
}

}
