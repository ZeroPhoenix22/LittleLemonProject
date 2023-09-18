import { Link } from 'react-router-dom';

export default function Card(props) {
    return (
        props.cardInfo.map(card => {
            return (
                <section className='high-card-item'>
                    <img className='card-img' src={card.img} alt="Card Img" />
                    <div className='card-content'>
                        <section className='card-header'>
                            <h4 className='card-dish-name'>{card.name}</h4>
                            <span className='card-price'>$ {card.price}</span>
                        </section>
                        <p className='card-dish-descrip'>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                            Fuga soluta molestiae autem officia optio veritatis doloribus quis voluptas animi error
                            repellendus provident dolores nulla, nam omnis sint?
                        </p>
                        <Link className='card-order-btn' to="/order-online">Order a delivery</Link>
                    </div>
                </section>
            );
        })

    );
}