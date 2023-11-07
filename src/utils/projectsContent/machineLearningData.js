import codeml from "../../images/codeml.png";
import machinelearning from "../../images/machinelearning.png";
import exploringdata from "../../images/exploringData.png";
import developingModel from "../../images/developingModel.png";


export const machineLearningData = [
  {
    client:"Predicting the wine quality with machine learning",
    landingImage:machinelearning,
    projectTitle:{
      client:"Predicting the wine quality with machine learning",
      title:"Elevating Wine Quality Prediction with Machine Learning",
      role:"Machine Learning Engineer",
      tools:"Scikit-learn, Pandas, Matplotlib, Seaborn, Jupyter Notebook",
      date:"Sep-Dec 2022",
      dateInitial:"2023-09",
      dateFinal:"2023-10",
    },
    projectOverview: {
      description:
      `Our academic project, "Predicting Wine Quality with Machine Learning," explored machine learning techniques for wine quality prediction. It involved data preprocessing, feature engineering, and model experimentation, all within an educational context. Although not deployed, the project enriched our understanding of data analysis and model development.`,
      challenge:
      `Our development process for this school project involved data collection, preprocessing, and feature engineering to prepare the wine dataset. We experimented with various machine learning models to predict wine quality and performed rigorous model training and evaluation to select the best-performing approach, with a focus on academic evaluation metrics. Hyperparameter tuning was conducted to fine-tune the model for optimal performance within the academic context. This project served as a learning experience to explore wine quality prediction through machine learning techniques.
      The dataset, each tailored to a specific wine variant – red and white. it contains a wealth of information on chemical properties, including acidity, residual sugar, alcohol content, and pH, among others. These attributes are crucial in determining wine quality.`,
      features:[
                  "Wine quality prediction",
                  "Data preprocessing and cleaning",
                  "Feature engineering",
                  "Hyperparameter tuning",
                  "Educational growth and development",
              
              ]
  },
    designData:[
      {
        type: "Wine Quality function ",
        description: `This is the function that predicts the wine quality. The function takes in the wine features and returns the predicted wine quality.` ,
        images: [
          {
            imagePath: codeml,
            description: "Wine quality function",
          }
        ],
      },
      {
        type: "Exploring Data",
        description: `Analyzing the data is an important step in the machine learning process. The project uses Pandas to explore the data and gain insights into the data.` ,
        images: [
          {
            imagePath: exploringdata,
            description: "exploring data code snippet",
          },
         

        ],
      },
      {
        type: "Developing the model",
        description: `The project uses Scikit-learn to develop the machine learning model. The model is trained and evaluated using the training and testing data.` ,
        images: [
          {
            imagePath: developingModel,
            description: "Developing the model code snippet",
          },
          

        ],
      },
    ],
    links:{
      dataset:"https://archive.ics.uci.edu/dataset/186/wine+quality",
      github:"https://github.com/pratt-ml/supervised-learning-henrycastillome/blob/main/notebooks/assignment_2.ipynb"
    }
  },
];


