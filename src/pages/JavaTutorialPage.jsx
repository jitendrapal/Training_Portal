import React, { useState } from "react";
import SEO from "../components/SEO";

const JavaTutorialPage = () => {
  const [selectedTopic, setSelectedTopic] = useState(null);
  const [selectedLesson, setSelectedLesson] = useState(null);
  const javaStructuredData = {
    "@context": "https://schema.org",
    "@type": "Course",
    name: "Java Complete Tutorial",
    description:
      "Master Java programming from basics to advanced concepts with hands-on examples",
    provider: {
      "@type": "EducationalOrganization",
      name: "Neuro Edge Technologies",
    },
    courseMode: "online",
    educationalLevel: "Beginner to Advanced",
    timeRequired: "P40H",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "INR",
      category: "Free",
    },
  };

  const javaTopics = [
    {
      id: 1,
      title: "Introduction to Java",
      duration: "6 hours",
      lessons: [
        {
          id: 101,
          title: "What is Java?",
          slug: "what-is-java",
          duration: 25,
          topics: [
            "Introduction to Java",
            "History and Evolution of Java",
            "Features of Java",
            "Java Applications",
            "Java vs Other Languages",
          ],
        },
        {
          id: 102,
          title: "Java Platform and Architecture",
          slug: "java-platform",
          duration: 30,
          topics: [
            "JVM (Java Virtual Machine)",
            "JRE (Java Runtime Environment)",
            "JDK (Java Development Kit)",
            "Platform Independence",
            "Java Compilation Process",
          ],
        },
        {
          id: 103,
          title: "Setting up Java Environment",
          slug: "java-setup",
          duration: 35,
          topics: [
            "Installing JDK",
            "Setting Environment Variables",
            "IDE Setup (Eclipse/IntelliJ/VS Code)",
            "Command Line Tools",
            "First Java Program",
          ],
        },
        {
          id: 104,
          title: "Java Program Structure",
          slug: "program-structure",
          duration: 30,
          topics: [
            "Basic Program Structure",
            "main() Method",
            "Comments in Java",
            "Java Keywords",
            "Naming Conventions",
          ],
        },
        {
          id: 105,
          title: "Compiling and Running Java Programs",
          slug: "compile-run",
          duration: 25,
          topics: [
            "javac Command",
            "java Command",
            "Classpath Concept",
            "Package Structure",
            "Common Compilation Errors",
          ],
        },
      ],
    },
    {
      id: 2,
      title: "Fundamentals of Java Programming",
      duration: "10 hours",
      lessons: [
        {
          id: 201,
          title: "Variables and Data Types",
          slug: "variables-datatypes",
          duration: 45,
          topics: [
            "Primitive Data Types",
            "Non-primitive Data Types",
            "Variable Declaration and Initialization",
            "Local vs Instance vs Static Variables",
            "Constants using final keyword",
          ],
        },
        {
          id: 202,
          title: "Type Conversion and Casting",
          slug: "type-conversion",
          duration: 35,
          topics: [
            "Implicit Type Conversion",
            "Explicit Type Casting",
            "Widening and Narrowing",
            "String to Number Conversion",
            "Wrapper Class Conversions",
          ],
        },
        {
          id: 203,
          title: "Input and Output in Java",
          slug: "input-output",
          duration: 40,
          topics: [
            "Scanner Class",
            "BufferedReader Class",
            "System.out.print methods",
            "Formatted Output",
            "File I/O Basics",
          ],
        },
        {
          id: 204,
          title: "Java Literals and Constants",
          slug: "literals-constants",
          duration: 30,
          topics: [
            "Integer Literals",
            "Floating-point Literals",
            "Character Literals",
            "String Literals",
            "Boolean Literals",
          ],
        },
        {
          id: 205,
          title: "Scope and Lifetime of Variables",
          slug: "variable-scope",
          duration: 25,
          topics: [
            "Block Scope",
            "Method Scope",
            "Class Scope",
            "Variable Shadowing",
            "Memory Management",
          ],
        },
      ],
    },
    {
      id: 3,
      title: "Operators in Java",
      duration: "5 hours",
      lessons: [
        {
          id: 301,
          title: "Arithmetic Operators",
          slug: "arithmetic-operators",
          duration: 30,
          topics: [
            "Addition (+)",
            "Subtraction (-)",
            "Multiplication (*)",
            "Division (/)",
            "Modulus (%)",
            "Increment and Decrement",
          ],
        },
        {
          id: 302,
          title: "Relational and Comparison Operators",
          slug: "relational-operators",
          duration: 25,
          topics: [
            "Equal to (==)",
            "Not equal to (!=)",
            "Greater than (>)",
            "Less than (<)",
            "Greater than or equal (>=)",
            "Less than or equal (<=)",
          ],
        },
        {
          id: 303,
          title: "Logical Operators",
          slug: "logical-operators",
          duration: 30,
          topics: [
            "Logical AND (&&)",
            "Logical OR (||)",
            "Logical NOT (!)",
            "Short-circuit Evaluation",
            "Boolean Logic",
          ],
        },
        {
          id: 304,
          title: "Assignment and Bitwise Operators",
          slug: "assignment-bitwise",
          duration: 35,
          topics: [
            "Assignment Operator (=)",
            "Compound Assignment Operators",
            "Bitwise AND (&)",
            "Bitwise OR (|)",
            "Bitwise XOR (^)",
            "Bitwise NOT (~)",
            "Left Shift (<<)",
            "Right Shift (>>)",
          ],
        },
        {
          id: 305,
          title: "Operator Precedence and Associativity",
          slug: "operator-precedence",
          duration: 20,
          topics: [
            "Operator Precedence Rules",
            "Associativity",
            "Using Parentheses",
            "Expression Evaluation",
            "Best Practices",
          ],
        },
      ],
    },
    {
      id: 4,
      title: "Control Flow in Java",
      duration: "7 hours",
      lessons: [
        {
          id: 401,
          title: "Conditional Statements",
          slug: "conditional-statements",
          duration: 40,
          topics: [
            "if Statement",
            "if-else Statement",
            "Nested if-else",
            "else-if Ladder",
            "Ternary Operator (?:)",
            "Best Practices",
          ],
        },
        {
          id: 402,
          title: "Switch Statement",
          slug: "switch-statement",
          duration: 35,
          topics: [
            "Switch Syntax",
            "Case and Default",
            "Break Statement",
            "Fall-through Behavior",
            "Switch with Strings",
            "Enhanced Switch (Java 14+)",
          ],
        },
        {
          id: 403,
          title: "Loops in Java",
          slug: "loops",
          duration: 50,
          topics: [
            "for Loop",
            "Enhanced for Loop (for-each)",
            "while Loop",
            "do-while Loop",
            "Nested Loops",
            "Infinite Loops",
          ],
        },
        {
          id: 404,
          title: "Jump Statements",
          slug: "jump-statements",
          duration: 25,
          topics: [
            "break Statement",
            "continue Statement",
            "return Statement",
            "Labeled break and continue",
            "Best Practices",
          ],
        },
        {
          id: 405,
          title: "Control Flow Best Practices",
          slug: "control-flow-practices",
          duration: 20,
          topics: [
            "Code Readability",
            "Performance Considerations",
            "Avoiding Deep Nesting",
            "Error Handling in Control Flow",
            "Common Pitfalls",
          ],
        },
      ],
    },
    {
      id: 5,
      title: "Methods in Java",
      duration: "6 hours",
      lessons: [
        {
          id: 501,
          title: "Introduction to Methods",
          slug: "methods-intro",
          duration: 35,
          topics: [
            "What are Methods?",
            "Method Declaration",
            "Method Signature",
            "Return Types",
            "Method Parameters",
            "Method Calling",
          ],
        },
        {
          id: 502,
          title: "Method Parameters and Arguments",
          slug: "method-parameters",
          duration: 40,
          topics: [
            "Formal Parameters",
            "Actual Arguments",
            "Pass by Value",
            "Pass by Reference",
            "Variable Arguments (Varargs)",
            "Parameter Passing Examples",
          ],
        },
        {
          id: 503,
          title: "Method Overloading",
          slug: "method-overloading",
          duration: 30,
          topics: [
            "What is Method Overloading?",
            "Rules for Method Overloading",
            "Method Resolution",
            "Overloading with Different Parameters",
            "Overloading Best Practices",
          ],
        },
        {
          id: 504,
          title: "Static Methods and Variables",
          slug: "static-methods",
          duration: 35,
          topics: [
            "static Keyword",
            "Static Methods",
            "Static Variables",
            "Static Blocks",
            "Static vs Instance",
            "Memory Management",
          ],
        },
        {
          id: 505,
          title: "Recursion in Java",
          slug: "recursion",
          duration: 40,
          topics: [
            "What is Recursion?",
            "Base Case and Recursive Case",
            "Recursive Method Examples",
            "Stack Overflow",
            "Recursion vs Iteration",
            "Tail Recursion",
          ],
        },
      ],
    },
    {
      id: 6,
      title: "Object-Oriented Programming (OOP) in Java",
      duration: "15 hours",
      lessons: [
        {
          id: 601,
          title: "Classes and Objects",
          slug: "classes-objects",
          duration: 50,
          topics: [
            "What is a Class?",
            "What is an Object?",
            "Class Declaration",
            "Object Creation",
            "Instance Variables",
            "Instance Methods",
            "this Keyword",
          ],
        },
        {
          id: 602,
          title: "Constructors in Java",
          slug: "constructors",
          duration: 45,
          topics: [
            "What is Constructor?",
            "Default Constructor",
            "Parameterized Constructor",
            "Constructor Overloading",
            "Constructor Chaining",
            "Copy Constructor",
          ],
        },
        {
          id: 603,
          title: "Inheritance in Java",
          slug: "inheritance",
          duration: 60,
          topics: [
            "What is Inheritance?",
            "Types of Inheritance",
            "extends Keyword",
            "super Keyword",
            "Method Overriding",
            "final Keyword",
            "Object Class",
          ],
        },
        {
          id: 604,
          title: "Polymorphism in Java",
          slug: "polymorphism",
          duration: 50,
          topics: [
            "What is Polymorphism?",
            "Method Overloading",
            "Method Overriding",
            "Runtime Polymorphism",
            "Dynamic Method Dispatch",
            "instanceof Operator",
            "Upcasting and Downcasting",
          ],
        },
        {
          id: 605,
          title: "Encapsulation in Java",
          slug: "encapsulation",
          duration: 40,
          topics: [
            "What is Encapsulation?",
            "Access Modifiers",
            "Getter and Setter Methods",
            "Data Hiding",
            "Benefits of Encapsulation",
            "Best Practices",
          ],
        },
        {
          id: 606,
          title: "Abstraction in Java",
          slug: "abstraction",
          duration: 55,
          topics: [
            "What is Abstraction?",
            "Abstract Classes",
            "Abstract Methods",
            "Interfaces in Java",
            "Multiple Inheritance",
            "Default Methods",
            "Static Methods in Interface",
          ],
        },
        {
          id: 607,
          title: "Packages and Access Modifiers",
          slug: "packages-access",
          duration: 35,
          topics: [
            "Java Packages",
            "Creating Packages",
            "Import Statements",
            "Access Modifiers (public, private, protected, default)",
            "Package Visibility",
            "CLASSPATH",
          ],
        },
      ],
    },
    {
      id: 7,
      title: "Arrays & Strings in Java",
      duration: "8 hours",
      lessons: [
        {
          id: 701,
          title: "Introduction to Arrays",
          slug: "arrays-intro",
          duration: 40,
          topics: [
            "What are Arrays?",
            "Array Declaration",
            "Array Initialization",
            "Accessing Array Elements",
            "Array Length",
            "Array Memory Allocation",
          ],
        },
        {
          id: 702,
          title: "One-Dimensional Arrays",
          slug: "1d-arrays",
          duration: 45,
          topics: [
            "Creating 1D Arrays",
            "Array Traversal",
            "Array Operations",
            "Searching in Arrays",
            "Sorting Arrays",
            "Array Utilities",
          ],
        },
        {
          id: 703,
          title: "Multi-Dimensional Arrays",
          slug: "multidimensional-arrays",
          duration: 50,
          topics: [
            "2D Arrays",
            "3D Arrays",
            "Jagged Arrays",
            "Matrix Operations",
            "Array of Arrays",
            "Memory Layout",
          ],
        },
        {
          id: 704,
          title: "String Fundamentals",
          slug: "string-fundamentals",
          duration: 45,
          topics: [
            "String Class",
            "String Immutability",
            "String Pool",
            "String Creation Methods",
            "String Comparison",
            "String Concatenation",
          ],
        },
        {
          id: 705,
          title: "String Methods and Operations",
          slug: "string-methods",
          duration: 40,
          topics: [
            "String Length and Character Access",
            "String Searching Methods",
            "String Manipulation Methods",
            "String Conversion Methods",
            "Regular Expressions",
            "String Performance",
          ],
        },
        {
          id: 706,
          title: "StringBuilder and StringBuffer",
          slug: "stringbuilder-buffer",
          duration: 35,
          topics: [
            "Mutable Strings",
            "StringBuilder Class",
            "StringBuffer Class",
            "Performance Comparison",
            "When to Use Each",
            "Best Practices",
          ],
        },
      ],
    },
    {
      id: 8,
      title: "Exception Handling in Java",
      duration: "6 hours",
      lessons: [
        {
          id: 801,
          title: "Introduction to Exception Handling",
          slug: "exception-intro",
          duration: 35,
          topics: [
            "What are Exceptions?",
            "Types of Exceptions",
            "Exception Hierarchy",
            "Checked vs Unchecked Exceptions",
            "Error vs Exception",
            "Exception Handling Benefits",
          ],
        },
        {
          id: 802,
          title: "Try-Catch-Finally Blocks",
          slug: "try-catch-finally",
          duration: 45,
          topics: [
            "try Block",
            "catch Block",
            "Multiple catch Blocks",
            "finally Block",
            "Nested try-catch",
            "Resource Management",
            "Best Practices",
          ],
        },
        {
          id: 803,
          title: "Throw and Throws Keywords",
          slug: "throw-throws",
          duration: 40,
          topics: [
            "throw Keyword",
            "throws Keyword",
            "Difference between throw and throws",
            "Custom Exception Creation",
            "Exception Propagation",
            "Method Signatures",
          ],
        },
        {
          id: 804,
          title: "Custom Exceptions and Best Practices",
          slug: "custom-exceptions",
          duration: 30,
          topics: [
            "Creating Custom Exceptions",
            "Exception Chaining",
            "Exception Handling Patterns",
            "Logging Exceptions",
            "Performance Considerations",
            "Exception Handling Guidelines",
          ],
        },
      ],
    },
    {
      id: 9,
      title: "Java Wrapper Classes",
      duration: "4 hours",
      lessons: [
        {
          id: 901,
          title: "Introduction to Wrapper Classes",
          slug: "wrapper-intro",
          duration: 30,
          topics: [
            "What are Wrapper Classes?",
            "Primitive vs Wrapper Types",
            "Need for Wrapper Classes",
            "Wrapper Class Hierarchy",
            "Memory Considerations",
          ],
        },
        {
          id: 902,
          title: "Autoboxing and Unboxing",
          slug: "autoboxing-unboxing",
          duration: 35,
          topics: [
            "Autoboxing Concept",
            "Unboxing Concept",
            "Automatic Conversions",
            "Performance Impact",
            "Best Practices",
          ],
        },
        {
          id: 903,
          title: "Wrapper Class Methods",
          slug: "wrapper-methods",
          duration: 40,
          topics: [
            "valueOf() Methods",
            "parseXxx() Methods",
            "toString() Methods",
            "Comparison Methods",
            "Utility Methods",
          ],
        },
        {
          id: 904,
          title: "Number System Conversions",
          slug: "number-conversions",
          duration: 25,
          topics: [
            "Binary Conversions",
            "Octal Conversions",
            "Hexadecimal Conversions",
            "Radix Conversions",
            "Number Formatting",
          ],
        },
      ],
    },
    {
      id: 10,
      title: "Java Collections Framework",
      duration: "12 hours",
      lessons: [
        {
          id: 1001,
          title: "Collections Framework Overview",
          slug: "collections-overview",
          duration: 40,
          topics: [
            "What is Collections Framework?",
            "Collection Hierarchy",
            "Collection vs Collections",
            "Iterable and Iterator",
            "Benefits of Collections",
            "Collection Interfaces",
          ],
        },
        {
          id: 1002,
          title: "List Interface and Implementations",
          slug: "list-interface",
          duration: 60,
          topics: [
            "List Interface",
            "ArrayList",
            "LinkedList",
            "Vector",
            "Stack",
            "List Methods",
            "Performance Comparison",
          ],
        },
        {
          id: 1003,
          title: "Set Interface and Implementations",
          slug: "set-interface",
          duration: 50,
          topics: [
            "Set Interface",
            "HashSet",
            "LinkedHashSet",
            "TreeSet",
            "EnumSet",
            "Set Methods",
            "Duplicate Handling",
          ],
        },
        {
          id: 1004,
          title: "Map Interface and Implementations",
          slug: "map-interface",
          duration: 55,
          topics: [
            "Map Interface",
            "HashMap",
            "LinkedHashMap",
            "TreeMap",
            "Hashtable",
            "ConcurrentHashMap",
            "Map Methods",
            "Key-Value Operations",
          ],
        },
        {
          id: 1005,
          title: "Queue and Deque Interfaces",
          slug: "queue-deque",
          duration: 45,
          topics: [
            "Queue Interface",
            "Deque Interface",
            "PriorityQueue",
            "ArrayDeque",
            "LinkedList as Queue",
            "Queue Operations",
          ],
        },
        {
          id: 1006,
          title: "Collections Utility Class",
          slug: "collections-utility",
          duration: 35,
          topics: [
            "Collections Class",
            "Sorting Collections",
            "Searching Collections",
            "Synchronization",
            "Unmodifiable Collections",
            "Utility Methods",
          ],
        },
      ],
    },
    {
      id: 11,
      title: "Multithreading in Java",
      duration: "10 hours",
      lessons: [
        {
          id: 1101,
          title: "Introduction to Multithreading",
          slug: "multithreading-intro",
          duration: 45,
          topics: [
            "What is Multithreading?",
            "Process vs Thread",
            "Benefits of Multithreading",
            "Thread Lifecycle",
            "Main Thread",
            "Thread States",
          ],
        },
        {
          id: 1102,
          title: "Creating and Managing Threads",
          slug: "creating-threads",
          duration: 50,
          topics: [
            "Extending Thread Class",
            "Implementing Runnable Interface",
            "Callable and Future",
            "Thread Constructors",
            "Thread Methods",
            "Thread Priorities",
          ],
        },
        {
          id: 1103,
          title: "Thread Synchronization",
          slug: "thread-synchronization",
          duration: 55,
          topics: [
            "Synchronization Concept",
            "synchronized Keyword",
            "synchronized Methods",
            "synchronized Blocks",
            "Static Synchronization",
            "Lock Interface",
            "ReentrantLock",
          ],
        },
        {
          id: 1104,
          title: "Inter-thread Communication",
          slug: "inter-thread-communication",
          duration: 40,
          topics: [
            "wait() Method",
            "notify() Method",
            "notifyAll() Method",
            "Producer-Consumer Problem",
            "Thread Communication Examples",
            "Condition Variables",
          ],
        },
        {
          id: 1105,
          title: "Advanced Threading Concepts",
          slug: "advanced-threading",
          duration: 50,
          topics: [
            "Thread Pool",
            "Executor Framework",
            "CompletableFuture",
            "Deadlock Prevention",
            "Thread Safety",
            "Concurrent Collections",
          ],
        },
      ],
    },
    {
      id: 12,
      title: "Java Annotations",
      duration: "5 hours",
      lessons: [
        {
          id: 1201,
          title: "Introduction to Annotations",
          slug: "annotations-intro",
          duration: 35,
          topics: [
            "What are Annotations?",
            "Built-in Annotations",
            "Annotation Syntax",
            "Annotation Elements",
            "Annotation Usage",
          ],
        },
        {
          id: 1202,
          title: "Built-in Annotations",
          slug: "builtin-annotations",
          duration: 40,
          topics: [
            "@Override",
            "@Deprecated",
            "@SuppressWarnings",
            "@SafeVarargs",
            "@FunctionalInterface",
            "Meta-annotations",
          ],
        },
        {
          id: 1203,
          title: "Custom Annotations",
          slug: "custom-annotations",
          duration: 45,
          topics: [
            "Creating Custom Annotations",
            "Annotation Elements",
            "Default Values",
            "Annotation Retention",
            "Annotation Target",
            "Reflection with Annotations",
          ],
        },
        {
          id: 1204,
          title: "Annotation Processing",
          slug: "annotation-processing",
          duration: 40,
          topics: [
            "Annotation Processors",
            "Compile-time Processing",
            "Runtime Processing",
            "Reflection API",
            "Practical Examples",
          ],
        },
      ],
    },
    {
      id: 13,
      title: "Java New Features",
      duration: "8 hours",
      lessons: [
        {
          id: 1301,
          title: "Java 8 Features",
          slug: "java8-features",
          duration: 60,
          topics: [
            "Lambda Expressions",
            "Functional Interfaces",
            "Stream API",
            "Method References",
            "Optional Class",
            "Date and Time API",
          ],
        },
        {
          id: 1302,
          title: "Java 9-11 Features",
          slug: "java9-11-features",
          duration: 50,
          topics: [
            "Module System (Java 9)",
            "var Keyword (Java 10)",
            "String Methods (Java 11)",
            "HTTP Client API",
            "Collection Factory Methods",
            "Private Interface Methods",
          ],
        },
        {
          id: 1303,
          title: "Java 12-17 Features",
          slug: "java12-17-features",
          duration: 45,
          topics: [
            "Switch Expressions",
            "Text Blocks",
            "Pattern Matching",
            "Records",
            "Sealed Classes",
            "Enhanced instanceof",
          ],
        },
        {
          id: 1304,
          title: "Java 18+ Latest Features",
          slug: "java18-latest",
          duration: 35,
          topics: [
            "Pattern Matching for switch",
            "Virtual Threads",
            "Structured Concurrency",
            "Vector API",
            "Foreign Function & Memory API",
            "Future Roadmap",
          ],
        },
      ],
    },
    {
      id: 14,
      title: "Additional Topics",
      duration: "6 hours",
      lessons: [
        {
          id: 1401,
          title: "File I/O and NIO",
          slug: "file-io-nio",
          duration: 50,
          topics: [
            "File Class",
            "FileInputStream/FileOutputStream",
            "BufferedReader/BufferedWriter",
            "NIO Package",
            "Path and Files",
            "File Operations",
          ],
        },
        {
          id: 1402,
          title: "Generics in Java",
          slug: "generics",
          duration: 45,
          topics: [
            "Generic Classes",
            "Generic Methods",
            "Bounded Type Parameters",
            "Wildcards",
            "Type Erasure",
            "Generic Collections",
          ],
        },
        {
          id: 1403,
          title: "Enum in Java",
          slug: "enum",
          duration: 30,
          topics: [
            "Enum Declaration",
            "Enum Methods",
            "Enum with Fields and Methods",
            "EnumSet and EnumMap",
            "Enum Best Practices",
          ],
        },
        {
          id: 1404,
          title: "Regular Expressions",
          slug: "regex",
          duration: 35,
          topics: [
            "Pattern Class",
            "Matcher Class",
            "Regular Expression Syntax",
            "Common Patterns",
            "String Methods with Regex",
          ],
        },
        {
          id: 1405,
          title: "Java Best Practices",
          slug: "best-practices",
          duration: 40,
          topics: [
            "Code Style Guidelines",
            "Performance Optimization",
            "Memory Management",
            "Security Considerations",
            "Testing Strategies",
            "Documentation",
          ],
        },
      ],
    },
  ];

  return (
    <div className="pt-24">
      <SEO
        title="Java Complete Tutorial | Free Java Programming Course"
        description="Learn Java programming from basics to advanced with our comprehensive free tutorial. Covers OOP, collections, multithreading, and modern Java features with hands-on examples."
        keywords="Java Tutorial, Learn Java Programming, Java Course Free, Java OOP Tutorial, Java Collections, Java Multithreading, Java Stream API"
        canonical="/resources/java"
        structuredData={javaStructuredData}
      />

      {/* Page Header */}
      <section className="py-12 bg-gradient-to-r from-orange-600 to-red-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="text-6xl mb-4">☕</div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Java Complete Tutorial
          </h1>
          <p className="text-xl text-orange-100 max-w-3xl mx-auto">
            Master Java programming from basics to advanced concepts with
            hands-on examples, practical projects, and real-world applications.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            <span className="bg-white/20 text-white px-4 py-2 rounded-full text-sm">
              ⏱️ 100+ Hours Content
            </span>
            <span className="bg-white/20 text-white px-4 py-2 rounded-full text-sm">
              📚 14 Major Topics
            </span>
            <span className="bg-white/20 text-white px-4 py-2 rounded-full text-sm">
              📝 60+ Detailed Lessons
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
                    📚 Java Tutorial Topics
                  </h2>
                  <p className="text-sm text-gray-600 mt-1">
                    Click on any topic to explore
                  </p>
                </div>

                <div className="p-4">
                  {javaTopics.map((topic) => (
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
                            ? "bg-orange-100 text-orange-800 border-l-4 border-orange-500"
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
                                  ? "bg-orange-50 text-orange-700 border-l-2 border-orange-400"
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
                          Core Java Concepts
                        </h3>
                        <ul className="space-y-2 text-gray-600">
                          <li className="flex items-center">
                            <span className="text-green-500 mr-2">✓</span> Java
                            fundamentals and programming basics
                          </li>
                          <li className="flex items-center">
                            <span className="text-green-500 mr-2">✓</span>{" "}
                            Operators and control flow statements
                          </li>
                          <li className="flex items-center">
                            <span className="text-green-500 mr-2">✓</span>{" "}
                            Methods and object-oriented programming
                          </li>
                          <li className="flex items-center">
                            <span className="text-green-500 mr-2">✓</span>{" "}
                            Arrays, strings, and data manipulation
                          </li>
                          <li className="flex items-center">
                            <span className="text-green-500 mr-2">✓</span>{" "}
                            Exception handling and wrapper classes
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
                            Collections framework and generics
                          </li>
                          <li className="flex items-center">
                            <span className="text-green-500 mr-2">✓</span>{" "}
                            Multithreading and concurrency
                          </li>
                          <li className="flex items-center">
                            <span className="text-green-500 mr-2">✓</span>{" "}
                            Annotations and reflection
                          </li>
                          <li className="flex items-center">
                            <span className="text-green-500 mr-2">✓</span>{" "}
                            Modern Java features (Java 8-21)
                          </li>
                          <li className="flex items-center">
                            <span className="text-green-500 mr-2">✓</span> File
                            I/O, regex, and best practices
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
                        Welcome to our comprehensive Java tutorial! This course
                        is designed to take you from a complete beginner to an
                        advanced Java developer.
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
                          Start with <strong>Java Fundamentals</strong> if
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
                  <div className="bg-gradient-to-r from-orange-500 to-red-500 p-6 rounded-t-2xl">
                    <div className="flex items-center justify-between">
                      <div>
                        <h1 className="text-2xl font-bold text-white mb-2">
                          {selectedLesson.title}
                        </h1>
                        <p className="text-orange-100">
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
                            <span className="text-orange-500 mr-3">▶</span>
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

export default JavaTutorialPage;
