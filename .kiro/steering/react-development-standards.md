# React Development Standards for Synapse Social

## Project Setup Requirements

- **Build Tool**: Vite for fast development and building
- **Styling**: Tailwind CSS with custom design system
- **Icons**: Lucide React for consistent iconography
- **Components**: Functional components with hooks

## Code Organization

```
src/
  components/
    ui/           # Reusable UI components (Button, etc.)
    Header.jsx    # Navigation component
    Hero.jsx      # Hero section
    Story.jsx     # New story section
    Features.jsx  # Features showcase
    About.jsx     # About/philosophy section
    Contact.jsx   # Contact form and info
    Footer.jsx    # Footer component
  App.jsx         # Main app component
  main.jsx        # Entry point
  App.css         # Global styles and Tailwind config
```

## Component Standards

- Use functional components with hooks
- Props should be destructured in function parameters
- Use TypeScript-style JSDoc comments for prop documentation
- Implement proper error boundaries where needed

## Styling Guidelines

- Use Tailwind utility classes primarily
- Custom CSS only for complex animations or unique designs
- Maintain existing color scheme (blue-teal gradients)
- Responsive design with mobile-first approach
- Use existing animation classes (animate-blob, etc.)

## Performance Requirements

- Lazy load images and heavy components
- Optimize bundle size with proper imports
- Implement smooth scrolling and transitions
- Page load time under 3 seconds
- Smooth 60fps animations

## Accessibility Standards

- Semantic HTML elements
- Proper ARIA labels and roles
- Keyboard navigation support
- Color contrast compliance (WCAG 2.1 AA)
- Screen reader compatibility

## Testing Approach

- Component unit tests for critical functionality
- Responsive design testing across devices
- Cross-browser compatibility testing
- Performance testing and optimization
- Accessibility testing with automated tools
