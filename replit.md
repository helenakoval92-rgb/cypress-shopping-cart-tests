# Overview

This is an automated end-to-end testing project built with Cypress for testing a shopping cart application on https://rahulshettyacademy.com/seleniumPractise/#/. The project validates core e-commerce functionality including product search, quantity adjustment, cart management, and item removal. It serves as a practice automation suite for learning and demonstrating Cypress testing capabilities.

## Recent Changes (November 3, 2025)

- ✅ Project fully configured and operational
- ✅ Cypress installed and all system dependencies resolved
- ✅ Support files created (cypress/support/e2e.js, cypress/support/commands.js)
- ✅ Test suite successfully passing (1 test, 100% pass rate)
- ✅ Workflow configured to run tests with `npm test`
- ✅ Complete README.md with setup and usage instructions
- ✅ .gitignore updated for Cypress artifacts

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Testing Framework
- **Cypress** - End-to-end testing framework chosen for its excellent developer experience, built-in waiting mechanisms, and real-time test execution feedback
- **JavaScript** - Primary language for test automation, providing familiarity and seamless integration with Cypress
- **Node.js** - Runtime environment enabling local test execution and package management

## Test Structure
- **Spec Pattern**: Tests organized in `cypress/e2e/**/*.spec.js` for clear separation and easy discovery
- **Single Test Suite**: Currently contains one comprehensive test scenario (`shopping.spec.js`) covering the complete shopping flow
- **Page Object Pattern**: Not implemented - tests use direct element selection with Cypress commands for simplicity

## Test Configuration
- **Base URL**: Configured in `cypress.config.js` to point to the target application, eliminating repetitive URL specifications
- **Viewport**: Fixed at 1280x720 for consistent test execution across environments
- **Video Recording**: Disabled to reduce storage overhead during test runs
- **Screenshots**: Enabled on failure to capture debugging information

## Test Execution Strategy
- **beforeEach Hook**: Ensures each test starts with a fresh page visit, maintaining test isolation
- **Explicit Waits**: Uses `cy.wait()` for time-based delays to handle dynamic content loading (not ideal but functional for this learning project)
- **Chained Commands**: Leverages Cypress's built-in retry logic and assertions for robust element interaction

## Custom Commands
- **Support Structure**: Framework in place (`cypress/support/commands.js`) for adding reusable custom commands, though none currently implemented
- **Global Configuration**: Central e2e support file imports custom commands for project-wide availability

# External Dependencies

## Testing Framework
- **cypress**: v15.5.0 (dev dependency) - Core testing framework providing browser automation, assertion library, and test runner

## Type Definitions
- **@types/node**: v22.13.11 - TypeScript definitions for Node.js APIs, enabling better IDE support and code completion

## Third-Party Services
- **Test Target**: https://rahulshettyacademy.com/seleniumPractise/#/ - External educational website used as the system under test (not controlled by this project)

## Runtime Requirements
- **Node.js**: Version 18.x or higher required for Cypress compatibility
- **npm**: Package manager for dependency installation and script execution

## Infrastructure
- No database connections
- No authentication services
- No API integrations beyond the target web application
- No cloud services or deployment pipelines configured