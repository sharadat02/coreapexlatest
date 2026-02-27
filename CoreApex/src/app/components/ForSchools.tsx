import { FileText, Clock, TrendingUp, Award, Users, BarChart3, GraduationCap, Target, Laptop, PenTool, MessageSquare, UserCheck } from "lucide-react";
import { BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import exampleImage from 'figma:asset/1f20be025d9d445df21466cc11ae8b7c2bb03779.png';
import { memo } from "react";

export const ForSchools = memo(function ForSchools() {
  return (
    <div id="for-schools" className="min-h-screen bg-gradient-to-br from-slate-100 via-slate-50 to-white py-16 sm:py-24 relative">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-8">
        {/* Header Section */}
        <div
          className="text-center max-w-3xl mx-auto mb-12 sm:mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-teal-50 border border-teal-200/60 mb-6">
            <span className="text-teal-700 text-sm font-medium">For Schools</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-6 leading-tight">
            Your Key Questions{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-cyan-600">
              Answered
            </span>
          </h2>
        </div>

        {/* Featured Q&A Section - Two Key Questions */}
        <div
          className="mb-24 sm:mb-32"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
            {/* Question 1: How Do You Prove 'Critical Thinking' to Parents? */}
            <div
              className="bg-gradient-to-br from-white via-teal-50/30 to-white rounded-2xl border-2 border-teal-200 p-8 shadow-xl hover:shadow-2xl transition-all hover:-translate-y-1"
            >
              <div className="flex items-start gap-4 mb-6">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-teal-500 to-teal-600 flex items-center justify-center flex-shrink-0 shadow-lg shadow-teal-500/30">
                  <MessageSquare className="w-7 h-7 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900 leading-tight">
                    How Do You Prove 'Critical Thinking' to Parents?
                  </h3>
                </div>
              </div>
              
              <p className="text-slate-700 leading-relaxed text-base sm:text-lg">
                Standard exams measure memory. CoreApex measures potential. Unlike 'once-a-year' competitive ranking exams, the <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-cyan-600">CORE Competency Arc™</span> delivers a continuous year-long journey: <strong>Baseline → Practice → Growth</strong>. Give parents the data to prove their child is building the reasoning skills mandated by NEP 2020— driving academic results today and competitive advantage tomorrow.
              </p>
            </div>

            {/* Question 2: Will this add to my teacher's workload? */}
            <div
              className="bg-gradient-to-br from-white via-teal-50/30 to-white rounded-2xl border-2 border-teal-200 p-8 shadow-xl hover:shadow-2xl transition-all hover:-translate-y-1"
            >
              <div className="flex items-start gap-4 mb-6">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-teal-500 to-cyan-600 flex items-center justify-center flex-shrink-0 shadow-lg shadow-teal-500/30">
                  <UserCheck className="w-7 h-7 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900 leading-tight">
                    Will This Add to My Teachers' Workload?
                  </h3>
                </div>
              </div>
              
              <p className="text-slate-700 leading-relaxed text-base sm:text-lg">
                <strong>Absolutely not.</strong>
                <br />
                We've designed a "Zero Friction" process where your teachers simply hand out sealed packets for a 60-minute session. We handle everything else—grading, processing, and reporting. <span className="text-teal-600 font-semibold">See the process below.</span>
              </p>
            </div>
          </div>
        </div>

        {/* Zero Friction Timeline */}
        <div
          className="mb-24 sm:mb-32"
        >
          <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 text-center mb-12 sm:mb-16">
            The "Zero Friction" Process
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 relative">
            {/* Connecting Line */}
            <div className="absolute top-20 left-0 right-0 h-1 bg-gradient-to-r from-teal-200 via-teal-300 to-teal-200 -z-10" 
                 style={{ width: 'calc(100% - 200px)', left: '100px' }} />

            {/* Step 1 */}
            <div
              className="relative"
            >
              <div className="bg-gradient-to-br from-white to-teal-50/50 rounded-2xl border border-slate-200 p-8 shadow-lg hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-teal-500 to-teal-600 flex items-center justify-center mb-6 shadow-lg shadow-teal-500/30">
                  <PenTool className="w-8 h-8 text-white" />
                </div>
                
                <div className="absolute -top-3 -left-3 w-12 h-12 rounded-full bg-teal-600 text-white flex items-center justify-center font-bold text-lg shadow-lg">
                  1
                </div>
                
                <h4 className="text-2xl font-bold text-slate-900 mb-3">
                  Host the Assessments
                </h4>
                <p className="text-slate-600 leading-relaxed">
                  Receive sealed, personalized packets that are clearly coded and systematically organized. Simply hand them out for a 60-minute session—<strong>zero setup or coordination required.</strong>
                </p>
              </div>
            </div>

            {/* Step 2 */}
            <div
              className="relative"
            >
              <div className="bg-gradient-to-br from-white to-teal-50/50 rounded-2xl border border-slate-200 p-8 shadow-lg hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-teal-500 to-teal-600 flex items-center justify-center mb-6 shadow-lg shadow-teal-500/30">
                  <Laptop className="w-8 h-8 text-white" />
                </div>
                
                <div className="absolute -top-3 -left-3 w-12 h-12 rounded-full bg-teal-600 text-white flex items-center justify-center font-bold text-lg shadow-lg">
                  2
                </div>
                
                <h4 className="text-2xl font-bold text-slate-900 mb-3">
                  We Handle the Grading
                </h4>
                <p className="text-slate-600 leading-relaxed">
                  We manage all scoring off-site. Reports and practice modules are delivered directly to parents and schools, <strong>significantly reducing the administrative burden on your faculty.</strong>
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div
              className="relative"
            >
              <div className="bg-gradient-to-br from-white to-teal-50/50 rounded-2xl border border-slate-200 p-8 shadow-lg hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-teal-500 to-teal-600 flex items-center justify-center mb-6 shadow-lg shadow-teal-500/30">
                  <BarChart3 className="w-8 h-8 text-white" />
                </div>
                
                <div className="absolute -top-3 -left-3 w-12 h-12 rounded-full bg-teal-600 text-white flex items-center justify-center font-bold text-lg shadow-lg">
                  3
                </div>
                
                <h4 className="text-2xl font-bold text-slate-900 mb-3">
                  Track School-Wide Growth
                </h4>
                <p className="text-slate-600 leading-relaxed">
                  Unlock the Master Dashboard to benchmark performance and track year-long growth—<strong>providing measurable evidence of progress from baseline to final evaluation.</strong>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Principal's Dashboard Preview */}
        <div
          className="mb-24 sm:mb-32"
        >
          <div className="text-center mb-8 sm:mb-12">
            <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4">
              The Principal's Dashboard
            </h3>
            <p className="text-lg sm:text-xl text-slate-600 max-w-3xl mx-auto mb-3">
              Track the full student journey: Powered by the{" "}
              <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-cyan-600">
                CORE Competency Arc™
              </span>
            </p>
          </div>

          {/* Multi-Panel Dashboard Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6">
            {/* Top Performers Panel */}
            <div
              className="col-span-1 bg-gradient-to-br from-white to-cyan-50/30 rounded-2xl border border-slate-200 p-6 shadow-lg hover:shadow-xl transition-shadow relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-500 to-blue-500" />
              
              {/* Outlier Detection Badge */}
              <div className="flex justify-end mb-2">
                <div className="px-3 py-1 rounded-full bg-cyan-500 text-white text-xs font-semibold shadow-lg">
                  Individual Excellence
                </div>
              </div>
              
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-cyan-100 flex items-center justify-center">
                    <Award className="w-4 h-4 text-cyan-600" />
                  </div>
                  <h4 className="font-bold text-slate-900">Top Performers</h4>
                </div>
                <span className="text-xs px-2 py-1 rounded-full bg-cyan-100 text-cyan-700 font-medium">
                  Grade 9
                </span>
              </div>

              <div className="space-y-3">
                {[
                  { name: "Aarav Sharma", score: 98 },
                  { name: "Diya Patel", score: 97 },
                  { name: "Rohan Mehta", score: 96 },
                  { name: "Niyathi Reddy", score: 95 },
                ].map((student, index) => (
                  <div key={index} className="flex items-center justify-between p-3 rounded-lg bg-white/60 border border-cyan-100/50 hover:border-cyan-200 transition-colors">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-gradient-to-br from-cyan-400 to-cyan-600 flex items-center justify-center text-white text-xs font-bold">
                        {index + 1}
                      </div>
                      <div>
                        <div className="font-medium text-slate-900 text-sm">{student.name}</div>
                      </div>
                    </div>
                    <div className="text-lg font-bold text-cyan-600">{student.score}%</div>
                  </div>
                ))}
              </div>

              <div className="mt-4 pt-4 border-t border-slate-200">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-slate-600">Total Students</span>
                  <span className="font-semibold text-slate-900">247</span>
                </div>
              </div>
            </div>

            {/* Performance Trends Chart */}
            <div
              className="col-span-2 bg-gradient-to-br from-white to-teal-50/30 rounded-2xl border border-slate-200 p-6 shadow-lg hover:shadow-xl transition-shadow relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-teal-500 to-cyan-500" />
              
              {/* Cohort Growth Badge */}
              <div className="flex justify-end mb-2">
                <div className="px-3 py-1 rounded-full bg-teal-500 text-white text-xs font-semibold shadow-lg">
                  Collective Progress
                </div>
              </div>
              
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-teal-100 flex items-center justify-center">
                    <TrendingUp className="w-4 h-4 text-teal-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900">Year-Long Growth Trajectory</h4>
                    <p className="text-xs text-slate-500">Baseline Assessment → Practice Worksheets → Final Assessment</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-2xl font-bold text-teal-600">+24pts</span>
                  <div className="text-xs px-2 py-1 rounded-full bg-green-100 text-green-700 font-medium">
                    Average 35% Growth
                  </div>
                </div>
              </div>

              {/* Legend */}
              <div className="flex items-center justify-center gap-6 mb-4">
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 rounded bg-blue-500"></div>
                  <span className="text-xs font-medium text-slate-600">Baseline</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 rounded bg-cyan-400"></div>
                  <span className="text-xs font-medium text-slate-600">Final Assessment</span>
                </div>
              </div>

              <ResponsiveContainer width="100%" height={220}>
                <BarChart 
                  data={[
                    { grade: 'Grade 5', baseline: 55, final: 74 },
                    { grade: 'Grade 6', baseline: 58, final: 78 },
                    { grade: 'Grade 7', baseline: 62, final: 84 },
                    { grade: 'Grade 8', baseline: 65, final: 80 },
                    { grade: 'Grade 9', baseline: 68, final: 90 },
                  ]}
                  barGap={8}
                  barCategoryGap="20%"
                >
                  <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" vertical={false} />
                  <XAxis 
                    dataKey="grade" 
                    stroke="#64748b" 
                    fontSize={12}
                    tickLine={false}
                    axisLine={{ stroke: '#e2e8f0' }}
                  />
                  <YAxis 
                    stroke="#64748b" 
                    fontSize={12} 
                    domain={[0, 100]}
                    tickLine={false}
                    axisLine={{ stroke: '#e2e8f0' }}
                    label={{ value: 'SCORE (%)', angle: -90, position: 'insideLeft', style: { fontSize: 11, fill: '#64748b' } }}
                  />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: 'white', 
                      border: '1px solid #e2e8f0',
                      borderRadius: '8px',
                      fontSize: '12px'
                    }}
                    cursor={{ fill: 'rgba(6, 182, 212, 0.1)' }}
                  />
                  <Bar 
                    dataKey="baseline" 
                    fill="#3b82f6" 
                    radius={[6, 6, 0, 0]}
                    name="Baseline"
                  />
                  <Bar 
                    dataKey="final" 
                    fill="#22d3ee" 
                    radius={[6, 6, 0, 0]}
                    name="Final Assessment"
                  />
                </BarChart>
              </ResponsiveContainer>

              {/* Practice Period Indicator */}
              <div className="mt-4 flex items-center justify-center">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-teal-50 border border-teal-200">
                  <div className="w-2 h-2 rounded-full bg-teal-500 animate-pulse"></div>
                  <span className="text-xs font-medium text-teal-700">Personalized Practice Worksheets Active</span>
                </div>
              </div>

              {/* Growth Metrics */}
              <div className="mt-4 grid grid-cols-5 gap-2">
                <div className="text-center p-2 rounded-lg bg-blue-50/50 border border-blue-100">
                  <div className="text-xs text-slate-500 mb-1">Grade 5</div>
                  <div className="font-bold text-teal-600 text-sm">+19pts</div>
                </div>
                <div className="text-center p-2 rounded-lg bg-blue-50/50 border border-blue-100">
                  <div className="text-xs text-slate-500 mb-1">Grade 6</div>
                  <div className="font-bold text-teal-600 text-sm">+20pts</div>
                </div>
                <div className="text-center p-2 rounded-lg bg-blue-50/50 border border-blue-100">
                  <div className="text-xs text-slate-500 mb-1">Grade 7</div>
                  <div className="font-bold text-teal-600 text-sm">+22pts</div>
                </div>
                <div className="text-center p-2 rounded-lg bg-blue-50/50 border border-blue-100">
                  <div className="text-xs text-slate-500 mb-1">Grade 8</div>
                  <div className="font-bold text-teal-600 text-sm">+15pts</div>
                </div>
                <div className="text-center p-2 rounded-lg bg-blue-50/50 border border-blue-100">
                  <div className="text-xs text-slate-500 mb-1">Grade 9</div>
                  <div className="font-bold text-teal-600 text-sm">+22pts</div>
                </div>
              </div>
            </div>

            {/* Growth Insights */}
            <div
              className="col-span-1 bg-gradient-to-br from-white to-teal-50/30 rounded-2xl border border-slate-200 p-6 shadow-lg hover:shadow-xl transition-shadow relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-teal-500 to-cyan-500" />
              
              <div className="flex items-center gap-2 mb-6">
                <div className="w-8 h-8 rounded-lg bg-teal-100 flex items-center justify-center">
                  <GraduationCap className="w-4 h-4 text-teal-600" />
                </div>
                <h4 className="font-bold text-slate-900">Growth Insights</h4>
              </div>

              <div className="space-y-4">
                <div className="p-4 rounded-xl bg-white/60 border border-teal-100/50">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-slate-600">Strong Improvers</span>
                    <TrendingUp className="w-4 h-4 text-teal-600" />
                  </div>
                  <div className="text-3xl font-bold text-slate-900">89</div>
                  <div className="text-xs text-slate-500 mt-1">25%+ growth from baseline</div>
                </div>

                <div className="p-4 rounded-xl bg-white/60 border border-teal-100/50">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-slate-600">Full Journey</span>
                    <Target className="w-4 h-4 text-teal-600" />
                  </div>
                  <div className="text-3xl font-bold text-slate-900">238</div>
                  <div className="text-xs text-slate-500 mt-1">Completed both assessments</div>
                </div>

                <div className="p-4 rounded-xl bg-white/60 border border-teal-100/50">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-slate-600">Consistent Growth</span>
                    <Users className="w-4 h-4 text-teal-600" />
                  </div>
                  <div className="text-3xl font-bold text-slate-900">178</div>
                  <div className="text-xs text-slate-500 mt-1">Students on positive trajectory</div>
                </div>
              </div>
            </div>

            {/* Competency Readiness Levels */}
            <div
              className="col-span-2 bg-gradient-to-br from-white to-cyan-50/30 rounded-2xl border border-slate-200 p-6 shadow-lg hover:shadow-xl transition-shadow relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-500 to-blue-500" />
              
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-cyan-100 flex items-center justify-center">
                    <TrendingUp className="w-4 h-4 text-cyan-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900">Your Child's Growth Journey</h4>
                    <p className="text-xs text-slate-500">Individual competency growth — what parents receive</p>
                  </div>
                </div>
              </div>

              {/* Line Chart */}
              <ResponsiveContainer width="100%" height={260}>
                <LineChart 
                  data={[
                    { period: 'Sep 2024', criticalThinking: 48, problemSolving: 55, reasoning: 58 },
                    { period: 'Apr 2025', criticalThinking: 62, problemSolving: 64, reasoning: 70 },
                    { period: 'Sep 2025', criticalThinking: 74, problemSolving: 69, reasoning: 75 },
                    { period: 'Feb 2026', criticalThinking: 83, problemSolving: 85, reasoning: 82 },
                  ]}
                  margin={{ top: 10, right: 10, left: 0, bottom: 10 }}
                >
                  <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                  <XAxis 
                    dataKey="period" 
                    stroke="#94a3b8" 
                    fontSize={12}
                    tickLine={false}
                    axisLine={{ stroke: '#e2e8f0' }}
                  />
                  <YAxis 
                    stroke="#94a3b8" 
                    fontSize={12} 
                    domain={[0, 100]}
                    tickLine={false}
                    axisLine={{ stroke: '#e2e8f0' }}
                  />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: 'white', 
                      border: '1px solid #e2e8f0',
                      borderRadius: '8px',
                      fontSize: '12px'
                    }}
                  />
                  <Line 
                    type="monotone" 
                    dataKey="criticalThinking" 
                    stroke="#3b82f6" 
                    strokeWidth={3}
                    dot={{ fill: '#3b82f6', r: 5 }}
                    activeDot={{ r: 7 }}
                    name="Critical Thinking"
                  />
                  <Line 
                    type="monotone" 
                    dataKey="problemSolving" 
                    stroke="#a855f7" 
                    strokeWidth={3}
                    dot={{ fill: '#a855f7', r: 5 }}
                    activeDot={{ r: 7 }}
                    name="Problem Solving"
                  />
                  <Line 
                    type="monotone" 
                    dataKey="reasoning" 
                    stroke="#ec4899" 
                    strokeWidth={3}
                    dot={{ fill: '#ec4899', r: 5 }}
                    activeDot={{ r: 7 }}
                    name="Reasoning Skills"
                  />
                </LineChart>
              </ResponsiveContainer>

              {/* Legend */}
              <div className="flex items-center justify-center gap-6 mt-4">
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 rounded-full bg-blue-500"></div>
                  <span className="text-xs font-medium text-slate-600">Critical Thinking</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 rounded-full bg-purple-500"></div>
                  <span className="text-xs font-medium text-slate-600">Problem Solving</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 rounded-full bg-pink-500"></div>
                  <span className="text-xs font-medium text-slate-600">Reasoning Skills</span>
                </div>
              </div>

              {/* Key Insight */}
              <div className="mt-4 p-4 rounded-lg bg-cyan-50/60 border border-cyan-200">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-cyan-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <TrendingUp className="w-3 h-3 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-slate-900 text-sm mb-1">Parents See Clear Growth</div>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Each family receives a personalized progress report showing how their child improved across critical thinking, problem solving, and reasoning from baseline through practice to final assessment.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Testimonial Section */}
        <div
          className="max-w-4xl mx-auto"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Testimonial 1 - Alignment */}
            <div className="bg-gradient-to-br from-slate-50 to-teal-50/30 rounded-2xl border border-slate-200 p-8 relative overflow-hidden shadow-xl">
              {/* Quote Mark */}
              <div className="absolute top-4 left-4 text-teal-200 opacity-50 text-6xl font-serif leading-none">
                "
              </div>
              
              <div className="relative z-10">
                <p className="text-lg text-slate-800 italic leading-relaxed mb-6 font-medium">
                  Aligned to the 5+3+3+4 Pedagogical Structure and UN SDG 4 Standards.
                </p>
                
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-teal-500 to-teal-600 flex items-center justify-center">
                    <span className="text-white text-xl font-bold">C</span>
                  </div>
                  <div>
                    <div className="font-semibold text-slate-900">CORE Assessment Team</div>
                    <div className="text-slate-600 text-sm">Methodology Validation</div>
                  </div>
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute bottom-0 right-0 w-48 h-48 bg-teal-200/30 rounded-full blur-3xl -z-0" />
            </div>

            {/* Testimonial 2 - Principal Quote */}
            <div className="bg-gradient-to-br from-slate-50 to-cyan-50/30 rounded-2xl border border-slate-200 p-8 relative overflow-hidden shadow-xl">
              {/* Quote Mark */}
              <div className="absolute top-4 left-4 text-cyan-200 opacity-50 text-6xl font-serif leading-none">
                "
              </div>
              
              <div className="relative z-10">
                <p className="text-lg text-slate-800 italic leading-relaxed mb-6 font-medium">
                  This is designed as a long-term cognitive skills program rather than short-term test preparation.
                </p>
                
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-cyan-500 to-cyan-600 flex items-center justify-center">
                    <GraduationCap className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-slate-900">School Principal</div>
                    <div className="text-slate-600 text-sm">Early Adopter Feedback</div>
                  </div>
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute bottom-0 right-0 w-48 h-48 bg-cyan-200/30 rounded-full blur-3xl -z-0" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});