import '../../components/MainPage.css'
import CardButton from '../CardButton';
export default function Consultations(){
    return(
        <>
  <div className="MainPage">
            <div className='MainPage__container'>
                 <h1 className='text'>Консультации</h1>

                <CardButton
                    title="🧬Расшифровка личности. Инструкция к себе"
                    price="150"
                    description=""
                    background="linear-gradient(90deg, rgba(0, 0, 0, 0) 0%, rgba(33, 37, 72, 0.2) 0.01%, rgba(0, 0, 0, 0.2) 27.4%, rgba(0, 195, 255, 0.2) 85.1%), linear-gradient(90deg, rgba(0, 0, 0, 0) 43.27%, rgba(0, 195, 255, 0.2) 100%), #3F1283"
                    link="/personality"
                />
                 <CardButton
                    title="💸Предназначение и Большие деньги"
                    price="150"
                    description=""
                    background="linear-gradient(90deg, rgba(0, 0, 0, 0) 0%, rgba(33, 37, 72, 0.2) 0.01%, rgba(0, 0, 0, 0.2) 27.4%, rgba(0, 195, 255, 0.2) 85.1%), linear-gradient(90deg, rgba(0, 0, 0, 0) 43.27%, rgba(0, 195, 255, 0.2) 100%), #3F1283"
                    link="/destiny"
                />
                 <CardButton
                    title="💞Совместимость / Диагностика отношений"
                    price="150"
                    description=""
                    background="linear-gradient(90deg, rgba(0, 0, 0, 0) 0%, rgba(33, 37, 72, 0.2) 0.01%, rgba(0, 0, 0, 0.2) 27.4%, rgba(0, 195, 255, 0.2) 85.1%), linear-gradient(90deg, rgba(0, 0, 0, 0) 43.27%, rgba(0, 195, 255, 0.2) 100%), #3F1283"
                    link="/compatibility"
                />
                 <CardButton
                    title="🎭Любовный треугольник: что дальше?"
                    price="70"
                    description=""
                    background="linear-gradient(90deg, rgba(0, 0, 0, 0) 0%, rgba(33, 37, 72, 0.2) 0.01%, rgba(0, 0, 0, 0.2) 27.4%, rgba(0, 195, 255, 0.2) 85.1%), linear-gradient(90deg, rgba(0, 0, 0, 0) 43.27%, rgba(0, 195, 255, 0.2) 100%), #3F1283"
                    link="/triangle"
                />
                 <CardButton
                    title="✈️Консультация на переезд"
                    price="70"
                    description=""
                    background="linear-gradient(90deg, rgba(0, 0, 0, 0) 0%, rgba(33, 37, 72, 0.2) 0.01%, rgba(0, 0, 0, 0.2) 27.4%, rgba(0, 195, 255, 0.2) 85.1%), linear-gradient(90deg, rgba(0, 0, 0, 0) 43.27%, rgba(0, 195, 255, 0.2) 100%), #3F1283"
                    link="/relocation"
                />
                 <CardButton
                    title="👺Диагностика негатива"
                    price="80"
                    description=""
                    background="linear-gradient(90deg, rgba(0, 0, 0, 0) 0%, rgba(33, 37, 72, 0.2) 0.01%, rgba(0, 0, 0, 0.2) 27.4%, rgba(0, 195, 255, 0.2) 85.1%), linear-gradient(90deg, rgba(0, 0, 0, 0) 43.27%, rgba(0, 195, 255, 0.2) 100%), #3F1283"
                    link="/energy-check"
                />
              
                
            </div>
        </div>
        </>
    )
}