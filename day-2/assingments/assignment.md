<p align="center">
  <img src="https://ik.imagekit.io/codingnest/codingnestfinal_bg.svg?updatedAt=1714659978004" alt="CodingNest Logo" width="300"/>
</p>

# CodingNest Bootcamp — Day 2 Assignment

## AI Article Summarizer

Welcome to your **Day 2 CodingNest Bootcamp assignment**.

In this assignment, you will build an **AI-powered Article Summarizer**,  similar to features found in tools like Notion AI.

The goal is to create a clean web application where users can input long text and generate concise summaries using an AI API.

---

# UI Design

Follow the UI design provided here:

**Design Link**

[https://codingnest-bootcamp-day-2.figma.site/](https://codingnest-bootcamp-day-2.figma.site/)

Your implementation should closely match the layout, spacing, and components shown in the design.

---

# Objective

Build an application where users can:

1. Paste or type long-form text
2. Generate summaries using AI
3. Select summary length (short / medium / detailed)
4. Copy the generated summary

---

# Features to Implement

## 1. Text Input Area

Create a large textarea where users can paste or type content.

The input should:

* Support long-form text
* Be user-friendly and readable
* Match the UI design

---

## 2. Summary Generation Button

Add a button such as:

**“Generate Summary”**

When clicked:

* It should call an AI API
* Send the input text along with summary type
* Receive and display the summarized output

---

## 3. Summary Length Options

Provide options such as:

* Short Summary
* Medium Summary
* Detailed Summary

This can be implemented using:

* Radio buttons
* Dropdown
* Toggle buttons (based on UI design)

These options should influence how the AI generates the summary.

---

## 4. AI API Integration

Integrate with any AI provider such as:

* OpenAI API
* HuggingFace Inference API
* Pollination API key (https://enter.pollinations.ai/api/docs)

Your application must:

* Send a request using **Fetch API**
* Use **async/await**
* Handle API responses properly
* Handle errors gracefully

---

## 5. Loading State

While the summary is being generated:

* Show a loading indicator (spinner / text)
* Disable the button to prevent multiple requests

This ensures a better user experience.

---

## 6. Display Summary Output

Show the generated summary clearly in the UI.

Ensure:

* Proper formatting
* Readability
* Matches the UI design

---

## 7. Copy to Clipboard Feature

Provide a **“Copy” button** that:

* Copies the generated summary
* Gives feedback (e.g., “Copied!”)

Use:

```js
navigator.clipboard.writeText()
```

---

# Technologies to Use

Use the following technologies:

* HTML
* CSS
* JavaScript (Vanilla JS)
* Fetch API
* AI API (OpenAI or HuggingFace)

❌ Frameworks such as React, Vue, Angular, or libraries like jQuery are not allowed.

---

# Expected Learning Outcomes

By completing this assignment, you will learn how to:

* Work with **textarea inputs**
* Handle **user interactions**
* Use **Fetch API with async/await**
* Integrate external **AI APIs**
* Manage **loading states**
* Build real-world **AI-powered frontend apps**

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

### 3. Navigate to the Day-2 Folder

Place your solution inside the **day-2 folder**.

Example structure:

```
day-2/
  your-github-username/
    index.html
    style.css
    script.js
```

---

### 4. Commit Your Code

```bash
git add .
git commit -m "Day 2 Assignment - AI Article Summarizer"
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
* Functionality and responsiveness
* UI matching the design
* Code quality and structure
* Proper error handling
* Loading state implementation
* Clipboard functionality

---

# Important Notes

* Follow the UI design strictly
* Do not hardcode summaries (must use API)
* Handle API failures gracefully
* Keep your API keys secure (do not expose in production)

---

# Pull Request Naming Format

```
Day-2 Assignment - <your-github-username>
```

### Example

```
Day-2 Assignment - ashutosh-dwivedi
```

---

# Pull Request Description Template

---

## Student Information

**Name:**
**GitHub Username:**

---

## Assignment Implemented

Day 2 — AI Article Summarizer

---

## Validation Checklist

* [ ] I have followed the UI provided in the Figma design
* [ ] My project is placed inside the `day-2/<github-username>/` folder
* [ ] The application runs correctly in the browser
* [ ] I have used **HTML, CSS, and Vanilla JavaScript only**
* [ ] I have integrated an **AI API (OpenAI or HuggingFace or Pollination)**
* [ ] I have used **Fetch API with async/await**
* [ ] I have implemented **loading states**
* [ ] I have added **summary length options**
* [ ] I have implemented **copy to clipboard functionality**
* [ ] My code is properly formatted and readable
* [ ] I have tested my application before submitting
* [ ] I confirm that this is **my own work**

---

# Repository Structure Requirement

```
day-2/
  your-github-username/
    index.html
    style.css
    script.js
```

Do **not place files directly inside `day-2`** without your username folder.

---

# Common Mistakes to Avoid

* Not integrating a real AI API
* Exposing API keys in frontend code
* Missing loading states
* Copy button not working
* Incorrect folder structure
* Not following PR naming format

---

# Final Reminder

Before submitting your Pull Request:

1. Test API integration thoroughly
2. Verify summary length options work correctly
3. Check loading states and error handling
4. Ensure copy-to-clipboard works
5. Match UI with Figma design

Once everything is complete, submit your **Pull Request**.

---

Build something powerful — you're now stepping into **AI-powered applications** 🚀
