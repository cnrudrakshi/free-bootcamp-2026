const API_URL = "https://fakejobs-api.vercel.app/jobs?_limit=21";
const titleInput = document.getElementById("search-input");
const locationInput = document.getElementById("location-input");
const jobsSection = document.getElementById("jobs-section");
const countSpan = document.getElementById("job-count");
const bookmarkCountSpan = document.getElementById("bookmark-count");

let allJobs = [];


let bookmarkedJobs = JSON.parse(localStorage.getItem("bookmarks")) || [];

async function fetchJobs() {
    try {
        const res = await fetch(API_URL);
        if (!res.ok) throw new Error("Error fetching jobs");
        allJobs = await res.json();
        displayJobs(allJobs);
        bookmarkCountSpan.textContent = bookmarkedJobs.length;
    } catch (err) {
        jobsSection.innerHTML = "Failed to load jobs";
        console.log(err);
    }
}

titleInput.addEventListener("input", handleSearch);
locationInput.addEventListener("input", handleSearch);

function handleSearch() {
    const title = titleInput.value.toLowerCase();
    const location = locationInput.value.toLowerCase();
    const results = allJobs.filter(job =>
        job.title.toLowerCase().includes(title) &&
        job.location.toLowerCase().includes(location)
    );
    console.log(results);
    displayJobs(results);
}
function toggleBookmark(element, jobId) {
    const svg = element.querySelector('svg');
    const index = bookmarkedJobs.findIndex(
        j => String(j.id) === String(jobId)
    );
    if (index !== -1) {
        bookmarkedJobs.splice(index, 1);
        svg.setAttribute('fill', 'none');
        svg.setAttribute('stroke', 'currentColor');
        svg.style.transform = 'scale(1)';
    } else {
        const jobToAdd = allJobs.find(
            j => String(j.id) === String(jobId)
        );
        if (jobToAdd) {
            bookmarkedJobs.push(jobToAdd);
        }
        svg.setAttribute('fill', 'red');
        svg.setAttribute('stroke', 'none');
        svg.style.transform = 'scale(1.1)';
    }
    bookmarkCountSpan.textContent = bookmarkedJobs.length;
    localStorage.setItem("bookmarks", JSON.stringify(bookmarkedJobs));
    console.log(bookmarkedJobs);
       if (isShowingBookmarks) {
        if (bookmarkedJobs.length === 0) {
            renderEmptyState();
            countSpan.textContent = 0;
        } else {
            displayJobs(bookmarkedJobs);
        }
    }
}
let isShowingBookmarks = false;
function showBookmarks() {
    isShowingBookmarks = !isShowingBookmarks;
    if (isShowingBookmarks) {
        if (bookmarkedJobs.length === 0) {
            renderEmptyState();
            countSpan.textContent = 0;
        } else {
            displayJobs(bookmarkedJobs);
        }
    } else {
        console.log(bookmarkedJobs);
        displayJobs(allJobs);
    }
}

function displayJobs(jobs) {
    jobsSection.innerHTML = "";
    const title = titleInput.value.trim();
const location = locationInput.value.trim();

if (title || location) {
    jobsSection.innerHTML += `
        <div class="d-flex justify-content-start gap-3 w-100 mb-3">
            <button class="search-tag">
                🔍 Search: ui/ ${title || location}
                <i class="fa-regular fa-circle-xmark" onclick="clearFilters()"></i>
            </button>
             <button class="bookmarked-only" onclick="displayJobs(bookmarkedJobs)">
        Bookmarked Only 
        <i class="fa-regular fa-circle-xmark "></i>
    </button>
     <button class="clear-filter-btn" onclick="clearFilters()">
        Clear all filters
        <i class="fa-regular fa-circle-xmark "></i>
    </button>
        </div>
    `;
}

const filterBar = document.createElement("div");
filterBar.className = "filter-bar d-flex justify-content-between w-100 mb-3";
filterBar.innerHTML = `
    <button class="bookmarked-only">
        Bookmarked Only 
        <i class="fa-regular fa-circle-xmark" onclick="clearFilters()"></i>
    </button>
    <a href="javascript:void(0)" class="anchor-hover" onclick="clearFilters()">
        Clear all filters
    </a>
`;
 function getShortDescription(text) {
  return text.split(" ").slice(0, 20).join(" ") + "...";
}
if (isShowingBookmarks) {
    jobsSection.appendChild(filterBar);
}
    countSpan.textContent = jobs.length;
    jobs.forEach(job => {
        const isBookmarked = bookmarkedJobs.some(j => j.id === job.id);
        const col = document.createElement("div");
        col.className = "col-md-4";
        col.innerHTML = `
        <div class="card h-100 shadow-sm rounded-4 mt-3">
        <div>
             <div class="img-wrapper position-relative">
                       <img src="https://images.unsplash.com/photo-1616386261012-8a328c89d5b6"
                        class="w-100 rounded-top-4 image-hover" height="200" alt="">                    
                   <div class="bookmark-icon" onclick="toggleBookmark(this, ${job.id})">
                    <svg xmlns="http://www.w3.org/2000/svg"
                       fill="${isBookmarked ? 'red' : 'none'}"
                      stroke="${isBookmarked ? 'none' : 'currentColor'}"
                      stroke-width="2" stroke-linecap="round"
                      stroke-linejoin="round" viewBox="0 0 24 24"
                      style="transition: all 0.3s ease;"
                      class="bookmark-hover"> 
                      <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
                   </svg>
             </div>
                    <div class="small-img">
                        <img src="https://images.unsplash.com/photo-1616386261012-8a328c89d5b6">
                    </div>
                 </div>

            <div class="card-body">
                <span class="badge bg-color text-dark p-2 mt-2"><i class="fa-solid fa-briefcase me-2"></i>${job.type}</span>
                <p class="fs-4 fw-medium p-hover mt-3 card-title">${job.title}</p>
                <p class="card-text text-muted">${job.company.name}</p>
                <p class="mt-4 text-secondary fs-6">${getShortDescription(job.description)}</p>
                <ul class="list-unstyled text-secondary">
                    <li class="mb-1">
                        <i class="bi bi-geo-alt me-2 text-primary fs-6"></i>
                        ${job.location}
                    </li>

                    <li class="mb-1">
                        <i class="bi bi-currency-dollar me-2 text-success fs-6"></i>
                        ${job.salary}
                    </li>
                </ul>

               <button class="btn bg-gradient text-white w-100 view-detail-btn" data-bs-toggle="modal" data-bs-target="#jobModal">View Details</button>
            </div>
        </div>
        `;
        col.querySelector(".view-detail-btn").addEventListener("click", () => {
            const modalContent = document.getElementById("modalContent");
            modalContent.innerHTML = `
       <div class="img-wrapper p-0 position-relative">
                            <img src="https://images.unsplash.com/photo-1616386261012-8a328c89d5b6"
                                class="w-100 rounded-top-4 image-hover object-fit-cover" height="200" alt="">
                            <div class="bookmark-icon">
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="small-img">
                                <img src="https://images.unsplash.com/photo-1616386261012-8a328c89d5b6">
                            </div>
                        </div>
        <h3 class="mt-4">${job.title}</h3>
        <p><strong>Company:</strong> ${job.company.name}</p>
        <p><strong>Type:</strong> ${job.type}</p>
        <p><strong>Location:</strong> ${job.location}</p>
        <p><strong>Salary:</strong> ${job.salary}</p>
        <hr>
        <p>${job.company.description}</p>
      `;
        });
        jobsSection.appendChild(col);
    });
    console.log(allJobs);
}
function renderEmptyState() {
    jobsSection.innerHTML = `
        <div class="d-flex justify-content-end w-100 mb-3">
            <a class="anchor-hover" onclick="clearFilters()">Clear all filters</a>
        </div>

        <div class="no-bookmark d-flex flex-column align-items-center justify-content-center text-center w-100 py-5">
            <div class="bg-light rounded-circle d-flex align-items-center justify-content-center"
                 style="width: 80px; height: 80px;">
                <svg xmlns="http://www.w3.org/2000/svg" width="55" height="55"
                    viewBox="0 0 24 24" fill="none" stroke="currentColor"
                    stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                    class="text-secondary">
                    <path d="M10 20a1 1 0 0 0 .553.895l2 1A1 1 0 0 0 14 21v-7a2 2 0 0 1 .517-1.341L21.74 4.67A1 1 0 0 0 21 3H3a1 1 0 0 0-.742 1.67l7.225 7.989A2 2 0 0 1 10 14z"></path>
                </svg>
            </div>

            <h2 class="mb-2">No jobs selected</h2>
            <p class="text-muted mb-4">Try adjusting your filters or search terms</p>

            <button class="btn bg-gradient text-white px-4" onclick="clearFilters()">
                Clear all filters
            </button>
        </div>
    `;

    countSpan.textContent = 0;
}
function clearFilters() {
    titleInput.value = "";
    locationInput.value = "";
     isShowingBookmarks = false;
    const filterBar = document.querySelector(".filter-bar");
    if (filterBar) {
        filterBar.style.display = "none";
    }
    displayJobs(allJobs);
}