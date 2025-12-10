---
applyTo: "**"
excludeAgent: "coding-agent"
---

# Code Review Guide for zgzbus-webapp (Angular 18+)

## PR Description Template

**What changed**
- Clear summary of modifications and affected Angular modules/components/services
- Link to related issues, Azure DevOps tasks, or tickets

**Why**
- Business context and requirements
- Technical reasoning for Angular approach taken (e.g., why standalone component, why RxJS, etc.)

**Testing**
- [ ] Unit tests (Vitest/Jest) cover new Angular functionality
- [ ] Manual testing completed for user-facing changes
- [ ] Accessibility and performance considerations addressed

**Breaking Changes**
- List any API changes, behavioral modifications, or migration steps

---

## Angular-Specific Review Focus Areas

### Architecture & Patterns
- Are all new components **standalone**? (No NgModules unless justified)
- Is **dependency injection** used via `inject()` or constructor, not direct imports?
- Are **services** stateless and provided in root unless scoped intentionally?
- Is **RxJS** used for async flows, and are subscriptions managed (no memory leaks)?
- Are **signals** used for local state where appropriate?
- Is **routing** handled via Angular Router, with guards/resolvers for data and security?
- Are **assets** referenced via Angular CLI conventions (`src/assets`, `src/img`)?

### Code Quality
- Is all code in **TypeScript** with strict types (no implicit `any`)?
- Are **naming conventions** clear, English, and consistent?
- Is code **self-documenting** (minimal comments, clear intent)?
- Are **functions/components** small, focused, and single-responsibility?
- Is **error handling** robust and user-friendly (no silent failures)?

### UI/UX & Accessibility
- Are templates **semantic** and accessible (ARIA, labels, keyboard navigation)?
- Is **SCSS** organized and only referencing assets via correct URLs?
- Are legacy icon URLs (`/img/zgzbus-*.png`) supported and tested?

### Testing
- Are there **unit tests** for all new services/components?
- Is there **component testing** for UI logic?
- Is code coverage >80% for new code?
- Are **manual test steps** described for reviewers?

### Documentation
- Is README.md updated for new features/structure?
- Are public APIs documented with JSDoc if needed?
- Are migration steps clear for reviewers?

---

## Review Style

- Be specific and constructive in feedback
- Reference Angular best practices and official style guide
- Ask clarifying questions if code intent is unclear
- Prioritize maintainability, readability, and security
- Provide migration guides for significant changes

---

## Review Checklist

- [ ] Standalone components only
- [ ] No direct imports of services/components (use DI)
- [ ] No legacy AngularJS code or patterns
- [ ] All assets referenced via Angular CLI paths
- [ ] TypeScript strict mode, explicit types
- [ ] RxJS subscriptions managed
- [ ] Routing via Angular Router only
- [ ] Unit/component tests present and passing
- [ ] README and docs updated

---

## Review Comment Format

**Issue:**  
Describe what needs attention

**Suggestion:**  
Provide specific improvement with code example

**Why:**  
Explain the reasoning and benefits (especially for Angular best practices)

---

## Emojis for Review

- 🅰️ Angular best practice
- 🔒 Security
- ⚡ Performance
- 🧹 Code cleanup
- 📚 Documentation
- ✅ Good pattern
- 🚨 Critical/blocker
- ♿ Accessibility

---

Use this guide to ensure all code reviews help maintain a high-quality, maintainable, and modern Angular codebase for zgzbus-webapp.
