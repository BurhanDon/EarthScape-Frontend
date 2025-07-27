import React from 'react'
import './ModelMl.css'
import { Link } from 'react-router-dom'
const ModelMl = () => {
  return (
    <>
    <h1 className='mlHeading'>Machine Learning Models for Impact of Climate Change Across Different Sectors Model Types</h1>
    <div className='buttons-conatinerml'>
    <Link to='/decisiontree'><button className="button-6-ml" role="button">Water Pollution - Decision Tree</button></Link>
    <Link to='/linearregression'><button className="button-6-ml" role="button">Temperature - Linear Regression</button></Link>
    <Link to='/randomforest'><button className="button-6-ml" role="button">Temperature - Random Forest</button></Link>
    </div>
    </>
  )
}

export default ModelMl
