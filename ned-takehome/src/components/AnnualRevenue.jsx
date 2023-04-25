import '../Styles/AnnualRevenue.styles.css'; 

const AnnualRevenue = () => {
    return (
        <div className='group-2542'> 
            <p className='rev-desc'> What is your annual business revenue? </p>
            <input className='input'  placeholder='$ 250,000'/>
        </div>
    )
}; 

export default AnnualRevenue; 

//value={} onChange={event => this.setState({financialGoal: event.target.value.replace(/\D/,'')})}