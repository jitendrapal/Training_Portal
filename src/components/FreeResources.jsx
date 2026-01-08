import React, { useState } from "react";

const FreeResources = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const categories = [
    { id: "all", name: "All Resources", icon: "📚" },
    { id: "java", name: "Java", icon: "☕" },
    { id: "python", name: "Python", icon: "🐍" },
    { id: "angular", name: "Angular", icon: "🅰️" },
    { id: "react", name: "React", icon: "⚛️" },
    { id: "dotnet", name: ".NET", icon: "🔷" },
    { id: "c", name: "C", icon: "🔤" },
    { id: "cpp", name: "C++", icon: "➕" },
    { id: "aiml", name: "AI/ML", icon: "🤖" },
    { id: "mobile", name: "Mobile Dev", icon: "📱" },
  ];

  const resources = [
    // Java Resources
    {
      id: 1,
      title: "Java Complete Tutorial",
      description:
        "Master Java programming from basics to advanced concepts with hands-on examples. Complete 100+ hours of comprehensive content covering all Java topics.",
      category: "java",
      type: "Tutorial Series",
      duration: "100+ Hours",
      level: "Beginner to Advanced",
      topics: [
        "Introduction to Java",
        "Java Fundamentals",
        "Operators in Java",
        "Control Flow",
        "Methods in Java",
        "Object-Oriented Programming",
        "Arrays & Strings",
        "Exception Handling",
        "Wrapper Classes",
        "Collections Framework",
        "Multithreading",
        "Annotations",
        "Modern Java Features",
        "Additional Topics",
      ],
      link: "/resources/java",
      image: "/images/resources/java-tutorial.jpg",
      featured: true,
    },
    // Python Resources
    {
      id: 2,
      title: "Python Complete Tutorial",
      description:
        "Learn Python programming from basics to advanced with comprehensive coverage of data structures, OOP, web development, and data science. 80+ hours of content.",
      category: "python",
      type: "Tutorial Series",
      duration: "80+ Hours",
      level: "Beginner to Advanced",
      topics: [
        "Introduction to Python",
        "Python Fundamentals",
        "Control Flow",
        "Data Structures",
        "Functions",
        "Object-Oriented Programming",
        "File & Exception Handling",
        "Modules & Packages",
        "Advanced Concepts",
        "Libraries & Frameworks",
      ],
      link: "/resources/python",
      image: "/images/resources/python-tutorial.jpg",
      featured: true,
    },
    // Angular Resources
    {
      id: 3,
      title: "Angular Complete Tutorial",
      description:
        "Master Angular framework from basics to advanced with TypeScript, components, services, routing, and modern Angular features. 70+ hours of content.",
      category: "angular",
      type: "Tutorial Series",
      duration: "70+ Hours",
      level: "Beginner to Advanced",
      topics: [
        "Angular Fundamentals",
        "TypeScript Basics",
        "Components & Templates",
        "Services & Dependency Injection",
        "Routing & Navigation",
        "Forms & Validation",
        "HTTP Client & APIs",
        "State Management",
        "Testing",
        "Deployment",
      ],
      link: "/resources/angular",
      image: "/images/resources/angular-tutorial.jpg",
      featured: true,
    },
    // React Resources
    {
      id: 4,
      title: "React Complete Tutorial",
      description:
        "Learn React.js from fundamentals to advanced concepts including hooks, context, Redux, Next.js, and modern React patterns. 75+ hours of content.",
      category: "react",
      type: "Tutorial Series",
      duration: "75+ Hours",
      level: "Beginner to Advanced",
      topics: [
        "React Fundamentals",
        "JSX & Components",
        "Props & State",
        "Hooks (useState, useEffect, etc.)",
        "Context API",
        "React Router",
        "State Management (Redux)",
        "Next.js Framework",
        "Testing with Jest",
        "Performance Optimization",
      ],
      link: "/resources/react",
      image: "/images/resources/react-tutorial.jpg",
      featured: true,
    },
    // .NET Resources
    {
      id: 5,
      title: ".NET Complete Tutorial",
      description:
        "Master .NET development with C#, ASP.NET Core, Entity Framework, Web APIs, and modern .NET features. 85+ hours of comprehensive content.",
      category: "dotnet",
      type: "Tutorial Series",
      duration: "85+ Hours",
      level: "Beginner to Advanced",
      topics: [
        "C# Fundamentals",
        ".NET Core Basics",
        "ASP.NET Core MVC",
        "Web API Development",
        "Entity Framework Core",
        "Authentication & Authorization",
        "Dependency Injection",
        "Testing & Debugging",
        "Deployment & DevOps",
        "Microservices",
      ],
      link: "/resources/dotnet",
      image: "/images/resources/dotnet-tutorial.jpg",
      featured: true,
    },
    // C Programming Resources
    {
      id: 6,
      title: "C Programming Complete Tutorial",
      description:
        "Learn C programming from basics to advanced with pointers, memory management, data structures, and system programming. 60+ hours of content.",
      category: "c",
      type: "Tutorial Series",
      duration: "60+ Hours",
      level: "Beginner to Advanced",
      topics: [
        "C Fundamentals",
        "Variables & Data Types",
        "Control Structures",
        "Functions",
        "Arrays & Strings",
        "Pointers & Memory",
        "Structures & Unions",
        "File Handling",
        "Dynamic Memory Allocation",
        "System Programming",
      ],
      link: "/resources/c",
      image: "/images/resources/c-tutorial.jpg",
      featured: true,
    },
    // C++ Programming Resources
    {
      id: 7,
      title: "C++ Complete Tutorial",
      description:
        "Master C++ programming with OOP concepts, STL, templates, modern C++ features, and advanced programming techniques. 80+ hours of content.",
      category: "cpp",
      type: "Tutorial Series",
      duration: "80+ Hours",
      level: "Beginner to Advanced",
      topics: [
        "C++ Fundamentals",
        "Object-Oriented Programming",
        "Classes & Objects",
        "Inheritance & Polymorphism",
        "Templates & Generics",
        "STL (Standard Template Library)",
        "Exception Handling",
        "Modern C++ (C++11/14/17/20)",
        "Memory Management",
        "Advanced Programming",
      ],
      link: "/resources/cpp",
      image: "/images/resources/cpp-tutorial.jpg",
      featured: true,
    },
    // AI/ML Resources
    {
      id: 8,
      title: "AI/ML Complete Tutorial",
      description:
        "Comprehensive AI and Machine Learning tutorial covering Python, TensorFlow, PyTorch, deep learning, and practical AI applications. 90+ hours of content.",
      category: "aiml",
      type: "Tutorial Series",
      duration: "90+ Hours",
      level: "Intermediate to Advanced",
      topics: [
        "Machine Learning Fundamentals",
        "Python for Data Science",
        "NumPy, Pandas, Matplotlib",
        "Scikit-learn",
        "Deep Learning with TensorFlow",
        "Neural Networks",
        "Computer Vision",
        "Natural Language Processing",
        "PyTorch Framework",
        "AI Project Development",
      ],
      link: "/resources/aiml",
      image: "/images/resources/aiml-tutorial.jpg",
      featured: true,
    },
    // Mobile Development Resources
    {
      id: 9,
      title: "Mobile Development Tutorial",
      description:
        "Learn Android and iOS development with native and cross-platform approaches including React Native, Flutter, and native development. 85+ hours of content.",
      category: "mobile",
      type: "Tutorial Series",
      duration: "85+ Hours",
      level: "Beginner to Advanced",
      topics: [
        "Android Development (Java/Kotlin)",
        "iOS Development (Swift)",
        "React Native",
        "Flutter Framework",
        "Mobile UI/UX Design",
        "API Integration",
        "Database & Storage",
        "Push Notifications",
        "App Store Deployment",
        "Performance Optimization",
      ],
      link: "/resources/mobile",
      image: "/images/resources/mobile-tutorial.jpg",
      featured: true,
    },
  ];

  const filteredResources =
    activeCategory === "all"
      ? resources
      : resources.filter((resource) => resource.category === activeCategory);

  return (
    <div className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Category Filter */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">
            📚 Programming Resources
          </h2>
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-6 py-3 rounded-lg font-medium transition-colors flex items-center gap-2 ${
                  activeCategory === category.id
                    ? "bg-primary-600 text-white"
                    : "bg-white text-gray-700 hover:bg-primary-50 border border-gray-200"
                }`}
              >
                <span>{category.icon}</span>
                {category.name}
              </button>
            ))}
          </div>
        </div>

        {/* Resources Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {filteredResources.map((resource) => (
            <div
              key={resource.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
            >
              <div
                className={`h-40 flex items-center justify-center ${
                  resource.category === "java"
                    ? "bg-gradient-to-br from-orange-100 to-orange-200"
                    : resource.category === "python"
                    ? "bg-gradient-to-br from-blue-100 to-purple-200"
                    : resource.category === "angular"
                    ? "bg-gradient-to-br from-red-100 to-red-200"
                    : resource.category === "react"
                    ? "bg-gradient-to-br from-cyan-100 to-blue-200"
                    : resource.category === "dotnet"
                    ? "bg-gradient-to-br from-purple-100 to-indigo-200"
                    : resource.category === "c"
                    ? "bg-gradient-to-br from-gray-100 to-slate-200"
                    : resource.category === "cpp"
                    ? "bg-gradient-to-br from-blue-100 to-indigo-200"
                    : resource.category === "aiml"
                    ? "bg-gradient-to-br from-green-100 to-emerald-200"
                    : resource.category === "mobile"
                    ? "bg-gradient-to-br from-pink-100 to-rose-200"
                    : "bg-gradient-to-br from-gray-100 to-gray-200"
                }`}
              >
                <div className="text-6xl">
                  {resource.category === "java"
                    ? "☕"
                    : resource.category === "python"
                    ? "🐍"
                    : resource.category === "angular"
                    ? "🅰️"
                    : resource.category === "react"
                    ? "⚛️"
                    : resource.category === "dotnet"
                    ? "🔷"
                    : resource.category === "c"
                    ? "🔤"
                    : resource.category === "cpp"
                    ? "➕"
                    : resource.category === "aiml"
                    ? "🤖"
                    : resource.category === "mobile"
                    ? "📱"
                    : "📚"}
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="bg-secondary-100 text-secondary-800 px-3 py-1 rounded-full text-sm font-medium">
                    {resource.type}
                  </span>
                  <span className="text-sm text-gray-500">
                    {resource.level}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {resource.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  {resource.description}
                </p>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm text-gray-500">
                    ⏱️ {resource.duration}
                  </span>
                  <span className="text-sm text-primary-600 font-medium">
                    {resource.topics.length} Topics
                  </span>
                </div>
                <button
                  onClick={() => {
                    window.location.href = resource.link;
                  }}
                  className="w-full bg-secondary-600 text-white py-2 px-4 rounded-lg hover:bg-secondary-700 transition-colors font-medium"
                >
                  Access Resource →
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-primary-600 to-secondary-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              🚀 Ready to Master Programming?
            </h3>
            <p className="text-lg mb-6 text-primary-100">
              Join our comprehensive programming courses for structured learning
              with expert guidance, hands-on projects, and placement support.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => {
                  window.location.href = "/courses";
                }}
                className="bg-white text-primary-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                View All Courses
              </button>
              <button
                onClick={() => {
                  window.location.href = "/enroll";
                }}
                className="bg-primary-700 text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary-800 transition-colors border border-primary-500"
              >
                Enroll Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FreeResources;
