export default function WarrantyReminderDashboard() {
  const stats = [
    { label: 'Messages Sent', value: '12,482' },
    { label: 'Active Customers', value: '3,204' },
    { label: 'Appointments Booked', value: '418' },
    { label: 'Monthly Revenue', value: '$12,940' },
  ];

  const reminders = [
    {
      customer: 'John Smith',
      service: 'HVAC Maintenance',
      due: 'May 18, 2026',
      status: 'Scheduled',
    },
    {
      customer: 'Sarah Martinez',
      service: 'Roof Inspection',
      due: 'May 19, 2026',
      status: 'Sent',
    },
    {
      customer: 'David Johnson',
      service: 'Water Softener Service',
      due: 'May 20, 2026',
      status: 'Pending Reply',
    },
  ];

  const automationSteps = [
    'Warranty expires in 30 days',
    'Send automated SMS reminder',
    'Customer replies YES',
    'Create appointment lead',
    'Notify office staff',
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-white p-6">
      <div className="max-w-7xl mx-auto space-y-6">
        <header className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <h1 className="text-4xl font-bold tracking-tight">
              WarrantyFlow AI
            </h1>
            <p className="text-slate-400 mt-2 text-lg">
              Automated warranty reminders & SMS follow-up platform
            </p>
          </div>

          <div className="flex gap-3">
            <button className="px-5 py-3 rounded-2xl bg-blue-600 hover:bg-blue-500 transition font-semibold shadow-lg">
              Send Campaign
            </button>
            <button className="px-5 py-3 rounded-2xl border border-slate-700 hover:bg-slate-800 transition font-semibold">
              Add Customer
            </button>
          </div>
        </header>

        <section className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="bg-slate-900 border border-slate-800 rounded-3xl p-6 shadow-xl"
            >
              <p className="text-slate-400 text-sm">{stat.label}</p>
              <h2 className="text-3xl font-bold mt-3">{stat.value}</h2>
            </div>
          ))}
        </section>

        <section className="grid grid-cols-1 xl:grid-cols-3 gap-6">
          <div className="xl:col-span-2 bg-slate-900 border border-slate-800 rounded-3xl p-6 shadow-xl">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h2 className="text-2xl font-semibold">Upcoming Reminders</h2>
                <p className="text-slate-400 mt-1">
                  Automated maintenance & warranty reminders
                </p>
              </div>

              <input
                placeholder="Search customers..."
                className="bg-slate-800 border border-slate-700 rounded-xl px-4 py-2 text-sm outline-none"
              />
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="text-slate-400 border-b border-slate-800">
                    <th className="pb-4">Customer</th>
                    <th className="pb-4">Service</th>
                    <th className="pb-4">Due Date</th>
                    <th className="pb-4">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {reminders.map((item) => (
                    <tr
                      key={item.customer}
                      className="border-b border-slate-800 hover:bg-slate-800/40 transition"
                    >
                      <td className="py-5 font-medium">{item.customer}</td>
                      <td>{item.service}</td>
                      <td>{item.due}</td>
                      <td>
                        <span className="px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 text-sm">
                          {item.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 shadow-xl">
              <h2 className="text-2xl font-semibold mb-5">
                SMS Automation Flow
              </h2>

              <div className="space-y-4">
                {automationSteps.map((step, index) => (
                  <div
                    key={step}
                    className="flex items-center gap-4 bg-slate-800/50 rounded-2xl p-4"
                  >
                    <div className="w-9 h-9 rounded-full bg-blue-600 flex items-center justify-center font-bold">
                      {index + 1}
                    </div>
                    <p className="text-sm text-slate-200">{step}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-600 to-cyan-500 rounded-3xl p-6 shadow-2xl">
              <h2 className="text-2xl font-bold mb-3">
                AI Follow-Up Assistant
              </h2>

              <p className="text-sm text-white/90 leading-relaxed mb-5">
                AI automatically follows up with customers that do not respond,
                suggests appointment times, and requests Google reviews after
                service completion.
              </p>

              <div className="bg-white/10 rounded-2xl p-4 text-sm backdrop-blur-sm">
                “Hi Sarah — your roof warranty inspection is due next week.
                Reply YES to schedule your free inspection.”
              </div>
            </div>
          </div>
        </section>

        <section className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 shadow-xl">
            <h2 className="text-2xl font-semibold mb-5">Recent Conversations</h2>

            <div className="space-y-4">
              <div className="bg-slate-800 rounded-2xl p-4">
                <p className="text-sm text-slate-400">Customer</p>
                <p className="mt-1">YES please schedule for Friday morning.</p>
              </div>

              <div className="bg-blue-600 rounded-2xl p-4 ml-12">
                <p className="text-sm text-blue-100">AI Assistant</p>
                <p className="mt-1">
                  Great! We have availability at 9:00 AM Friday.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 shadow-xl">
            <h2 className="text-2xl font-semibold mb-5">Subscription Plans</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[
                {
                  name: 'Starter',
                  price: '$99',
                  texts: '1,000 texts',
                },
                {
                  name: 'Pro',
                  price: '$249',
                  texts: '5,000 texts',
                },
                {
                  name: 'Agency',
                  price: '$999',
                  texts: 'Unlimited clients',
                },
              ].map((plan) => (
                <div
                  key={plan.name}
                  className="border border-slate-700 rounded-2xl p-4 bg-slate-800/40"
                >
                  <p className="text-lg font-semibold">{plan.name}</p>
                  <h3 className="text-3xl font-bold mt-2">{plan.price}</h3>
                  <p className="text-slate-400 mt-2 text-sm">{plan.texts}</p>

                  <button className="w-full mt-5 bg-white text-slate-900 font-semibold py-2 rounded-xl hover:opacity-90 transition">
                    Select Plan
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
