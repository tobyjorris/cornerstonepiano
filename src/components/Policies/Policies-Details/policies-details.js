import React from 'react';
import './policies-details.css';
import Calendar from "../Individual-Policies/Calendar/calendar";
import Lessons from "../Individual-Policies/Lessons/lessons";
import Tools from "../Individual-Policies/Tools/tools";
import Fees from "../Individual-Policies/Fees/fees";
import Summer from "../Individual-Policies/Summer/summer";
import Registration from "../Individual-Policies/Registration/registration";


const PoliciesDetails = props => {
    const { children, value, index, ...other } = props;

    const renderSwitch = (param) => {
        switch(param) {
            case 'calendar':
                return <Calendar />;
            case 'lesson':
                return <Lessons />;
            case 'tools':
                return <Tools />;
            case 'fees':
                return <Fees />;
            case 'summer':
                return <Summer />;
            case 'registration':
                return <Registration />;
            default:
                return Error('component not found');
        }
    }

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`scrollable-force-tabpanel-${index}`}
            aria-labelledby={`scrollable-force-tab-${index}`}
            {...other}
        >
            {value === index && (
                <div className="detail-root">{renderSwitch(props.componentname)}</div>
            )}
        </div>
    );
}


export default PoliciesDetails;
