import { CheckCircle2 } from "lucide-react";
import { pricingOptions } from "../../data/index";
import "./Pricing.css"; 

const Pricing = () => {
  return (
    <div className="pricing-section">
      <h2 className="pricing-heading">Choose Your <span className="text-orange-500">Role</span></h2>
      <p className="pricing-subheading">
        Whether you're just starting out or already making waves, we've got a plan for you!
      </p>
      <div className="pricing-container">
        {pricingOptions.map((option, index) => (
          <div key={index} className={`pricing-card ${option.title === "Pro" ? "popular-plan" : ""}`}>
            <div className="pricing-card-content">
              <p className="plan-title">
                {option.title}
                {option.title === "Pro" && (
                  <span className="popular-badge">(Most Popular)</span>
                )}
              </p>
              {/* <p className="plan-price-wrapper">
                <span className="plan-price">{option.price}</span>
                <span className="plan-duration">/Month</span>
              </p> */}
              <ul className="features-list">
                {option.features.map((feature, index) => (
                  <li key={index} className="feature-item">
                    <CheckCircle2 />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <a href="#" className="subscribe-button">
              Explore Now!
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pricing;
