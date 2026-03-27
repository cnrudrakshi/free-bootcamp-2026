
<p align="center">
  <img src="https://ik.imagekit.io/codingnest/codingnestfinal_bg.svg?updatedAt=1714659978004" alt="CodingNest Logo" width="300"/>
</p>

# CodingNest Bootcamp — Day 3 Assignment

## Job Search Dashboard

Welcome to your **Day 3 CodingNest Bootcamp assignment**.

In this assignment, you will build a **Job Search Dashboard** — similar to job discovery platforms like LinkedIn.

The goal is to create a dynamic web application where users can search for jobs, filter results, and bookmark interesting opportunities.

---

# UI Design

Follow the UI design provided here:

**Design Link**

[https://codingnest-bootcamp-day-3.figma.site/](https://codingnest-bootcamp-day-3.figma.site/)

Your implementation should closely match the layout, spacing, and components shown in the design.

---

# Objective

Build an application where users can:

1. Search for jobs by title
2. Filter jobs based on location or job type
3. View job listings dynamically
4. Bookmark/save jobs for later

---

# Features to Implement

## 1. Job Search Bar

Create a search input where users can enter job titles such as:

* Frontend Developer
* Backend Engineer
* Product Manager

When the user types or submits:

* Fetch jobs from the API
* Filter results based on the search query
* Update the UI dynamically

---

## 2. Filters (Location / Job Type)

Provide filters such as:

* Location (e.g., Remote, Delhi, Bangalore)
* Job Type (Full-time, Part-time, Internship)

These filters should:

* Work on API data
* Dynamically update job listings

---

## 3. Job Listings (Dynamic Cards)

Display jobs in a **card-based layout**.

Each job card should include:

* Job Title
* Company Name
* Location
* Job Type
* Salary (if available)
* Apply Link

The job list should:

* Render dynamically from API data
* Update when search or filters change

---

## 4. Bookmark Feature

Allow users to **save/bookmark jobs**.

Functionality:

* Add/remove bookmark
* Store bookmarked jobs in **localStorage**
* Persist data after page refresh

Optional UI ideas:

* Bookmark icon (⭐ / ❤️)
* Separate “Saved Jobs” section

---

## 5. API Integration

Use the following jobs API:

```
https://fakejobs-api.vercel.app/jobs
```

Your application must:

* Fetch data using **Fetch API**
* Use **async/await**
* Parse and render response data
* Handle errors properly

---

## 6. Loading & Empty States

Handle UI states properly:

* Show loader while fetching jobs
* Show “No jobs found” when no results match
* Handle API errors gracefully

---

# Technologies to Use

Use the following technologies:

* HTML
* CSS
* JavaScript (Vanilla JS)
* Fetch API
* localStorage

❌ Frameworks such as React, Vue, Angular, or libraries like jQuery are not allowed.

---

# Expected Learning Outcomes

By completing this assignment, you will learn how to:

* Work with **search inputs and filtering logic**
* Fetch and render **API data dynamically**
* Build reusable **card-based UI components**
* Use **localStorage for saving user data**
* Handle **real-world states (loading, empty, error)**
* Build a **job discovery dashboard**

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

### 3. Navigate to the Day-3 Folder

Place your solution inside the **day-3 folder**.

Example structure:

```
day-3/
  your-github-username/
    index.html
    style.css
    script.js
```

---

### 4. Commit Your Code

```bash
git add .
git commit -m "Day 3 Assignment - Job Search Dashboard"
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

* Correct API integration
* Dynamic rendering of job listings
* Search and filter functionality
* Bookmark feature implementation
* Data persistence using localStorage
* UI matching the Figma design
* Code clarity and structure

---

# Important Notes

* Use the provided API (no hardcoded data)
* Ensure bookmarks persist after refresh
* Keep UI responsive and clean
* Handle API failures gracefully

---

# Pull Request Naming Format

```
Day-3 Assignment - <your-github-username>
```

### Example

```
Day-3 Assignment - ashutosh-dwivedi
```

---

# Pull Request Description Template

---

## Student Information

**Name:**
**GitHub Username:**

---

## Assignment Implemented

Day 3 — Job Search Dashboard

---

## Validation Checklist

* [✅] I have followed the UI provided in the Figma design
* [✅] My project is placed inside the `day-3/<github-username>/` folder
* [✅] The application runs correctly in the browser
* [✅] I have used **HTML, CSS, and Vanilla JavaScript only**
* [✅] I have fetched data from the provided jobs API
* [✅] I have used **Fetch API with async/await**
* [✅] I have implemented **search functionality**
* [✅] I have implemented **filters (location/job type)**
* [✅] I have implemented **bookmark/save feature**
* [✅] I have used **localStorage for persistence**
* [✅] I have handled **loading and empty states**
* [✅] My code is properly formatted and readable
* [✅] I have tested my application before submitting
* [✅] I confirm that this is **my own work**

---

# Repository Structure Requirement

```
day-3/
  your-github-username/
    index.html
    style.css
    script.js
```

Do **not place files directly inside `day-3`** without your username folder.

---

# Common Mistakes to Avoid

* Not using the provided API
* Hardcoding job data
* Filters not working correctly
* Bookmark not persisting
* Missing loading/empty states
* Incorrect folder structure
* Not following PR naming format

---

# Final Reminder

Before submitting your Pull Request:

1. Test API fetching and rendering
2. Verify search and filters work correctly
3. Check bookmark persistence
4. Handle loading and empty states
5. Match UI with Figma design

Once everything works correctly, submit your **Pull Request**.

---

You’re now building **real-world API-driven products** — this is exactly how modern apps work 🚀
