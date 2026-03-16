$('.input-group > button').on('click', function(event) {
    event.preventDefault();
   var value =$(this).siblings('input').val();

   if(value.length == 0){
       $(this).siblings('input').attr('placeholder', 'Please enter your email')

   }
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if(regex.test(value)){
       alert("bien inscrit a notre  newsletter")
    }else{
      alert("Email invalide");
    }

});