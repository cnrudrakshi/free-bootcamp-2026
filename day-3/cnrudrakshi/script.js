const API_URL = "https://fakejobs-api.vercel.app/jobs?_limit=21";
const titleInput = document.getElementById("search-input");
const locationInput = document.getElementById("location-input");
const jobsSection = document.getElementById("jobs-section");
const countSpan = document.getElementById("job-count");

let allJobs = [];

let bookmarkedJobs = [];

titleInput.addEventListener("input", handleSearch);
locationInput.addEventListener("input", handleSearch);

async function fetchJobs() {
    try {
        const res = await fetch(API_URL);
        if (!res.ok) throw new Error("Error fetching jobs");
        allJobs = await res.json();
        displayJobs(allJobs);
    } catch (err) {
        jobsSection.innerHTML = "Failed to load jobs";
        console.log(err);
    }
}

function handleSearch() {
    const title = titleInput.value.toLowerCase();
    const location = locationInput.value.toLowerCase();
    const results = allJobs.filter(job =>
        job.title.toLowerCase().includes(title) &&
        job.location.toLowerCase().includes(location)
    );
    displayJobs(results);
}

function toggleBookmark(element,jobId) {
    const svg = element.querySelector('svg');
    const bookmarkCountSpan = document.getElementById("bookmark-count");
    const exists = bookmarkedJobs.some(j => j.id === jobId);
    
    if (exists) {
        bookmarkedJobs = bookmarkedJobs.filter(j => j.id !== jobId);
        svg.setAttribute('fill', 'none');
        svg.setAttribute('stroke', 'currentColor');
        svg.style.transform = 'scale(1)';
    } else {
        const jobToAdd = allJobs.find(j => j.id === jobId);

        if (jobToAdd) {
            bookmarkedJobs.push(jobToAdd);
        }
        svg.setAttribute('fill', 'red');
        svg.setAttribute('stroke', 'none');
        svg.style.transform = 'scale(1.1)';
    }
     bookmarkCountSpan.textContent = bookmarkedJobs.length;
      console.log(bookmarkedJobs); 
}

function displayJobs(jobs) {
    jobsSection.innerHTML = "";
    countSpan.textContent = jobs.length;
    jobs.forEach(job => {
        const col = document.createElement("div");
        col.className = "col-md-4";
        col.innerHTML = `
        <div class="card h-100 shadow-sm rounded-4">
        <div>
             <div class="img-wrapper position-relative">
                       <img src="https://images.unsplash.com/photo-1616386261012-8a328c89d5b6"
                        class="w-100 rounded-top-4 image-hover" height="200" alt="">                    
                   <div class="bookmark-icon" onclick="toggleBookmark(this, ${job.id})">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="16"
                     fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                   stroke-linejoin="round" viewBox="0 0 24 24"
                  style="transition: all 0.3s ease;"> 
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

                <p class="mt-4 text-secondary fs-6">${job.description}</p>

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
}
fetchJobs();