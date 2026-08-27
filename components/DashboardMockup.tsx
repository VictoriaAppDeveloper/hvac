import { CalendarClock, CheckCircle2, CircleDot, MapPin } from "lucide-react";

const SCHEDULE_ROWS = [
  { time: "8:00 AM", job: "AC Repair — J. Alvarez", tech: "Mike R.", color: "bg-blue-500" },
  { time: "10:30 AM", job: "Furnace Tune-Up — Coastal Cafe", tech: "Dana K.", color: "bg-emerald-500" },
  { time: "1:00 PM", job: "Install Quote — Ridge Apartments", tech: "Sam T.", color: "bg-amber-500" },
];

const DISPATCH_ROWS = [
  { tech: "Mike R.", job: "En route — 12 Oak St.", status: "En Route" },
  { tech: "Dana K.", job: "On site — Coastal Cafe", status: "On Site" },
  { tech: "Sam T.", job: "Job complete — Ridge Apts", status: "Done" },
];

function Chrome({ label }: { label: string }) {
  return (
    <div className="flex items-center gap-1.5 border-b border-slate-100 px-4 py-3">
      <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
      <span className="h-2.5 w-2.5 rounded-full bg-amber-400" />
      <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
      <span className="ml-3 text-xs font-medium text-slate-400">{label}</span>
    </div>
  );
}

export function ScheduleMockup() {
  return (
    <div className="w-full overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-xl shadow-slate-200/60">
      <Chrome label="Today's Schedule" />
      <div className="space-y-3 p-4 sm:p-5">
        {SCHEDULE_ROWS.map((row) => (
          <div key={row.job} className="flex items-center gap-3 rounded-xl bg-slate-50 p-3">
            <span className={`h-2.5 w-2.5 shrink-0 rounded-full ${row.color}`} />
            <CalendarClock className="hidden h-4 w-4 shrink-0 text-slate-400 sm:block" />
            <div className="min-w-0 flex-1">
              <p className="truncate text-sm font-medium text-slate-800">{row.job}</p>
              <p className="text-xs text-slate-500">{row.time} · {row.tech}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export function DispatchMockup() {
  return (
    <div className="w-full overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-xl shadow-slate-200/60">
      <Chrome label="Live Dispatch Board" />
      <div className="space-y-3 p-4 sm:p-5">
        {DISPATCH_ROWS.map((row) => (
          <div key={row.tech} className="flex items-center justify-between gap-3 rounded-xl bg-slate-50 p-3">
            <div className="flex min-w-0 items-center gap-3">
              <MapPin className="h-4 w-4 shrink-0 text-blue-500" />
              <div className="min-w-0">
                <p className="truncate text-sm font-medium text-slate-800">{row.tech}</p>
                <p className="truncate text-xs text-slate-500">{row.job}</p>
              </div>
            </div>
            <span className="flex shrink-0 items-center gap-1 rounded-full bg-white px-2.5 py-1 text-xs font-medium text-slate-600 ring-1 ring-slate-200">
              {row.status === "Done" ? (
                <CheckCircle2 className="h-3.5 w-3.5 text-emerald-500" />
              ) : (
                <CircleDot className="h-3.5 w-3.5 text-blue-500" />
              )}
              {row.status}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
