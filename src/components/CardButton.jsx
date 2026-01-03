import { useNavigate } from 'react-router-dom';
function CardButton({ title, price, description, background, link }) {
  const navigate = useNavigate();
  return (
    <button 
      className='button__consult buttons'
      style={{ background: background }} 
      onClick={() => navigate(link)}
    >
      <div className='buttons__inside'>
        <p className='text2 button__title'>{title}</p>
        {}
        <p className='text2 price'>{price} €</p>
      </div>
      
      <div className='button__description'>
        <p className='text3'>{description}</p>
      </div>
    </button>
  );
}

export default CardButton;