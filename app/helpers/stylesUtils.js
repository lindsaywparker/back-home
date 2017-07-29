import { STYLES, CATEGORIES } from '../helpers/constants';

export const randomizeSliders = (images) => {
  const imagesArray = Object.keys(images).map(key => images[key]);

  const randomizedSliders = STYLES.reduce((styleAcc, style) => {
    styleAcc[style] = CATEGORIES.reduce((catAcc, category) => {
      const array = imagesArray.filter(image =>
        (image.style === style && image.category === category));

      const randomImage = array.length !== 0 ?
        array[Math.floor(Math.random() * array.length)]
        :
        { style, category, src: '../assets/no-image-found.jpg' };

      catAcc[category] = randomImage;
      return catAcc;
    }, {});

    return styleAcc;
  }, {});

  return randomizedSliders;
};