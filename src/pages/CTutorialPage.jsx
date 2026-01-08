import TutorialTemplate from "../components/TutorialTemplate";

const CTutorialPage = () => {
  const cStructuredData = {
    "@context": "https://schema.org",
    "@type": "Course",
    name: "C Programming Complete Tutorial",
    description: "Learn C programming from basics to advanced with pointers, memory management, and system programming",
    provider: {
      "@type": "EducationalOrganization",
      name: "Neuro Edge Technologies",
    },
    courseMode: "online",
    educationalLevel: "Beginner to Advanced",
    timeRequired: "P60H",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "INR",
      category: "Free",
    },
  };

  const cTopics = [
    {
      id: 1,
      title: "C Fundamentals",
      duration: "8 hours",
      lessons: [
        {
          id: 101,
          title: "Introduction to C",
          slug: "intro-c",
          duration: 35,
          topics: ["History of C", "C Compiler", "First C Program", "Program Structure", "Comments"],
        },
        {
          id: 102,
          title: "Variables and Data Types",
          slug: "variables-datatypes",
          duration: 40,
          topics: ["Data Types", "Variables", "Constants", "Keywords", "Operators"],
        },
      ],
    },
    {
      id: 2,
      title: "Control Structures",
      duration: "10 hours",
      lessons: [
        {
          id: 201,
          title: "Decision Making",
          slug: "decision-making",
          duration: 45,
          topics: ["if Statement", "if-else", "switch Statement", "Conditional Operator", "Nested Conditions"],
        },
        {
          id: 202,
          title: "Loops",
          slug: "loops",
          duration: 50,
          topics: ["for Loop", "while Loop", "do-while Loop", "Nested Loops", "Loop Control"],
        },
      ],
    },
    {
      id: 3,
      title: "Functions",
      duration: "8 hours",
      lessons: [
        {
          id: 301,
          title: "Function Basics",
          slug: "function-basics",
          duration: 40,
          topics: ["Function Definition", "Function Call", "Parameters", "Return Values", "Scope"],
        },
        {
          id: 302,
          title: "Advanced Functions",
          slug: "advanced-functions",
          duration: 45,
          topics: ["Recursion", "Function Pointers", "Callback Functions", "Variable Arguments", "Inline Functions"],
        },
      ],
    },
    {
      id: 4,
      title: "Arrays and Strings",
      duration: "12 hours",
      lessons: [
        {
          id: 401,
          title: "Arrays",
          slug: "arrays",
          duration: 50,
          topics: ["Array Declaration", "Array Initialization", "Multi-dimensional Arrays", "Array Operations", "Array and Functions"],
        },
        {
          id: 402,
          title: "Strings",
          slug: "strings",
          duration: 45,
          topics: ["String Basics", "String Functions", "String Manipulation", "String Arrays", "String Pointers"],
        },
      ],
    },
    {
      id: 5,
      title: "Pointers and Memory",
      duration: "15 hours",
      lessons: [
        {
          id: 501,
          title: "Pointers",
          slug: "pointers",
          duration: 60,
          topics: ["Pointer Basics", "Pointer Arithmetic", "Pointer to Pointer", "Array of Pointers", "Function Pointers"],
        },
        {
          id: 502,
          title: "Dynamic Memory",
          slug: "dynamic-memory",
          duration: 55,
          topics: ["malloc()", "calloc()", "realloc()", "free()", "Memory Leaks"],
        },
      ],
    },
    {
      id: 6,
      title: "Structures and File Handling",
      duration: "10 hours",
      lessons: [
        {
          id: 601,
          title: "Structures and Unions",
          slug: "structures-unions",
          duration: 45,
          topics: ["Structure Definition", "Structure Variables", "Nested Structures", "Unions", "Bit Fields"],
        },
        {
          id: 602,
          title: "File Operations",
          slug: "file-operations",
          duration: 50,
          topics: ["File Handling", "File Modes", "File Functions", "Binary Files", "File Positioning"],
        },
      ],
    },
  ];

  return (
    <TutorialTemplate
      title="C Programming Complete Tutorial"
      description="Learn C programming from basics to advanced with pointers, memory management, data structures, and system programming concepts."
      icon="🔤"
      gradientFrom="from-gray-600"
      gradientTo="to-slate-600"
      accentColor="gray"
      topics={cTopics}
      structuredData={cStructuredData}
      canonical="/resources/c"
      keywords="C Programming Tutorial, Learn C Programming, C Language Course, Pointers in C, Memory Management, C Programming Free"
      duration="60"
      lessonsCount="30"
      topicsCount="6"
    />
  );
};

export default CTutorialPage;
