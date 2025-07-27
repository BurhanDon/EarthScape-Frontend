import React from 'react'
import './DecisionTree.css'
const DecisionTree = () => {
  return (
    <>  
      <h1 className="dtHeading">Predicting Water Pollution Using Air Quality</h1>
      <div className='image-containerdt'>
      <img src="./src/assets/DT1.png" alt="Desicion tree" className='dtImage'/>
      <p>Figure 1.0</p>
      </div>

      <div className='overview'>
        <h3 className='headingPara'>This model is a Decision Tree Regressor used to predict water pollution levels based on air quality, region, and country as input features. The goal is to understand the relationship between air quality and water pollution.</h3>
        <h2 className='steps'>Key Steps:</h2>
        <p className='paradt'>1. Preprocessing: Categorical variables like "Region" and "Country" are encoded using LabelEncoder, and the features are scaled for better model performance.</p>
        <p className='paradt'>2. Model Training: A Decision Tree Regressor is trained on the training data to learn how air quality, region, and country influence water pollution levels.</p>
        <p className='paradt'>3. Evaluation: The model's performance is evaluated using Mean Squared Error (MSE) and R-squared, with a residual plot created to visualize errors in the model’s predictions.</p>
        <h3 className='conclusion'>Conclusion: This model helps understand the impact of air quality on water pollution and shows how well the model predicts pollution levels.</h3>
      </div>
    </>

  )
}

export default DecisionTree