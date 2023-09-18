export default function Review(props) {
    return (
        props.reviewInfo.map((review) => {
            return (
                <div className="review-card">
                    <h1 className="review-rating">{review.rating}</h1>
                    <section className="review-user">
                        <img className="review-img" src={review.img} alt="Profile Pic" />
                        <div>
                            <h4 className="review-name">{review.name}</h4>
                            <h6 className="review-username">{review.username}</h6>
                        </div>
                    </section>
                    <section className="review-descrip">
                        <p>{review.review}</p>
                    </section>
                </div>
            )
        })
    );
}