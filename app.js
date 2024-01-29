/*
Hello flower friends🌸
Mobin Beauty and I started this project together and finished it😁👌
We have been working on this project for almost three days and we have come across many beautiful and different bugs
But we didn't hesitate and hit it together😎😍
Our biggest problem was the color scheme and it was solved😁
------------------------

 */
//step 1 : entekhab anasor dom
const slides = document.querySelectorAll('.slide');//in kht yek "NODE LIST" hast ke tamami clasehash ro neshone mikone
const dots = document.querySelectorAll('.dot');// in kht yek "NODE LIST" hast ke tamami clasehash ro neshone mikone
const btnShop = document.querySelector('.btnShop'); // in kht yek "NODE LIST" hast ke tamami clasehash ro neshone mikone
const headCar = document.querySelector('.headCar'); //in kht yek "NODE LIST" hast ke tamami clasehash ro neshone mikone

// step 2: roydad noghteha hastan ke miad komak mikone ta begirateshon and amaliat anjam bede roshon
for (let i = 0; i < dots.length; i++) { // be vasile halghe miad yek noghat click ro behesh ezafe mikone
  dots[i].addEventListener('click', function() { // vaghti roye yek noghte click mishe "active" remove she azroye noghte and slider
    for (let j = 0; j < dots.length; j++) {
      dots[j].classList.remove('active');
      slides[j].classList.remove('active');
    }
    
    this.classList.add('active');// inja miad vaghti click mikone ro noghte aval ono be slide ezafe mikone ke bege active shode
    slides[i].classList.add('active');
    const color = this.style.backgroundColor;// dar nahayat miad background color estekhraj mikone 
    
    // step 3: Update the caption background color and text color
    document.querySelector('.caption').style.backgroundColor = color; // inja bade click shodan miad reng ro be background class "caption" mide
    
    // step4: Update the button background color
    btnShop.style.backgroundColor = color; // inja miad be button background on noghte ro mide

    //step5: Update the headCar background color
    headCar.style.backgroundColor = color; //inja miad be text car background on noghte ro mide
  });
}

// step6: Initial setup to set the button color and headCar color to the color of the first dot
const initialColor = dots[0].style.backgroundColor;
btnShop.style.backgroundColor = initialColor;
headCar.style.backgroundColor = initialColor;
// baraye vaghtie ke click mishe roye dokme yek amaliati ro anjam bede
function clickBtn(){
  btnShop.textContent="ok"; //taghire matn button
  btnShop.style.fontSize="17px" //style dadan be matn dokme
}

/* neshan daden moshakhasat */

// const button = document.querySelector('.btnShop');
// const details = document.querySelector('.details-m');

// button.addEventListener('click', function () {
//     // Set the car details
//     document.getElementById('carName-m').innerText = 'مرسدس بنز';
//     document.getElementById('carPrice-m').innerText = '70000$';
//     document.getElementById('carColor-m').innerText = 'رنگ ماشین';
//     document.getElementById('carMileage-m').innerText = '';

//     // Show the details
//     details.style.display = 'block';
// });

// const btnShop = document.querySelector('.btnShop');

// btnShop.addEventListener('click', function() {
//   const color = btnShop.style.backgroundColor;
  
//   switch(colorr) {
//     case 'red':
//       showDetails('Red', '3000$', 'Mobin', '2023', 'Automatic');
//       break;
//     case 'blue':
//       showDetails('Blue', '4000$', 'Mobin', '2023', 'Manual');
//       break;
//     case 'purple':
//       showDetails('Purple', '5000$', 'Mobin', '2023', 'CVT');
//       break;
//     default:
//       showAlert('Please select a color before adding to cart.');
//   }
// });

// function showDetails(colorr, pricee, namee, yearr, gearboxx) {
//   const details = document.querySelector('.details');
//   details.innerHTML = `
//     <p>Color: ${colorr}</p>
//     <p>Price: ${pricee}</p>
//     <p>Name: ${namee}</p>
//     <p>Year: ${yearr}</p>
//     <p>Gearbox: ${gearboxx}</p>
//   `;
//   details.style.display = 'block';
// }

// function showAlert(messagee) {
//   alert(messagee);
// }




