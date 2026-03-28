<p align="center">
  <img src="https://ik.imagekit.io/codingnest/codingnestfinal_bg.svg?updatedAt=1714659978004" alt="CodingNest Logo" width="300"/>
</p>

# CodingNest Bootcamp — Day 4 Assignment

## Crypto Portfolio Tracker

Welcome to your **Day 4 CodingNest Bootcamp assignment**.

In this assignment, you will build a **Crypto Portfolio Tracker** — similar to dashboards used in apps like CoinMarketCap.

The goal is to create a dynamic web application where users can add crypto assets, view real-time prices, calculate portfolio value, and visualize asset distribution using charts.

> 🤖 **This assignment must be built using [GitHub Copilot](https://github.com/features/copilot) inside [Visual Studio Code](https://code.visualstudio.com/).** Use Copilot to assist with writing code, suggesting logic, and completing tasks faster. Learning to work with AI tools is part of this assignment.

---

# Objective

Build an application where users can:

1. Add cryptocurrency assets to their portfolio
2. View real-time prices fetched from an API
3. See total portfolio value calculated dynamically
4. Visualize asset distribution using a chart

---

# Features to Implement

## 1. Add Crypto Assets

Allow users to add assets to their portfolio.

Each entry should include:

* Cryptocurrency name / symbol (e.g., Bitcoin, BTC)
* Quantity held

When added:

* Fetch the current price from the API
* Calculate and display the value of that holding
* Update the total portfolio value

---

## 2. Real-Time Price Display

Integrate with the **CoinGecko API** to fetch live crypto prices.

* Display the current price for each asset
* Show price in USD (or a currency of your choice)
* Handle price updates when the portfolio changes

---

## 3. Portfolio Value Calculations

For each asset, display:

* Current price
* Quantity held
* Total value (price × quantity)

Also display:

* **Total portfolio value** (sum of all asset values)

---

## 4. Portfolio Distribution Chart

Use **Chart.js** to render a chart showing asset distribution.

* Use a **Pie chart** or **Doughnut chart**
* Each segment should represent one crypto asset
* Label each segment with the asset name and percentage

Chart.js CDN:

```
https://cdn.jsdelivr.net/npm/chart.js
```

---

## 5. Remove Asset

Allow users to **remove an asset** from their portfolio.

* Add a remove/delete button on each asset card
* Update the chart and total value when an asset is removed

---

## 6. Data Persistence

Store the portfolio in **localStorage** so data persists after page refresh.

* Save portfolio on every add/remove action
* Load saved portfolio on page load
* Re-fetch prices for saved assets on load

---

## 7. API Integration

Use the following API to fetch crypto prices:

```
https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum&vs_currencies=usd
```

Replace `ids` with the coins the user has added.

Your application must:

* Fetch data using **Fetch API**
* Use **async/await**
* Parse and render response data
* Handle API errors gracefully

---

## 8. Loading & Empty States

Handle UI states properly:

* Show loader while fetching prices
* Show a message when the portfolio is empty
* Handle API errors gracefully (e.g., invalid coin name, network failure)

---

# Technologies to Use

Use the following technologies:

* HTML
* CSS
* JavaScript (Vanilla JS)
* Fetch API
* Chart.js (via CDN)
* localStorage

❌ Frameworks such as React, Vue, Angular, or libraries like jQuery are not allowed.

✅ **GitHub Copilot in VS Code is required** for this assignment.

---

# Expected Learning Outcomes

By completing this assignment, you will learn how to:

* Integrate **third-party APIs** for live data
* Perform **data transformation and calculations** on API responses
* Build a **dashboard-style UI** with cards and charts
* Use **Chart.js** to visualize data
* Use **localStorage** for portfolio persistence
* Work with **AI-assisted coding** using GitHub Copilot

---

# README Requirement

You must include a **`README.md`** file in your submission folder.

Your README should contain:

* Your name and GitHub username
* A brief description of what you built
* A link to your **hosted/live page** (GitHub Pages, Vercel, Netlify, etc.)
* Screenshots of your project (at least 1)
* Any challenges you faced and how you solved them

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

```bash
git clone https://github.com/YOUR_GITHUB_USERNAME/free-bootcamp-2026.git
```

---

### 3. Navigate to the Day-4 Folder

Place your solution inside the **day-4 folder**.

Example structure:

```
day-4/
  your-github-username/
    index.html
    style.css
    script.js
    README.md
```

---

### 4. Commit Your Code

```bash
git add .
git commit -m "Day 4 Assignment - Crypto Portfolio Tracker"
```

---

### 5. Push Your Changes

```bash
git push origin main
```

---

### 6. Create a Pull Request

Create a **Pull Request (PR)** from your fork to the main repository.

---

# Evaluation Criteria

Your submission will be evaluated based on:

* Correct API integration with CoinGecko
* Dynamic rendering of portfolio assets
* Accurate portfolio value calculations
* Chart.js integration and correct visualization
* Bookmark/persistence using localStorage
* README with hosted link and screenshots
* Code clarity and structure
* Evidence of GitHub Copilot usage (mentioned in README)

---

# Important Notes

* Use the CoinGecko API (no hardcoded prices)
* Ensure portfolio persists after page refresh
* Keep UI responsive and clean
* Handle API failures gracefully
* **Must include README.md with hosted page link**

---

# Pull Request Naming Format

```
Day-4 Assignment - <your-github-username>
```

### Example

```
Day-4 Assignment - ashutosh-dwivedi
```

---

# Pull Request Description Template

---

## Student Information

**Name:**
**GitHub Username:**
**Hosted Page Link:**

---

## Assignment Implemented

Day 4 — Crypto Portfolio Tracker

---

## Validation Checklist

* [ ] I have built the project using **GitHub Copilot in VS Code**
* [ ] My project is placed inside the `day-4/<github-username>/` folder
* [ ] I have included a `README.md` with a hosted page link
* [ ] The application runs correctly in the browser
* [ ] I have used **HTML, CSS, and Vanilla JavaScript only**
* [ ] I have fetched data from the **CoinGecko API**
* [ ] I have used **Fetch API with async/await**
* [ ] I have implemented **add asset functionality**
* [ ] I have implemented **portfolio value calculations**
* [ ] I have implemented **Chart.js distribution chart**
* [ ] I have implemented **remove asset functionality**
* [ ] I have used **localStorage for persistence**
* [ ] I have handled **loading and empty states**
* [ ] My code is properly formatted and readable
* [ ] I have tested my application before submitting
* [ ] I confirm that this is **my own work**

---

# Repository Structure Requirement

```
day-4/
  your-github-username/
    index.html
    style.css
    script.js
    README.md
```

Do **not place files directly inside `day-4`** without your username folder.

---

# Common Mistakes to Avoid

* Not using the CoinGecko API
* Hardcoding crypto prices
* Chart not updating when assets are added/removed
* Portfolio value not recalculating correctly
* Missing localStorage persistence
* Missing README.md or hosted page link
* Incorrect folder structure
* Not following PR naming format

---

# Final Reminder

Before submitting your Pull Request:

1. Test API fetching and price rendering
2. Verify portfolio calculations are correct
3. Check chart updates on add/remove
4. Check portfolio persistence after page refresh
5. Ensure README.md includes your hosted page link

Once everything works correctly, submit your **Pull Request**.

---

You're now building **real-world data-driven dashboards** — this is exactly how fintech apps are built 🚀
