import { clsx } from "clsx";

interface Step {
  number?: number;
  title: string;
  description: string;
}

interface StepListProps {
  steps: Step[];
  orientation?: "vertical" | "horizontal";
}

/**
 * StepList — numbered step sequence.
 *
 * Usage in MDX:
 *   <StepList steps={[
 *     { title: "Describe your project", description: "Tell the planner what needs to be done." },
 *     { title: "Approve the plan", description: "Review the team composition and execution plan." },
 *     { title: "Watch it execute", description: "Agents work in parallel, you stay in control." },
 *   ]} />
 */
export function StepList({ steps, orientation = "vertical" }: StepListProps) {
  if (orientation === "horizontal") {
    return (
      <div className="grid gap-6 sm:grid-cols-3">
        {steps.map((step, i) => (
          <div key={i} className="relative text-center">
            <div className="mx-auto mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-[#6366f1]/[0.18] border border-[#6366f1]/45 text-sm font-bold text-[#818cf8]">
              {step.number ?? i + 1}
            </div>
            <h3 className="font-display text-[20px] font-semibold tracking-[-0.4px] text-[#fdfdff]">
              {step.title}
            </h3>
            <p className="mt-2 font-body text-[15px] leading-[1.65] text-[#b5b5c2]">
              {step.description}
            </p>
          </div>
        ))}
      </div>
    );
  }

  return (
    <ol className="space-y-6">
      {steps.map((step, i) => (
        <li key={i} className="flex gap-4">
          <div className="flex-shrink-0 mt-0.5 flex h-7 w-7 items-center justify-center rounded-full bg-[#6366f1]/[0.18] border border-[#6366f1]/45 text-xs font-bold text-[#818cf8]">
            {step.number ?? i + 1}
          </div>
          <div>
            <h3 className="font-display text-[20px] font-semibold tracking-[-0.4px] text-[#fdfdff]">
              {step.title}
            </h3>
            <p className="mt-1 font-body text-[15px] leading-[1.65] text-[#b5b5c2]">
              {step.description}
            </p>
          </div>
        </li>
      ))}
    </ol>
  );
}
