const Gallery = ({ images }) => {

    return (
      <div>
        

        <h3> Your Screenshot Gallery!</h3>
        <div className="image-container">
        {images && images.length > 0 ? (
            images.map((pic, index) => (
                <li className="gallery" key={index}>
                <img
                    className="gallery-screenshot"
                    src={pic}
                    alt="Undefined screenshot from query"
                    width="500"
                />
                </li>
            )
            
            )
        ) : (
            <div>
            <h4>You haven't made a screenshot yet!</h4>
            </div>
        )}
        </div>


      </div>
    );
};

export default Gallery;
  