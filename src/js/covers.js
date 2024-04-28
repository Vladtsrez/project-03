// For example, lazysizes is a popular JavaScript lazy loading library. 
//You can detect support for the loading attribute to load lazysizes 
//as a fallback library only when loading isn't supported. 
//This works as follows:

//Замініть <img src> на, <img data-src> щоб уникнути тривалого завантаження 
//в непідтримуваних браузерах. loading Якщо атрибут підтримується, 
//поміняйте місцями data - src символ src.
//Якщо loading не підтримується, завантажте резервний варіант (lazysizes) 
//та ініціюйте його.Відповідно до lazysizes docs, 
//ви використовуєте lazyload клас як спосіб вказати lazysizes, 
//які зображення ліниво завантажити.
if ('loading' in HTMLImageElement.prototype) {
    const images = document.querySelectorAll('img[loading="lazy"]');
    images.forEach(img => {
    img.src = img.dataset.src;
});
} else {
// Dynamically import the LazySizes library
    const script = document.createElement('script');
    script.src = 'https://cdnjs.cloudflare.com/ajax/libs/lazysizes/5.1.2/lazysizes.min.js';
    document.body.appendChild(script);
}