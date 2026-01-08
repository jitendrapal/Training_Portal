import TutorialTemplate from "../components/TutorialTemplate";

const CppTutorialPage = () => {
  const cppStructuredData = {
    "@context": "https://schema.org",
    "@type": "Course",
    name: "C++ Complete Tutorial",
    description: "Master C++ programming with OOP concepts, STL, templates, and modern C++ features",
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

  const cppTopics = [
    {
      id: 1,
      title: "C++ Fundamentals",
      duration: "10 hours",
      lessons: [
        {
          id: 101,
          title: "Introduction to C++",
          slug: "intro-cpp",
          duration: 40,
          topics: ["C++ Overview", "C vs C++", "First C++ Program", "Namespaces", "Input/Output"],
        },
        {
          id: 102,
          title: "Data Types and Variables",
          slug: "datatypes-variables",
          duration: 35,
          topics: ["Built-in Types", "User-defined Types", "Type Modifiers", "Constants", "References"],
        },
      ],
    },
    {
      id: 2,
      title: "Object-Oriented Programming",
      duration: "18 hours",
      lessons: [
        {
          id: 201,
          title: "Classes and Objects",
          slug: "classes-objects",
          duration: 60,
          topics: ["Class Definition", "Object Creation", "Constructors", "Destructors", "Access Specifiers"],
        },
        {
          id: 202,
          title: "Inheritance",
          slug: "inheritance",
          duration: 55,
          topics: ["Types of Inheritance", "Base and Derived Classes", "Constructor Chaining", "Virtual Functions", "Abstract Classes"],
        },
        {
          id: 203,
          title: "Polymorphism",
          slug: "polymorphism",
          duration: 50,
          topics: ["Function Overloading", "Operator Overloading", "Virtual Functions", "Pure Virtual Functions", "RTTI"],
        },
      ],
    },
    {
      id: 3,
      title: "Templates and Generics",
      duration: "12 hours",
      lessons: [
        {
          id: 301,
          title: "Function Templates",
          slug: "function-templates",
          duration: 45,
          topics: ["Template Basics", "Template Parameters", "Template Specialization", "Template Overloading", "SFINAE"],
        },
        {
          id: 302,
          title: "Class Templates",
          slug: "class-templates",
          duration: 50,
          topics: ["Class Template Definition", "Template Instantiation", "Template Inheritance", "Template Friends", "Variadic Templates"],
        },
      ],
    },
    {
      id: 4,
      title: "STL (Standard Template Library)",
      duration: "15 hours",
      lessons: [
        {
          id: 401,
          title: "Containers",
          slug: "stl-containers",
          duration: 70,
          topics: ["Vector", "List", "Deque", "Set", "Map", "Unordered Containers"],
        },
        {
          id: 402,
          title: "Algorithms and Iterators",
          slug: "algorithms-iterators",
          duration: 60,
          topics: ["Iterator Types", "Algorithm Categories", "Lambda Expressions", "Function Objects", "Custom Algorithms"],
        },
      ],
    },
    {
      id: 5,
      title: "Modern C++ Features",
      duration: "15 hours",
      lessons: [
        {
          id: 501,
          title: "C++11/14 Features",
          slug: "cpp11-14",
          duration: 65,
          topics: ["Auto Keyword", "Range-based Loops", "Smart Pointers", "Move Semantics", "Lambda Expressions"],
        },
        {
          id: 502,
          title: "C++17/20 Features",
          slug: "cpp17-20",
          duration: 60,
          topics: ["Structured Bindings", "std::optional", "Concepts", "Modules", "Coroutines"],
        },
      ],
    },
    {
      id: 6,
      title: "Advanced Programming",
      duration: "12 hours",
      lessons: [
        {
          id: 601,
          title: "Memory Management",
          slug: "memory-management",
          duration: 50,
          topics: ["Dynamic Allocation", "Smart Pointers", "Memory Leaks", "RAII", "Custom Allocators"],
        },
        {
          id: 602,
          title: "Exception Handling",
          slug: "exception-handling",
          duration: 40,
          topics: ["Try-Catch Blocks", "Exception Types", "Custom Exceptions", "Exception Safety", "RAII and Exceptions"],
        },
      ],
    },
  ];

  return (
    <TutorialTemplate
      title="C++ Complete Tutorial"
      description="Master C++ programming with OOP concepts, STL, templates, modern C++ features, and advanced programming techniques."
      icon="➕"
      gradientFrom="from-blue-600"
      gradientTo="to-indigo-600"
      accentColor="blue"
      topics={cppTopics}
      structuredData={cppStructuredData}
      canonical="/resources/cpp"
      keywords="C++ Tutorial, Learn C++, C++ Programming, OOP C++, STL, Templates, Modern C++, C++ Course Free"
      duration="80"
      lessonsCount="40"
      topicsCount="6"
    />
  );
};

export default CppTutorialPage;
