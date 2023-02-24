 import '../scss/Card.scss';
 
 const Card = ({ title, desc, image, video }) => {
    console.log(title);
    return (
      <div className="cityCards">
        <div className="title">
          <h1>{title}</h1>
        </div>
        <img src={image} alt="" />
        <div className="overview">
          <iframe
            src={video}
            title={title}
            frameborder="0"
            allowFullScreen
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          ></iframe>
          <p>{desc}</p>
        </div>
      </div>
    );
  };

  export default Card;