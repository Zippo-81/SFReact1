import './FaqPage.css';
import faqImage from '../../img/faq.svg';

const FaqPage = () => {
    return (
        <section className="faq">
            <div className="faq__wrap wrap">
                <img src={faqImage} width="360" height="301" alt="Девушка со знаком вопроса"
                     className="faq__image" />
                    <h1 className="faq__title">Частые вопросы</h1>
                    <p className="faq__description">Отвечаем на вопросы, которые у вас могут возникнуть.</p>
                    <div className="faq__expandedBlock faqBlock">
                        <div className="faqBlock__item">
                            <button type="button" className="faqBlock__button">Могу ли я отменить бронь?</button>
                            <div className="faqBlock__content">
                                <p className="faqBlock__text">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                    Cum possimus, aspernatur at harum reiciendis voluptates nisi dignissimos? Eveniet,
                                    fugit iure?</p>
                            </div>
                        </div>
                        <div className="faqBlock__item">
                            <button type="button" className="faqBlock__button">Могу ли я вернуть деньги, если не подошёл
                                автомобиль?
                            </button>
                            <div className="faqBlock__content">
                                <p className="faqBlock__text">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                    Cum possimus, aspernatur at harum reiciendis voluptates nisi dignissimos? Eveniet,
                                    fugit iure?</p>
                            </div>
                        </div>
                        <div className="faqBlock__item">
                            <button type="button" className="faqBlock__button">Что делать, если случилось ДТП?</button>
                            <div className="faqBlock__content">
                                <p className="faqBlock__text">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                    Cum possimus, aspernatur at harum reiciendis voluptates nisi dignissimos? Eveniet,
                                    fugit iure?</p>
                            </div>
                        </div>
                        <div className="faqBlock__item">
                            <button type="button" className="faqBlock__button">Могу ли я оставить автомобиль в удобном
                                для меня месте?
                            </button>
                            <div className="faqBlock__content">
                                <p className="faqBlock__text">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                    Cum possimus, aspernatur at harum reiciendis voluptates nisi dignissimos? Eveniet,
                                    fugit iure?</p>
                            </div>
                        </div>
                        <div className="faqBlock__item">
                            <button type="button" className="faqBlock__button">Что делать, если собственник просит
                                заплатить ему напрямую?
                            </button>
                            <div className="faqBlock__content">
                                <p className="faqBlock__text">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                    Cum possimus, aspernatur at harum reiciendis voluptates nisi dignissimos? Eveniet,
                                    fugit iure?</p>
                            </div>
                        </div>
                        <div className="faqBlock__item">
                            <button type="button" className="faqBlock__button">Должен ли я заправлять автомобиль?
                            </button>
                            <div className="faqBlock__content">
                                <p className="faqBlock__text">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                    Cum possimus, aspernatur at harum reiciendis voluptates nisi dignissimos? Eveniet,
                                    fugit iure?</p>
                            </div>
                        </div>
                    </div>
            </div>
        </section>
    );
};

export default FaqPage