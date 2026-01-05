export default function EnergyCheckPage(){
      const handleBuy = (productId) => {
    if (window.Telegram && window.Telegram.WebApp) {
        const data = {
            id: productId 
        };
        window.Telegram.WebApp.sendData(JSON.stringify(data));
    } else {
        console.log("Telegram WebApp не найден (открыто не в боте?)");
    }
};
    return(
        <div className="MainPage">
            <div className='MainPage__container'>
                 <h1 className='text textCenter'>👺Диагностика негатива</h1>
                    <div className="page-container">
            {/* Блок проблемы и ощущений */}
            <div className="section">
                <h2 className="text-accent">Диагностика негатива 👺</h2>
                <p className="text3">Негативное влияние, зависть, чужие мысли — всё это может блокировать Ваш успех и забирать силы. 🛡️</p>
                <p className="text3">Появляется ощущение: «будто каждый день я таю». 🫠</p>
            </div>

            {/* Суть решения */}
            <div className="section">
                <h3 className="text-accent">Прямые ответы: 🔦</h3>
                <p className="text3">Я проведу диагностику и скажу прямо: есть ли на Вас воздействие, какого типа оно и как его убрать — пошагово. 👣</p>
                <p className="text3">Вы получите чёткий план по восстановлению своей энергии. 🔋</p>
            </div>

            {/* Технические детали */}
            <div className="footer-section">
                <p className="text3"><strong>Формат:</strong> аудио-разбор 🎙️</p>
                
                <div className="price-block">
                    <p className="text-accent">Стоимость: 80 € 💶</p>
                </div>
                
                <button className="order-button"
                 onClick={() => handleBuy(6)}
                >Вернуть свою силу 👺</button>
            </div>
        </div>
              
            </div>
        </div>
    )
}