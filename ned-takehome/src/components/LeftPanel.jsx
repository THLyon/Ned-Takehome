// import FundUse from './FundUse'
import AnnualRevenue from './AnnualRevenue';
import DesiredLoan from './DesiredLoan';
import DesiredLoanSlider from './DesiredLoanSlider';
import RevenueFrequency from './RevenueFrequency';
import DesiredDelay from './DesiredDelay';
import RevenueShare from './RevenueShare';
// import FundUse from './FundUse';

import '../Styles/LeftPanel.styles.css';

const LeftPanel = () => {
    return(
         <div className='group-1814'> 
                <div className='group-1524'/>
                <div className='rectangle-22A'>
                    <p className='Finance-Options'> Financing options </p>
                    <AnnualRevenue/>
                    <DesiredLoan/>
                    <DesiredLoanSlider/>
                    <RevenueFrequency/>
                    <DesiredDelay/>
                    <RevenueShare/>
                    {/* <FundUse/> */}
                </div>
        </div>
    )
}

export default LeftPanel; 

   