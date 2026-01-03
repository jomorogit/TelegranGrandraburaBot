function CardButton({ title, price, description, background }) {
  return (
    <button 
      className='button__consult buttons'
      style={{ background: background }} 
    >
      <div className='buttons__inside'>
        <p className='text2'>{title}</p>
        {}
        <p className='text2 price'>от {price} €</p>
      </div>
      
      <div className='button__description'>
        <p className='text3'>{description}</p>
      </div>
    </button>
  );
}

export default CardButton;