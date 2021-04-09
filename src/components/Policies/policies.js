import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import AppBar from "@material-ui/core/AppBar";
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import PoliciesDetails from "./Policies-Details/policies-details";

function a11yProps(index) {
    return {
        id: `scrollable-auto-tab-${index}`,
        'aria-controls': `scrollable-auto-tabpanel-${index}`,
    };
}

const StyledTabs = withStyles({
    indicator: {
        display: 'flex',
        justifyContent: 'center',
        backgroundColor: 'transparent',
        '& > span': {
            maxWidth: 60,
            width: '100%',
            backgroundColor: 'white',
            padding: '10px'
        },
    },
})((props) => <Tabs {...props} TabIndicatorProps={{ children: <span /> }} />);

const StyledTab = withStyles((theme) => ({
    root: {
        textTransform: 'none',
        color: '#fff',
        fontWeight: theme.typography.fontWeightRegular,
        fontSize: theme.typography.pxToRem(15),
        marginRight: theme.spacing(1),
        '&:focus': {
            opacity: 1,
        },
    },
}))((props) => <Tab disableRipple {...props} />);

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        width: '100%',
        margin: 0,
        paddingBottom: '15px',
    },
    appBar: {
        backgroundColor: 'rgb(44, 66, 44)',
    },
    details: {
        backgroundColor: 'white',
    },
    tabsRoot: {
        paddingBottom: '15px',
    }
}));

export default function CustomizedTabs() {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
            <div className={classes.root} >
                <AppBar position="static" className={classes.appBar} id="app-bar">
                    <StyledTabs
                        className={classes.tabsRoot}
                        value={value}
                        onChange={handleChange}
                        aria-label="styled tabs scrollable force"
                        variant="scrollable"
                        scrollButtons="off"
                        indicatorColor="primary"
                        centered
                        >
                        <StyledTab label="Calendar" {...a11yProps(0)} />
                        <StyledTab label="Lesson Day" {...a11yProps(1)} />
                        <StyledTab label="Equipment" {...a11yProps(2)} />
                        <StyledTab label="Tuition and Fees" {...a11yProps(3)} />
                        <StyledTab label="Summer Sessions" {...a11yProps(4)} />
                        <StyledTab label="Registration Form" {...a11yProps(5)} />
                    </StyledTabs>
                </AppBar>
                <PoliciesDetails className={classes.details} value={value} index={0} componentname='calendar' />
                <PoliciesDetails className={classes.details} value={value} index={1} componentname='lesson'  />
                <PoliciesDetails className={classes.details} value={value} index={2} componentname='tools'  />
                <PoliciesDetails className={classes.details} value={value} index={3} componentname='fees'  />
                <PoliciesDetails className={classes.details} value={value} index={4} componentname='summer'  />
                <PoliciesDetails className={classes.details} value={value} index={5} componentname='registration'  />
            </div>
    );
}

