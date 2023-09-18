import { Link } from 'react-router-dom';
import Card from '../Card';
import Review from '../Review';
import BannerPic from '../../Assets/restaurant chef B.jpg';
import SaladPic from '../../Assets/greek salad.jpg';
import DessertPic from '../../Assets/lemon dessert.jpg';
import BruchPic from '../../Assets/bruchetta.svg';
import Avatar from '../../Assets/avatar.jpg';
import Marian1 from '../../Assets/Mario and Adrian A.jpg';
import Marian2 from '../../Assets/Mario and Adrian b.jpg';

export default function Home() {

    const cardInfo = [
        {
            img: SaladPic,
            name: "Greek Salad",
            price: "12.99",
            description: "Lalalalala",
        },
        {
            img: BruchPic,
            name: "Bruchetta",
            price: "5.99",
            description: "Lalalalala",
        },
        {
            img: DessertPic,
            name: "Lemon Dessert",
            price: "5.00",
            description: "Lalalalala",
        }
    ];

    const reviewInfo = [
        {
            rating: "⭐⭐⭐⭐⭐",
            img: Avatar,
            name: "David Ackerman",
            username: "dave_acky",
            review: "I loved that place. Food was tasty and place was elegant.",
        },
        {
            rating: "⭐⭐⭐⭐⭐",
            img: Avatar,
            name: "Bicho Rodriguez",
            username: "RodriBuggy",
            review: "Service was great. Will definitely come back.",
        },
        {
            rating: "⭐⭐⭐⭐",
            img: Avatar,
            name: "Kikin Fonseca",
            username: "DaRealKikin12",
            review: "Loved the place, but food was a bit slow to be served.",
        },
        {
            rating: "⭐⭐⭐⭐⭐",
            img: Avatar,
            name: "Edwin Potter",
            username: "PotteryMan",
            review: "Looking forward to bringing my kids next time, it was perfect!",
        },
    ];

    return (
        <div className="main-wrapper">
            <main>
                <section className="banner">
                    <section className="banner-info">
                        <h2>Little Lemon</h2>
                        <h4>Chicago</h4>
                        <p>
                            We are a family owned Mediterranean restaurant focused
                            on traditional recipes served with a modern twist.
                        </p>
                        <Link to="/reservations">
                            <button className="banner-btn">Reserve a table</button>
                        </Link>
                    </section>
                    <img className="banner-img" src={BannerPic} alt="Banner Picture" />
                </section>
                <section className='highlights'>
                    <section className='high-top'>
                        <h3 high-head>This Weeks Specials</h3>
                        <Link to="/menu">
                            <button className='high-btn'>Menu</button>
                        </Link>
                    </section>
                    <section className='high-cards'>
                        <Card cardInfo={cardInfo} />
                    </section>
                </section>
                <section className='testimonials'>
                    <h3>What our customers say!</h3>
                    <section className='cust-reviews'>
                        <Review reviewInfo={reviewInfo} />
                    </section>
                </section>
                <section className='about'>
                    <section className='about-content'>
                        <h2>Little Lemon</h2>
                        <h4>Chicago</h4>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo est temporibus
                            sapiente delectus labore doloribus saepe amet perspiciatis mollitia quibusdam tenetur
                            reprehenderit ab laborum, cumque non cupiditate? Vero, vel deleniti?
                        </p>
                    </section>
                    <section className='about-imgs'>
                        <img className='about-pic1' src={Marian1} alt="Adrian Mauro" />
                        <img className='about-pic2' src={Marian2} alt="Adrian Mauro2" />
                    </section>
                </section>
            </main>
        </div>
    );
}