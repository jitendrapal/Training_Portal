import React, { useState } from "react";

const FreeResources = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const categories = [
    { id: "all", name: "All Resources", icon: "📚" },
    { id: "java", name: "Java", icon: "☕" },
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
            ☕ Java Programming Resources
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
              <div className="h-40 bg-gradient-to-br from-orange-100 to-orange-200 flex items-center justify-center">
                <div className="text-6xl">☕</div>
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
              🚀 Ready to Master Java Programming?
            </h3>
            <p className="text-lg mb-6 text-primary-100">
              Join our comprehensive Java courses for structured learning with
              expert guidance, hands-on projects, and placement support.
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
