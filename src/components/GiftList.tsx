import './GiftList.css';
import generateImageUrlByCaption from '../utils/ImgGenerator';
import formatNumberToReal from '../utils/Money';
interface Gift {
  id: number;
  username: string;
  imageUrl: string;
  caption: string;
  value: number;
  pixUrl: string;
}

interface GiftListProps {
  gifts: Gift[];
}

const GiftList: React.FC<GiftListProps> = ({ gifts }) => {
  const handlePixClick = (pixUrl: string) => {
    window.open(pixUrl, '_blank', 'noopener noreferrer');
  };
  return (
    <div className="gift-list">
      {gifts.map((gift) => (
        <div key={gift.id} className="gift-post">
          <div className='contenedor-imagem'>
            <img src={gift.imageUrl} alt={`Post by ${gift.username}`} />
          </div>
          <div className="caption">{gift.caption}</div>
          <div className="username">{gift.username}</div>
          <div className='value'>{formatNumberToReal(gift.value)}</div>
          <button className="pix" onClick={() => handlePixClick(gift.pixUrl)}>Presentear</button>
        </div>
      ))}
      {/* <div key={gifts[18].id} className="gift-post">
        <div className='contenedor-imagem'>
          <img src={require('../assets/julin.png')} alt={`Post by ${gifts[18].username}`} />
        </div>
        <div className="caption">{gifts[18].caption}</div>
        <div className="username">{gifts[18].username}</div>
        <div className='value'>{formatNumberToReal(gifts[18].value)}</div>
        <button className="pix" onClick={() => handlePixClick(gifts[18].pixUrl)}>Presentear</button>
      </div> */}
      {/* <div key={gifts[21].id} className="gift-post">
        <div className='contenedor-imagem'>
          <img src={require('../assets/cross.png')} alt={`Post by ${gifts[21].username}`} />
        </div>
        <div className="caption">{gifts[21].caption}</div>
        <div className="username">{gifts[21].username}</div>
        <div className='value'>{formatNumberToReal(gifts[21].value)}</div>
        <button className="pix" onClick={() => handlePixClick(gifts[21].pixUrl)}>Presentear</button>
      </div>
      <div key={gifts[22].id} className="gift-post">
        <div className='contenedor-imagem'>
          <img src={require('../assets/blogueira.png')} alt={`Post by ${gifts[22].username}`} />
        </div>
        <div className="caption">{gifts[22].caption}</div>
        <div className="username">{gifts[22].username}</div>
        <div className='value'>{formatNumberToReal(gifts[22].value)}</div>
        <button className="pix" onClick={() => handlePixClick(gifts[22].pixUrl)}>Presentear</button>
      </div>
      <div key={gifts[24].id} className="gift-post">
        <div className='contenedor-imagem'>
          <img src={gifts[24].imageUrl} alt={`Post by ${gifts[24].username}`} />
        </div>
        <div className="caption">{gifts[24].caption}</div>
        <div className="username">{gifts[24].username}</div>
        <div className='value'>{formatNumberToReal(gifts[24].value)}</div>
        <button className="pix" onClick={() => handlePixClick(gifts[24].pixUrl)}>Presentear</button>
      </div> */}
    </div>
  );
};

export default GiftList;