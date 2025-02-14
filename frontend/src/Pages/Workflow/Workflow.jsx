import { CheckCircle2 } from "lucide-react";
import hustleImg from "/hustle.jpg"; 
import { checklistItems } from "../../Context/index";
import "./Workflow.css";

const Workflow = () => {
  return (
    <div className="workflow-section">
      <h2 className="workflow-heading">
        Level up your{" "}
        <span className="bg-gradient-to-r from-orange-500 to-red-600 text-transparent bg-clip-text">
          hustle game.
        </span>
      </h2>
      <p className="workflow-subheading">
        Streamline your gigs, get noticed, and make more money doing what you love.
      </p>
      <div className="workflow-container">
        <div className="workflow-image-container">
          <img src={hustleImg} alt="Street Hustle" />
        </div>
        <div className="workflow-checklist">
          {checklistItems.map((item, index) => (
            <div key={index} className="checklist-item">
              <div className="checklist-icon">
                <CheckCircle2 />
              </div>
              <div>
                <h5 className="checklist-title">{item.title}</h5>
                <p className="checklist-description">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Workflow;
