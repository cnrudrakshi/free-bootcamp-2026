

<p align="center">
  <img src="https://ik.imagekit.io/codingnest/codingnestfinal_bg.svg?updatedAt=1714659978004" alt="CodingNest Logo" width="300"/>
</p>

# CodingNest Bootcamp — Day 1 Assignment

## Personal Finance Dashboard

Welcome to your **first CodingNest Bootcamp assignment**.

In this assignment, you will build a **Personal Finance Dashboard** similar to expense tracking applications like Splitwise.

The goal is to build a simple web application where users can:

* Track daily expenses
* Categorize transactions
* View all transactions in a table
* Visualize spending using charts

This assignment focuses on **core frontend development skills** including DOM manipulation, browser storage, and data visualization.

---

# UI Design

Follow the UI design provided here:

**Design Link**

[https://codingnest-bootcamp-day-1.figma.site](https://codingnest-bootcamp-day-1.figma.site)

Your implementation should match the layout and components shown in the design.

---

# Objective

Build a dashboard where users can:

1. Add expenses
2. View all transactions
3. Categorize spending
4. Visualize spending analytics

All data must persist using **browser localStorage**.

---

# Features to Implement

## 1. Expense Input Form

Create a form where users can enter expense details.

The form should allow users to add:

* Expense title / description
* Amount
* Category
* Date (if present in the design)

When the form is submitted:

* The expense should be added to the dashboard
* The UI should update dynamically

---

## 2. Transaction Table

Display all recorded expenses in a **table format**.

Each transaction should include:

* Expense name
* Category
* Amount
* Date (if present)

Whenever a new expense is added, the table should **update automatically**.

---

## 3. Expense Categories

Expenses should be grouped into categories such as:

* Food
* Travel
* Bills
* Shopping
* Others

These categories will be used for **analytics visualization**.

---

## 4. Spending Analytics Chart

Integrate **Chart.js** to display spending analytics.

The chart should visualize **how money is distributed across categories**.

Possible chart types include:

* Pie chart
* Doughnut chart
* Bar chart

The chart should **update automatically when expenses change**.

---

## 5. Data Persistence

All data must be stored using **localStorage**.

Your application should:

* Save expenses to localStorage
* Load saved expenses when the page reloads

This ensures users do not lose their data.

---

# Technologies to Use

Use the following technologies:

* HTML
* CSS
* JavaScript (Vanilla JS)
* Chart.js
* localStorage

Frameworks such as **React, Vue, Angular, or libraries like jQuery are not allowed** for this assignment.

---

# Expected Learning Outcomes

By completing this assignment, you will learn how to:

* Work with **HTML forms**
* Use **JavaScript DOM manipulation**
* Dynamically update UI components
* Store data using **localStorage**
* Visualize data using **Chart.js**
* Build a simple **dashboard interface**

---

# Submission Instructions

You must submit your assignment by creating a **Pull Request (PR)** to the CodingNest Bootcamp repository.

Repository:

[https://github.com/codingnestindia/free-bootcamp-2026](https://github.com/codingnestindia/free-bootcamp-2026)

---

# Steps to Submit

### 1. Fork the Repository

Fork the repository to your GitHub account.

---

### 2. Clone Your Fork

Clone your forked repository to your local machine.

```bash
git clone https://github.com/YOUR_GITHUB_USERNAME/free-bootcamp-2026.git
```

---

### 3. Navigate to the Day-1 Folder

Place your solution inside the **day-1 folder**.

Example structure:

```
day-1/
  your-github-username/
    index.html
    style.css
    script.js
```

Each student should create a **folder named after their GitHub username**.

---

### 4. Commit Your Code

Add and commit your solution.

```bash
git add .
git commit -m "Day 1 Assignment - Expense Dashboard"
```

---

### 5. Push Your Changes

```bash
git push origin main
```

---

### 6. Create a Pull Request

Go to the repository and create a **Pull Request (PR)** from your fork.

Your PR should include:

* Your Day 1 project implementation
* All necessary files

---

# Evaluation Criteria

Your submission will be evaluated based on:

* Correct functionality
* Code clarity and structure
* UI matching the design
* Proper JavaScript usage
* Chart.js integration
* Data persistence using localStorage

---

# Important Notes

* Follow the UI design provided.
* Do not copy code from external sources.
* Write clean and readable code.
* Ensure your project runs correctly.

---

This assignment is designed to help you understand how **real dashboards are built using frontend technologies**.

Take your time, experiment, and enjoy building your **first CodingNest Bootcamp project**.


# Pull Request Naming Format

To keep the repository organized, **all Pull Requests must follow the naming format below**.

### PR Title Format

```
Day-1 Assignment - <your-github-username>
```

### Example

```
Day-1 Assignment - ashutosh-dwivedi
```

This allows maintainers to quickly identify submissions and track student progress.

---

# Pull Request Description Template

When creating your Pull Request, include the following description.

You may copy and paste the template below into the PR description.

---

## Student Information

**Name:**
**GitHub Username:**

---

## Assignment Implemented

Day 1 — Personal Finance Dashboard

---

## Validation Checklist

Before submitting your Pull Request, ensure the following requirements are met.

Please check all applicable boxes.

* [✅] I have followed the UI provided in the Figma design
* [✅] My project is placed inside the `day-1/<github-username>/` folder
* [✅] The application runs correctly in the browser
* [ ] I have used **HTML, CSS, and Vanilla JavaScript only**
* [✅] I have implemented **localStorage** to persist expense data
* [✅] I have integrated **Chart.js** for spending visualization
* [✅] Transactions update dynamically when a new expense is added
* [✅] My code is properly formatted and readable
* [✅] I have tested my application before submitting
* [✅] I confirm that this is **my own work**

---

# Repository Structure Requirement

Your code **must be placed inside the `day-1` directory**.

Folder structure example:

```
day-1/
  your-github-username/
    index.html
    style.css
    script.js
```

Do **not place files directly inside `day-1`** without your username folder.

---

# Common Mistakes to Avoid

* Submitting files outside the `day-1` folder
* Not following the PR title format
* Forgetting to include Chart.js
* Not using localStorage
* Submitting incomplete UI

Pull Requests that do not follow the guidelines may be **requested for changes before review**.

---

# Final Reminder

Before submitting your Pull Request:

1. Run your project locally
2. Verify the UI matches the design
3. Ensure the chart updates correctly
4. Confirm data persists after refreshing the page

Once everything works correctly, create your **Pull Request**.

Happy coding 🚀

