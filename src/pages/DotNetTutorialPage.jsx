import TutorialTemplate from "../components/TutorialTemplate";

const DotNetTutorialPage = () => {
  const dotnetStructuredData = {
    "@context": "https://schema.org",
    "@type": "Course",
    name: ".NET Complete Tutorial",
    description: "Master .NET development with C#, ASP.NET Core, Entity Framework, and modern .NET features",
    provider: {
      "@type": "EducationalOrganization",
      name: "Neuro Edge Technologies",
    },
    courseMode: "online",
    educationalLevel: "Beginner to Advanced",
    timeRequired: "P85H",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "INR",
      category: "Free",
    },
  };

  const dotnetTopics = [
    {
      id: 1,
      title: "C# Fundamentals",
      duration: "12 hours",
      lessons: [
        {
          id: 101,
          title: "Introduction to C#",
          slug: "intro-csharp",
          duration: 40,
          topics: ["C# Overview", "Variables and Data Types", "Operators", "Control Structures", "Methods"],
        },
        {
          id: 102,
          title: "Object-Oriented Programming",
          slug: "oop-csharp",
          duration: 50,
          topics: ["Classes and Objects", "Inheritance", "Polymorphism", "Encapsulation", "Interfaces"],
        },
      ],
    },
    {
      id: 2,
      title: ".NET Core Basics",
      duration: "10 hours",
      lessons: [
        {
          id: 201,
          title: ".NET Core Introduction",
          slug: "dotnet-core-intro",
          duration: 45,
          topics: [".NET Core Overview", "Project Structure", "Dependency Injection", "Configuration", "Logging"],
        },
        {
          id: 202,
          title: "ASP.NET Core MVC",
          slug: "aspnet-mvc",
          duration: 60,
          topics: ["MVC Pattern", "Controllers", "Views", "Models", "Routing"],
        },
      ],
    },
    {
      id: 3,
      title: "Web API Development",
      duration: "15 hours",
      lessons: [
        {
          id: 301,
          title: "RESTful APIs",
          slug: "restful-apis",
          duration: 50,
          topics: ["REST Principles", "HTTP Methods", "Status Codes", "API Design", "Swagger"],
        },
        {
          id: 302,
          title: "Entity Framework Core",
          slug: "entity-framework",
          duration: 70,
          topics: ["Code First", "Database Context", "Migrations", "LINQ", "Relationships"],
        },
      ],
    },
    {
      id: 4,
      title: "Authentication & Security",
      duration: "12 hours",
      lessons: [
        {
          id: 401,
          title: "Identity Framework",
          slug: "identity-framework",
          duration: 60,
          topics: ["User Management", "Roles", "Claims", "JWT Tokens", "OAuth"],
        },
      ],
    },
    {
      id: 5,
      title: "Testing & Deployment",
      duration: "10 hours",
      lessons: [
        {
          id: 501,
          title: "Unit Testing",
          slug: "unit-testing",
          duration: 45,
          topics: ["xUnit", "Mocking", "Test Patterns", "Integration Testing", "Test Coverage"],
        },
        {
          id: 502,
          title: "Deployment & DevOps",
          slug: "deployment-devops",
          duration: 55,
          topics: ["Docker", "Azure Deployment", "CI/CD", "Monitoring", "Performance"],
        },
      ],
    },
  ];

  return (
    <TutorialTemplate
      title=".NET Complete Tutorial"
      description="Master .NET development with C#, ASP.NET Core, Entity Framework, Web APIs, and modern .NET features for building scalable applications."
      icon="🔷"
      gradientFrom="from-purple-600"
      gradientTo="to-indigo-600"
      accentColor="purple"
      topics={dotnetTopics}
      structuredData={dotnetStructuredData}
      canonical="/resources/dotnet"
      keywords=".NET Tutorial, Learn .NET, C# Programming, ASP.NET Core, Entity Framework, Web API, .NET Course Free"
      duration="85"
      lessonsCount="35"
      topicsCount="5"
    />
  );
};

export default DotNetTutorialPage;
