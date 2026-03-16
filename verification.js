$('.input-group > button').on('click', function(event) {
    event.preventDefault();
   var value =$(this).siblings('input').val();
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
   if(value.length == 0){

       alert("Oops! Please add your email")
   }else{


       if(regex.test(value) && value.length > 0){
           alert("bien inscrit a notre  newsletter")
       }else{
           alert("Oops! Please check your email");
       }
   }


});