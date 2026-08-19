// src/sections/ProductDemo.tsx
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  LayoutDashboard, FolderOpen, BarChart2,
  CheckCircle2, Circle, Clock, AlertCircle,
  Brain, TrendingUp, Zap, ChevronRight
} from 'lucide-react';
import { ScrollReveal } from '../components/ui/ScrollReveal';
import { SectionHeading } from '../components/ui/SectionHeading';

type TabId = 'today' | 'projects' | 'insights';

interface Task {
  id: number;
  label: string;
  priority: 'high' | 'medium' | 'low';
  project: string;
  done: boolean;
}

const initialTasks: Task[] = [
  { id: 1, label: 'Finalize homepage design', priority: 'high', project: 'Website Redesign', done: false },
  { id: 2, label: 'Review API integration docs', priority: 'high', project: 'Backend API', done: false },
  { id: 3, label: 'Prepare launch checklist', priority: 'medium', project: 'Launch Prep', done: false },
  { id: 4, label: 'Update project timeline', priority: 'medium', project: 'Website Redesign', done: false },
  { id: 5, label: 'Write onboarding copy', priority: 'low', project: 'Launch Prep', done: false },
];

const projects = [
  { name: 'Website Redesign', progress: 78, tasks: 12, status: 'on-track', color: '#7C5CFC' },
  { name: 'Backend API', progress: 45, tasks: 8, status: 'at-risk', color: '#f59e0b' },
  { name: 'Launch Prep', progress: 30, tasks: 15, status: 'on-track', color: '#34D399' },
  { name: 'Design System', progress: 92, tasks: 6, status: 'on-track', color: '#60a5fa' },
];

const priorityColors = {
  high: 'text-red-400 bg-red-400/10 border-red-400/20',
  medium: 'text-amber-400 bg-amber-400/10 border-amber-400/20',
  low: 'text-fp-subtle bg-white/5 border-fp-border',
};

const tabs = [
  { id: 'today' as TabId, label: 'Today', icon: LayoutDashboard },
  { id: 'projects' as TabId, label: 'Projects', icon: FolderOpen },
  { id: 'insights' as TabId, label: 'Insights', icon: BarChart2 },
];

function TodayView() {
  const [tasks, setTasks] = useState<Task[]>(initialTasks);

  const completedCount = tasks.filter(t => t.done).length;
  const totalCount = tasks.length;
  const progressPct = Math.round((completedCount / totalCount) * 100);

  const toggleTask = (id: number) => {
    setTasks(prev =>
      prev.map(t => t.id === id ? { ...t, done: !t.done } : t)
    );
  };

  return (
    <div className="space-y-5">
      {/* Progress summary */}
      <div className="bg-fp-bg/50 rounded-xl p-4 border border-fp-border flex items-center gap-4">
        <div className="flex-1">
          <div className="flex items-center justify-between mb-2">
            <span className="text-fp-muted text-sm">Daily progress</span>
            <span className="text-fp-text text-sm font-semibold">
              {completedCount} / {totalCount} tasks
            </span>
          </div>
          <div className="h-1.5 rounded-full bg-white/5 overflow-hidden">
            <motion.div
              className="h-full rounded-full"
              style={{ background: 'linear-gradient(90deg, #7C5CFC, #A78BFA)' }}
              animate={{ width: `${progressPct}%` }}
              transition={{ duration: 0.4, ease: 'easeOut' }}
            />
          </div>
        </div>
        <div className="text-fp-accent font-display font-bold text-2xl w-14 text-right">
          {progressPct}%
        </div>
      </div>

      {/* AI suggestion */}
      <div className="border border-fp-accent/20 bg-fp-accent/5 rounded-xl p-3.5 flex items-start gap-3">
        <Brain size={15} className="text-fp-accent-soft mt-0.5 flex-shrink-0" />
        <p className="text-fp-muted text-xs leading-relaxed">
          <span className="text-fp-accent-soft font-medium">FlowPilot suggests: </span>
          Start with the homepage design — it has the highest impact and unblocks two other tasks.
        </p>
      </div>

      {/* Task list */}
      <div className="space-y-1.5">
        <p className="text-fp-subtle text-xs font-semibold uppercase tracking-widest mb-3">
          Your tasks
        </p>
        {tasks.map((task) => (
          <motion.div
            key={task.id}
            layout
            className={`
              flex items-center gap-3 p-3 rounded-xl border cursor-pointer
              transition-all duration-200 group
              ${task.done
                ? 'border-fp-border bg-transparent opacity-60'
                : 'border-fp-border bg-fp-bg/30 hover:border-fp-accent/30 hover:bg-fp-accent/5'
              }
            `}
            onClick={() => toggleTask(task.id)}
            role="checkbox"
            aria-checked={task.done}
            aria-label={`${task.done ? 'Unmark' : 'Complete'}: ${task.label}`}
            tabIndex={0}
            onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && toggleTask(task.id)}
          >
            {/* Checkbox */}
            <div className="flex-shrink-0">
              {task.done ? (
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: 'spring', stiffness: 500, damping: 25 }}
                >
                  <CheckCircle2 size={18} className="text-fp-success" />
                </motion.div>
              ) : (
                <Circle size={18} className="text-fp-subtle group-hover:text-fp-accent transition-colors" />
              )}
            </div>

            {/* Label */}
            <div className="flex-1 min-w-0">
              <p
                className={`text-sm truncate ${
                  task.done ? 'line-through text-fp-subtle' : 'text-fp-muted'
                }`}
              >
                {task.label}
              </p>
              <p className="text-fp-subtle text-xs mt-0.5">{task.project}</p>
            </div>

            {/* Priority badge */}
            <span
              className={`text-xs px-2 py-0.5 rounded-md border flex-shrink-0 capitalize ${priorityColors[task.priority]}`}
            >
              {task.priority}
            </span>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

function ProjectsView() {
  return (
    <div className="space-y-4">
      <p className="text-fp-subtle text-xs font-semibold uppercase tracking-widest mb-4">
        Active projects
      </p>
      {projects.map((project, i) => (
        <motion.div
          key={project.name}
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: i * 0.07 }}
          className="bg-fp-bg/40 rounded-xl p-4 border border-fp-border hover:border-fp-accent/20 transition-all duration-200 group cursor-default"
        >
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2.5">
              <div
                className="w-2.5 h-2.5 rounded-full flex-shrink-0"
                style={{ backgroundColor: project.color }}
              />
              <span className="text-fp-text text-sm font-medium">{project.name}</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-fp-subtle text-xs">{project.tasks} tasks</span>
              {project.status === 'at-risk' ? (
                <AlertCircle size={13} className="text-amber-400" />
              ) : (
                <TrendingUp size={13} className="text-fp-success" />
              )}
            </div>
          </div>
          {/* Progress */}
          <div className="space-y-1.5">
            <div className="h-1 rounded-full bg-white/5 overflow-hidden">
              <motion.div
                className="h-full rounded-full"
                style={{ backgroundColor: project.color }}
                initial={{ width: '0%' }}
                animate={{ width: `${project.progress}%` }}
                transition={{ duration: 0.8, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              />
            </div>
            <div className="flex items-center justify-between">
              <span
                className={`text-xs px-2 py-0.5 rounded-full ${
                  project.status === 'at-risk'
                    ? 'bg-amber-500/10 text-amber-400 border border-amber-500/20'
                    : 'bg-fp-success/10 text-fp-success border border-fp-success/20'
                }`}
              >
                {project.status === 'at-risk' ? 'At risk' : 'On track'}
              </span>
              <span className="text-fp-muted text-xs font-semibold">{project.progress}%</span>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}

function InsightsView() {
  const bars = [
    { day: 'Mon', tasks: 8, focused: 5 },
    { day: 'Tue', tasks: 12, focused: 9 },
    { day: 'Wed', tasks: 6, focused: 4 },
    { day: 'Thu', tasks: 15, focused: 11 },
    { day: 'Fri', tasks: 10, focused: 8 },
  ];
  const max = Math.max(...bars.map(b => b.tasks));

  return (
    <div className="space-y-5">
      {/* Stats row */}
      <div className="grid grid-cols-3 gap-3">
        {[
          { label: 'Avg. focus time', value: '4.2h', icon: Clock, color: 'text-fp-accent-soft' },
          { label: 'Tasks/day', value: '10.2', icon: Zap, color: 'text-fp-success' },
          { label: 'Week streak', value: '3 days', icon: TrendingUp, color: 'text-amber-400' },
        ].map((stat) => (
          <div key={stat.label} className="bg-fp-bg/50 rounded-xl p-3 border border-fp-border text-center">
            <stat.icon size={14} className={`${stat.color} mx-auto mb-1.5`} />
            <p className="text-fp-text font-bold text-sm">{stat.value}</p>
            <p className="text-fp-subtle text-xs mt-0.5">{stat.label}</p>
          </div>
        ))}
      </div>

      {/* Bar chart */}
      <div>
        <p className="text-fp-subtle text-xs font-semibold uppercase tracking-widest mb-4">
          This week
        </p>
        <div className="flex items-end gap-2 h-28">
          {bars.map((bar, i) => (
            <div key={bar.day} className="flex-1 flex flex-col items-center gap-1">
              <div className="w-full flex items-end gap-0.5 h-20 relative">
                {/* Total tasks */}
                <motion.div
                  className="flex-1 rounded-t-md"
                  style={{ background: 'rgba(124,92,252,0.2)' }}
                  initial={{ height: '0%' }}
                  animate={{ height: `${(bar.tasks / max) * 100}%` }}
                  transition={{ delay: i * 0.08, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                />
                {/* Focused tasks */}
                <motion.div
                  className="flex-1 rounded-t-md"
                  style={{ background: 'linear-gradient(180deg, #7C5CFC, #A78BFA)' }}
                  initial={{ height: '0%' }}
                  animate={{ height: `${(bar.focused / max) * 100}%` }}
                  transition={{ delay: i * 0.08 + 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                />
              </div>
              <span className="text-fp-subtle text-xs">{bar.day}</span>
            </div>
          ))}
        </div>
        <div className="flex items-center gap-4 mt-3">
          <div className="flex items-center gap-1.5">
            <div className="w-2.5 h-2.5 rounded-sm" style={{ background: 'rgba(124,92,252,0.2)' }} />
            <span className="text-fp-subtle text-xs">Total</span>
          </div>
          <div className="flex items-center gap-1.5">
            <div className="w-2.5 h-2.5 rounded-sm" style={{ background: 'linear-gradient(135deg, #7C5CFC, #A78BFA)' }} />
            <span className="text-fp-subtle text-xs">Focused</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export function ProductDemo() {
  const [activeTab, setActiveTab] = useState<TabId>('today');

  return (
    <section
      id="demo"
      aria-labelledby="demo-heading"
      className="relative py-20 md:py-28"
    >
      {/* Background accent */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{
          background: 'radial-gradient(ellipse 70% 50% at 50% 50%, rgba(124, 92, 252, 0.04) 0%, transparent 70%)',
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <SectionHeading
            eyebrow="Product demo"
            title="A clearer view of your entire week."
            description="Interact with the demo below. Click tabs to explore different views — task completion, project health, and insights."
          />
        </ScrollReveal>

        <ScrollReveal delay={0.2} className="mt-16">
          <div className="max-w-4xl mx-auto">
            {/* Main dashboard frame */}
            <div className="rounded-2xl border border-fp-border overflow-hidden shadow-card" style={{ background: '#0E1320' }}>
              {/* Window chrome */}
              <div className="flex items-center gap-1.5 px-5 py-3.5 border-b border-fp-border bg-fp-bg/40">
                <div className="w-3 h-3 rounded-full bg-red-500/60" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
                <div className="w-3 h-3 rounded-full bg-green-500/60" />
                <div className="ml-4 flex-1 text-fp-subtle text-xs font-medium">FlowPilot Workspace</div>
                <div className="text-xs text-fp-accent-soft font-medium flex items-center gap-1">
                  <div className="w-1.5 h-1.5 rounded-full bg-fp-success animate-pulse" />
                  Live
                </div>
              </div>

              <div className="flex min-h-[480px]">
                {/* Sidebar */}
                <div className="hidden sm:flex w-44 border-r border-fp-border bg-fp-bg/30 flex-col p-3 gap-1 shrink-0">
                  <p className="text-fp-subtle text-xs font-semibold px-3 py-1 mb-1 uppercase tracking-widest">Navigation</p>
                  {tabs.map((tab) => (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      aria-pressed={activeTab === tab.id}
                      className={`
                        flex items-center gap-2.5 px-3 py-2.5 rounded-lg text-sm font-medium text-left
                        transition-all duration-150 w-full cursor-pointer
                        focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-fp-accent
                        ${activeTab === tab.id
                          ? 'bg-fp-accent/15 text-fp-accent-soft border border-fp-accent/25'
                          : 'text-fp-subtle hover:text-fp-muted hover:bg-white/5'
                        }
                      `}
                    >
                      <tab.icon size={15} />
                      {tab.label}
                      {activeTab === tab.id && (
                        <ChevronRight size={12} className="ml-auto text-fp-accent" />
                      )}
                    </button>
                  ))}

                  {/* Sidebar bottom info */}
                  <div className="mt-auto pt-4 border-t border-fp-border px-1">
                    <div className="flex items-center gap-2 px-2 py-1.5">
                      <div className="w-6 h-6 rounded-full bg-fp-accent/30 border border-fp-accent/30 flex items-center justify-center text-xs font-bold text-fp-accent-soft">J</div>
                      <div>
                        <p className="text-fp-text text-xs font-medium leading-none">Jay</p>
                        <p className="text-fp-subtle text-xs">Pro plan</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Main content */}
                <div className="flex-1 p-5 overflow-hidden">
                  {/* Mobile tabs */}
                  <div className="flex sm:hidden gap-1 mb-5 bg-fp-bg/40 rounded-xl p-1 border border-fp-border">
                    {tabs.map((tab) => (
                      <button
                        key={tab.id}
                        onClick={() => setActiveTab(tab.id)}
                        aria-pressed={activeTab === tab.id}
                        className={`
                          flex-1 flex items-center justify-center gap-1.5 py-2 rounded-lg text-xs font-medium
                          transition-all duration-150 cursor-pointer
                          focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-fp-accent
                          ${activeTab === tab.id
                            ? 'bg-fp-accent text-white shadow-accent'
                            : 'text-fp-subtle hover:text-fp-muted'
                          }
                        `}
                      >
                        <tab.icon size={13} />
                        {tab.label}
                      </button>
                    ))}
                  </div>

                  {/* Tab content */}
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={activeTab}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.25, ease: 'easeOut' }}
                      className="demo-scroll overflow-y-auto h-full max-h-[400px] pr-1"
                    >
                      {activeTab === 'today' && <TodayView />}
                      {activeTab === 'projects' && <ProjectsView />}
                      {activeTab === 'insights' && <InsightsView />}
                    </motion.div>
                  </AnimatePresence>
                </div>
              </div>
            </div>

            {/* Demo label */}
            <p className="text-center text-fp-subtle text-xs mt-4">
              Interactive demo — try clicking tasks in the "Today" view to complete them
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
