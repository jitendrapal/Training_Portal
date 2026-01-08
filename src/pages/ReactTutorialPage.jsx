import { useState } from "react";
import SEO from "../components/SEO";

const ReactTutorialPage = () => {
  const [selectedTopic, setSelectedTopic] = useState(null);
  const [selectedLesson, setSelectedLesson] = useState(null);

  const reactStructuredData = {
    "@context": "https://schema.org",
    "@type": "Course",
    name: "React Complete Tutorial",
    description:
      "Learn React.js from fundamentals to advanced concepts including hooks, context, Redux, and Next.js",
    provider: {
      "@type": "EducationalOrganization",
      name: "Neuro Edge Technologies",
    },
    courseMode: "online",
    educationalLevel: "Beginner to Advanced",
    timeRequired: "P75H",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "INR",
      category: "Free",
    },
  };

  const reactTopics = [
    {
      id: 1,
      title: "React Fundamentals",
      duration: "10 hours",
      lessons: [
        {
          id: 101,
          title: "Introduction to React",
          slug: "intro-react",
          duration: 35,
          topics: [
            "What is React?",
            "Virtual DOM",
            "React vs Other Frameworks",
            "Setting up Development Environment",
            "Create React App",
          ],
        },
        {
          id: 102,
          title: "JSX and Components",
          slug: "jsx-components",
          duration: 45,
          topics: [
            "JSX Syntax",
            "Creating Components",
            "Functional vs Class Components",
            "Component Composition",
            "Props and Children",
          ],
        },
        {
          id: 103,
          title: "Props and State",
          slug: "props-state",
          duration: 40,
          topics: [
            "Understanding Props",
            "State Management",
            "Event Handling",
            "Conditional Rendering",
            "Lists and Keys",
          ],
        },
      ],
    },
    {
      id: 2,
      title: "React Hooks",
      duration: "12 hours",
      lessons: [
        {
          id: 201,
          title: "useState and useEffect",
          slug: "usestate-useeffect",
          duration: 50,
          topics: [
            "useState Hook",
            "useEffect Hook",
            "Effect Dependencies",
            "Cleanup Functions",
            "Custom Hooks",
          ],
        },
        {
          id: 202,
          title: "Advanced Hooks",
          slug: "advanced-hooks",
          duration: 45,
          topics: [
            "useContext Hook",
            "useReducer Hook",
            "useMemo and useCallback",
            "useRef Hook",
            "Custom Hook Patterns",
          ],
        },
      ],
    },
    {
      id: 3,
      title: "State Management",
      duration: "10 hours",
      lessons: [
        {
          id: 301,
          title: "Context API",
          slug: "context-api",
          duration: 40,
          topics: [
            "React Context",
            "Provider and Consumer",
            "useContext Hook",
            "Context Best Practices",
            "Multiple Contexts",
          ],
        },
        {
          id: 302,
          title: "Redux Fundamentals",
          slug: "redux-fundamentals",
          duration: 60,
          topics: [
            "Redux Principles",
            "Actions and Reducers",
            "Store and Dispatch",
            "React-Redux Integration",
            "Redux Toolkit",
          ],
        },
      ],
    },
    {
      id: 4,
      title: "React Router",
      duration: "8 hours",
      lessons: [
        {
          id: 401,
          title: "Routing Basics",
          slug: "routing-basics",
          duration: 45,
          topics: [
            "React Router Setup",
            "Route Components",
            "Navigation",
            "URL Parameters",
            "Query Strings",
          ],
        },
        {
          id: 402,
          title: "Advanced Routing",
          slug: "advanced-routing",
          duration: 35,
          topics: [
            "Nested Routes",
            "Protected Routes",
            "Route Guards",
            "Programmatic Navigation",
            "Route Transitions",
          ],
        },
      ],
    },
    {
      id: 5,
      title: "Performance & Testing",
      duration: "9 hours",
      lessons: [
        {
          id: 501,
          title: "Performance Optimization",
          slug: "performance",
          duration: 50,
          topics: [
            "React.memo",
            "useMemo and useCallback",
            "Code Splitting",
            "Lazy Loading",
            "Performance Profiling",
          ],
        },
        {
          id: 502,
          title: "Testing React Apps",
          slug: "testing",
          duration: 40,
          topics: [
            "Jest and React Testing Library",
            "Unit Testing Components",
            "Integration Testing",
            "Mocking",
            "Test-Driven Development",
          ],
        },
      ],
    },
  ];

  return (
    <div className="pt-24">
      <SEO
        title="React Complete Tutorial | Free React.js Course"
        description="Learn React.js from fundamentals to advanced concepts including hooks, context, Redux, Next.js, and modern React patterns. Comprehensive free tutorial with hands-on examples."
        keywords="React Tutorial, Learn React, React Course Free, React Hooks, React Router, Redux, Next.js, React Components"
        canonical="/resources/react"
        structuredData={reactStructuredData}
      />

      {/* Page Header */}
      <section className="py-12 bg-gradient-to-r from-cyan-600 to-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="text-6xl mb-4">⚛️</div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            React Complete Tutorial
          </h1>
          <p className="text-xl text-cyan-100 max-w-3xl mx-auto">
            Learn React.js from fundamentals to advanced concepts including
            hooks, context, Redux, Next.js, and modern React patterns.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            <span className="bg-white/20 text-white px-4 py-2 rounded-full text-sm">
              ⏱️ 75+ Hours Content
            </span>
            <span className="bg-white/20 text-white px-4 py-2 rounded-full text-sm">
              📚 5 Major Topics
            </span>
            <span className="bg-white/20 text-white px-4 py-2 rounded-full text-sm">
              📝 35+ Detailed Lessons
            </span>
            <span className="bg-white/20 text-white px-4 py-2 rounded-full text-sm">
              🆓 Completely Free
            </span>
          </div>
        </div>
      </section>

      {/* Tutorial Content with Sidebar */}
      <section className="py-8 bg-gray-50 min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex gap-8">
            {/* Left Sidebar - Topics Navigation */}
            <div className="w-80 flex-shrink-0">
              <div className="bg-white rounded-2xl shadow-lg sticky top-8 max-h-[calc(100vh-4rem)] overflow-y-auto">
                <div className="p-6 border-b border-gray-200">
                  <h2 className="text-xl font-bold text-gray-900">
                    📚 React Tutorial Topics
                  </h2>
                  <p className="text-sm text-gray-600 mt-1">
                    Click on any topic to explore
                  </p>
                </div>

                <div className="p-4">
                  {reactTopics.map((topic) => (
                    <div key={topic.id} className="mb-4">
                      {/* Topic Header */}
                      <button
                        onClick={() =>
                          setSelectedTopic(
                            selectedTopic === topic.id ? null : topic.id
                          )
                        }
                        className={`w-full text-left p-3 rounded-lg transition-all duration-200 ${
                          selectedTopic === topic.id
                            ? "bg-cyan-100 text-cyan-800 border-l-4 border-cyan-500"
                            : "hover:bg-gray-50 text-gray-700"
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <div>
                            <h3 className="font-semibold text-sm">
                              {topic.id}. {topic.title}
                            </h3>
                            <p className="text-xs text-gray-500 mt-1">
                              {topic.duration}
                            </p>
                          </div>
                          <span
                            className={`transform transition-transform ${
                              selectedTopic === topic.id ? "rotate-90" : ""
                            }`}
                          >
                            ▶
                          </span>
                        </div>
                      </button>

                      {/* Lessons List */}
                      {selectedTopic === topic.id && (
                        <div className="mt-2 ml-4 space-y-1">
                          {topic.lessons.map((lesson) => (
                            <button
                              key={lesson.id}
                              onClick={() => setSelectedLesson(lesson)}
                              className={`w-full text-left p-2 rounded text-sm transition-colors ${
                                selectedLesson?.id === lesson.id
                                  ? "bg-cyan-50 text-cyan-700 border-l-2 border-cyan-400"
                                  : "text-gray-600 hover:bg-gray-50 hover:text-gray-800"
                              }`}
                            >
                              <div className="flex items-center justify-between">
                                <span className="truncate">{lesson.title}</span>
                                <span className="text-xs text-gray-400 ml-2">
                                  {lesson.duration}m
                                </span>
                              </div>
                            </button>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Content Area */}
            <div className="flex-1">
              {!selectedLesson ? (
                /* Default Overview Content */
                <div className="space-y-8">
                  {/* Course Overview */}
                  <div className="bg-white rounded-2xl p-8 shadow-lg">
                    <h2 className="text-3xl font-bold text-gray-900 mb-6">
                      📖 What You'll Learn
                    </h2>
                    <div className="grid md:grid-cols-2 gap-8">
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-4">
                          Core React Concepts
                        </h3>
                        <ul className="space-y-2 text-gray-600">
                          <li className="flex items-center">
                            <span className="text-green-500 mr-2">✓</span> React
                            fundamentals and JSX
                          </li>
                          <li className="flex items-center">
                            <span className="text-green-500 mr-2">✓</span>{" "}
                            Components, props, and state
                          </li>
                          <li className="flex items-center">
                            <span className="text-green-500 mr-2">✓</span> React
                            Hooks and lifecycle
                          </li>
                          <li className="flex items-center">
                            <span className="text-green-500 mr-2">✓</span> Event
                            handling and forms
                          </li>
                          <li className="flex items-center">
                            <span className="text-green-500 mr-2">✓</span> React
                            Router for navigation
                          </li>
                        </ul>
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-4">
                          Advanced Features
                        </h3>
                        <ul className="space-y-2 text-gray-600">
                          <li className="flex items-center">
                            <span className="text-green-500 mr-2">✓</span> State
                            management with Redux
                          </li>
                          <li className="flex items-center">
                            <span className="text-green-500 mr-2">✓</span>{" "}
                            Context API and custom hooks
                          </li>
                          <li className="flex items-center">
                            <span className="text-green-500 mr-2">✓</span>{" "}
                            Performance optimization
                          </li>
                          <li className="flex items-center">
                            <span className="text-green-500 mr-2">✓</span>{" "}
                            Testing React applications
                          </li>
                          <li className="flex items-center">
                            <span className="text-green-500 mr-2">✓</span>{" "}
                            Next.js and deployment
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* Getting Started Guide */}
                  <div className="bg-white rounded-2xl p-8 shadow-lg">
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">
                      🚀 Getting Started
                    </h2>
                    <div className="prose max-w-none">
                      <p className="text-gray-600 mb-4">
                        Welcome to our comprehensive React tutorial! This course
                        will take you from React basics to building complex,
                        production-ready applications.
                      </p>
                      <div className="bg-cyan-50 border-l-4 border-cyan-400 p-4 mb-6">
                        <div className="flex">
                          <div className="flex-shrink-0">
                            <span className="text-cyan-400 text-xl">💡</span>
                          </div>
                          <div className="ml-3">
                            <p className="text-sm text-cyan-700">
                              <strong>Pro Tip:</strong> Make sure you have
                              Node.js installed and basic knowledge of
                              JavaScript and HTML/CSS before starting this
                              tutorial.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                /* Selected Lesson Content */
                <div className="bg-white rounded-2xl shadow-lg">
                  {/* Lesson Header */}
                  <div className="bg-gradient-to-r from-cyan-500 to-blue-500 p-6 rounded-t-2xl">
                    <div className="flex items-center justify-between">
                      <div>
                        <h1 className="text-2xl font-bold text-white mb-2">
                          {selectedLesson.title}
                        </h1>
                        <p className="text-cyan-100">
                          Duration: {selectedLesson.duration} minutes
                        </p>
                      </div>
                      <button
                        onClick={() => setSelectedLesson(null)}
                        className="bg-white/20 hover:bg-white/30 text-white p-2 rounded-lg transition-colors"
                      >
                        ✕
                      </button>
                    </div>
                  </div>

                  {/* Lesson Content */}
                  <div className="p-8">
                    {/* Topics Covered */}
                    <div className="mb-8">
                      <h2 className="text-xl font-semibold text-gray-900 mb-4">
                        📋 Topics Covered
                      </h2>
                      <div className="grid md:grid-cols-2 gap-3">
                        {selectedLesson.topics.map((topic, index) => (
                          <div
                            key={index}
                            className="flex items-center p-3 bg-gray-50 rounded-lg"
                          >
                            <span className="text-cyan-500 mr-3">▶</span>
                            <span className="text-gray-700">{topic}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ReactTutorialPage;
