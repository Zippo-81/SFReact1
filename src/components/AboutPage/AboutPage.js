import './AboutPage.css';
import aboutPeople from '../../img/about.svg';
import teamOne from '../../img/team_1.png';
import teamTwo from '../../img/team_2.png';
import teamThree from '../../img/team_3.png';
import teamFour from '../../img/team_4.png';
import teamFive from '../../img/team_5.png';
import teamSix from '../../img/team_6.png';

const AboutPage = () => {
    return (
        <>
            <section className="about">
                <div className="about__wrap wrap">
                    <img src={aboutPeople} alt="Люди" className="about__img" />
                        <h1 className="about__title">О нас</h1>
                        <p className="about__text">Это учебный проект, созданный с целью получения боевого опыта в
                            разработке настоящего живого веб-приложения. Этот сервис имитирует работу каршеринга, в котором можно не только арендовать автомобили, но и сдавать их в аренду.</p>
                </div>
            </section>
            <section className="contacts">
                <div className="contacts__wrap wrap">
                    <h2 className="contacts__title">Контакты</h2>
                    <div className="contacts__block">
                        <div className="contacts__mailBlock">
                            <p className="contacts__name">Электронная почта</p>
                            <a href="mailto:drive@skillfactory.com" className="contacts__mail"><span
                                className="visually-hidden">Электронная почта</span>drive@skillfactory.com</a>
                        </div>
                        <div className="contacts__phoneBlock">
                            <p className="contacts__name">Телефон</p>
                            <a href="tel:+79121234567" className="contacts__phone"><span
                                className="visually-hidden">Телефон</span>+7 912 123-45-67</a>
                        </div>
                    </div>
                </div>
            </section>
            <section className="team">
                <div className="team__wrap wrap">
                    <h2 className="team__title">Команда</h2>
                    <div className="team__list">
                        <figure className="team__item">
                            <img className="team__img" src={teamOne} alt="Иван Иванов" />
                                <figcaption className="team__desc">
                                    <p className="team__name">Иван Иванов</p>
                                    <p className="team__position">СЕО</p>
                                </figcaption>
                        </figure>
                        <figure className="team__item">
                            <img className="team__img" src={teamTwo} alt="Алексей Смирнов" />
                                <figcaption className="team__desc">
                                    <p className="team__name">Алексей Смирнов</p>
                                    <p className="team__position">Frontend-разработчик</p>
                                </figcaption>
                        </figure>
                        <figure className="team__item">
                            <img className="team__img" src={teamThree} alt="Денис Ярцев" />
                                <figcaption className="team__desc">
                                    <p className="team__name">Денис Ярцев</p>
                                    <p className="team__position">Backend-разработчик</p>
                                </figcaption>
                        </figure>
                        <figure className="team__item">
                            <img className="team__img" src={teamFour} alt="Иван Иванов" />
                                <figcaption className="team__desc">
                                    <p className="team__name">Иван Иванов</p>
                                    <p className="team__position">СЕО</p>
                                </figcaption>
                        </figure>
                        <figure className="team__item">
                            <img className="team__img" src={teamFive} alt="Ирина Деева" />
                                <figcaption className="team__desc">
                                    <p className="team__name">Ирина Деева</p>
                                    <p className="team__position">Копирайтер</p>
                                </figcaption>
                        </figure>
                        <figure className="team__item">
                            <img className="team__img" src={teamSix} alt="Мария Стрелкова" />
                                <figcaption className="team__desc">
                                    <p className="team__name">Мария Стрелкова</p>
                                    <p className="team__position">SMM</p>
                                </figcaption>
                        </figure>
                    </div>
                </div>
            </section>
        </>
    );
};

export default AboutPage;
