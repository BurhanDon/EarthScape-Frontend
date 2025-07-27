import React from 'react'
import './About.css'
const About = () => {
  return (
    <>
<div class="earthscape-container">
	<details class="earthscape-details" open>
		<summary class="earthscape-summary">
			What do we do?
		</summary>
		<div class="earthscape-content">
			EarthScape Climate Agency’s platform empowers decision-makers with real-time analysis of climate data, transforming complex patterns and trends into clear insights. By leveraging big data and advanced analytics, we provide an in-depth understanding of climate dynamics, enabling informed actions for a more sustainable future.
		</div>
	</details>
	<details class="earthscape-details">
		<summary class="earthscape-summary">
			How Do We Process Data?
		</summary>
		<div class="earthscape-content">
		We use Hadoop’s powerful distributed computing capabilities to process vast amounts of previously uploaded climate data. This data, sourced from satellites, weather stations, and environmental sensors, is stored in the Hadoop Distributed File System (HDFS) and analyzed through MapReduce jobs. This setup allows for scalable, fault-tolerant data processing, enabling EarthScape Climate Agency to identify trends, detect anomalies, and make data-driven climate predictions.
		</div>
	</details>
	<details class="earthscape-details">
		<summary class="earthscape-summary">
		  How Do We Create ML Models?
		</summary>
		<div class="earthscape-content">
		We build machine learning models using Python to analyze climate data and generate predictive insights. By training these models on historical and real-time data, we can forecast climate trends, identify anomalies, and uncover correlations. Regular updates and refinements ensure that the models stay accurate and relevant, empowering EarthScape Climate Agency to make data-driven decisions on emerging climate patterns and risks. SIGN-UP FOR ML MODELS!
		</div>
	</details>
	<details class="earthscape-details">
		<summary class="earthscape-summary">
		How Can We Help the Climate?
		</summary>
		<div class="earthscape-content">
		By leveraging big data analytics and machine learning, EarthScape Climate Agency can drive impactful climate action. Our platform processes vast climate datasets to uncover trends, predict extreme weather events, and identify areas most vulnerable to climate change. These insights equip decision-makers with the information needed to make timely, informed choices, supporting sustainable policies, resource management, and environmental protection efforts. Through data-driven understanding, we aim to mitigate climate impacts and contribute to a more resilient, sustainable planet.
		</div>
	</details>
</div>

    </>
  )
}

export default About