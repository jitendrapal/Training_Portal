import { useState } from "react";
import SEO from "../components/SEO";

const PythonTutorialPage = () => {
  const [selectedTopic, setSelectedTopic] = useState(null);
  const [selectedLesson, setSelectedLesson] = useState(null);

  const pythonStructuredData = {
    "@context": "https://schema.org",
    "@type": "Course",
    name: "Python Complete Tutorial",
    description:
      "Master Python programming from basics to advanced concepts with hands-on examples",
    provider: {
      "@type": "EducationalOrganization",
      name: "Neuro Edge Technologies",
    },
    courseMode: "online",
    educationalLevel: "Beginner to Advanced",
    timeRequired: "P80H",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "INR",
      category: "Free",
    },
  };

  const pythonTopics = [
    {
      id: 1,
      title: "Introduction to Python",
      duration: "5 hours",
      lessons: [
        {
          id: 101,
          title: "What is Python?",
          slug: "what-is-python",
          duration: 25,
          topics: [
            "Introduction to Python",
            "History and Evolution of Python",
            "Features of Python",
            "Python Applications",
            "Python vs Other Languages",
          ],
        },
        {
          id: 102,
          title: "Python Installation and Setup",
          slug: "python-setup",
          duration: 30,
          topics: [
            "Installing Python",
            "Python IDLE",
            "Setting up VS Code",
            "Virtual Environments",
            "Package Management with pip",
          ],
        },
        {
          id: 103,
          title: "Python Syntax and Structure",
          slug: "python-syntax",
          duration: 25,
          topics: [
            "Python Syntax Rules",
            "Indentation in Python",
            "Comments in Python",
            "Python Keywords",
            "Naming Conventions",
          ],
        },
        {
          id: 104,
          title: "Running Python Programs",
          slug: "running-python",
          duration: 20,
          topics: [
            "Interactive Mode",
            "Script Mode",
            "Command Line Arguments",
            "Python Path",
            "Common Errors",
          ],
        },
      ],
    },
    {
      id: 2,
      title: "Python Fundamentals",
      duration: "8 hours",
      lessons: [
        {
          id: 201,
          title: "Variables and Data Types",
          slug: "variables-datatypes",
          duration: 40,
          topics: [
            "Variables in Python",
            "Numeric Data Types",
            "String Data Type",
            "Boolean Data Type",
            "Type Conversion",
          ],
        },
        {
          id: 202,
          title: "Input and Output",
          slug: "input-output",
          duration: 30,
          topics: [
            "print() Function",
            "input() Function",
            "Formatted Output",
            "f-strings",
            "File I/O Basics",
          ],
        },
        {
          id: 203,
          title: "Python Operators",
          slug: "operators",
          duration: 35,
          topics: [
            "Arithmetic Operators",
            "Comparison Operators",
            "Logical Operators",
            "Assignment Operators",
            "Bitwise Operators",
            "Identity and Membership Operators",
          ],
        },
        {
          id: 204,
          title: "Strings in Python",
          slug: "strings",
          duration: 45,
          topics: [
            "String Creation",
            "String Indexing and Slicing",
            "String Methods",
            "String Formatting",
            "Regular Expressions",
          ],
        },
      ],
    },
    {
      id: 3,
      title: "Control Flow in Python",
      duration: "6 hours",
      lessons: [
        {
          id: 301,
          title: "Conditional Statements",
          slug: "conditional-statements",
          duration: 35,
          topics: [
            "if Statement",
            "if-else Statement",
            "elif Statement",
            "Nested Conditions",
            "Ternary Operator",
          ],
        },
        {
          id: 302,
          title: "Loops in Python",
          slug: "loops",
          duration: 45,
          topics: [
            "for Loop",
            "while Loop",
            "Nested Loops",
            "Loop Control Statements",
            "else with Loops",
          ],
        },
        {
          id: 303,
          title: "Loop Control and Iteration",
          slug: "loop-control",
          duration: 30,
          topics: [
            "break Statement",
            "continue Statement",
            "pass Statement",
            "range() Function",
            "enumerate() Function",
          ],
        },
      ],
    },
    {
      id: 4,
      title: "Data Structures in Python",
      duration: "10 hours",
      lessons: [
        {
          id: 401,
          title: "Lists in Python",
          slug: "lists",
          duration: 50,
          topics: [
            "Creating Lists",
            "List Indexing and Slicing",
            "List Methods",
            "List Comprehensions",
            "Nested Lists",
          ],
        },
        {
          id: 402,
          title: "Tuples in Python",
          slug: "tuples",
          duration: 35,
          topics: [
            "Creating Tuples",
            "Tuple Operations",
            "Tuple Methods",
            "Named Tuples",
            "Tuple vs List",
          ],
        },
        {
          id: 403,
          title: "Dictionaries in Python",
          slug: "dictionaries",
          duration: 45,
          topics: [
            "Creating Dictionaries",
            "Dictionary Methods",
            "Dictionary Comprehensions",
            "Nested Dictionaries",
            "Dictionary vs List",
          ],
        },
        {
          id: 404,
          title: "Sets in Python",
          slug: "sets",
          duration: 40,
          topics: [
            "Creating Sets",
            "Set Operations",
            "Set Methods",
            "Frozen Sets",
            "Set Comprehensions",
          ],
        },
      ],
    },
    {
      id: 5,
      title: "Functions in Python",
      duration: "7 hours",
      lessons: [
        {
          id: 501,
          title: "Introduction to Functions",
          slug: "functions-intro",
          duration: 40,
          topics: [
            "Defining Functions",
            "Function Parameters",
            "Return Statement",
            "Function Scope",
            "Local vs Global Variables",
          ],
        },
        {
          id: 502,
          title: "Advanced Function Concepts",
          slug: "advanced-functions",
          duration: 45,
          topics: [
            "Default Parameters",
            "*args and **kwargs",
            "Lambda Functions",
            "Higher-Order Functions",
            "Decorators",
          ],
        },
        {
          id: 503,
          title: "Built-in Functions",
          slug: "builtin-functions",
          duration: 35,
          topics: [
            "map() Function",
            "filter() Function",
            "reduce() Function",
            "zip() Function",
            "sorted() Function",
          ],
        },
      ],
    },
    {
      id: 6,
      title: "Object-Oriented Programming (OOP)",
      duration: "9 hours",
      lessons: [
        {
          id: 601,
          title: "Classes and Objects",
          slug: "classes-objects",
          duration: 45,
          topics: [
            "Creating Classes",
            "Creating Objects",
            "Instance Variables",
            "Instance Methods",
            "self Parameter",
          ],
        },
        {
          id: 602,
          title: "Inheritance in Python",
          slug: "inheritance",
          duration: 50,
          topics: [
            "Single Inheritance",
            "Multiple Inheritance",
            "Method Overriding",
            "super() Function",
            "Method Resolution Order",
          ],
        },
        {
          id: 603,
          title: "Encapsulation and Polymorphism",
          slug: "encapsulation-polymorphism",
          duration: 40,
          topics: [
            "Private Variables",
            "Property Decorators",
            "Getter and Setter",
            "Polymorphism",
            "Duck Typing",
          ],
        },
      ],
    },
    {
      id: 7,
      title: "File Handling and Exception Handling",
      duration: "6 hours",
      lessons: [
        {
          id: 701,
          title: "File Operations",
          slug: "file-operations",
          duration: 40,
          topics: [
            "Opening Files",
            "Reading Files",
            "Writing Files",
            "File Modes",
            "Context Managers",
          ],
        },
        {
          id: 702,
          title: "Exception Handling",
          slug: "exception-handling",
          duration: 45,
          topics: [
            "try-except Blocks",
            "Multiple Exception Handling",
            "finally Block",
            "Custom Exceptions",
            "Exception Hierarchy",
          ],
        },
      ],
    },
    {
      id: 8,
      title: "Modules and Packages",
      duration: "5 hours",
      lessons: [
        {
          id: 801,
          title: "Python Modules",
          slug: "modules",
          duration: 35,
          topics: [
            "Creating Modules",
            "Importing Modules",
            "Module Search Path",
            "Built-in Modules",
            "__name__ == '__main__'",
          ],
        },
        {
          id: 802,
          title: "Python Packages",
          slug: "packages",
          duration: 40,
          topics: [
            "Creating Packages",
            "__init__.py File",
            "Package Importing",
            "Relative Imports",
            "Package Distribution",
          ],
        },
      ],
    },
    {
      id: 9,
      title: "Advanced Python Concepts",
      duration: "8 hours",
      lessons: [
        {
          id: 901,
          title: "Generators and Iterators",
          slug: "generators-iterators",
          duration: 45,
          topics: [
            "Iterator Protocol",
            "Generator Functions",
            "yield Keyword",
            "Generator Expressions",
            "itertools Module",
          ],
        },
        {
          id: 902,
          title: "Decorators and Context Managers",
          slug: "decorators-context",
          duration: 50,
          topics: [
            "Function Decorators",
            "Class Decorators",
            "Context Managers",
            "with Statement",
            "contextlib Module",
          ],
        },
      ],
    },
    {
      id: 10,
      title: "Python Libraries and Frameworks",
      duration: "10 hours",
      lessons: [
        {
          id: 1001,
          title: "NumPy for Data Science",
          slug: "numpy",
          duration: 60,
          topics: [
            "NumPy Arrays",
            "Array Operations",
            "Mathematical Functions",
            "Array Indexing",
            "Broadcasting",
          ],
        },
        {
          id: 1002,
          title: "Pandas for Data Analysis",
          slug: "pandas",
          duration: 70,
          topics: [
            "DataFrames and Series",
            "Data Loading",
            "Data Cleaning",
            "Data Manipulation",
            "Data Visualization",
          ],
        },
        {
          id: 1003,
          title: "Web Development with Flask",
          slug: "flask",
          duration: 80,
          topics: [
            "Flask Basics",
            "Routing",
            "Templates",
            "Forms",
            "Database Integration",
          ],
        },
      ],
    },
  ];

  return (
    <div className="pt-24">
      <SEO
        title="Python Complete Tutorial | Free Python Programming Course"
        description="Learn Python programming from basics to advanced with our comprehensive free tutorial. Covers data structures, OOP, web development, and modern Python features with hands-on examples."
        keywords="Python Tutorial, Learn Python Programming, Python Course Free, Python Data Structures, Python OOP, Python Web Development, Python Django"
        canonical="/resources/python"
        structuredData={pythonStructuredData}
      />

      {/* Page Header */}
      <section className="py-12 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="text-6xl mb-4">🐍</div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Python Complete Tutorial
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Master Python programming from basics to advanced concepts with
            hands-on examples, practical projects, and real-world applications.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            <span className="bg-white/20 text-white px-4 py-2 rounded-full text-sm">
              ⏱️ 80+ Hours Content
            </span>
            <span className="bg-white/20 text-white px-4 py-2 rounded-full text-sm">
              📚 12 Major Topics
            </span>
            <span className="bg-white/20 text-white px-4 py-2 rounded-full text-sm">
              📝 50+ Detailed Lessons
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
                    📚 Python Tutorial Topics
                  </h2>
                  <p className="text-sm text-gray-600 mt-1">
                    Click on any topic to explore
                  </p>
                </div>

                <div className="p-4">
                  {pythonTopics.map((topic) => (
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
                            ? "bg-blue-100 text-blue-800 border-l-4 border-blue-500"
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
                                  ? "bg-blue-50 text-blue-700 border-l-2 border-blue-400"
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
                          Core Python Concepts
                        </h3>
                        <ul className="space-y-2 text-gray-600">
                          <li className="flex items-center">
                            <span className="text-green-500 mr-2">✓</span>{" "}
                            Python fundamentals and programming basics
                          </li>
                          <li className="flex items-center">
                            <span className="text-green-500 mr-2">✓</span> Data
                            types, variables, and operators
                          </li>
                          <li className="flex items-center">
                            <span className="text-green-500 mr-2">✓</span>{" "}
                            Control flow and decision making
                          </li>
                          <li className="flex items-center">
                            <span className="text-green-500 mr-2">✓</span> Data
                            structures (lists, tuples, dictionaries, sets)
                          </li>
                          <li className="flex items-center">
                            <span className="text-green-500 mr-2">✓</span>{" "}
                            Functions and modular programming
                          </li>
                        </ul>
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-4">
                          Advanced Features
                        </h3>
                        <ul className="space-y-2 text-gray-600">
                          <li className="flex items-center">
                            <span className="text-green-500 mr-2">✓</span>{" "}
                            Object-oriented programming
                          </li>
                          <li className="flex items-center">
                            <span className="text-green-500 mr-2">✓</span> File
                            handling and exception handling
                          </li>
                          <li className="flex items-center">
                            <span className="text-green-500 mr-2">✓</span>{" "}
                            Modules and packages
                          </li>
                          <li className="flex items-center">
                            <span className="text-green-500 mr-2">✓</span> Web
                            development with Django/Flask
                          </li>
                          <li className="flex items-center">
                            <span className="text-green-500 mr-2">✓</span> Data
                            science and machine learning basics
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
                        Welcome to our comprehensive Python tutorial! This
                        course is designed to take you from a complete beginner
                        to an advanced Python developer.
                      </p>
                      <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-6">
                        <div className="flex">
                          <div className="flex-shrink-0">
                            <span className="text-blue-400 text-xl">💡</span>
                          </div>
                          <div className="ml-3">
                            <p className="text-sm text-blue-700">
                              <strong>Pro Tip:</strong> Use the sidebar on the
                              left to navigate through different topics. Click
                              on any topic to see its lessons, then click on a
                              lesson to start learning!
                            </p>
                          </div>
                        </div>
                      </div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-3">
                        How to Use This Tutorial:
                      </h3>
                      <ol className="list-decimal list-inside space-y-2 text-gray-600">
                        <li>
                          Start with <strong>Introduction to Python</strong> if
                          you're a beginner
                        </li>
                        <li>
                          Follow the topics in order for the best learning
                          experience
                        </li>
                        <li>Practice the code examples as you go</li>
                        <li>
                          Complete the exercises at the end of each lesson
                        </li>
                        <li>
                          Don't rush - take your time to understand each concept
                        </li>
                      </ol>
                    </div>
                  </div>
                </div>
              ) : (
                /* Selected Lesson Content */
                <div className="bg-white rounded-2xl shadow-lg">
                  {/* Lesson Header */}
                  <div className="bg-gradient-to-r from-blue-500 to-purple-500 p-6 rounded-t-2xl">
                    <div className="flex items-center justify-between">
                      <div>
                        <h1 className="text-2xl font-bold text-white mb-2">
                          {selectedLesson.title}
                        </h1>
                        <p className="text-blue-100">
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
                            <span className="text-blue-500 mr-3">▶</span>
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

export default PythonTutorialPage;
