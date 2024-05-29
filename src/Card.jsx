import image from './assets/pic.jpg'

function Card() {
    return(
        <div className="card">
            <div className="upper">
                <img src={image} />
            </div>
            <div className="lower">
                <h1>Katepallewar</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero maiores rem fuga suscipit perferendis obcaecati dolorem vero magni quaerat laboriosam error incidunt optio officia quae, voluptate neque in tempore. Asperiores.</p>
            </div>
        </div>
    );
}

export default Card;