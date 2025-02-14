import { testimonials } from "../../Context/index";
import "./Testimonials.css"; 

const Testimonials = () => {
  return (
    <div className="testimonials-section">
      <h2 className="testimonials-heading">What People are saying</h2>
      <div className="testimonials-container">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="testimonial-card">
            <div className="testimonial-content">
              <p>{testimonial.text}</p>
              <div className="testimonial-user">
                <img
                  className="user-image"
                  src={testimonial.image}
                  alt="User"
                />
                <div>
                  <h6 className="user-name">{testimonial.user}</h6>
                  <span className="user-company">{testimonial.company}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
