const stars=document.querySelectorAll('.star');
const currentRating=document.querySelector('.currentRating');

stars.forEach((star,index)=>{
    
    star.addEventListener('click',()=>{

        let currentStar=index+1;
        currentRating.innerText=`${currentStar} of  5 `;

        stars.forEach((star,i)=>{
            if(currentStar>=i+1)
            {
                star.innerHTML='&#9733;';
            }
            else{
                star.innerHTML='&#9734;';
            }
        });
    });

});