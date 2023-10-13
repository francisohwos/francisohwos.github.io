const input = document.querySelector('.input-field')
const bid = document.querySelector('.bid_button');
// const bdj = document.querySelector('.swal2-styled')

let slider = document.querySelector('.mbenz');
let otherImages = ['Benz1.jpg', 'Benz2.jpg', 'Benz3.jpg', 'Benz4.jpg'];
let i = 0;

const next= () =>{
    if(i >= otherImages.length-1) i = -1;
    i++;
    return myImg();			 
}

const prev = () => {
	if(i <= 0) i = otherImages.length;	
	i--;
	return myImg();			 
}


const myImg = () =>{
	return slider.setAttribute('src', "/img/auction-pictures/"+otherImages[i]);	
}

const update = () => {
    const inputValue = input.value
    
    if (inputValue === ''){
        Swal.fire({
            position: 'top-center',
            icon: 'error',
            title: 'Please enter your bid amount',
            showConfirmButton: false,
            timer: 1500
          })
    }
    else {
        Swal.fire({
            title: 'Your bid has been successfully placed',
            showClass: {
              popup: 'animate__animated animate__fadeInDown'
            },
            hideClass: {
              popup: 'animate__animated animate__fadeOutUp'
            },
            // timer: 3000
          })
          
          // window.location.href="/pages/auction-page-all-items.html"
    }
}

bid.addEventListener('click',update)