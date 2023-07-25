import "./styles.css"

function FeaturedProducts() {
    return (

        <section className="featured-products" id="featured-products">
            <div className="featured-products-heading">
                <h3 className="h3">featured clothing.</h3>
            </div>
            <div className="featured-products-showcase container-fluid">
                
                {/* cards (will be deleted soon) */}
                <div className="card">
                    <img src="..." className="card-img-top" alt="product"/>
                        <div className="card-body">
                            <h5 className="card-title">Product</h5>
                            <p className="card-text">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod possimus cupiditate omnis rerum, beatae labore cumque tempore accusamus earum delectus repellendus odio molestias. Mollitia facere reprehenderit explicabo? Fugiat, dicta minus?</p>
                            <a href="#" className="btn btn-primary">add</a>
                        </div>
                </div>

                <div className="card">
                    <img src="..." className="card-img-top" alt="product"/>
                        <div className="card-body">
                            <h5 className="card-title">Product</h5>
                            <p className="card-text">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod possimus cupiditate omnis rerum, beatae labore cumque tempore accusamus earum delectus repellendus odio molestias. Mollitia facere reprehenderit explicabo? Fugiat, dicta minus?</p>
                            <a href="#" className="btn btn-primary">add</a>
                        </div>
                </div>

                <div className="card">
                    <img src="..." className="card-img-top" alt="product"/>
                        <div className="card-body">
                            <h5 className="card-title">Product</h5>
                            <p className="card-text">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod possimus cupiditate omnis rerum, beatae labore cumque tempore accusamus earum delectus repellendus odio molestias. Mollitia facere reprehenderit explicabo? Fugiat, dicta minus?</p>
                            <a href="#" className="btn btn-primary">add</a>
                        </div>
                </div>

                <div className="card">
                    <img src="..." className="card-img-top" alt="product"/>
                        <div className="card-body">
                            <h5 className="card-title">Product</h5>
                            <p className="card-text">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod possimus cupiditate omnis rerum, beatae labore cumque tempore accusamus earum delectus repellendus odio molestias. Mollitia facere reprehenderit explicabo? Fugiat, dicta minus?</p>
                            <a href="#" className="btn btn-primary">add</a>
                        </div>
                </div>

            </div>
        </section>

    );
}

export default FeaturedProducts