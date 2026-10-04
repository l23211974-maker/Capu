import './App.css';

const dashboardSections = [
  { title: 'Classes', description: 'Track current classes and weekly schedules.' },
  { title: 'Tasks', description: 'Manage assignments, priorities, and due dates.' },
  { title: 'Calendar', description: 'View daily, weekly, and monthly academic events.' },
  { title: 'Exams', description: 'Prepare for upcoming exams and milestones.' },
  { title: 'Notifications', description: 'Review reminders and pending alerts.' }
];

function App() {
  return (
    <div className="app-shell">
      <header className="app-header">
        <h1>CAPU</h1>
        <p>Organize your classes. Remember your tasks. Stay ahead.</p>
      </header>

      <main>
        <section aria-labelledby="dashboard-title" className="panel">
          <h2 id="dashboard-title">Dashboard</h2>
          <p>
            This foundation release focuses on architecture and scaffolding. Feature modules below are placeholders for upcoming iterations.
          </p>
        </section>

        <section aria-label="Product module placeholders" className="module-grid">
          {dashboardSections.map((section) => (
            <article key={section.title} className="panel">
              <h3>{section.title}</h3>
              <p>{section.description}</p>
            </article>
          ))}
        </section>
      </main>
    </div>
  );
}

export default App;
