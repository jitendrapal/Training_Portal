import TutorialTemplate from "../components/TutorialTemplate";

const MobileTutorialPage = () => {
  const mobileStructuredData = {
    "@context": "https://schema.org",
    "@type": "Course",
    name: "Mobile Development Tutorial",
    description: "Learn Android and iOS development with native and cross-platform approaches including React Native and Flutter",
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

  const mobileTopics = [
    {
      id: 1,
      title: "Mobile Development Fundamentals",
      duration: "8 hours",
      lessons: [
        {
          id: 101,
          title: "Introduction to Mobile Development",
          slug: "intro-mobile-dev",
          duration: 40,
          topics: ["Mobile Platforms", "Native vs Cross-platform", "Development Tools", "App Store Guidelines", "Mobile UI/UX"],
        },
        {
          id: 102,
          title: "Mobile App Architecture",
          slug: "mobile-architecture",
          duration: 45,
          topics: ["MVC/MVP/MVVM", "App Lifecycle", "Memory Management", "Performance Considerations", "Security"],
        },
      ],
    },
    {
      id: 2,
      title: "Android Development",
      duration: "20 hours",
      lessons: [
        {
          id: 201,
          title: "Android Basics with Java",
          slug: "android-java",
          duration: 70,
          topics: ["Android Studio", "Activities", "Layouts", "Intents", "Fragments"],
        },
        {
          id: 202,
          title: "Android with Kotlin",
          slug: "android-kotlin",
          duration: 80,
          topics: ["Kotlin Basics", "Kotlin for Android", "Coroutines", "Data Binding", "View Binding"],
        },
        {
          id: 203,
          title: "Advanced Android",
          slug: "advanced-android",
          duration: 90,
          topics: ["Services", "Broadcast Receivers", "Content Providers", "SQLite", "Room Database"],
        },
      ],
    },
    {
      id: 3,
      title: "iOS Development",
      duration: "18 hours",
      lessons: [
        {
          id: 301,
          title: "iOS Basics with Swift",
          slug: "ios-swift",
          duration: 80,
          topics: ["Xcode", "Swift Language", "View Controllers", "Storyboards", "Auto Layout"],
        },
        {
          id: 302,
          title: "Advanced iOS",
          slug: "advanced-ios",
          duration: 70,
          topics: ["Core Data", "Networking", "Push Notifications", "App Store Connect", "TestFlight"],
        },
      ],
    },
    {
      id: 4,
      title: "React Native",
      duration: "15 hours",
      lessons: [
        {
          id: 401,
          title: "React Native Fundamentals",
          slug: "react-native-basics",
          duration: 60,
          topics: ["Setup and Installation", "Components", "Navigation", "State Management", "Styling"],
        },
        {
          id: 402,
          title: "React Native Advanced",
          slug: "react-native-advanced",
          duration: 70,
          topics: ["Native Modules", "Performance", "Testing", "Deployment", "Platform-specific Code"],
        },
      ],
    },
    {
      id: 5,
      title: "Flutter Development",
      duration: "16 hours",
      lessons: [
        {
          id: 501,
          title: "Flutter Basics",
          slug: "flutter-basics",
          duration: 65,
          topics: ["Dart Language", "Widgets", "Layouts", "State Management", "Navigation"],
        },
        {
          id: 502,
          title: "Advanced Flutter",
          slug: "advanced-flutter",
          duration: 75,
          topics: ["Animations", "Custom Widgets", "Platform Channels", "Testing", "Deployment"],
        },
      ],
    },
    {
      id: 6,
      title: "Mobile Backend & APIs",
      duration: "10 hours",
      lessons: [
        {
          id: 601,
          title: "API Integration",
          slug: "api-integration",
          duration: 50,
          topics: ["REST APIs", "HTTP Requests", "JSON Parsing", "Authentication", "Error Handling"],
        },
        {
          id: 602,
          title: "Backend Services",
          slug: "backend-services",
          duration: 55,
          topics: ["Firebase", "AWS Amplify", "Push Notifications", "Analytics", "Crash Reporting"],
        },
      ],
    },
    {
      id: 7,
      title: "App Store Deployment",
      duration: "6 hours",
      lessons: [
        {
          id: 701,
          title: "Publishing Apps",
          slug: "publishing-apps",
          duration: 60,
          topics: ["Google Play Store", "Apple App Store", "App Signing", "Store Optimization", "App Updates"],
        },
      ],
    },
  ];

  return (
    <TutorialTemplate
      title="Mobile Development Tutorial"
      description="Learn Android and iOS development with native and cross-platform approaches including React Native, Flutter, and modern mobile development practices."
      icon="📱"
      gradientFrom="from-pink-600"
      gradientTo="to-rose-600"
      accentColor="pink"
      topics={mobileTopics}
      structuredData={mobileStructuredData}
      canonical="/resources/mobile"
      keywords="Mobile Development Tutorial, Android Development, iOS Development, React Native, Flutter, Mobile App Development, Mobile Programming Course Free"
      duration="85"
      lessonsCount="42"
      topicsCount="7"
    />
  );
};

export default MobileTutorialPage;
