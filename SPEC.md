# CV Builder for Software Engineers - Technical Specification

## 1. Concept & Vision

A premium, AI-powered CV builder tailored specifically for software engineers and developers. The platform transforms basic job experience into compelling, impact-driven narratives that resonate with top-tier tech companies. It feels like a professional tool used by senior engineers—not a generic template filler. Every interaction communicates precision, intelligence, and engineering excellence.

The experience should feel like using a well-designed developer tool: minimal cognitive load, instant feedback, and satisfying micro-interactions that make the tedious task of CV writing feel effortless and even enjoyable.

## 2. Design Language

### Aesthetic Direction
**Reference:** Notion meets Linear—clean typography, generous whitespace, subtle depth through shadows, and purposeful color accents. The interface feels like a premium SaaS product that engineers would actually want to use.

### Color Palette
- **Primary Background:** #0B0B0F (Deep Black)
- **Secondary Background:** #13131A (Card Background)
- **Accent Primary:** #6C3BFF (Electric Purple)
- **Accent Secondary:** #FF4FD8 (Hot Pink)
- **Text Primary:** #FFFFFF (White)
- **Text Secondary:** #9CA3AF (Muted Gray)
- **Text Tertiary:** #6B7280 (Dark Gray)
- **Border:** #1F1F2E (Subtle Border)
- **Success:** #10B981 (Emerald)
- **Warning:** #F59E0B (Amber)

### Typography
- **Headings:** Inter (Google Fonts) - Bold, 700 weight
- **Body:** Inter - Regular 400, Medium 500
- **Monospace:** JetBrains Mono (for code/technical terms)
- **CV Document:** Custom template with Georgia fallback for professional appearance

### Spatial System
- Base unit: 4px
- Spacing scale: 4, 8, 12, 16, 24, 32, 48, 64, 96px
- Border radius: 8px (small), 12px (medium), 16px (large), 24px (extra-large)
- Card shadows: 0 4px 24px rgba(108, 59, 255, 0.1) (subtle purple glow)

### Motion Philosophy
- **Page transitions:** Fade + subtle slide (300ms ease-out)
- **Form steps:** Slide left/right with crossfade (400ms ease-in-out)
- **Hover states:** Scale 1.02 + shadow increase (150ms)
- **Button interactions:** Subtle scale (0.98) on press, glow pulse on hover
- **Success states:** Checkmark animation with bounce (500ms)
- **Loading states:** Skeleton shimmer with purple gradient

### Visual Assets
- **Icons:** Lucide Icons (consistent, clean line icons)
- **Decorative:** Subtle gradient orbs, grid patterns, glass-morphism cards
- **CV Template:** Clean, professional layout with clear hierarchy

## 3. Layout & Structure

### Application Architecture
```
├── Landing Page (Hero + CTA)
├── Builder Interface
│   ├── Progress Indicator
│   ├── Form Steps (5 total)
│   │   ├── Step 1: Personal Information
│   │   ├── Step 2: Work Experience
│   │   ├── Step 3: Projects
│   │   ├── Step 4: Skills
│   │   └── Step 5: Review & Customize
│   └── Live Preview Panel
└── Output View (Preview + Export)
```

### Page Structure

**Landing Page:**
- Full viewport hero with animated gradient background
- Centered headline with typewriter effect
- Subheadline explaining value proposition
- Primary CTA button with glow effect
- Trust indicators (support for major companies)
- Subtle animated grid pattern

**Builder Interface:**
- Split layout: Form (left 50%) | Preview (right 50%)
- Sticky header with progress bar
- Collapsible preview on mobile
- Floating action buttons

**Responsive Strategy:**
- Desktop (1200px+): Side-by-side layout
- Tablet (768px-1199px): Stacked with toggle
- Mobile (<768px): Full-width form with bottom sheet preview

## 4. Features & Interactions

### 4.1 Smart CV Generator (AI-Powered)

**Input Enhancement:**
- Accepts raw, unformatted text input
- AI analyzes content and identifies weak phrases
- Transforms basic descriptions into professional bullet points
- Adds measurable outcomes where data suggests impact

**Transformation Rules:**
| Input Pattern | Output Pattern |
|---------------|----------------|
| "built a website" | "Developed and deployed a full-stack web application" |
| "worked on" | "Contributed to" / "Led" / "Architected" |
| "used Node.js" | "Built REST APIs using Node.js and Express" |
| "helped with" | "Collaborated with cross-functional teams to" |
| no numbers | Adds estimated impact metrics |
| passive voice | Converts to active voice |

**AI Prompt Structure:**
```
You are a senior tech recruiter and staff engineer. Rewrite the following 
job description into a powerful, impact-driven bullet point for a CV.

Requirements:
- Start with strong action verbs (Developed, Architected, Led, Optimized)
- Include specific technologies mentioned
- Add measurable outcomes where implied
- Keep under 2 lines
- Sound confident and senior-level
- Focus on achievements, not tasks

Input: {user_input}
Output: {enhanced_bullet}
```

### 4.2 Best-in-Class CV Structure

**Header Section:**
- Full name: 24px, bold, white
- Target role: 16px, purple accent
- Contact row: Email | Phone | GitHub | LinkedIn | Portfolio (icons + text)

**Professional Summary:**
- 3-4 lines maximum
- Highlights: Years of experience, core technologies, key achievements
- Tone: Confident, specific, impact-focused

**Technical Skills (Grouped):**
- Core Stack (primary language + core concepts)
- Frameworks & Tools (frontend/backend frameworks, dev tools)
- Cloud & DevOps (AWS/Azure/GCP, CI/CD, containers)
- Databases (SQL, NoSQL, caching)

**Professional Experience:**
- Company | Role | Duration (right-aligned)
- 3-5 bullet points per role
- Format: Action verb + Technology + Result

**Projects Section:**
- Project name (bold) | Tech stack (purple tags)
- Description (1-2 lines)
- Key achievements (2-3 bullets)

**Education:**
- Degree | Institution | Year
- Notable achievements (optional)

**Optional Sections:**
- Certifications (with issuer and year)
- Achievements (awards, recognitions)
- Open Source Contributions

### 4.3 Role Customization

**Available Roles:**
- Software Engineer
- Full-Stack Developer
- Frontend Developer
- Backend Developer
- DevOps Engineer
- Mobile Developer

**Customization Logic:**
| Role | Skill Emphasis | Bullet Tone |
|------|----------------|-------------|
| Software Engineer | Generalist, problem-solving | System design, scalability |
| Full-Stack Developer | Frontend + Backend + DB | End-to-end solutions |
| Frontend Developer | React/Vue/Angular, CSS | UI/UX, performance |
| Backend Developer | APIs, databases, server | Scalability, reliability |
| DevOps Engineer | Cloud, CI/CD, containers | Automation, efficiency |
| Mobile Developer | iOS/Android/React Native | App performance, UX |

### 4.4 Live CV Preview

**Implementation:**
- Real-time updates as user types
- A4 aspect ratio (210mm × 297mm)
- Scale to fit viewport with zoom controls
- Page-break aware formatting
- Professional typography matching output

**Interactions:**
- Hover to highlight corresponding form section
- Click to edit (scrolls to form field)
- Zoom controls (+/-/fit)
- Toggle dark/light preview theme

### 4.5 Level Up Feature

**Activation:**
- Prominent button: "Make My CV Stronger"
- Animation: Rocket icon with thrust effect
- Processing: Sequential enhancement of each section

**Enhancement Levels:**
1. **Light** - Grammar, clarity, flow
2. **Medium** - Add impact metrics, strengthen verbs
3. **Strong** - Complete rewrite, senior-level tone

**Preview & Accept:**
- Side-by-side comparison (before/after)
- Highlighted changes
- Accept all / Accept individual / Reject

### 4.6 ATS Optimization Engine

**Optimization Techniques:**
- Keyword density analysis (2-3% ideal)
- Semantic keyword variations
- Clean, parseable structure (no tables, text boxes)
- Standard section headings
- Consistent date formatting
- No images or graphics

**Compatibility Check:**
- Visual indicator: "ATS Score" (0-100)
- Suggestions for improvement
- Warnings for problematic elements

### 4.7 Regional Customization

**South Africa Mode:**
- Format: DD/MM/YYYY dates
- Include: ID number field
- Tone: Professional, humble confidence
- Skills: Include visa status, relocation willingness
- CV Length: 2-3 pages acceptable

**International Mode:**
- Format: MM/DD/YYYY dates
- Exclude: ID number, photo
- Tone: Direct, achievement-focused
- Skills: Global tech stack emphasis
- CV Length: 1-2 pages preferred

**Toggle Behavior:**
- Smooth transition animation
- Format conversion for existing dates
- Tone adjustment suggestions

## 5. Component Inventory

### 5.1 Navigation & Progress

**Progress Bar:**
- States: Step 1-5 active, completed, upcoming
- Visual: Filled segments with step numbers
- Interaction: Click to navigate (if step completed)
- Animation: Smooth fill transition

**Step Indicator:**
- Current step highlighted with purple
- Completed steps show checkmark
- Future steps muted

### 5.2 Form Components

**Text Input:**
- Default: Dark background, subtle border
- Focus: Purple border glow, elevated shadow
- Error: Red border, error message below
- Success: Green checkmark icon

**Textarea:**
- Auto-expanding height
- Character count (optional)
- AI enhancement button (sparkle icon)

**Select/Dropdown:**
- Custom styled (not native)
- Search functionality for long lists
- Multi-select for skills

**Role Selector:**
- Card-based selection
- Icon + label for each role
- Selected state: Purple border + glow

### 5.3 Buttons

**Primary Button:**
- Background: Purple gradient
- Hover: Scale 1.02, increased glow
- Active: Scale 0.98
- Disabled: Muted, no interactions
- Loading: Spinner + "Processing..."

**Secondary Button:**
- Background: Transparent
- Border: Purple
- Hover: Purple background, white text

**Icon Button:**
- Circular, subtle background
- Hover: Background opacity increase

### 5.4 Cards

**Experience Card:**
- Company logo placeholder
- Role and duration
- Bullet points list
- Add/Edit/Delete actions
- Drag handle for reordering

**Project Card:**
- Tech stack tags
- Description preview
- Key achievements
- Link fields (GitHub, Live)

**Skill Category Card:**
- Category header
- Skill tags (removable)
- Add skill input

### 5.5 CV Preview Components

**CV Header:**
- Print-optimized layout
- Contact icons + text
- Professional spacing

**CV Section:**
- Clear heading hierarchy
- Consistent bullet styling
- Proper page margins

**CV Bullet:**
- Action verb highlighted
- Technology in purple
- Result in white

### 5.6 Feedback Components

**Toast Notification:**
- Success: Green left border
- Error: Red left border
- Info: Purple left border
- Auto-dismiss (5s)
- Manual dismiss button

**Loading States:**
- Skeleton screens for content
- Spinner for actions
- Progress bar for multi-step

**Empty States:**
- Friendly illustration
- Helpful message
- Clear CTA

## 6. Technical Approach

### Architecture
- Single HTML file with embedded React (via CDN)
- Tailwind CSS (via CDN)
- Babel standalone for JSX transformation
- Local state management with React hooks
- PDF export via html2pdf.js library

### State Management
```javascript
const [cvData, setCvData] = useState({
  personal: { name, email, phone, github, linkedin, portfolio, role, summary },
  experience: [{ company, role, startDate, endDate, bullets: [] }],
  projects: [{ name, techStack, description, achievements: [] }],
  skills: { core: [], frameworks: [], cloud: [], databases: [] },
  education: [{ degree, institution, year, achievements }],
  certifications: [],
  achievements: [],
  settings: { region: 'international', levelUp: false }
});
```

### AI Enhancement Engine
- Client-side prompt engineering
- Simulated AI responses (pattern-based transformation)
- Keyword optimization algorithms
- ATS scoring calculations

### PDF Generation
- html2canvas for rendering
- html2pdf for download
- A4 formatting with proper margins
- Print-optimized CSS

### Key Libraries (CDN)
- React 18
- ReactDOM
- Tailwind CSS
- Lucide Icons
- html2pdf.js
- Google Fonts (Inter, JetBrains Mono)

## 7. Interaction Flows

### Main User Journey
1. **Landing → Builder:** Click CTA → Fade transition → Step 1
2. **Form Filling:** Real-time preview updates
3. **AI Enhancement:** Click sparkle icon → Processing → Enhanced output
4. **Step Navigation:** Click next/previous → Slide animation
5. **Level Up:** Click button → Sequential enhancement → Comparison view
6. **Export:** Click download → PDF generation → Save dialog

### Error Handling
- Form validation on step change
- Required field indicators
- Helpful error messages
- Recovery suggestions

### Edge Cases
- Empty experience: Prompt to add or skip
- Very long content: Truncation with expand option
- Network issues: Local-only mode (AI features limited)
- PDF generation failure: Fallback to print dialog
