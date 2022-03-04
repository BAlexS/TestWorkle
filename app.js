const access_key = "22eNju4NINzGu01bpMQaQ2lPkaulMrj-9GlfdtPO8mo"

const random_photo_url = `https://api.unsplash.com/photos/random?client_id=${access_key}&count=1`;

const imageContainer = document.querySelector('.imageContainer');

let allImages;

const getImages = () => {
   fetch(random_photo_url)
      .then(res => res.json())
      .then(data => {
         allImages = data;
         makeImages(allImages);
      });
}

const makeImages = (data) => {
   data.forEach((item, index) => {

      let img = document.createElement('img');
      img.src = item.urls.regular;
      img.className = 'imageContainer_img';

      imageContainer.appendChild(img);
   });
}

getImages();

const random_photo_url2 = `https://api.unsplash.com/photos/random?client_id=${access_key}&count=1`;

const imageContainer2 = document.querySelector('.imageContainer2');

let allImages2;

const getImages2 = () => {
   fetch(random_photo_url2)
      .then(res => res.json())
      .then(data => {
         allImages2 = data;
         makeImages2(allImages2);
      });
}
const makeImages2 = (data) => {
   data.forEach((item, index) => {

      let img = document.createElement('img');
      img.src = item.urls.regular;
      img.className = 'imageContainer_img2';

      imageContainer2.appendChild(img);
   });
}
getImages2();


const random_photo_url3 = `https://api.unsplash.com/photos/random?client_id=${access_key}&count=1`;

const imageContainer3 = document.querySelector('.imageContainer3');

let allImages3;

const getImages3 = () => {
   fetch(random_photo_url3)
      .then(res => res.json())
      .then(data => {
         allImages3 = data;
         makeImages3(allImages3);
      });
}
const makeImages3 = (data) => {
   data.forEach((item, index) => {

      let img = document.createElement('img');
      img.src = item.urls.regular;
      img.className = 'imageContainer_img3';

      imageContainer3.appendChild(img);
   });
}
getImages3();

const random_photo_url4 = `https://api.unsplash.com/photos/random?client_id=${access_key}&count=1`;

const imageContainer4 = document.querySelector('.imageContainer4');

let allImages4;

const getImages4 = () => {
   fetch(random_photo_url4)
      .then(res => res.json())
      .then(data => {
         allImages4 = data;
         makeImages4(allImages4);
      });
}
const makeImages4 = (data) => {
   data.forEach((item, index) => {

      let img = document.createElement('img');
      img.src = item.urls.regular;
      img.className = 'imageContainer_img4';

      imageContainer4.appendChild(img);
   });
}
getImages4();

const random_photo_url5 = `https://api.unsplash.com/photos/random?client_id=${access_key}&count=1`;

const imageContainer5 = document.querySelector('.imageContainer5');

let allImages5;

const getImages5 = () => {
   fetch(random_photo_url5)
      .then(res => res.json())
      .then(data => {
         allImages5 = data;
         makeImages5(allImages5);
      });
}
const makeImages5 = (data) => {
   data.forEach((item, index) => {

      let img = document.createElement('img');
      img.src = item.urls.regular;
      img.className = 'imageContainer_img5';

      imageContainer5.appendChild(img);
   });
}
getImages5();

const random_photo_url6 = `https://api.unsplash.com/photos/random?client_id=${access_key}&count=1`;

const imageContainer6 = document.querySelector('.imageContainer6');

let allImages6;

const getImages6 = () => {
   fetch(random_photo_url6)
      .then(res => res.json())
      .then(data => {
         allImages6 = data;
         makeImages6(allImages6);
      });
}
const makeImages6 = (data) => {
   data.forEach((item, index) => {

      let img = document.createElement('img');
      img.src = item.urls.regular;
      img.className = 'imageContainer_img6';

      imageContainer6.appendChild(img);
   });
}
getImages6();

let number = Math.floor(Math.random() * 100000);

document.getElementById("random").innerHTML = number;
document.getElementById("random2").innerHTML = number;
document.getElementById("random3").innerHTML = number;
document.getElementById("random4").innerHTML = number;
document.getElementById("random5").innerHTML = number;
document.getElementById("random6").innerHTML = number;



