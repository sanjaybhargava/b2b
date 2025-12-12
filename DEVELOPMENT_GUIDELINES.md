# Development Guidelines - B2B Website

**Last Updated:** December 12, 2025
**Purpose:** Ensure robust, accessible, and maintainable code across all future development

---

## 🎯 Core Principles

1. **Mobile-First Always** - Design and build for mobile screens first, then scale up
2. **Accessibility is Required** - WCAG AA compliance is mandatory, not optional
3. **User Feedback Matters** - Always provide visual feedback for user actions
4. **No White-on-White** - Always check color contrast before implementing
5. **Test on Real Devices** - Chrome DevTools is not enough
6. **Document as You Go** - Update documentation with every significant change

---

## 📱 Mobile-First Development

### Design Phase
- [ ] Sketch mobile layout (320px-375px) before desktop
- [ ] Verify all text is readable at smallest screen size
- [ ] Ensure touch targets are minimum 44x44px
- [ ] Check color contrast with tools (WebAIM Contrast Checker)
- [ ] Plan for landscape orientation on mobile

### Implementation Phase
```typescript
// ✅ GOOD: Mobile-first with progressive enhancement
<div className="text-sm md:text-base lg:text-lg">

// ❌ BAD: Desktop-first (avoid this)
<div className="text-lg md:text-sm">
```

### Breakpoints (Tailwind)
- **Mobile:** `< 768px` (default, no prefix)
- **Tablet:** `md:` (768px+)
- **Desktop:** `lg:` (1024px+)
- **Large Desktop:** `xl:` (1280px+)

### Touch Targets
```typescript
// ✅ GOOD: Adequate touch target
<button className="px-6 py-3">Click Me</button>

// ❌ BAD: Too small for mobile
<button className="px-2 py-1">Click Me</button>
```

---

## 🎨 Color & Contrast Standards

### Approved Color Combinations

| Foreground | Background | Use Case | Contrast Ratio |
|-----------|-----------|----------|----------------|
| gray-900 | white | Body text | 16.5:1 ✅ |
| gray-900 | emerald-50 | Text on sage green | 15.8:1 ✅ |
| gray-600 | white | Secondary text | 7.0:1 ✅ |
| gray-600 | emerald-50 | Secondary on sage | 6.7:1 ✅ |
| white | emerald-600 | Buttons | 4.8:1 ✅ |
| gray-300 | gray-900 | Footer text | 9.7:1 ✅ |

### ❌ Avoid These Combinations
- emerald-600 on emerald-50 (fails contrast)
- gray-500 on emerald-50 (borderline)
- emerald-400 on white (too light)
- Any light text on light background

### Checking Contrast
Before implementing any color combination:
1. Visit https://webaim.org/resources/contrastchecker/
2. Enter hex values from Tailwind config
3. Verify ratio is at least 4.5:1 for text, 3:1 for large text
4. Document approved combinations

---

## ♿ Accessibility Requirements (WCAG AA)

### 1. Keyboard Navigation
**Every interactive element must be keyboard accessible**

```typescript
// ✅ GOOD: Proper focus indicators
<Link
  href="/about"
  className="focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2"
>
  About
</Link>

// ❌ BAD: No focus indicator
<Link href="/about" className="outline-none">
  About
</Link>
```

**Testing:** Press Tab key repeatedly - you should see visible focus indicators on every link/button

### 2. Screen Reader Support

```typescript
// ✅ GOOD: Descriptive labels
<button aria-label="Close navigation menu" onClick={closeMenu}>
  <XIcon />
</button>

// ❌ BAD: No label for icon-only button
<button onClick={closeMenu}>
  <XIcon />
</button>
```

**Testing:** Use VoiceOver (Mac) or NVDA (Windows) to navigate the page

### 3. Form Accessibility

```typescript
// ✅ GOOD: Associated label
<label htmlFor="email" className="...">Email</label>
<input id="email" name="email" type="email" />

// ❌ BAD: No association
<label>Email</label>
<input name="email" type="email" />
```

### 4. Alternative Text

```typescript
// ✅ GOOD: Descriptive alt text
<Image
  src="/comparison.png"
  alt="Comparison of wealth management workflow without AI versus with AI-powered tools"
  width={600}
  height={600}
/>

// ❌ BAD: Generic alt text
<Image src="/comparison.png" alt="image" width={600} height={600} />
```

### 5. Reduced Motion Preference

Always respect user's motion preferences:

```css
/* In globals.css */
@media (prefers-reduced-motion: reduce) {
  .fade-in {
    opacity: 1 !important;
    transform: none !important;
    transition: none !important;
  }
}
```

---

## 🎭 User Feedback Patterns

### Loading States
**Always show feedback for async operations**

```typescript
const [isLoading, setIsLoading] = useState(false);

const handleSubmit = async () => {
  setIsLoading(true);
  try {
    await submitForm();
  } finally {
    setIsLoading(false);
  }
};

// Button with loading state
<button
  disabled={isLoading}
  className={isLoading ? 'opacity-50 cursor-not-allowed' : ''}
>
  {isLoading ? 'Submitting...' : 'Submit'}
</button>
```

### Error States
**Show clear, actionable error messages**

```typescript
// ✅ GOOD: Specific error message
{errors.email && (
  <p className="text-red-500 text-sm mt-2">
    Please enter a valid email address
  </p>
)}

// ❌ BAD: Vague error
{errors.email && <p className="text-red-500">Error</p>}
```

### Success States
**Confirm successful actions**

```typescript
// Show success message after form submission
<div className="bg-emerald-50 border-2 border-emerald-200 p-4 rounded-lg">
  <p className="text-emerald-800">✓ Form submitted successfully!</p>
</div>
```

---

## 🔒 Preventing Common Bugs

### 1. Mobile Menu Scroll Lock
```typescript
// Always prevent body scroll when menu is open
useEffect(() => {
  if (isMenuOpen) {
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = 'unset';
  }
  return () => {
    document.body.style.overflow = 'unset';
  };
}, [isMenuOpen]);
```

### 2. Double Submission Prevention
```typescript
// Disable button during submission
const [isSubmitting, setIsSubmitting] = useState(false);

<button
  type="submit"
  disabled={isSubmitting}
  className={isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}
>
  {isSubmitting ? 'Processing...' : 'Submit'}
</button>
```

### 3. Form Validation
```typescript
// Validate before submission
const validateForm = () => {
  const errors: Record<string, string> = {};

  if (!email.trim()) {
    errors.email = 'Email is required';
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    errors.email = 'Please enter a valid email';
  }

  return errors;
};
```

### 4. Image Optimization
```typescript
// Use Next.js Image component with proper dimensions
<Image
  src="/photo.jpg"
  alt="Descriptive alt text"
  width={600}
  height={400}
  priority={isAboveTheFold}
  placeholder="blur"
  className="w-full h-auto"
/>
```

---

## 🧪 Testing Checklist

### Before Every Commit
- [ ] Test on Chrome desktop
- [ ] Test on Firefox desktop
- [ ] Test on Safari (if on Mac)
- [ ] Resize browser window to mobile size (375px)
- [ ] Tab through all interactive elements
- [ ] Check console for errors/warnings
- [ ] Run `npm run build` to check for build errors

### Before Every Deploy
- [ ] Test on real iPhone (Safari)
- [ ] Test on real Android device (Chrome)
- [ ] Test with screen reader (VoiceOver/NVDA)
- [ ] Test with "Reduce Motion" enabled in OS
- [ ] Test form submissions end-to-end
- [ ] Check all images load properly
- [ ] Verify no broken links
- [ ] Check Lighthouse score (aim for 90+)

### Responsive Testing Sizes
- **iPhone SE:** 375x667px
- **iPhone 12/13:** 390x844px
- **Android (small):** 360x640px
- **iPad:** 768x1024px
- **iPad Pro:** 1024x1366px
- **Desktop:** 1920x1080px

---

## 📝 Code Style Guide

### TypeScript
```typescript
// ✅ GOOD: Explicit types
interface FormData {
  fullName: string;
  email: string;
  phone: string;
}

const [formData, setFormData] = useState<FormData>({
  fullName: '',
  email: '',
  phone: '',
});

// ❌ BAD: Implicit any types
const [formData, setFormData] = useState({
  fullName: '',
  email: '',
});
```

### Component Structure
```typescript
// ✅ GOOD: Clear component structure
export default function MyComponent() {
  // 1. State declarations
  const [isOpen, setIsOpen] = useState(false);

  // 2. Effects
  useEffect(() => {
    // effect logic
  }, []);

  // 3. Event handlers
  const handleClick = () => {
    // handler logic
  };

  // 4. Render
  return (
    <div>
      {/* component JSX */}
    </div>
  );
}
```

### Naming Conventions
- **Components:** PascalCase (`Navigation`, `DemoForm`)
- **Functions:** camelCase (`handleSubmit`, `validateForm`)
- **Constants:** SCREAMING_SNAKE_CASE (`MAX_UPLOAD_SIZE`)
- **CSS Classes:** kebab-case (handled by Tailwind)
- **Files:** kebab-case (`demo-page.tsx`, `use-form-validation.ts`)

---

## 📦 File Organization

### When to Create New Files
```
✅ Create new file when:
- Component exceeds 200 lines
- Logic can be reused in multiple places
- Component has complex state management

❌ Don't create new file for:
- Simple 10-line components
- One-off utility functions
- Single-use hooks
```

### Folder Structure
```
/app
  /page/
    page.tsx          # Page component
    layout.tsx        # Page layout
/components
  /ui/                # Reusable UI components
    Button.tsx
    Input.tsx
  Navigation.tsx      # Feature components
  Footer.tsx
/lib
  /utils/             # Utility functions
  /hooks/             # Custom hooks
  /types/             # TypeScript types
```

---

## 🚀 Git Workflow

### Commit Message Format
```
Type: Brief description (50 chars or less)

Longer explanation of what changed and why (optional)

- Bullet points for multiple changes
- Reference issues if applicable

🤖 Generated with [Claude Code](https://claude.com/claude-code)

Co-Authored-By: Claude Sonnet 4.5 <noreply@anthropic.com>
```

### Commit Types
- `feat:` New feature
- `fix:` Bug fix
- `docs:` Documentation changes
- `style:` Code style/formatting (no logic change)
- `refactor:` Code refactoring
- `test:` Adding tests
- `chore:` Maintenance tasks

### Example Commits
```bash
# Good commit
git commit -m "fix: Prevent body scroll when mobile menu is open

Added useEffect to lock body overflow when isMenuOpen is true.
Fixes issue where users could scroll page behind open menu."

# Bad commit (too vague)
git commit -m "fixed bug"
```

### Before Pushing
```bash
# 1. Check what changed
git status
git diff

# 2. Review staged changes
git diff --staged

# 3. Make sure build works
npm run build

# 4. Push
git push origin main
```

---

## 📚 Documentation Standards

### When to Update Documentation
- ✅ Adding new feature or page
- ✅ Changing color scheme
- ✅ Modifying navigation structure
- ✅ Fixing critical bugs
- ✅ Updating dependencies
- ✅ Changing deployment process

### Files to Keep Updated
1. **claude.md** - Session notes and project overview
2. **CODE_AUDIT.md** - Update after each audit
3. **FIXES_APPLIED.md** - Document each fix batch
4. **DEVELOPMENT_GUIDELINES.md** - This file (add new patterns)
5. **README.md** - User-facing documentation

### Code Comments
```typescript
// ✅ GOOD: Explains WHY, not WHAT
// Prevent body scroll when mobile menu is open
// iOS Safari requires this for proper overlay behavior
useEffect(() => {
  if (isMenuOpen) {
    document.body.style.overflow = 'hidden';
  }
}, [isMenuOpen]);

// ❌ BAD: Explains obvious code
// Set overflow to hidden
document.body.style.overflow = 'hidden';
```

---

## 🔍 Code Review Checklist

### Before Considering Code "Done"
- [ ] Tested on mobile and desktop
- [ ] All interactive elements have focus indicators
- [ ] Color contrast passes WCAG AA
- [ ] Loading states implemented for async operations
- [ ] Error handling added
- [ ] TypeScript types are explicit (no `any`)
- [ ] No console.log statements left in code
- [ ] Images have descriptive alt text
- [ ] Forms have proper labels
- [ ] Responsive at all breakpoints
- [ ] No white-on-white or poor contrast issues
- [ ] Documentation updated if needed
- [ ] Build succeeds (`npm run build`)

---

## 🎓 Learning Resources

### Accessibility
- [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/)
- [WCAG 2.1 Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)
- [a11y Project Checklist](https://www.a11yproject.com/checklist/)

### Mobile Development
- [Mobile First Design](https://www.lukew.com/ff/entry.asp?933)
- [Touch Target Sizes](https://www.nngroup.com/articles/touch-target-size/)

### Next.js Best Practices
- [Next.js Documentation](https://nextjs.org/docs)
- [Next.js Image Optimization](https://nextjs.org/docs/basic-features/image-optimization)

### Tailwind CSS
- [Tailwind Documentation](https://tailwindcss.com/docs)
- [Tailwind Responsive Design](https://tailwindcss.com/docs/responsive-design)

---

## 🚨 Red Flags (Stop and Review)

If you see any of these, pause and reconsider:

1. **No TypeScript types** - Add explicit types
2. **No loading state** for async operation - Add feedback
3. **No focus indicators** on interactive elements - Add them
4. **Light text on light background** - Check contrast
5. **No alt text** on images - Add descriptive text
6. **No form validation** - Add before submission
7. **Hardcoded values** that should be dynamic - Make configurable
8. **Large files** (>300 lines) - Consider splitting
9. **Duplicate code** in multiple places - Create reusable component
10. **No error handling** for API calls - Add try/catch

---

## 💡 Quick Reference

### Common Patterns

**Loading State:**
```typescript
const [isLoading, setIsLoading] = useState(false);
```

**Focus Ring:**
```typescript
className="focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2"
```

**Disabled State:**
```typescript
disabled={isSubmitting}
className={isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}
```

**Touch Target:**
```typescript
className="px-6 py-3"  // Minimum for comfortable tapping
```

**Responsive Text:**
```typescript
className="text-sm md:text-base lg:text-lg"
```

**Screen Reader Only:**
```typescript
className="sr-only"  // Visible to screen readers only
```

---

## 🎯 Success Metrics

### Code Quality Goals
- **Lighthouse Score:** 90+ (Performance, Accessibility, Best Practices, SEO)
- **Type Coverage:** 100% (no `any` types)
- **Build Time:** < 30 seconds
- **Bundle Size:** < 500KB (gzipped)
- **Test Coverage:** 80%+ (when tests are added)

### User Experience Goals
- **Mobile Load Time:** < 3 seconds
- **Time to Interactive:** < 2 seconds
- **First Contentful Paint:** < 1.5 seconds
- **Zero JS Errors** in console
- **Zero Accessibility Errors** (automated tools)

---

## 📞 Questions & Support

If you're unsure about any of these guidelines:
1. Refer to existing code for patterns
2. Check the audit reports (CODE_AUDIT.md)
3. Test on real devices when possible
4. When in doubt, prioritize accessibility and mobile UX

**Remember:** It's better to ask and get it right than to rush and create technical debt.

---

**Last Updated:** December 12, 2025
**Version:** 1.0
**Status:** Active and enforced for all development

---

*These guidelines are living documents. Update them as new patterns emerge or lessons are learned.*
