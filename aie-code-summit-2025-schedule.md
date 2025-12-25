# AI Engineer Code Summit 2025 Schedule

November 19-22, 2025 | New York City, NY

## Wed, Nov 19

### The Stigg VIP Welcome Reception

**Time:** Wed, Nov 19 5:00 PM - 7:30 PM
**Room:** Expo Hall
**Speakers:** Stigg

Speakers, Sponsors, Leadership Pass, and Bundle Pass attendees: This is your official start to the conference! Doors open at 5:00pm for this welcome reception in the expo. Meet your fellow VIP attendees, speakers, and the exciting expo partners over food and drinks courtesy of Stigg! Stigg gives AI teams the building blocks for usage-based monetization, like credits, metering, gating, and pricing orchestration, without slowing down dev velocity. They're also a Gold sponsor -- so grab a drink on them and stop by to say hi!

---

## Thu, Nov 20

### Opening & Welcome

**Time:** Thu, Nov 20 9:00 AM - 9:04 AM
**Room:** Times Center
**Speakers:** Alex Lieberman

Welcome remarks and conference opening by our emcees.

---

### Evolving Claude APIs for Agents

**Time:** Thu, Nov 20 9:05 AM - 9:24 AM
**Room:** Times Center
**Speakers:** Katelyn Lesse

Developers are building more and more complex, long-running, agentic systems. Learn how the Anthropic team is evolving the Claude Developer Platform to enable developers to get the best outcomes from Claude.

---

### Autonomy Is All You Need

**Time:** Thu, Nov 20 9:25 AM - 9:44 AM
**Room:** Times Center
**Speakers:** Michele Catasta

AI agents exhibit vastly different degrees of autonomy. Yet, the ability to accomplish objectives without supervision is the critical north star for agent progress, especially in software creation. For non-technical users who cannot supervise software creation, full autonomy is essential, not optional.

First of all, I will discuss two foundational capabilities to achieve true autonomy: automatic testing to verify correctness without human validation, and advanced context management to maintain coherence across complex, long-horizon tasks.

With autonomy established, parallelization becomes the key to delivering a compelling user experience. Sequential execution forces users to wait extensively before seeing progress, breaking the development flow. This talk explores parallelization models (task-level parallelism, out-of-order execution, plan decomposition, etc.) and their tradeoffs in latency, resource consumption, and correctness guarantees.

---

### Your Support Team Should Ship Code

**Time:** Thu, Nov 20 9:45 AM - 10:04 AM
**Room:** Times Center
**Speakers:** Lisa Orr

Zapier maintains 8000+ integrations that break as APIs change. We had thousands of backlog support tickets with dozens more arriving weekly. To keep up with the traffic, we started building AI tools to help ship integration fixes faster.
We began by shadowing engineers fixing tickets and building tools we believed would expedite the fix process. Our first effort, an API playground hosting AI tools like diagnosis and test generation, failed to get engineering traffic because it pulled builders out of their workflows. We pivoted to MCP tools that engineers could use directly in their IDEs. MCP tools gained traction, but our most valuable tool, Diagnosis, took too long to run. Engineers wouldn't wait for it, revealing we needed an asynchronous approach. We built Scout Agent to string our tools together, autonomously reading support tickets, gathering context, generating fixes with tests, and submitting merge requests ready for review. This agent approach has gained traction with our support team handling high ticket volumes. An MR ready for review means they can validate and ship a fix quickly before needing to jump on the next incoming ticket.
Throughout this process we've learned that the real challenge is everything surrounding code generation. Before writing code, Scout Agent needs both the right context and to show its work so engineers trust its recommendations. After generation, engineers need to quickly validate and correct the proposed fix, otherwise MRs sit unreviewed and abandoned. Embedding Scout Agent directly in GitLab solved this. Teams can iterate on proposed solutions without context switching.
To track improvement, we measure three distinct failure modes: categorization accuracy (should Scout attempt this ticket?), fixability assessment (does this need a code fix?), and solution quality (does the generated code actually work?). Each reveals different improvement opportunities. Today, Scout drives 40% of support's integration fixes, with expansion to engineering teams and downstream automation (testing, shipping, migration) as our next frontiers.

---

### 2026: The Year the IDE Died

**Time:** Thu, Nov 20 10:05 AM - 10:24 AM
**Room:** Times Center
**Speakers:** Steve Yegge, Gene Kim

As AI has grown more capable, software developers around the world have lagged behind the technology advances, and have consistently eschewed the most powerful tools. In this talk I explore why devs are staying 9-12 months behind the AI curve. I'll share a preview of what 2026's AI coding tools will be like, and paint a vision of where we go from here.

---

### Morning Expo

**Time:** Thu, Nov 20 10:30 AM - 11:00 AM
**Room:** Expo Hall

Coffee, tea, and networking Expo in the expo hall.

---

### [Stigg] Building Credit Systems for AI Products: Lessons from the Field

**Time:** Thu, Nov 20 10:40 AM - 11:00 AM
**Room:** AIE Expo
**Speakers:** Mike Lacsamana

Credits seem simple: a clean way to hide the complexity of tokens, model costs, and inference workloads behind a user-friendly unit. But the moment you introduce credits into an AI product, you are no longer building a feature; you are building a miniature economy, with the accounting, consistency guarantees, and fairness rules that come with it. This raises a core question: how do you design a credit system that is accurate under concurrency, predictable for users, auditable for finance, and flexible enough to survive shifting AI model costs?

In this talk, we will break down the real engineering challenges behind credit systems: designing wallets, ledgers, and rate cards; ensuring atomic consumption flows; building fairness and guardrails into the runtime path; and reconciling usage with enterprise revenue systems. You will learn the architectural patterns that work, the traps most teams fall into, and how to build a credit foundation that can evolve as fast as the AI market does.

---

### Future-Proof Coding Agents: Building Reliable Systems That Outlast Model Cycles

**Time:** Thu, Nov 20 11:00 AM - 11:19 AM
**Room:** Times Center
**Speakers:** Bill Chen, Brian Fioca

Coding agents are becoming one of the most active areas in applied AI, yet many teams keep rebuilding fragile infrastructure every time models or providers change. We believe there is a better way. By anchoring on a stable abstraction layer like Codex, we can stop worrying about harness rewrites and focus on the parts of the stack that create lasting value. We treat models as interchangeable sub-agents, plug into shared primitives, and let upstream improvements flow through without breaking products. This lets teams move faster, stay resilient as the ecosystem evolves, and focus their energy on domain-specific workflows and user experience.

---

### Moving away from Agile: What's Next?

**Time:** Thu, Nov 20 11:20 AM - 11:39 AM
**Room:** Times Center
**Speakers:** Martin Harrysson, Natasha Maniar

Most enterprises are not capturing much value from AI in software dev to date (at least relative to the potential). The reason is that most are adding AI tools to their dev teams without changing the people and operating model aspects (i.e., limited changes to ways of working, team configurations, role definitions, stage gates, etc.). Many core aspects of software development haven’t changed in the past 10+ years, and that’s holding us back from moving to the new paradigm of software development! We will share examples of what makes the difference. 

---

### How to Quantify AI ROI in Software Engineering (Stanford Study / 120k Devs)

**Time:** Thu, Nov 20 11:40 AM - 11:59 AM
**Room:** Times Center
**Speakers:** Yegor Denisov-Blanch

You’re investing millions in AI for software engineering. Can you prove it’s paying off?

Benchmarks show models can write code, but in enterprise deployments ROI is hard to measure, easy to bias, and often distorted by activity metrics (PR counts, DORA) that say “more” without proving “better.” 

Drawing on field data from 120k+ developers across 600+ companies, I’ll show exactly where AI helps the most and how to measure the ROI of your software engineering AI deployment.

We’ll unpack why identical tools deliver ~0% lift in some orgs and 25%+ in others.

You’ll leave with a step-by-step ROI playbook: what to track, the traps to avoid, and the habits top-quartile teams use to make the most from AI.

---

### The State of AI Code Quality: Hype vs. Reality

**Time:** Thu, Nov 20 12:00 PM - 12:19 PM
**Room:** Times Center
**Speakers:** Itamar Friedman

AI is making code generation nearly effortless, but the critical question remains: can we trust AI-generated code for software that truly matters? Has it really become easier to build robust, high-quality systems?

In this talk, we’ll separate hype from reality. Drawing on the State of AI Code Quality report, we’ll explore where AI tools excel, where they fall short, and which evaluation frameworks actually matter. We’ll unpack benchmarks, pitfalls, and lessons learned from deploying AI in real-world engineering workflows. Attendees will leave with a clearer understanding of how to measure, trust, and improve both AI-generated code and AI-driven code review—and what’s next for software quality in the age of AI.

---

### Minimax M2

**Time:** Thu, Nov 20 12:20 PM - 12:39 PM
**Room:** Times Center
**Speakers:** Olive Song

Introducing Minimax's latest AI model and its applications in code generation.

---

### Lunch Expo

**Time:** Thu, Nov 20 12:45 PM - 1:45 PM
**Room:** Lunch Area

Lunch provided.

---

### Proactive Agents

**Time:** Thu, Nov 20 1:45 PM - 2:04 PM
**Room:** Times Center
**Speakers:** Kath Korevec

tba

---

### Small Bets, Big Impact: Building GenBI at a Fortune 100

**Time:** Thu, Nov 20 2:05 PM - 2:24 PM
**Room:** Times Center
**Speakers:** Asaf Bord

Enterprises don’t usually make moonshots, especially in GenAI. Governance, budgets, and risk aversion make it almost impossible to justify a huge, uncertain investment.

At Northwestern Mutual, we’re building GenBI, an LLM-powered analytics copilot, by flipping that logic. Instead of one big bet, we created an incremental roadmap of small, fundable projects. Each is tied to real business outcomes, delivers measurable ROI, and builds the trust needed to move forward.

This talk shares how we framed the problem, earned leadership support, and designed a modular architecture grounded in real data. We’ll show how each research step can stand on its own - productized, measurable, and deployable. Attendees will leave with a clear blueprint for making AI transformation fundable, governable, and real inside large, risk-averse organizations.

---

### What We Learned Deploying AI within Bloomberg’s Engineering Organization

**Time:** Thu, Nov 20 2:25 PM - 2:44 PM
**Room:** Times Center
**Speakers:** Lei Zhang

When it comes to using AI for software engineering, much of the spotlight falls on how large language models (LLMs) can write code—sometimes entirely from scratch. Countless studies highlight productivity gains from turning requirements directly into runnable code. But the reality of applying AI at scale inside a mature engineering organization is far more complex and nuanced. 
Over the past year, we’ve been on that journey at Bloomberg—integrating AI into the workflows of 9,000+ software engineers—and we’ve learned a few important lessons worth sharing:

- Where the real ROI lies once you move beyond toy examples
- What it takes to actually enable AI across a large, established engineering org
- The best practices, cultural shifts, and guardrails that are required to make it work in practice

If you’re wondering what happens after the first demo magic fades and the real work begins, this talk is for you.

---

### From Arc to Dia: Lessons learned in building AI Browser

**Time:** Thu, Nov 20 2:45 PM - 3:04 PM
**Room:** Times Center
**Speakers:** Samir Mody

What happens when you take a polished, beloved browser and rebuild it from the ground up around AI?
In 2024, The Browser Company did exactly that: transforming Arc, a human-designed browser, into Dia, a browser with an AI-native browser experience. The journey forced us to unlearn what we knew about product design, system architecture, and even what "good UX" means when the interface itself can reason, plan, and act.

In this talk, I'll share the lessons we learned along the way: how we redesigned for emergent behavior instead of deterministic control, how our engineering and design teams learned to prototype with language models, and how our culture evolved to ship fast in a world where we're still learning what a good system looks like. You'll leave with practical insights for building AI-native products, from technical architecture to team mindset, and a glimpse into how we're thinking about the future of AI browsing.

---

### Developer Experience in the Age of AI Coding Agents

**Time:** Thu, Nov 20 3:05 PM - 3:24 PM
**Room:** Times Center
**Speakers:** Max Kanat-Alexander

It feels like every two weeks, the world of software engineering is being turned on its head. Are there any principles we can rely on that will continue to hold true, and that can help us prepare for the future, no matter what happens? Max uses research, data, and his 20+ years working in enterprise Developer Experience teams to talk through what we can do now that will prepare us for an agentic future, no matter what that future holds.

---

### Afternoon Expo (open to all)

**Time:** Thu, Nov 20 3:30 PM - 7:00 PM
**Room:** Expo Hall

Afternoon Expo open to all ticket holders including Engineering track attendees.

---

### AI Consulting in Practice

**Time:** Thu, Nov 20 4:00 PM - 4:19 PM
**Room:** Times Center
**Speakers:** NLW

Insights from consulting on AI implementation across various organizations.

---

### Paying Engineers like Salespeople: How Tenex Rebuilt the Incentive Stack for Modern Engineering

**Time:** Thu, Nov 20 4:20 PM - 4:39 PM
**Room:** Times Center
**Speakers:** Arman Hezarkhani

Most software teams still run on an outdated unit of measure: hours, days, years.

That single choice misaligns every incentive—clients want fewer, engineers want more, and everyone loses speed.

At Tenex, we threw the hourly model out and built an outcome-based system where we pay and charge per story point, tying incentives directly to shipped value.

In this talk, I’ll break down exactly how it works—the math, the cultural shifts, the AI tooling that makes it possible, and the results we’ve seen across real client projects. You’ll leave with a blueprint for running a high-trust, high-velocity engineering team that scales output, not overhead.

---

### Leadership in AI-Assisted Engineering

**Time:** Thu, Nov 20 4:40 PM - 4:59 PM
**Room:** Times Center
**Speakers:** Justin Reock

To realize meaningful returns on AI investments, leadership must take accountability and ownership of establishing best practices, enabling engineers, measuring impact, and ensuring proper guardrails are in place. When prompting practice and reflexive AI use is driven from the top down, engineers can align on the highest value use cases and experience peak productivity gains. When coupled with DX's AI Measurement Framework, leaders can gain a clear picture of AI's true impact, identify the real bottlenecks in the SDLC that can be augmented with AI, and drive improvement. In this session, Justin Reock, Deputy CTO at DX, and author of DX's Guide to AI Assisted Engineering, will explain what the most effective leaders of AI enabled engineering organizations are doing to drive satisfactory utilization, augmentation, and psychological safety across their teams. Based on interviews, use cases, and data, leaders will walk away with an understanding of how to best lead their teams through mature AI rollouts.

---

### How to build an AI-native company (even if your company is 50 years old)

**Time:** Thu, Nov 20 5:00 PM - 5:19 PM
**Room:** Times Center
**Speakers:** Dan Shipper

tba

---

### Closing Remarks

**Time:** Thu, Nov 20 5:20 PM - 5:25 PM
**Room:** Times Center
**Speakers:** swyx, Ben Dunphy

Day 1 closing remarks and preview of Day 2.

---

### The Graphite Afterparty

**Time:** Thu, Nov 20 5:30 PM - 7:30 PM
**Room:** Times Center
**Speakers:** Graphite

The evening social event for all ticket types! "Engineering only" pass attendees -- you're welcome to join us at the venue's lower level starting at 4:00pm (no stage access). Food and drinks courtesy of our sponsor Graphite, the complete AI code review platform built to keep you unblocked. Learn more at http://graphite.dev

---

## Fri, Nov 21

### Day 2 Opening

**Time:** Fri, Nov 21 9:00 AM - 9:05 AM
**Room:** Times Center
**Speakers:** Jed Borovik

Welcome to Day 2 of the AI Engineer Code Summit.

---

### The War on Slop

**Time:** Fri, Nov 21 9:05 AM - 9:10 AM
**Room:** Times Center
**Speakers:** swyx

Why we need to eliminate low-quality code and work in AI engineering

---

### Don't Build Agents, Build Skills Instead

**Time:** Fri, Nov 21 9:10 AM - 9:30 AM
**Room:** Times Center
**Speakers:** Barry Zhang, Mahesh Murag

In the past year, we've seen rapid advancement of model intelligence and convergence on agent scaffolding. But there's still a gap: agents often lack the domain expertise and specialized knowledge needed for real-world work. We think Skills are the solution—a minimal form factor for packaging procedural knowledge that agents can dynamically load. It's a portable, composable approach to giving one agent capabilities across domains. In this talk, we'll share how we built Skills at Anthropic, the network effects we're observing, and where we believe this leads: agents writing their own Skills from experience. Our thesis: equipping agents for real-world work means building reusable expertise.

---

### No Vibes Allowed: Solving Hard Problems in Complex Codebases

**Time:** Fri, Nov 21 9:30 AM - 9:50 AM
**Room:** Times Center
**Speakers:** Dex Horthy

It seems pretty well-accepted that AI coding tools struggle with real production codebases. At AI Engineer 2025 in June, The Stanford study on AI's impact on developer productivity found:

1. A lot of the ""extra code"" shipped by AI tools ends up just reworking the slop that was shipped last week.

2. Coding agents are great for new projects or small changes, but in large established codebases, they can often make developers less productive.

The common response is somewhere between the pessimist ""this will never work"" and the more measured ""maybe someday when there are smarter models.""

After several months of tinkering, we've found that you can get really far with today's models if you embrace core context engineering principles.

This isn't another ""10x your productivity"" pitch. I tend to be pretty measured when it comes to interfacing with the ai hype machine. But we've stumbled into workflows that leave me with considerable optimism for what's possible. We've gotten claude code to handle 300k LOC Rust codebases, ship a week's worth of work in a day, and maintain code quality that passes expert review. We use a family of techniques I call ""frequent intentional compaction"" - deliberately structuring how you feed context to the AI throughout the development process.

In this talk, I'll share what we've learned since first sharing these techniques back in August, and some educated predictions on what's coming in the next 6-12 months for software engineers.

---

### Building Cursor Composer

**Time:** Fri, Nov 21 9:50 AM - 10:10 AM
**Room:** Times Center
**Speakers:** Lee Robinson

Learn about the infrastructure, training, and evaluations used to build Cursor Composer, our first coding model.

---

### From Code Snippets to Codebases: Then, Now, and What’s Next for Coding Evals

**Time:** Fri, Nov 21 10:10 AM - 10:30 AM
**Room:** Times Center
**Speakers:** Naman Jain

AI coding capabilities have leapt from generating one-line snippets to competing entire codebases with agentic workflows. I’ll trace that arc focusing on learnings and challenges through each stage. I will start with early testable coding benchmarks distilling lessons about contamination and distributional overfitting. Next, moving beyond isolated programming problems, I will talk about repository grounded coding problems from SWE-bench style bug fixing, and R2E’s automated function completion setting. We’ll then move beyond isolated functions to longer-horizon tasks—runtime optimization (GSO), translation (Syzygy), and refactoring—highlighting challenges like test hacking, code quality, and idiomaticity. Finally, beyond code generation, I will talk about human preference evaluation in chatting (LMArena RepoChat) and developer-preference signals in-IDE via Copilot Arena.

---

### Morning Expo

**Time:** Fri, Nov 21 10:30 AM - 11:00 AM
**Room:** Expo Hall

Coffee, tea, and networking Expo in the expo hall.

---

### [WorkOS] Enterprise-grade MCP

**Time:** Fri, Nov 21 10:40 AM - 11:00 AM
**Room:** AIE Expo
**Speakers:** Tobin South

MCP is cool, but a massive security risk. Learn how to build effective MCP servers that have enterprise-grade security built in. This isn't a sales pitch, it's a lesson in unblocking MCP deployments and ensuring that AI agents behave themselves.

---

### Leadership Brunch with AI Eng Leaders of Robinhood

**Time:** Fri, Nov 21 11:00 AM - 2:00 PM
**Room:** (Offsite) Le Rivage
**Speakers:** Gene Kim

[For Leadership pass only] Guided unconference/discussion with industry peers, featuring a fireside chat with Robinhood's Agentic Applications leads Tony Tan and Yash Kumaraswamy, hosted by Gene Kim of IT Revolution, author of The Phoenix Project, the new Vibe Coding book, and curator of the Enterprise Technology Leadership Summit. Hosted offsite at Le Rivage, a few minutes walk away from the Times Center.

---

### Code World Model: Building World Models for Computation

**Time:** Fri, Nov 21 11:00 AM - 11:19 AM
**Room:** Times Center
**Speakers:** Jacob Kahn

Today, most neural models for code learn from code itself: sequences of tokens that capture syntax rather than computation. While this allows models to learn the shape of code, true reasoning about programs requires understanding execution and the dynamics of computation. In this talk, I’ll present a world-model approach to learning from code: one that incorporates data from program execution to implicitly predict behavior while generating code. The Code World Model (CWM) embodies this paradigm, opening new capabilities for reasoning and offering a foundation for future research and prototyping in AI-driven software systems.

---

### Efficient Reinforcement Learning

**Time:** Fri, Nov 21 11:20 AM - 11:39 AM
**Room:** Times Center
**Speakers:** Rhythm Garg, Linden Li

Reinforcement learning (RL) is a powerful mechanism for building agents that are superhuman and specialized in particular tasks. At Applied Compute, RL is one of the fundamental building blocks that enables us to deliver automations and real business value for customers. Effective RL training often involves several iterative derisking runs to better understand learning dynamics with different base models, and then doing “hero” runs with the best configurations. If done naively, this can be very time-consuming and expensive. In this talk, we will discuss some ways our proprietary RL stack allows us to train models efficiently.

---

### RL Environments at Scale

**Time:** Fri, Nov 21 11:40 AM - 11:59 AM
**Room:** Times Center
**Speakers:** Will Brown

Scaling reinforcement learning environments for training advanced AI coding models.

---

### Agent Reinforcement Fine Tuning

**Time:** Fri, Nov 21 12:00 PM - 12:19 PM
**Room:** Times Center
**Speakers:** Will Hang, Cathy Zhou

Deep dive into OpenAI's approach to reinforcement fine-tuning for code models.

---

### From Vibe Coding To Vibe Engineering

**Time:** Fri, Nov 21 12:20 PM - 12:39 PM
**Room:** Times Center
**Speakers:** Kitze

Web development has always moved in cycles of hype, from frameworks to tooling. With the rise of large language models, we're entering a new era of "vibe coding," where developers shape software through collaboration with Al rather than syntax. This talk explores what that means for the future of coding, especially in frontend development, and how it echoes the past while redefining what comes next.

---

### Lunch Expo

**Time:** Fri, Nov 21 12:45 PM - 1:45 PM
**Room:** Lunch Area

Lunch provided.

---

### Building in the Gemini Era with Google DeepMind

**Time:** Fri, Nov 21 1:45 PM - 2:04 PM
**Room:** Times Center
**Speakers:** Kat Kampf, Ammaar Reshi

tba on talk content

---

### Making Codebases "Agent-Ready"

**Time:** Fri, Nov 21 2:05 PM - 2:24 PM
**Room:** Times Center
**Speakers:** Eno Reyes

Agents are eating software engineering. Yet teams deploying these tools face mixed results. Agents work great in demos but fail unreliably in production, frustrating engineering teams who expected better. The gap isn't model quality—it's environment readiness. Agents need fast feedback loops, explicit instructions, and predictable environments to work effectively. They break on missing environment variables, undocumented dependencies, and tribal knowledge that "everyone just knows."

What if you could measure and fix what's holding your agents back? Enter Agent Readiness.
In this talk, we'll explore eight categories that determine whether your codebase is agent-ready: from style validation and build systems to dev environments and observability. You'll learn how to score your repos, identify easy wins, and build environments where agents actually ship reliable code. We'll share real signals from Factory's work running autonomous agents in enterprise production repos—and give you a practical framework to make your team's agents more productive starting tomorrow.

---

### Amp Code: Next-Generation AI Coding

**Time:** Fri, Nov 21 2:25 PM - 2:44 PM
**Room:** Times Center
**Speakers:** Beyang Liu

Introduction to Amp Code and its approach to AI-powered software development.

---

### Using AI-Generated Kernels to Instantly Speed Up PyTorch

**Time:** Fri, Nov 21 2:45 PM - 3:04 PM
**Room:** Times Center
**Speakers:** Natalie Serrino

In this talk, we'll talk about how AI generated kernels can meaningfully speed up custom PyTorch code, without any human effort.

Lots of great frameworks exist to optimize PyTorch with programmatic optimizations, such as Triton and MLX. But the strongest AI performance gains come from hand-written, low-level kernels that are targeted to the exact device and workload. These are tedious and time-consuming to write, especially when supporting multiple platforms. What if we could automate this process with AI?

We'll cover the best practices for AI generating low-level kernels, from how to test and validate the kernels, and what type of agents and contexts are needed to get the best results. We'll cover the research we did where this approach improved PyTorch inference performance on Apple devices.

---

### The Infinite Software Crisis

**Time:** Fri, Nov 21 3:05 PM - 3:24 PM
**Room:** Times Center
**Speakers:** Jake Nations

In 1968, the term ""Software Crisis"" emerged when systems grew beyond what developers could manage. Every generation since has ""solved"" it with more powerful tools, only to create even bigger problems. 

**Today, AI accelerates the pattern into the Infinite Software Crisis.** AI-generated codebases mirror the meandering conversations that created them. Every clarification and pivot gets baked into your architecture. We're vibecoding our way to disaster.

**The solution: choose simple over easy.** One long conversation is easy. Separate phases with clean boundaries are simple.

This talk presents a three-phase methodology:
- **Research** to understand the existing system
- **Planning** to design the approach  
- **Implementation** with clean context

While everyone races to generate code at machine speed, the engineers who thrive will be those who know when a system is getting tangled. In the age of infinite code generation, human judgment applied at the right moments becomes your competitive advantage.

---

### Afternoon Expo

**Time:** Fri, Nov 21 3:30 PM - 4:00 PM
**Room:** Expo Hall

Afternoon Expo with refreshments in the expo hall.

---

### [Amp] From Chaos to Code — A 3-Step AI Developer Workflow with the AI-Dev-Tasks Repo

**Time:** Fri, Nov 21 3:40 PM - 4:00 PM
**Room:** AIE Expo
**Speakers:** Ryan Carson

In today’s world of rapidly evolving AI tools, writing a single “big prompt” rarely leads to a reliable, maintainable feature. In this talk, you’ll discover a proven three-step workflow that brings structure and predictability to AI-driven development. We’ll explore the open-source repository AI‑Dev‑Tasks (GitHub: snarktank/ai-dev-tasks) - a minimal system of markdown files that bridges ideation, planning, and execution so that AI becomes a consistent teammate rather than a chaotic wildcard. 

    You’ll learn:
- How to author a lightweight Product Requirement Document (PRD) that aligns human and AI expectations.
- How to break that PRD into an actionable task list that the AI can reliably execute - one task at a time – while you maintain visibility and control.
- How to review, approve and iterate on tasks - so that the AI’s output becomes trustworthy code, not surprise output.

By the end of the session, you’ll walk away with a reproducible workflow you can adopt right away, enabling you to go from idea to working feature with fewer surprises, less manual rework, and more confidence in AI-assisted development. This talk is ideal for engineers, product folks and AI-tool adopters who want to move beyond “throwing prompts at the models” and build something dependable.


---

### AGI: The Path Forward

**Time:** Fri, Nov 21 4:00 PM - 4:19 PM
**Room:** Times Center
**Speakers:** Eiso Kant

Poolside's vision and roadmap towards achieving AGI-level capabilities for knowledge work.

---

### Continual System-Prompt Learning for Code Agents

**Time:** Fri, Nov 21 4:20 PM - 4:39 PM
**Room:** Times Center
**Speakers:** Aparna Dhinakaran

Your coding agent writes code—but not like your team. RL has boosted base models, but it’s opaque and hard to scale across enterprises. Most agents still rely on brittle, hand-edited system prompts or style guides (e.g., agent.md)—what if your agent learned from your reviews and updated them automatically? In this talk, I’ll show a system-prompt learning loop—RL techniques applied to prompts, not model weights—that continually tunes an agents.md, so the agent learns instructions from your PR's, feedback & evaluations. You’ll leave with a concrete recipe to capture runtime signals, and auto-tune system prompts—applicable to any type of agent you’re building.

---

### Hard-Won Lessons from Building Effective AI Coding Agents

**Time:** Fri, Nov 21 4:40 PM - 4:59 PM
**Room:** Times Center
**Speakers:** Nik Pash

Most of what’s written about AI agents sounds great in theory — until you try to make them work in production. The seductive ideas (multi-agent orchestration, RAG, prompt stacking) often collapse under real-world constraints. Why? Because they optimize for the wrong thing. In this talk, Nik Pash shares hard-won lessons from building large-scale coding agents at Cline — what failed, what survived, and why the next leap forward won’t come from clever scaffolds, but from evals and environments that truly measure and improve reasoning. Attendees will walk away with a clearer sense of what actually drives progress — and what’s just noise.

---

### Benchmarks vs economics: the AI capability measurement gap

**Time:** Fri, Nov 21 5:00 PM - 5:19 PM
**Room:** Times Center
**Speakers:** Joel Becker

AI models are crushing benchmarks. SWE-bench scores are climbing, and METR's measured time horizons are rising rapidly. Yet when we deployed these same models in a field study with experienced developers, they didn't speed up work. What's going on? Are benchmarks misleading us about AI capabilities? Are we missing something about how AI performs in the real world? In this talk, we'll reconcile lab and field evidence on AI capabilities. Drawing from METR's time horizon measurements and developer productivity RCT, we'll explore why impressive benchmark performance doesn't always translate to real-world impact. We'll examine potential explanations—from reliability requirements to task distribution to capability elicitation—and discuss what this means for automated AI R&D.

---

### Defying Gravity

**Time:** Fri, Nov 21 5:20 PM - 5:39 PM
**Room:** Times Center
**Speakers:** Kevin Hou

Why we built Google Antigravity, and discussing the future of agentic IDEs with Gemini 3.

---

### [Official offsite afterparty] Cafe Compute NYC

**Time:** Fri, Nov 21 7:00 PM - 10:00 PM
**Room:** Offsite

Join us at the (secret location emailed to you) for the official AIE Code Summit Afterparty! Featuring Cerebras, BCV, McKinsey, Warp, Exa, Modal, and Metronome. Hosted by Cerebras: the leading and fastest AI processor. Skip the line and pre-register here [https://luma.com/f3vuq3rj](https://luma.com/f3vuq3rj)

---

## Sat, Nov 22

### Composable MCP Architectures: Handling What the Protocol Can’t

**Time:** Sat, Nov 22 9:00 AM - 12:00 PM
**Room:** Datadog 46th floor Flatiron (60)
**Speakers:** Christopher Miller, Zayne Turner

The Model Context Protocol (MCP) has transformed how AI agents interact with external systems, but many implementations struggle with scope and architecture decisions. This workshop explores the challenges that MCP wasn't designed to solve and presents composable patterns for building robust, production-ready MCP architectures.

We'll cover what's missing from the protocol specification and why trying to solve everything within MCP servers leads to brittle implementations. Instead, learn proper separation of concerns: what belongs in your MCP server versus what should be handled by orchestration layers, caching systems, and external services.

Discover how to extract true utility from MCP by focusing on skills-based abstractions rather than raw API wrappers. Through hands-on examples, you'll build composable MCP architectures that handle authentication, rate limiting, error recovery, and complex workflows while maintaining the protocol's elegant simplicity.

---

### Prompt to Production with Google AI Studio

**Time:** Sat, Nov 22 9:30 AM - 12:00 PM
**Room:** Datadog 47th floor Puss in Boots/Cafe
**Speakers:** Paige Bailey

Explore creative applications using Google DeepMind's Gemini API.

---

### Claude Code SDK

**Time:** Sat, Nov 22 10:00 AM - 12:00 PM
**Room:** Datadog 46th floor Cafe
**Speakers:** Thariq Shihipar

Learn to use Anthropic's Claude Code SDK for AI-powered development workflows.

---

### Lunch Break - CHECK IN TO AWS EARLY (BRING ID)

**Time:** Sat, Nov 22 12:00 PM - 12:30 PM
**Room:** Datadog HQ and AWS JFK 27

Lunch provided between workshop sessions. Please bring your conference badge for entry. AWS venue is 12 W 39th St, 0.5 mile walk from Datadog HQ, please budget at least 15 mins to walk over.

---

### Building Durable, Production-Ready Agents with OpenAI SDK and Temporal

**Time:** Sat, Nov 22 12:30 PM - 1:50 PM
**Room:** Datadog 47th floor Puss in Boots/Cafe
**Speakers:** Cornelia Davis

Everyone is building AI Agents, and everyone is looking for ways to build them more easily. Earlier this year, OpenAI released the OpenAI Agents SDK to bring the patterns they have found to work for building agents to the developer community. With the SDK you can define AI agents by supplying them instructions (prompts), specifying which model to use (OpenAI or not), listing tools it uses (including MCP), and much more. The OpenAI Agents SDK encourages a paradigm of orchestrated micro-agents, which themselves may have micro-orchestrations within them with the use of handoffs. It’s an elegant and powerful model.

But a good AI Agents programming model is not enough. These agents are ultimately wildly distributed systems and are plagued with all of the problems such systems bring. 
- How can they persevere through flakey networks?
- How can they function when LLMs are rate limited?
- How can they run for long periods of time (hours, days, weeks, months) when infrastructure is rarely stable that long?

In this workshop, we’ll show you how. Temporal is an open source (MIT license) durable execution framework that brings resilience to AI agents, and in this workshop we’ll show you how it’s done with the OpenAI Agents SDK. Spoiler: OpenAI and Temporal have done all of the heaving lifting for you with an [integration announced earlier this year](https://temporal.io/blog/announcing-openai-agents-sdk-integration). 

Oh, and OpenAI themselves use Temporal to help make several of their products production ready ([image gen](https://newsletter.pragmaticengineer.com/p/chatgpt-images) and [Codex](https://www.linkedin.com/posts/embirico_hello-openais-new-codex-agent-they-activity-7330357161992011776-YVUl/), for example).

Not using the OpenAI Agents SDK? Do come anyway; the foundational concepts carry over to different agent frameworks (and more integrations are coming all the time).

---

### Build a Real-Time AI Sales Agent

**Time:** Sat, Nov 22 12:30 PM - 1:50 PM
**Room:** Datadog 46th floor Cafe
**Speakers:** Sarah Chieng

Learn how to build a sophisticated real-time voice sales agent that can have natural conversations with potential customers. You'll create both single-agent and multi-agent systems where specialized AI assistants handle sales, technical support, and pricing inquiries.

---

### Building Intelligent Research Agents with Manus

**Time:** Sat, Nov 22 12:30 PM - 2:15 PM
**Room:** AWS JFK27 B1.296
**Speakers:** Ivan Leo

AI agents are no longer confined to chat interfaces. From our original Manus app for powerful conversations, to Mail Manus for transforming your inbox into an organized command center, we've progressively expanded where an AI can work. Now, with the Manus API, we're completing the vision by giving you the final building block to deploy an intelligent agent anywhere in your stack.

In this workshop, you'll learn to use the API to build a bespoke research agent that powers deep analysis across your company's internal data. We'll show you how to dispatch a task that connects to your private systems, synthesises complex information, and delivers custom insights on demand, turning your entire knowledge base into an actionable, intelligent asset.

In this hands-on session, you will:

- Use the Manus API to dispatch and manage asynchronous agentic tasks.
- Connect the agent to private data sources using our connectors
- Build a complete workflow that synthesises information into a custom report.

By the end of the workshop you'll have a functional research agent that you can adapt for your own use case.

---

### Build a Prompt Learning Loop

**Time:** Sat, Nov 22 12:30 PM - 2:15 PM
**Room:** AWS JFK27 B1.300
**Speakers:** SallyAnn DeLucia

Learn how to create a feedback loop to continuously improve your AI prompts and responses.

---

### Building durable Agents with Workflow DevKit & AI SDK

**Time:** Sat, Nov 22 12:30 PM - 1:50 PM
**Room:** AWS JFK27 B1.100
**Speakers:** Peter Wielander

Learn to build and deploy AI agents using Vercel's new open source Workflows platform.

---

### Afternoon Break

**Time:** Sat, Nov 22 2:15 PM - 2:30 PM
**Room:** Datadog HQ and AWS JFK 27

Short Break between workshop blocks.

---

### gemini fix --quality: A Story of CLI Bugs and Patches

**Time:** Sat, Nov 22 2:30 PM - 3:50 PM
**Room:** Datadog 47th floor Cafe
**Speakers:** Anjali Sridhar

What happens when your new CLI is an instant hit? Massive adoption, diverse use cases... and a flood of unanticipated quality issues. The Gemini CLI's rapid launch in the OSS world gave us a masterclass in building reliability for a fast-moving AI agent. This talk isn't about theory; it's a dispatch from the trenches. Join me to explore our journey and learn what 'coding agent quality' truly means to users. We'll move beyond simple dataset optimization to share the real-world engineering that mattered, from implementing robust retries and history modifications to architecting for complex tools and subagents.

---

### Sharpening your AI toolbox for Spec-Driven Dev

**Time:** Sat, Nov 22 2:30 PM - 3:50 PM
**Room:** Datadog 47th floor Puss in Boots
**Speakers:** Al Harris

In the AI coding era, we have powerful tools, but tools still require honing to work effectively. Spec-Driven Development allows for reproducible and reliable delivery, but spending time up-front to improve the spec process will yield the best approach. Learn how the Kiro team does this, and how you can too!

---

### Automating Large-Scale Refactors with Parallel Agents

**Time:** Sat, Nov 22 2:30 PM - 3:50 PM
**Room:** AWS JFK27 B1.300
**Speakers:** Robert Brennan

Today's agents are best at small, atomic coding tasks. Much larger tasks--like major refactors and breaking dependency updates--are highly automatable but hard to one-shot.

In this session, we'll discuss patterns for orchestrating large-scale code changes with swarms of agents and a human in the loop.

We'll also work through a concrete example: migrating an entire codebase from one React state management library to another.

---

### Running Multi-Agent Systems with AgentOS

**Time:** Sat, Nov 22 2:30 PM - 3:50 PM
**Room:** AWS JFK27 B1.296
**Speakers:** Ashpreet Bedi

In this session, you'll learn how to run multi-agent systems at scale using the AgentOS.

We'll explore practical techniques for building agents with shared memory and knowledge, and walk through patterns that improve reliability, durability, execution flow, and overall system stability. You'll also see lessons drawn from real production workloads running on the AgentOS.

The talk will cover how to scale across both scope and infrastructure, and will highlight the systems engineering principles required to operate large, distributed agentic architectures with confidence.

---

### Okta Identity for AI Agents

**Time:** Sat, Nov 22 2:30 PM - 3:50 PM
**Room:** Datadog 46th floor Cafe
**Speakers:** Patrick Riley, Carlos Galan

Implementing secure identity and access management for AI agents with Okta!

---

### Memory in LLMs: Weights and Activations

**Time:** Sat, Nov 22 2:30 PM - 3:50 PM
**Room:** AWS JFK27 B1.100
**Speakers:** Jack Morris

Understanding how memory works in large language models through the lens of weights and activations. This workshop will explore the internal mechanisms of how LLMs store and retrieve information during inference.

---

### Afternoon Break

**Time:** Sat, Nov 22 3:50 PM - 4:10 PM
**Room:** Datadog HQ and AWS JFK 27

Break with refreshments between workshop sessions.

---

### Context Engineering for Intelligent AI Code Reviews

**Time:** Sat, Nov 22 4:10 PM - 5:30 PM
**Room:** AWS JFK27 B1.300
**Speakers:** Erik Thorelli

The rise of AI coding agents has led to a significant rise in PRs that are just waiting for your review. Code reviews are critical but obviously not the most exciting part of our day when you have to manually go through them. This is why we built a context-engineering approach at CodeRabbit that mimics the way a senior engineer would go about reviewing code.

We feed context to LLMs from multiple sources including issue tickets, dependency graph, MCP servers (Notion, Confluence, etc.), Linters/SAST, and your AI coding agent guidelines. This in-depth approach helps the LLMs find hidden bugs and edge cases that would otherwise slip through.

In this workshop, we will share how this context engineering approach has helped us cut down PR review time by 50% while catching 50%+ hidden bugs compared with manual reviews.

---

### DSPy is (really) All You Need

**Time:** Sat, Nov 22 4:10 PM - 5:30 PM
**Room:** Datadog 47th floor Puss in Boots/Cafe
**Speakers:** Kevin Madura

Applications developed for the enterprise need to be rigorous, testable, and robust. The same is true for applications that use AI, but LLMs can make this challenging. In other words, you need to be able to *program* with LLMs, not just tweak prompts. In this talk we'll cover why DSPy really is all you need in building applications with LLMs. We'll dive into real-world examples where we have successfully automated manual work using an opinionated DSPy-first approach to structuring applications, covering everything from simple modules to using SoTA optimizers to measurably improve performance.

---

### Your MCP Server is Bad and You Should Feel Bad

**Time:** Sat, Nov 22 4:10 PM - 5:30 PM
**Room:** AWS JFK27 B1.296
**Speakers:** Jeremiah Lowin

Too many MCP servers are simply glorified REST wrappers, regurgitating APIs that were designed for SDKs, not agents. This leads to confused LLMs, wasted tokens, and demonstrably poor performance. If you've ever pointed an MCP generator at an OpenAPI spec and called it a day, this talk is your intervention.

Like any product, great MCP servers are the result of careful design. This talk shares the hard-won lessons from creating FastMCP, the most popular framework for building MCP servers (and yes, for generating them, too). The secret is to stop thinking about endpoints and start thinking about products. We will cover the three pillars of agent-native product design—Discovery, Iteration, and Context—providing an actionable framework for curating context into small, highly effective surface areas that lead to better AI outcomes.

---

### Long Tasks and Experienced Open Source Dev Productivity

**Time:** Sat, Nov 22 4:10 PM - 5:30 PM
**Room:** AWS JFK27 B1.100
**Speakers:** Joel Becker

Review and discuss METR's groundbreaking research on evaluating long-horizon tasks and open source coding with AI agents.

---

### How Claude Code Works

**Time:** Sat, Nov 22 4:10 PM - 5:30 PM
**Room:** Datadog 46th floor Cafe
**Speakers:** Jared Zoneraich

(Not officially endorsed by Anthropic) Deep dive into what we have independently figured out about the architecture and implementation of Claude's code generation capabilities.

---
