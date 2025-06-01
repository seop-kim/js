// CSS
import './EmotionItem.css'

// Util
import {getEmotionImage} from "../util/get-emotion-image.js";

const EmotionItem = ({emotionId, emotionName, isSelected}) => {
  return (
      <div className={`EmotionItem ${isSelected ? `EmotionItem_on_${emotionId}` : ''}`}>
        <img src={getEmotionImage(emotionId)}
             className='emotion_img'/>
        <div className='emotion_name'>
          {emotionName}
        </div>
      </div>
  );
}

export default EmotionItem;