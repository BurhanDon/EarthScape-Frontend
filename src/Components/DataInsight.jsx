import React from 'react'
import { Link } from 'react-router-dom'

const DataInsight = () => {
  return (
    <div>
      <h1 className='mlHeading'>Visualisation through tableau:</h1>
    <div className='buttons-conatinerml'>
    <Link to='/dashboard1'><button className="button-6-ml" role="button">Air & Water Quality Dashboard</button></Link>
    <Link to='/dashboard2'><button className="button-6-ml" role="button">GLobal Temperature Dashboard</button></Link>
    {/* <Link to='/randomforest'><button className="button-6-ml" role="button">Temperature - Random Forest</button></Link> */}
    </div>
    </div>
  )
}

export default DataInsight