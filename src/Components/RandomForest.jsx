import React from 'react'

const RandomForest = () => {
  return (
    <>
     <h1 className="dtHeading">Predicting Global Temperature Changes Using Random Forest Regressor</h1>
      <div className='image-containerdt'>
      <img src="./src/assets/RF1.png" alt="Linear regression" className='dtImage'/>
      <p>Figure 1.0</p>
      </div>

      <div className='overview'>
        <h3 className='headingPara'>This model utilizes the Random Forest Regressor to predict global temperature changes based on various climate factors, such as CO2, CH4, N2O, CFC-11, CFC-12, TSI (Total Solar Irradiance), and Aerosols.</h3>
        <h2 className='steps'>Key Steps:</h2>
        <p className='paradt'>1. Data Preparation: The dataset is loaded, and features such as MEI, CO2, and aerosols are selected as independent variables, with temperature (Temp) being the dependent variable.</p>
        <p className='paradt'>2. Train-Test Split: The data is split into training (80%) and testing (20%) sets.</p>
        <p className='paradt'>3. Feature Scaling: Features are scaled using StandardScaler to improve the model's performance.</p>
        <p className='paradt'>4. Model Training: A Random Forest Regressor with 100 trees is trained on the scaled training data to predict temperature.</p>
        <p className='paradt'>5. Visualization: The plot comparing the actual vs. predicted temperatures visually shows the accuracy of the model. The scatter points represent the actual observed temperatures, while the line represents the predicted values. A good fit between the two suggests strong model performance.</p>
        <h3 className='conclusion'>Conclusion:  The Random Forest Regressor model offers a robust approach to predicting global temperature changes based on various climate variables.</h3>
      </div>
    </>
  )
}

export default RandomForest