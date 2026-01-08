import { useState } from "react";
import SEO from "../components/SEO";

const AngularTutorialPage = () => {
  const [selectedTopic, setSelectedTopic] = useState(null);
  const [selectedLesson, setSelectedLesson] = useState(null);

  const angularStructuredData = {
    "@context": "https://schema.org",
    "@type": "Course",
    name: "Angular Complete Tutorial",
    description:
      "Master Angular framework from basics to advanced concepts with TypeScript and modern Angular features",
    provider: {
      "@type": "EducationalOrganization",
      name: "Neuro Edge Technologies",
    },
    courseMode: "online",
    educationalLevel: "Beginner to Advanced",
    timeRequired: "P70H",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "INR",
      category: "Free",
    },
  };

  const angularTopics = [
    {
      id: 1,
      title: "Angular Fundamentals",
      duration: "8 hours",
      lessons: [
        {
          id: 101,
          title: "Introduction to Angular",
          slug: "intro-angular",
          duration: 30,
          topics: [
            "What is Angular?",
            "Angular vs AngularJS",
            "Angular Architecture",
            "Angular CLI",
            "Development Environment Setup",
          ],
        },
        {
          id: 102,
          title: "TypeScript Basics",
          slug: "typescript-basics",
          duration: 45,
          topics: [
            "TypeScript Introduction",
            "Types and Interfaces",
            "Classes and Inheritance",
            "Decorators",
            "Modules and Namespaces",
          ],
        },
        {
          id: 103,
          title: "Angular Project Structure",
          slug: "project-structure",
          duration: 25,
          topics: [
            "Angular Workspace",
            "Project Files Overview",
            "Module System",
            "Configuration Files",
            "Build Process",
          ],
        },
      ],
    },
    {
      id: 2,
      title: "Components & Templates",
      duration: "10 hours",
      lessons: [
        {
          id: 201,
          title: "Angular Components",
          slug: "components",
          duration: 50,
          topics: [
            "Component Architecture",
            "Creating Components",
            "Component Lifecycle",
            "Component Communication",
            "ViewChild and ContentChild",
          ],
        },
        {
          id: 202,
          title: "Templates and Data Binding",
          slug: "templates-binding",
          duration: 45,
          topics: [
            "Template Syntax",
            "Interpolation",
            "Property Binding",
            "Event Binding",
            "Two-way Data Binding",
          ],
        },
        {
          id: 203,
          title: "Directives",
          slug: "directives",
          duration: 40,
          topics: [
            "Built-in Directives",
            "Structural Directives",
            "Attribute Directives",
            "Custom Directives",
            "Directive Composition",
          ],
        },
      ],
    },
    {
      id: 3,
      title: "Services & Dependency Injection",
      duration: "8 hours",
      lessons: [
        {
          id: 301,
          title: "Angular Services",
          slug: "services",
          duration: 40,
          topics: [
            "Creating Services",
            "Service Providers",
            "Singleton Services",
            "Service Communication",
            "Service Testing",
          ],
        },
        {
          id: 302,
          title: "Dependency Injection",
          slug: "dependency-injection",
          duration: 45,
          topics: [
            "DI System Overview",
            "Injectors and Providers",
            "Hierarchical Injection",
            "Injection Tokens",
            "Optional Dependencies",
          ],
        },
      ],
    },
    {
      id: 4,
      title: "Routing & Navigation",
      duration: "9 hours",
      lessons: [
        {
          id: 401,
          title: "Angular Router",
          slug: "router",
          duration: 50,
          topics: [
            "Router Configuration",
            "Route Parameters",
            "Query Parameters",
            "Nested Routes",
            "Route Guards",
          ],
        },
        {
          id: 402,
          title: "Navigation & Route Guards",
          slug: "navigation-guards",
          duration: 40,
          topics: [
            "Programmatic Navigation",
            "CanActivate Guard",
            "CanDeactivate Guard",
            "Resolve Guard",
            "Route Data",
          ],
        },
      ],
    },
    {
      id: 5,
      title: "Forms & Validation",
      duration: "8 hours",
      lessons: [
        {
          id: 501,
          title: "Template-driven Forms",
          slug: "template-forms",
          duration: 40,
          topics: [
            "Form Controls",
            "Form Validation",
            "Custom Validators",
            "Form Submission",
            "Error Handling",
          ],
        },
        {
          id: 502,
          title: "Reactive Forms",
          slug: "reactive-forms",
          duration: 45,
          topics: [
            "FormBuilder",
            "FormGroup and FormControl",
            "Dynamic Forms",
            "Custom Form Controls",
            "Form Arrays",
          ],
        },
      ],
    },
    {
      id: 6,
      title: "HTTP Client & APIs",
      duration: "7 hours",
      lessons: [
        {
          id: 601,
          title: "HTTP Client",
          slug: "http-client",
          duration: 45,
          topics: [
            "HTTP Client Setup",
            "GET, POST, PUT, DELETE",
            "HTTP Interceptors",
            "Error Handling",
            "HTTP Headers",
          ],
        },
        {
          id: 602,
          title: "Observables & RxJS",
          slug: "observables-rxjs",
          duration: 40,
          topics: [
            "Observable Basics",
            "RxJS Operators",
            "Async Pipe",
            "Subject and BehaviorSubject",
            "Error Handling",
          ],
        },
      ],
    },
  ];

  return (
    <div className="pt-24">
      <SEO
        title="Angular Complete Tutorial | Free Angular Framework Course"
        description="Learn Angular framework from basics to advanced with TypeScript, components, services, routing, and modern Angular features. Comprehensive free tutorial with hands-on examples."
        keywords="Angular Tutorial, Learn Angular, Angular Course Free, Angular Components, Angular Services, TypeScript, Angular CLI, Angular Routing"
        canonical="/resources/angular"
        structuredData={angularStructuredData}
      />

      {/* Page Header */}
      <section className="py-12 bg-gradient-to-r from-red-600 to-pink-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="text-6xl mb-4">🅰️</div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Angular Complete Tutorial
          </h1>
          <p className="text-xl text-red-100 max-w-3xl mx-auto">
            Master Angular framework from basics to advanced concepts with
            TypeScript, components, services, routing, and modern Angular
            features.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            <span className="bg-white/20 text-white px-4 py-2 rounded-full text-sm">
              ⏱️ 70+ Hours Content
            </span>
            <span className="bg-white/20 text-white px-4 py-2 rounded-full text-sm">
              📚 10 Major Topics
            </span>
            <span className="bg-white/20 text-white px-4 py-2 rounded-full text-sm">
              📝 40+ Detailed Lessons
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
                    📚 Angular Tutorial Topics
                  </h2>
                  <p className="text-sm text-gray-600 mt-1">
                    Click on any topic to explore
                  </p>
                </div>

                <div className="p-4">
                  {angularTopics.map((topic) => (
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
                            ? "bg-red-100 text-red-800 border-l-4 border-red-500"
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
                                  ? "bg-red-50 text-red-700 border-l-2 border-red-400"
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
                          Core Angular Concepts
                        </h3>
                        <ul className="space-y-2 text-gray-600">
                          <li className="flex items-center">
                            <span className="text-green-500 mr-2">✓</span>{" "}
                            Angular fundamentals and TypeScript
                          </li>
                          <li className="flex items-center">
                            <span className="text-green-500 mr-2">✓</span>{" "}
                            Components, templates, and data binding
                          </li>
                          <li className="flex items-center">
                            <span className="text-green-500 mr-2">✓</span>{" "}
                            Services and dependency injection
                          </li>
                          <li className="flex items-center">
                            <span className="text-green-500 mr-2">✓</span>{" "}
                            Routing and navigation
                          </li>
                          <li className="flex items-center">
                            <span className="text-green-500 mr-2">✓</span> Forms
                            and validation
                          </li>
                        </ul>
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-4">
                          Advanced Features
                        </h3>
                        <ul className="space-y-2 text-gray-600">
                          <li className="flex items-center">
                            <span className="text-green-500 mr-2">✓</span> HTTP
                            client and API integration
                          </li>
                          <li className="flex items-center">
                            <span className="text-green-500 mr-2">✓</span> State
                            management and RxJS
                          </li>
                          <li className="flex items-center">
                            <span className="text-green-500 mr-2">✓</span>{" "}
                            Testing and debugging
                          </li>
                          <li className="flex items-center">
                            <span className="text-green-500 mr-2">✓</span>{" "}
                            Performance optimization
                          </li>
                          <li className="flex items-center">
                            <span className="text-green-500 mr-2">✓</span>{" "}
                            Deployment and best practices
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
                        Welcome to our comprehensive Angular tutorial! This
                        course will take you from Angular basics to building
                        complex, production-ready applications.
                      </p>
                      <div className="bg-red-50 border-l-4 border-red-400 p-4 mb-6">
                        <div className="flex">
                          <div className="flex-shrink-0">
                            <span className="text-red-400 text-xl">💡</span>
                          </div>
                          <div className="ml-3">
                            <p className="text-sm text-red-700">
                              <strong>Pro Tip:</strong> Make sure you have
                              Node.js installed and basic knowledge of
                              JavaScript/TypeScript before starting this
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
                  <div className="bg-gradient-to-r from-red-500 to-pink-500 p-6 rounded-t-2xl">
                    <div className="flex items-center justify-between">
                      <div>
                        <h1 className="text-2xl font-bold text-white mb-2">
                          {selectedLesson.title}
                        </h1>
                        <p className="text-red-100">
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
                            <span className="text-red-500 mr-3">▶</span>
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

export default AngularTutorialPage;
