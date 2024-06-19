import React from "react";
import CampaignData from "../../hooks/useFetchData";
import CampaignsList from "../../components/CampaignsList";
import { useNavigate } from "react-router-dom";

function ManageApplication() {
  const navigate = useNavigate();
  const viewSchedule = (id) => {
    //navigate to schedule page
    navigate(`/mentor/schedule/campaign${id}`);
  };
  return (
    <CampaignData>
      {(campaigns) => <CampaignsList campaigns={campaigns} view={viewSchedule} text="View"/>}
    </CampaignData>
  );
}

export default ManageApplication;
