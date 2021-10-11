import { pricing } from "../data/pricing";

const Pricing = () => {
    return (
        <div className="pricing">
            <div className="container">
                <div className="row">
                    {pricing.map((tier, index) => (
                        <div className="col-md-4" key={index}>
                            <div className="pricing__tier flex-column">
                                <h3 className="pricing__plan">{tier.plan}</h3>
                                <p className="pricing__price">{tier.price}</p>
                                <ul className="pricing__features">
                                    {tier.features.map((feature, index) => (
                                        <li className="pricing__feature" key={index}>{feature}</li>
                                    ))}
                                </ul>
                                <a href="#" className="pricing__btn">Get started</a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
 
export default Pricing;