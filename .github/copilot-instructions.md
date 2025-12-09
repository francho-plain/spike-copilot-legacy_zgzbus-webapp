# Copilot Instructions for zgzbus-webapp

This is a legacy AngularJS web application for displaying bus times in Zaragoza (Spain). The app uses outdated technologies like Grunt, Bower, and AngularJS 1.x.

## Project Goals
- Modernize the application to use current best practices
- Migrate from AngularJS to the latest version of Angular
- Replace build tools (Grunt, Bower) with modern alternatives like Vite
- Update testing framework to modern testing libraries
- Maintain the core functionality of displaying bus stops and times

## Code Guidelines
- Prefer modern JavaScript/TypeScript features
- Use ES6+ syntax
- Follow Angular best practices for new components
- Maintain Spanish language support where appropriate
- Keep the UI/UX similar but improve performance and maintainability

## When suggesting changes:
1. Propose incremental modernization steps
2. Explain migration paths clearly
3. Suggest alternatives for deprecated AngularJS features
4. Recommend modern testing approaches
5. Consider accessibility and performance improvements
6. Do not close or mark tasks as completed without explicit user permission

## Context
- The app has controllers for main view and map
- Services for getting bus stops and times
- Uses SCSS for styling
- Has unit and e2e tests with Karma

## Language Policy

**All code, documentation, and comments MUST be written in English.**
- Code variable names, function names, class names → English
- Code comments and JSDoc → English (only when essential)
- Documentation files (*.md) → English
- Git commit messages → English
- PR descriptions → English
- Error messages and logs → English

**Comment Usage:**
- Comments should be minimal and only used when code intent is not obvious
- Prefer clear, self-documenting code over comments
- Use JSDoc only for public APIs and complex functions
- Avoid redundant comments that repeat what the code already says

**Commit Messages:**
- **Must follow Conventional Commits** (https://www.conventionalcommits.org/en/v1.0.0/)
- Format: `<type>(<scope>): <description>`
- Types: `feat`, `fix`, `docs`, `style`, `refactor`, `perf`, `test`, `chore`
- Scope: affected package/module (e.g., `web`, `api`, `tasks-domain`)
- Description: **starts with lowercase**, clear, concise, no period at end
- Breaking changes: add `!` before colon if applicable

**Examples:**
```
feat(web): implement DDD architecture with use cases
fix(api): correct task status update validation
docs(web): add DDD architecture guide
refactor(tasks-domain): simplify TaskStatus value object
test(api): add integration tests for task endpoints
chore(deps): upgrade TypeScript to 5.9
```

This ensures consistency across the codebase and facilitates collaboration with international teams.
## Agent Guidelines

### What Agents Should Do
- ✅ Ask clarifying questions if requirements are ambiguous
- ✅ Suggest improvements to architecture if they see issues
- ✅ Respect existing patterns and conventions
- ✅ Ensure types are explicit (no implicit `any`)
- ✅ Write self-documenting code with clear names
- ✅ Run type-check and linting before submitting
- ✅ Include tests for new functionality
- ✅ Document public APIs with JSDoc

### What Agents Should NOT Do
- ❌ Add comments explaining obvious code
- ❌ Use non-English in code, comments, or docs
- ❌ Mix business logic across layers
- ❌ Create new patterns without justification
- ❌ Leave console.log() or debug code
- ❌ Import domain code directly into components
- ❌ Create circular dependencies
- ❌ Ignore TypeScript errors or suppress them with comments

Always provide clear explanations for any code changes, especially when migrating from AngularJS patterns.