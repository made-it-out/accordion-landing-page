const Features = ({data}) => {
    return (
        <div className="features">
            <div className="container">
                <div className="row">
                    {data.map((feature, index) => (
                        <div className="col-md-4" key={index}>
                            <div className="feature">
                                <i className={feature.icon}></i>
                                <h2 className="feature__heading">{feature.heading}</h2>
                                <p className="feature__description">{feature.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Features;