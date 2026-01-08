import TutorialTemplate from "../components/TutorialTemplate";

const AIMLTutorialPage = () => {
  const aimlStructuredData = {
    "@context": "https://schema.org",
    "@type": "Course",
    name: "AI/ML Complete Tutorial",
    description: "Comprehensive AI and Machine Learning tutorial covering Python, TensorFlow, PyTorch, and practical AI applications",
    provider: {
      "@type": "EducationalOrganization",
      name: "Neuro Edge Technologies",
    },
    courseMode: "online",
    educationalLevel: "Intermediate to Advanced",
    timeRequired: "P90H",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "INR",
      category: "Free",
    },
  };

  const aimlTopics = [
    {
      id: 1,
      title: "Machine Learning Fundamentals",
      duration: "15 hours",
      lessons: [
        {
          id: 101,
          title: "Introduction to AI/ML",
          slug: "intro-aiml",
          duration: 50,
          topics: ["AI vs ML vs DL", "Types of Learning", "ML Workflow", "Applications", "Ethics in AI"],
        },
        {
          id: 102,
          title: "Mathematics for ML",
          slug: "math-ml",
          duration: 60,
          topics: ["Linear Algebra", "Statistics", "Probability", "Calculus", "Optimization"],
        },
      ],
    },
    {
      id: 2,
      title: "Python for Data Science",
      duration: "12 hours",
      lessons: [
        {
          id: 201,
          title: "NumPy and Pandas",
          slug: "numpy-pandas",
          duration: 70,
          topics: ["NumPy Arrays", "Pandas DataFrames", "Data Manipulation", "Data Cleaning", "Data Analysis"],
        },
        {
          id: 202,
          title: "Data Visualization",
          slug: "data-visualization",
          duration: 50,
          topics: ["Matplotlib", "Seaborn", "Plotly", "Statistical Plots", "Interactive Visualizations"],
        },
      ],
    },
    {
      id: 3,
      title: "Machine Learning Algorithms",
      duration: "20 hours",
      lessons: [
        {
          id: 301,
          title: "Supervised Learning",
          slug: "supervised-learning",
          duration: 80,
          topics: ["Linear Regression", "Logistic Regression", "Decision Trees", "Random Forest", "SVM"],
        },
        {
          id: 302,
          title: "Unsupervised Learning",
          slug: "unsupervised-learning",
          duration: 60,
          topics: ["K-Means Clustering", "Hierarchical Clustering", "PCA", "t-SNE", "Association Rules"],
        },
      ],
    },
    {
      id: 4,
      title: "Deep Learning",
      duration: "18 hours",
      lessons: [
        {
          id: 401,
          title: "Neural Networks",
          slug: "neural-networks",
          duration: 70,
          topics: ["Perceptron", "Multi-layer Networks", "Backpropagation", "Activation Functions", "Optimization"],
        },
        {
          id: 402,
          title: "Deep Learning with TensorFlow",
          slug: "tensorflow",
          duration: 80,
          topics: ["TensorFlow Basics", "Keras API", "CNN", "RNN", "Transfer Learning"],
        },
      ],
    },
    {
      id: 5,
      title: "Computer Vision",
      duration: "12 hours",
      lessons: [
        {
          id: 501,
          title: "Image Processing",
          slug: "image-processing",
          duration: 60,
          topics: ["OpenCV", "Image Filters", "Edge Detection", "Feature Extraction", "Object Detection"],
        },
        {
          id: 502,
          title: "CNN Applications",
          slug: "cnn-applications",
          duration: 65,
          topics: ["Image Classification", "Object Detection", "Semantic Segmentation", "Face Recognition", "Style Transfer"],
        },
      ],
    },
    {
      id: 6,
      title: "Natural Language Processing",
      duration: "10 hours",
      lessons: [
        {
          id: 601,
          title: "Text Processing",
          slug: "text-processing",
          duration: 55,
          topics: ["Text Preprocessing", "Tokenization", "Stemming", "Lemmatization", "N-grams"],
        },
        {
          id: 602,
          title: "NLP with Deep Learning",
          slug: "nlp-deep-learning",
          duration: 70,
          topics: ["Word Embeddings", "RNN for NLP", "LSTM", "Transformers", "BERT"],
        },
      ],
    },
    {
      id: 7,
      title: "MLOps and Deployment",
      duration: "8 hours",
      lessons: [
        {
          id: 701,
          title: "Model Deployment",
          slug: "model-deployment",
          duration: 60,
          topics: ["Flask API", "Docker", "Cloud Deployment", "Model Serving", "Monitoring"],
        },
      ],
    },
  ];

  return (
    <TutorialTemplate
      title="AI/ML Complete Tutorial"
      description="Comprehensive AI and Machine Learning tutorial covering Python, TensorFlow, PyTorch, deep learning, computer vision, and practical AI applications."
      icon="🤖"
      gradientFrom="from-green-600"
      gradientTo="to-emerald-600"
      accentColor="green"
      topics={aimlTopics}
      structuredData={aimlStructuredData}
      canonical="/resources/aiml"
      keywords="AI Tutorial, Machine Learning Tutorial, Deep Learning, TensorFlow, PyTorch, Computer Vision, NLP, Data Science, AI Course Free"
      duration="90"
      lessonsCount="45"
      topicsCount="7"
    />
  );
};

export default AIMLTutorialPage;
