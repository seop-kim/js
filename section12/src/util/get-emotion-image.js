import emotion1 from './../assets/emotion1.png';
import emotion2 from './../assets/emotion2.png';
import emotion3 from './../assets/emotion3.png';
import emotion4 from './../assets/emotion4.png';
import emotion5 from './../assets/emotion5.png';

/**
 * @param {number} emotionId
 * @returns {string}
 */
export function getEmotionImage(emotionId) {
  if (emotionId === 1) return emotion1;
  if (emotionId === 2) return emotion2;
  if (emotionId === 3) return emotion3;
  if (emotionId === 4) return emotion4;
  if (emotionId === 5) return emotion5;
  return null;
}