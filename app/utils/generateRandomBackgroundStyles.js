export function generateRandomBackgroundStyles(imageUrl, count, width, height) {
  const backgroundImages = [];
  const backgroundPositions = [];

  for (let i = 0; i < count; i++) {
    backgroundImages.push(`url(${imageUrl})`);
    backgroundPositions.push(`${Math.random() * 100}% ${Math.random() * 100}%`);
  }

  return {
    backgroundImage: backgroundImages.join(', '),
    backgroundPosition: backgroundPositions.join(', '),
    backgroundSize: `${width}px ${height}px`,
    backgroundRepeat: 'no-repeat',
  };
}
