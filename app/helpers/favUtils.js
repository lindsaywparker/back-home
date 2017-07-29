export const calculateStyle = (images) => {
  const styleCounts = {};
  const totalFavorites = images.length;
  images.forEach((image) => {
    if (!styleCounts[image.style]) styleCounts[image.style] = 0;
    styleCounts[image.style] += (1 / totalFavorites);
    return styleCounts;
  });

  const results = Object.keys(styleCounts).reduce((array, key) => {
    array.push({ style: key, value: styleCounts[key] });
    return array;
  }, [])
  .sort((a, b) => b.value - a.value)
  .filter(styleValue => styleValue.value >= 0.1);

  const primarySum = results.reduce((sum, style) => sum += style.value, 0);

  if (primarySum > 1) results.push({ style: 'other', value: (1 - primarySum) });

  return results;
};