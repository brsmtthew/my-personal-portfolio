# Source Structure

This portfolio is organized by responsibility so files are easier to find.

```txt
src/
  App.tsx
  main.tsx
  index.css
  data/
    portfolio.ts        # Profile, skills, projects, experience, education content
  components/
    layout/             # Page frame components
      Header.tsx
      Footer.tsx
      index.ts
    sections/           # Main website sections
      Hero.tsx
      About.tsx
      Skills.tsx
      Projects.tsx
      Experience.tsx
      Education.tsx
      Contact.tsx
      index.ts
    ui/                 # Reusable shared UI components
      SectionHeading.tsx
      index.ts
```

Use `src/data/portfolio.ts` to edit content. Use `src/components/sections` to edit each visible page section.
