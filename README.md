📌 Playwright Data-Driven Test Automation Framework
📖 Overview

This project is a data-driven Playwright test automation framework built using TypeScript.

The goal of this framework is to:

Minimize code duplication

Improve scalability

Drive test scenarios dynamically using JSON data

Maintain clean, reusable test architecture

The test suite validates task management scenarios in the Demo App:

🔗 https://animated-gingersnap-8cf7f2.netlify.app/

🏗 Framework Architecture
playwright-asana-framework/
│
├── tests/               # Test specs
├── pages/               # Page Object Models
├── test-data/           # JSON-driven test data
├── playwright.config.ts # Playwright configuration
├── package.json
└── README.md

🔹 Design Approach

Page Object Model (POM) for reusability

Data-driven testing using JSON

Single test template that dynamically runs multiple scenarios

Clean separation of:

Test logic

Test data

Page actions

🚀 Setup Instructions
1️⃣ Clone the Repository
git clone https://github.com/YOUR_USERNAME/playwright-asana-framework.git
cd playwright-asana-framework

2️⃣ Install Dependencies
npm install

3️⃣ Install Playwright Browsers
npx playwright install

🔐 Login Automation

The test suite automates login using:

Email: admin

Password: password123

Login is handled programmatically before validating tasks.

📊 Data-Driven Implementation

All test cases are defined inside a JSON file:

Example structure:

[
  {
    "application": "Web Application",
    "task": "Implement user authentication",
    "column": "To Do",
    "tags": ["Feature", "High Priority"]
  }
]


The test dynamically:

Logs in

Navigates to the correct application

Locates the task in the expected column

Verifies associated tags

This allows adding new test cases without modifying test logic.

🧪 Executing Tests

Run all tests:

npx playwright test


Run with UI mode:

npx playwright test --ui


Run in headed mode:

npx playwright test --headed

📈 Why Data-Driven?

Instead of writing 6 separate test files:

One test template loops through test data

Reduces duplication

Improves maintainability

Makes adding new cases scalable

To add a new test:

Simply add a new object to the JSON file

No test logic changes required.

✅ Acceptance Criteria Coverage

✔ Login automation
✔ Web Application task validations
✔ Mobile Application task validations
✔ Tag verification
✔ Data-driven implementation
✔ JavaScript/TypeScript used
✔ Clean and scalable structure

🎥 Walkthrough

A short video walkthrough explaining:

Framework design decisions

Data-driven approach

Playwright configuration

How to scale the framework

(Submitted separately as required)

🛠 Technologies Used

Playwright

TypeScript

Node.js

JSON (Data-Driven Testing)

👩‍💻 Author
Sowjanya Devi Surisetty

🔥 Key Highlights

Clean Git hygiene

Reusable Page Object Model

Scalable architecture

Easy addition of new test cases

Industry-standard best practices
