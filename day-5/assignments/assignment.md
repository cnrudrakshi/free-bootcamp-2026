<p align="center">
  <img src="https://ik.imagekit.io/codingnest/codingnestfinal_bg.svg?updatedAt=1714659978004" alt="CodingNest Logo" width="300"/>
</p>

# CodingNest Bootcamp — Day 5 Assignment

## Event Discovery Platform

Welcome to your **Day 5 CodingNest Bootcamp assignment**.

In this assignment, you will build an **Event Discovery Platform** — similar to services like Eventbrite.

The goal is to create a dynamic web application where users can search for events, filter by city or category, view event details, and save their favorite events.

> 🤖 **This assignment must be built using [GitHub Copilot](https://github.com/features/copilot) inside [Visual Studio Code](https://code.visualstudio.com/).** Use Copilot to assist with writing code, suggesting logic, and completing tasks faster. Learning to work with AI tools is part of this assignment.

---

# Objective

Build an application where users can:

1. Search for events by name or keyword
2. Filter events by city or category
3. View event details in a card-based layout
4. Save and persist favorite events
5. View event locations on a map

---

# Features to Implement

## 1. Event Search Bar

Create a search input where users can search for events by name or keyword.

When the user types or submits:

* Fetch events from the API
* Filter results based on the search query
* Update the UI dynamically

---

## 2. Filters (City / Category)

Provide filters such as:

* City (e.g., Delhi, Mumbai, Bangalore, Remote)
* Category (e.g., Music, Tech, Sports, Food, Art)

These filters should:

* Work alongside the search query
* Dynamically update the event listings

---

## 3. Event Cards (Dynamic Layout)

Display events in a **CSS Grid card-based layout**.

Each event card should include:

* Event Name
* Date and Time
* Location / City
* Category
* Short Description
* A link to view more details or register

The event list should:

* Render dynamically from API data
* Update when search or filters change

---

## 4. Save Favorite Events

Allow users to **save/favorite events**.

Functionality:

* Add/remove favorite with a button or icon (e.g., ❤️ / ⭐)
* Store saved events in **localStorage**
* Persist saved events after page refresh
* Optionally show a **"Saved Events"** section or page

---

## 5. Map Integration

Display event locations on a map using **Leaflet.js** (free, open-source map library).

* Show a map with markers for event locations
* Each marker should show the event name on click
* Use city/location data from the API to place markers

Leaflet.js CDN:

```
https://unpkg.com/leaflet@1.9.4/dist/leaflet.js
https://unpkg.com/leaflet@1.9.4/dist/leaflet.css
```

---

## 6. API Integration

Use the following events API:

```
https://fakestoreapi.com/products
```

> **Note:** Since a dedicated events API may require authentication, you may use any **free public events API** you find, or use mock/dummy JSON data served from a free host like [MockAPI](https://mockapi.io/) or [JSONbin](https://jsonbin.io/). Document the API you used in your README.

Your application must:

* Fetch data using **Fetch API**
* Use **async/await**
* Parse and render response data
* Handle errors properly

---

## 7. Loading & Empty States

Handle UI states properly:

* Show a loader while fetching events
* Show "No events found" when no results match
* Handle API errors gracefully

---

# Technologies to Use

Use the following technologies:

* HTML
* CSS (Grid layout required)
* JavaScript (Vanilla JS)
* Fetch API
* Leaflet.js (via CDN) for map
* localStorage

❌ Frameworks such as React, Vue, Angular, or libraries like jQuery are not allowed.

✅ **GitHub Copilot in VS Code is required** for this assignment.

---

# Expected Learning Outcomes

By completing this assignment, you will learn how to:

* Work with **search inputs and filtering logic**
* Fetch and render **API data dynamically**
* Build reusable **card-based UI components** using CSS Grid
* Integrate **map libraries** for location-based data
* Use **localStorage** for saving user preferences
* Handle **real-world UI states (loading, empty, error)**
* Build a **location-aware discovery platform**
* Work with **AI-assisted coding** using GitHub Copilot

---

# README Requirement

You must include a **`README.md`** file in your submission folder.

Your README should contain:

* Your name and GitHub username
* A brief description of what you built
* A link to your **hosted/live page** (GitHub Pages, Vercel, Netlify, etc.)
* Screenshots of your project (at least 1)
* The API you used (with a link)
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

### 3. Navigate to the Day-5 Folder

Place your solution inside the **day-5 folder**.

Example structure:

```
day-5/
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
git commit -m "Day 5 Assignment - Event Discovery Platform"
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

* Correct API integration and dynamic rendering
* Search and filter functionality
* CSS Grid layout for event cards
* Map integration with Leaflet.js
* Save/favorite feature with localStorage persistence
* README with hosted link and screenshots
* Code clarity and structure
* Evidence of GitHub Copilot usage (mentioned in README)

---

# Important Notes

* Use a real API or documented mock data (no fully hardcoded events)
* Ensure saved events persist after page refresh
* CSS Grid layout is required for event cards
* Keep UI responsive and clean
* Handle API failures gracefully
* **Must include README.md with hosted page link**

---

# Pull Request Naming Format

```
Day-5 Assignment - <your-github-username>
```

### Example

```
Day-5 Assignment - ashutosh-dwivedi
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

Day 5 — Event Discovery Platform

---

## Validation Checklist

* [ ] I have built the project using **GitHub Copilot in VS Code**
* [ ] My project is placed inside the `day-5/<github-username>/` folder
* [ ] I have included a `README.md` with a hosted page link
* [ ] The application runs correctly in the browser
* [ ] I have used **HTML, CSS, and Vanilla JavaScript only**
* [ ] I have fetched data from an events API
* [ ] I have used **Fetch API with async/await**
* [ ] I have implemented **search functionality**
* [ ] I have implemented **filters (city/category)**
* [ ] I have implemented **CSS Grid layout** for event cards
* [ ] I have implemented **save/favorite feature**
* [ ] I have used **localStorage for persistence**
* [ ] I have integrated **Leaflet.js map** with event markers
* [ ] I have handled **loading and empty states**
* [ ] My code is properly formatted and readable
* [ ] I have tested my application before submitting
* [ ] I confirm that this is **my own work**

---

# Repository Structure Requirement

```
day-5/
  your-github-username/
    index.html
    style.css
    script.js
    README.md
```

Do **not place files directly inside `day-5`** without your username folder.

---

# Common Mistakes to Avoid

* Hardcoding event data without any API
* Filters not working correctly
* Missing CSS Grid layout
* Map not showing or markers not placed correctly
* Saved events not persisting after refresh
* Missing README.md or hosted page link
* Incorrect folder structure
* Not following PR naming format

---

# Final Reminder

Before submitting your Pull Request:

1. Test API fetching and event rendering
2. Verify search and filters work correctly
3. Check the map loads with correct markers
4. Check saved events persist after page refresh
5. Ensure README.md includes your hosted page link

Once everything works correctly, submit your **Pull Request**.

---

You're now building **location-aware, real-world discovery platforms** — this is exactly how modern event apps are built 🚀
