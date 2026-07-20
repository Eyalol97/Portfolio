export const hero = {
  eyebrow: 'Case Study',
  title: "Mil'jobs",
  subtitle: 'Reserve Recruitment, Rebuilt for Mobile',
  role: 'UX Designer & Researcher (Energy Team)',
  system: 'Israeli Army Recruitment Platform',
  tools: 'Figma',
  heroImage: '/case-studies/miljobs/hero-home.webp',
}

export const challenge = {
  eyebrow: 'The Challenge',
  heading: 'An inefficient baseline.',
  body: "Before Mil'jobs, recruiters struggled with an old, poorly-designed desktop system. Additionally, the system didn't present information about candidates beyond their military service, which made the recruitment process inefficient.",
  twist:
    'Transitioning to mobile brought its own limitations — smaller screens and touch input made data entry and validation a critical scope to map out from the start.',
  image: '/case-studies/miljobs/hero-home.webp',
}

export const research = {
  eyebrow: 'Research & Key Insight',
  heading: 'Identifying the drop-off.',
  body: 'I visited the military unit and conducted interviews, observations, and surveys with the military recruiters to gain insights into their challenges and daily routines. I also looked at private-sector tools like "Adam" for contrast.',
  insight:
    'A remarkable 80% of respondents reported that they had abandoned the job submission process midway in the past month.',
  stat: {
    value: '80%',
    label: 'abandoned the job submission process midway, in the past month',
  },
}

export const persona = {
  eyebrow: 'Meet the User',
  heading: 'Who this was built for.',
  name: 'Maya',
  role: 'Regular Recruiter, Age 19',
  facts: [
    'Uses the system every day',
    'Smartphone-savvy, expects mobile-first tools',
    'Needs to close out tasks by 3PM',
  ],
  quote: 'I just want a system as easy and intuitive as the apps on my phone.',
}

export const beforeAfter = {
  eyebrow: 'The Transformation',
  heading: 'From friction to flow.',
  before: {
    label: 'Before: Desktop Process',
    steps: ['Login on desktop', 'Long, unguided form', 'No candidate context', 'High drop-off'],
  },
  after: {
    label: "After: Mil'jobs Mobile",
    steps: ['Open the app', 'Guided 4-step form', 'Full candidate profile', 'Submit with confidence'],
  },
}

export const blueprints = {
  eyebrow: 'The System Blueprints',
  heading: 'UX & flow mapping.',
  paper: {
    label: 'Paper Prototyping',
    body: 'Design started with simple, low-fidelity paper sketches to figure out the best user flow. Sketching on paper first minimized risk through early identification of usability issues, before a single screen was built in Figma.',
  },
  flow: {
    label: 'User Flow Diagram',
    body: 'The formal flow that followed maps the end-to-end recruitment lifecycle — from opening a position, through candidate review, to a filled role.',
    image: '/case-studies/miljobs/flow-stage1.webp',
  },
}

export const componentShowcase = {
  eyebrow: 'The Component Showcase',
  heading: 'The design system foundation.',
  intro:
    'The interface was built from a small set of reusable components rather than one-off screens — three of the core building blocks are shown below.',
  components: [
    {
      type: 'Component 01',
      title: 'Interactive Job Cards',
      body: 'Job cards surface critical data at a quick glance — military role alongside civilian tech stack — so a recruiter can scan a list without opening every candidate individually.',
      image: '/case-studies/miljobs/cards-crop.webp',
      problemSolved: 'Solves: Recruiters had to open every candidate individually to compare them.',
    },
    {
      type: 'Component 02',
      title: 'Smart Input Fields',
      body: 'Normal Fields and Log-in Fields were mapped separately, distinguishing required from non-required fields, to reduce user error and friction while filling out a form.',
      image: '/case-studies/miljobs/fields-system.webp',
      problemSolved: 'Solves: Form errors and abandoned submissions due to unclear required fields.',
    },
    {
      type: 'Component 03',
      title: 'Specialized Action Buttons',
      body: 'Primary, Secondary, Switch-tab, and New Job buttons were each given their own defined states, so every action in the app reads consistently.',
      image: '/case-studies/miljobs/buttons-system.webp',
      problemSolved: 'Solves: Inconsistent button states caused confusion about which actions were available.',
    },
  ],
}

export const solutionTable = {
  eyebrow: 'The Solution Execution Table',
  heading: 'Pain point → product logic.',
  rows: [
    {
      painPoint:
        "Recruiters were unable to access relevant applicants' backgrounds beyond military service, leading to suboptimal job matching.",
      implementation:
        "Mil'jobs displays applicants' professional experience, civilian tools, and relevant tech background directly, enabling optimal job placements.",
    },
  ],
}

export const validation = {
  eyebrow: 'Validation & Iteration',
  heading: 'The confidence gap.',
  body: 'Usability testing showed a technical task completion rate above 90%. But through direct user feedback and observation, it became evident that some users were left with a sense of uncertainty after completing the task — checking the page to reassure themselves it had actually gone through.',
  iteration:
    'The product manager suggested implementing a snackbar gesture to provide immediate confirmation and reinforce user confidence.',
  stat: {
    value: '90%+',
    label: 'technical task completion in usability testing',
  },
  image: '/case-studies/miljobs/snackbar-crop.webp',
}

export const roadmap = {
  eyebrow: 'Roadmap & Analytics',
  heading: "It's not over yet.",
  body: 'In the next few months, I plan to conduct a post-deployment analysis. I aim to check task abandonment rates and task completion times, hoping to see improvements and better understand user behavior.',
}
