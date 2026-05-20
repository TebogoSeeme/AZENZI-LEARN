import React, { useState } from 'react';

export default function AzenziLearn() {
  const [activeTab, setActiveTab] = useState('home');
  const [selectedGrade, setSelectedGrade] = useState('Grade 10');
  const [chatInput, setChatInput] = useState('');
  const [messages, setMessages] = useState([
    {
      role: 'ai',
      text: 'Hi 👋 I am your Azenzi AI Tutor. Ask me anything about your school work.'
    }
  ]);

  const grades = [
    'Grade R','Grade 1','Grade 2','Grade 3','Grade 4','Grade 5',
    'Grade 6','Grade 7','Grade 8','Grade 9','Grade 10','Grade 11','Grade 12'
  ];

  const lessons = [
    {
      title: 'Algebra Basics',
      subject: 'Mathematics',
      progress: 75,
      duration: '45 mins',
      icon: '📘'
    },
    {
      title: 'Photosynthesis',
      subject: 'Life Sciences',
      progress: 52,
      duration: '30 mins',
      icon: '🌱'
    },
    {
      title: 'Essay Writing',
      subject: 'English',
      progress: 90,
      duration: '1 hour',
      icon: '📖'
    },
  ];

  const achievements = [
    '🔥 14 Day Learning Streak',
    '🏆 Mathematics Master',
    '⭐ Top 10 Leaderboard',
    '📚 100 Lessons Completed'
  ];

  return (
    <div className="min-h-screen bg-slate-100 text-slate-800 flex flex-col lg:flex-row">
      {/* Sidebar */}
      <aside className="w-full lg:w-72 bg-slate-900 text-white p-6 flex flex-col gap-6 shadow-2xl">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Azenzi Learn</h1>
          <p className="text-slate-400 mt-2 text-sm">
            Learn • Pass • Progress
          </p>
        </div>

        <div className="bg-gradient-to-r from-blue-600 to-cyan-500 rounded-3xl p-5 shadow-xl">
          <div className="text-sm text-blue-100">Current Grade</div>
          <div className="text-2xl font-bold mt-1">{selectedGrade}</div>

          <div className="mt-4 bg-white/20 rounded-full h-3 overflow-hidden">
            <div className="bg-white h-3 rounded-full w-[72%]" />
          </div>

          <div className="text-sm mt-2 text-blue-100">
            Academic Progress 72%
          </div>
        </div>

        <nav className="flex flex-col gap-3">
          {[
            ['home', '🏠 Home'],
            ['subjects', '📚 Subjects'],
            ['quizzes', '📝 Quizzes'],
            ['progress', '📈 Progress'],
            ['ai', '🤖 AI Tutor'],
            ['community', '🌍 Community'],
          ].map(([key, label]) => (
            <button
              key={key}
              onClick={() => setActiveTab(key)}
              className={`text-left px-5 py-4 rounded-2xl transition font-medium ${
                activeTab === key
                  ? 'bg-blue-600 shadow-lg'
                  : 'bg-white/5 hover:bg-white/10'
              }`}
            >
              {label}
            </button>
          ))}
        </nav>

        <div className="mt-auto bg-white/5 rounded-3xl p-5 border border-white/10">
          <div className="text-lg font-semibold mb-2">NGO Access</div>
          <p className="text-sm text-slate-400 mb-4">
            Free educational support for underserved communities.
          </p>

          <button className="w-full bg-green-500 hover:bg-green-600 transition py-3 rounded-2xl font-semibold">
            Apply for Access
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto">
        {/* Top Header */}
        <div className="bg-white shadow-sm px-8 py-6 flex flex-col lg:flex-row lg:items-center justify-between gap-5 sticky top-0 z-10">
          <div>
            <h2 className="text-3xl font-bold">Welcome Back, Tebogo 👋</h2>
            <p className="text-slate-500 mt-1">
              Continue building your future through education.
            </p>
          </div>

          <div className="flex gap-4 flex-wrap">
            <button className="bg-indigo-600 text-white px-5 py-3 rounded-2xl shadow hover:bg-indigo-700 transition">
              Parent Portal
            </button>

            <button className="bg-slate-900 text-white px-5 py-3 rounded-2xl shadow hover:bg-black transition">
              Teacher Dashboard
            </button>
          </div>
        </div>

        {/* Hero Stats */}
        <section className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 p-8">
          {[
            ['XP Points', '2,540', '⭐'],
            ['Daily Streak', '14 Days', '🔥'],
            ['Completed Lessons', '126', '📘'],
            ['Leaderboard Rank', '#8', '🏆'],
          ].map(([title, value, icon]) => (
            <div
              key={title}
              className="bg-white rounded-3xl p-6 shadow-lg hover:-translate-y-1 transition"
            >
              <div className="flex items-center justify-between mb-5">
                <div className="text-slate-500 text-sm">{title}</div>
                <div className="text-3xl">{icon}</div>
              </div>

              <div className="text-3xl font-bold">{value}</div>
            </div>
          ))}
        </section>

        {/* Lessons Section */}
        <section className="px-8 pb-10">
          <div className="flex items-center justify-between mb-6 flex-wrap gap-4">
            <div>
              <h3 className="text-3xl font-bold">Continue Learning</h3>
              <p className="text-slate-500 mt-1">
                CAPS aligned lessons and activities.
              </p>
            </div>

            <select
              value={selectedGrade}
              onChange={(e) => setSelectedGrade(e.target.value)}
              className="bg-white border border-slate-200 px-5 py-3 rounded-2xl shadow-sm"
            >
              {grades.map((grade) => (
                <option key={grade}>{grade}</option>
              ))}
            </select>
          </div>

          <div className="grid lg:grid-cols-3 gap-6">
            {lessons.map((lesson) => (
              <div
                key={lesson.title}
                className="bg-white rounded-3xl p-6 shadow-lg hover:shadow-2xl transition"
              >
                <div className="flex items-center justify-between mb-6">
                  <div className="w-16 h-16 rounded-2xl bg-slate-100 flex items-center justify-center text-3xl">
                    {lesson.icon}
                  </div>

                  <span className="text-sm bg-blue-100 text-blue-700 px-3 py-2 rounded-xl font-medium">
                    {lesson.duration}
                  </span>
                </div>

                <div className="text-xl font-bold mb-2">{lesson.title}</div>
                <div className="text-slate-500 mb-5">{lesson.subject}</div>

                <div className="w-full bg-slate-200 rounded-full h-3 overflow-hidden mb-2">
                  <div
                    className="bg-gradient-to-r from-blue-500 to-cyan-400 h-3 rounded-full"
                    style={{ width: `${lesson.progress}%` }}
                  />
                </div>

                <div className="text-sm text-slate-500 mb-5">
                  {lesson.progress}% completed
                </div>

                <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-2xl font-semibold transition">
                  Continue Lesson
                </button>
              </div>
            ))}
          </div>
        </section>

        {/* AI Tutor */}
        <section className="px-8 pb-10">
          <div className="bg-gradient-to-r from-indigo-700 to-cyan-500 rounded-[32px] p-8 text-white shadow-2xl">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <div className="inline-flex bg-white/20 px-4 py-2 rounded-full text-sm mb-5">
                  🤖 AI Homework Assistant
                </div>

                <h3 className="text-4xl font-bold mb-5 leading-tight">
                  Get Instant Help With School Work
                </h3>

                <p className="text-blue-100 leading-relaxed mb-6">
                  Ask questions, solve equations, summarize lessons and prepare
                  for exams with the built-in Azenzi AI Tutor.
                </p>

                <div className="flex gap-4 flex-wrap">
                  <button
                    onClick={() => {
                      if (!chatInput) return;

                      setMessages([
                        ...messages,
                        { role: 'user', text: chatInput },
                        {
                          role: 'ai',
                          text:
                            'Great question! This is where the AI tutor would provide learner-friendly explanations, examples and CAPS aligned guidance.'
                        }
                      ]);

                      setChatInput('');
                    }}
                    className="bg-white text-indigo-700 px-6 py-3 rounded-2xl font-bold shadow-lg hover:scale-105 transition"
                  >
                    Ask AI Tutor
                  </button>

                  <button className="border border-white/40 px-6 py-3 rounded-2xl hover:bg-white/10 transition">
                    Practice Questions
                  </button>
                </div>
              </div>

              <div className="bg-white text-slate-800 rounded-3xl p-6 shadow-2xl flex flex-col h-full">
                <div className="text-lg font-semibold mb-4">
                  AI Tutor Chat
                </div>

                <div className="flex-1 space-y-4 max-h-[320px] overflow-y-auto mb-5">
                  {messages.map((message, index) => (
                    <div
                      key={index}
                      className={`rounded-2xl p-4 text-sm leading-relaxed ${
                        message.role === 'ai'
                          ? 'bg-blue-50 text-slate-700'
                          : 'bg-slate-100 text-slate-800 ml-10'
                      }`}
                    >
                      {message.text}
                    </div>
                  ))}
                </div>

                <div className="flex gap-3 mt-auto">
                  <input
                    value={chatInput}
                    onChange={(e) => setChatInput(e.target.value)}
                    placeholder="Ask a question..."
                    className="flex-1 border border-slate-200 rounded-2xl px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
                  />

                  <button
                    onClick={() => {
                      if (!chatInput) return;

                      setMessages([
                        ...messages,
                        { role: 'user', text: chatInput },
                        {
                          role: 'ai',
                          text:
                            'Great question! This is where the AI tutor would provide learner-friendly explanations, examples and CAPS aligned guidance.'
                        }
                      ]);

                      setChatInput('');
                    }}
                    className="bg-blue-600 hover:bg-blue-700 text-white px-5 rounded-2xl font-semibold transition"
                  >
                    Send
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Achievements */}
        <section className="px-8 pb-16">
          <div className="bg-white rounded-[32px] shadow-xl p-8">
            <div className="flex items-center justify-between mb-8 flex-wrap gap-4">
              <div>
                <h3 className="text-3xl font-bold">Achievements</h3>
                <p className="text-slate-500 mt-1">
                  Stay motivated and unlock rewards.
                </p>
              </div>

              <button className="bg-purple-600 text-white px-5 py-3 rounded-2xl hover:bg-purple-700 transition">
                View Leaderboard
              </button>
            </div>

            <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-5">
              {achievements.map((achievement) => (
                <div
                  key={achievement}
                  className="bg-slate-100 rounded-2xl p-5 font-semibold hover:bg-indigo-50 transition"
                >
                  {achievement}
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
