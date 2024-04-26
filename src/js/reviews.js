import axios from 'axios';
import Swiper from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';

const swiper = new Swiper('.swiper', {
   modules: [Navigation],
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
    },
    direction: 'horizontal',
});

const review = document.querySelector('.reviews-list'); 


async function fetchReviews() {
    const url = 'https://portfolio-js.b.goit.study/api/reviews';
    try{
        const response = await axios(url);
        return response.data;
    }
    catch (error) {
        throw new Error('Failed to fetch reviews');
    };
}

async function renderReviews() {
    const data = await fetchReviews();
    review.innerHTML = '';
    const reviewElements = data.map(reviews => {
        return `
        <li class='reviews-item swiper-slide' id='${reviews._id}'>
  <img class='reviews-photo' src="${reviews.avatar_url}" alt="author_photo">
  <h3 class='author-name'>${reviews.author}</h3>
  <p class='author-review'>${reviews.review}</p>
</li>`
    }).join('');

    review.insertAdjacentHTML('beforeend', reviewElements);
}

renderReviews();

