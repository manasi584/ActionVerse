import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Topbar from '../../components/Topbar/Topbar';
import Footer from '../Footer/Footer'
import { sampleCampaigns } from '../../Context/CrowdfundContext';

const CrowdfundingPage = () => {
    const [campaigns, setCampaigns] = useState([]);

    useEffect(() => {
        setCampaigns(sampleCampaigns);
    }, []);

    return (
        <>
       <Topbar/>
         <div className="container py-5 text-center">
           
            <h1 className="mb-4" style={{ color: 'var(--primary-color)', fontWeight: '700' }}>
                Ongoing Crowdfunding Campaigns
            </h1>
            <div className="row justify-content-center">
                {campaigns.length > 0 ? (
                    campaigns.map((campaign) => (
                        <div key={campaign.id} className="col-md-4 mb-4">
                            <div className="card shadow-lg border-0" style={{ borderRadius: '12px', background: 'var(--background-color)' }}>
                                <div className="card-body p-4">
                                    <h5 className="card-title" style={{ fontWeight: '600', color: 'var(--text-color)' }}>{campaign.title}</h5>
                                    <p className="card-text" style={{ fontSize: '14px', color: '#555' }}>{campaign.description}</p>
                                    <div className="progress mb-3" style={{ height: '8px', borderRadius: '8px', overflow: 'hidden' }}>
                                        <div 
                                            className="progress-bar" 
                                            role="progressbar" 
                                            style={{ 
                                                width: `${(campaign.raisedAmount / campaign.goalAmount) * 100}%`, 
                                                background: 'linear-gradient(90deg, var(--primary-color), var(--secondary-color))' 
                                            }}
                                            aria-valuenow={(campaign.raisedAmount / campaign.goalAmount) * 100} 
                                            aria-valuemin="0" 
                                            aria-valuemax="100">
                                        </div>
                                    </div>
                                    <p className="fw-bold text-success">Raised: ₹{campaign.raisedAmount} / ₹{campaign.goalAmount}</p>
                                    <Link 
                                        to={`/crowdfund`} 
                                        className="btn button-primary w-100">
                                        View Details
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))
                ) : (
                    <p className="text-muted">No ongoing campaigns available.</p>
                )}
            </div>
            
        </div>
        <Footer></Footer>
        </>
        
    );
};

export default CrowdfundingPage;
