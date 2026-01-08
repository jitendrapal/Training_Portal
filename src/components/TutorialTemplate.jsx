import { useState } from "react";
import SEO from "./SEO";

const TutorialTemplate = ({ 
  title, 
  description, 
  icon, 
  gradientFrom, 
  gradientTo, 
  accentColor,
  topics, 
  structuredData,
  canonical,
  keywords,
  duration,
  lessonsCount,
  topicsCount
}) => {
  const [selectedTopic, setSelectedTopic] = useState(null);
  const [selectedLesson, setSelectedLesson] = useState(null);

  return (
    <div className="pt-24">
      <SEO
        title={`${title} | Free Programming Tutorial`}
        description={description}
        keywords={keywords}
        canonical={canonical}
        structuredData={structuredData}
      />

      {/* Page Header */}
      <section className={`py-12 bg-gradient-to-r ${gradientFrom} ${gradientTo}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="text-6xl mb-4">{icon}</div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            {title}
          </h1>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            {description}
          </p>
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            <span className="bg-white/20 text-white px-4 py-2 rounded-full text-sm">
              ⏱️ {duration}+ Hours Content
            </span>
            <span className="bg-white/20 text-white px-4 py-2 rounded-full text-sm">
              📚 {topicsCount} Major Topics
            </span>
            <span className="bg-white/20 text-white px-4 py-2 rounded-full text-sm">
              📝 {lessonsCount}+ Detailed Lessons
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
                    📚 Tutorial Topics
                  </h2>
                  <p className="text-sm text-gray-600 mt-1">
                    Click on any topic to explore
                  </p>
                </div>

                <div className="p-4">
                  {topics.map((topic) => (
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
                            ? `bg-${accentColor}-100 text-${accentColor}-800 border-l-4 border-${accentColor}-500`
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
                                  ? `bg-${accentColor}-50 text-${accentColor}-700 border-l-2 border-${accentColor}-400`
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
                    <div className="text-center py-8">
                      <div className="text-6xl mb-4">{icon}</div>
                      <p className="text-gray-600 text-lg">
                        Comprehensive tutorial covering all aspects of {title.split(' ')[0]} development.
                        Click on topics in the sidebar to explore detailed lessons.
                      </p>
                    </div>
                  </div>
                </div>
              ) : (
                /* Selected Lesson Content */
                <div className="bg-white rounded-2xl shadow-lg">
                  {/* Lesson Header */}
                  <div className={`bg-gradient-to-r ${gradientFrom} ${gradientTo} p-6 rounded-t-2xl`}>
                    <div className="flex items-center justify-between">
                      <div>
                        <h1 className="text-2xl font-bold text-white mb-2">
                          {selectedLesson.title}
                        </h1>
                        <p className="text-white/80">
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
                            <span className={`text-${accentColor}-500 mr-3`}>▶</span>
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

export default TutorialTemplate;
