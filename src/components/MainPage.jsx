import '../components/MainPage.css'
import CardButton from './CardButton';
export default function MainPage(){

    return(
        <div className="MainPage">
            <div className='MainPage__container'>
                 <h1 className='text'>Астро Навигатор</h1>

                <CardButton
                    title="💬Консультации"
                    price="от 80"
                    description="Разбор вашей ситуации за 1 час."
                    background="linear-gradient(90deg, rgba(0, 0, 0, 0) 0%, rgba(33, 37, 72, 0.2) 0.01%, rgba(0, 0, 0, 0.2) 27.4%, rgba(0, 195, 255, 0.2) 85.1%), linear-gradient(90deg, rgba(0, 0, 0, 0) 43.27%, rgba(0, 195, 255, 0.2) 100%), #3F1283"
                    link="/consultations"
                />

                <CardButton
                    title="🎓Курсы"
                    price="от 100"
                    description="Разбор вашей ситуации за 1 час."
                    background="linear-gradient(90deg, rgba(0, 0, 0, 0) 0%, rgba(33, 37, 72, 0.2) 0.01%, rgba(0, 0, 0, 0.2) 27.4%, rgba(0, 195, 255, 0.2) 85.1%), linear-gradient(90deg, rgba(0, 0, 0, 0) 43.27%, rgba(0, 195, 255, 0.2) 100%), #83125F"
                    
                />

                <CardButton
                    title="✨Натальная карта"
                    price="100"
                    description="Разбор вашей ситуации за 1 час."
                    background="linear-gradient(90deg, rgba(0, 0, 0, 0) 0%, rgba(33, 37, 72, 0.2) 0.01%, rgba(0, 0, 0, 0.2) 27.4%, rgba(0, 195, 255, 0.2) 85.1%), linear-gradient(90deg, rgba(0, 0, 0, 0) 43.27%, rgba(0, 195, 255, 0.2) 100%), #1E5543"
                    />

                <CardButton
                    title="☀️Солярный гороскоп"
                    price="200"
                    description="Разбор вашей ситуации за 1 час."
                    background="linear-gradient(90deg, rgba(0, 0, 0, 0) 0%, rgba(33, 37, 72, 0.2) 0.01%, rgba(0, 0, 0, 0.2) 27.4%, rgba(255, 255, 255, 0.2) 85.1%), linear-gradient(90deg, rgba(0, 0, 0, 0) 43.27%, rgba(0, 195, 255, 0.2) 100%), #C37800"
                />

                <CardButton
                    title="🗓️Годовой прогноз"
                    price="150"
                    description="Разбор вашей ситуации за 1 час."
                    background="linear-gradient(90deg, rgba(0, 0, 0, 0) 0%, rgba(33, 37, 72, 0.2) 0.01%, rgba(0, 0, 0, 0.2) 27.4%, rgba(0, 195, 255, 0.2) 85.1%), linear-gradient(90deg, rgba(0, 0, 0, 0) 43.27%, rgba(0, 195, 255, 0.2) 100%), #AB1444"
                />
                {/* <button className='closeApp'>Закрыть приложение</button> */}
            </div>
        </div>
    )
}