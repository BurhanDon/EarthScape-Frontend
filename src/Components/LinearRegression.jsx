import React from 'react'

const LinearRegression = () => {
  return (
    <>
     <h1 className="dtHeading">Predicting Global Temperature Changes Using Climate Factors</h1>
      <div className='image-containerdt'>
      <img src="./src/assets/LR1.png" alt="Linear regression" className='dtImage'/>
      <p>Figure 1.0</p>
      </div>

      <div className='overview'>
        <h3 className='headingPara'>This model uses Linear Regression to predict global temperature changes (target variable) based on various climate factors, such as CO2, CH4, N2O, CFC-11, CFC-12, TSI (Total Solar Irradiance), and Aerosols.</h3>
        <h2 className='steps'>Key Steps:</h2>
        <p className='paradt'>1. Data Exploration: The dataset is loaded, and the first few rows and basic statistics are explored to understand its structure and key features.</p>
        <p className='paradt'>2. Model Training: The dataset is split into training and testing sets, and the features are scaled using StandardScaler to improve model performance. A Linear Regression model is then trained on the training data.</p>
        <p className='paradt'>3. Model Evaluation: The model’s performance is assessed using Mean Squared Error (MSE) and R-squared (R²).</p>
        <p className='paradt'>4. Visualization: A plot of the actual vs. predicted temperatures is created to visually compare the model's predictions to the actual observed temperatures..</p>
        <h3 className='conclusion'>Conclusion:  the model provides valuable insights into how various factors influence global temperature changes and can be used to support further climate-related analyses and decision-making.</h3>
      </div>
    </>
  )
}

export default LinearRegression