import React from 'react';
import CardButton from '../CardButton'; // Проверь путь! Если папка courses вложена в components, нужно ../
import '../MainPage.css';
export default function CoursesPage(){
    return(
         <div className="MainPage">
            <div className='MainPage__container'>
                 <h1 className='text'>🎓Курсы</h1>

                <CardButton
                    title="🌀Я — это больше, чем кажется"
                    price="150"
                    description="Разбор вашей ситуации за 1 час."
                    background="linear-gradient(90deg, rgba(0, 0, 0, 0) 0%, rgba(33, 37, 72, 0.2) 0.01%, rgba(0, 0, 0, 0.2) 27.4%, rgba(0, 195, 255, 0.2) 85.1%), linear-gradient(90deg, rgba(0, 0, 0, 0) 43.27%, rgba(0, 195, 255, 0.2) 100%), #83125F"
                    link="/self-discovery"
                />

                 <CardButton
                    title="🎯Как найти своё Предназначение"
                    price="150"
                    description="Разбор вашей ситуации за 1 час."
                    background="linear-gradient(90deg, rgba(0, 0, 0, 0) 0%, rgba(33, 37, 72, 0.2) 0.01%, rgba(0, 0, 0, 0.2) 27.4%, rgba(0, 195, 255, 0.2) 85.1%), linear-gradient(90deg, rgba(0, 0, 0, 0) 43.27%, rgba(0, 195, 255, 0.2) 100%), #83125F"
                    link="/destiny-course"
                />

                 <CardButton
                    title="🌳Как войти в Силу Рода"
                    price="150"
                    description="Разбор вашей ситуации за 1 час."
                    background="linear-gradient(90deg, rgba(0, 0, 0, 0) 0%, rgba(33, 37, 72, 0.2) 0.01%, rgba(0, 0, 0, 0.2) 27.4%, rgba(0, 195, 255, 0.2) 85.1%), linear-gradient(90deg, rgba(0, 0, 0, 0) 43.27%, rgba(0, 195, 255, 0.2) 100%), #83125F"
                    link="/ancestry"
                />

                 <CardButton
                    title="💞Любовь, ты где?"
                    price="150"
                    description="Разбор вашей ситуации за 1 час."
                    background="linear-gradient(90deg, rgba(0, 0, 0, 0) 0%, rgba(33, 37, 72, 0.2) 0.01%, rgba(0, 0, 0, 0.2) 27.4%, rgba(0, 195, 255, 0.2) 85.1%), linear-gradient(90deg, rgba(0, 0, 0, 0) 43.27%, rgba(0, 195, 255, 0.2) 100%), #83125F"
                    link="/find-love"
                />

                 <CardButton
                    title="🔗Совместимость и Смысл Встречи"
                    price="150"
                    description="Разбор вашей ситуации за 1 час."
                    background="linear-gradient(90deg, rgba(0, 0, 0, 0) 0%, rgba(33, 37, 72, 0.2) 0.01%, rgba(0, 0, 0, 0.2) 27.4%, rgba(0, 195, 255, 0.2) 85.1%), linear-gradient(90deg, rgba(0, 0, 0, 0) 43.27%, rgba(0, 195, 255, 0.2) 100%), #83125F"
                    link="/compatibility-course"
                />

                <CardButton
                    title="🔢Цифры тела"
                    price="150"
                    description="Разбор вашей ситуации за 1 час."
                    background="linear-gradient(90deg, rgba(0, 0, 0, 0) 0%, rgba(33, 37, 72, 0.2) 0.01%, rgba(0, 0, 0, 0.2) 27.4%, rgba(0, 195, 255, 0.2) 85.1%), linear-gradient(90deg, rgba(0, 0, 0, 0) 43.27%, rgba(0, 195, 255, 0.2) 100%), #83125F"
                    link="/body-numbers"
                />

                <CardButton
                    title="🔮Таро с нуля до профи"
                    price="100"
                    description="Разбор вашей ситуации за 1 час."
                    background="linear-gradient(90deg, rgba(0, 0, 0, 0) 0%, rgba(33, 37, 72, 0.2) 0.01%, rgba(0, 0, 0, 0.2) 27.4%, rgba(0, 195, 255, 0.2) 85.1%), linear-gradient(90deg, rgba(0, 0, 0, 0) 43.27%, rgba(0, 195, 255, 0.2) 100%), #83125F"
                    link="/tarot"
                />
            </div>
        </div>
    )
}