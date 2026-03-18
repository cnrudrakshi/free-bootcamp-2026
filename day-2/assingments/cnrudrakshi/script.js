const POLLINATIONS_API = "https://gen.pollinations.ai/v1/chat/completions";
  const CORS_PROXIES = [
    "https://corsproxy.io/?url=",
    "https://api.cors.lol/?url="
  ];

  const instructions = {
    short: "Summarize the following article in 2-3 concise lines.",
    medium: "Summarize the following article in 5 clear bullet points.",
    detailed: "Provide a detailed 10-12 line summary of the following article."
  };

let selectedType = "";
const buttons = document.querySelectorAll(".select-btn");

buttons.forEach(btn => {
    btn.addEventListener("click", () => {
        buttons.forEach(b => b.classList.remove("active"));
        btn.classList.add("active");

        selectedType = btn.getAttribute("data-value");
        console.log("Selected:", selectedType);
    });
});

async function generateSummary() {
  const text = document.getElementById("inputText").value;
  const summaryType = selectedType || "short";
  const loading = document.getElementById("loading");
  const btn = document.getElementById("generateBtn");
  const output = document.getElementById("output");

  if (!text) {
    alert("Please paste article");
    return;
  }
  if (!selectedType) {
    alert("Please select summary type");
    return;
}

  loading.innerText = "Generating summary...";
  output.innerText = "";
    btn.disabled = true;
    const apiKey = "DONT_USE_MY_KEY_MAN"
    const body = {
      model: "Opemnai",
      messages: [
        { role: "system", content: "You are a helpful article summarizer. Respond only with the summary, no extra commentary." },
        { role: "user", content: instructions[summaryType] + "\n\n" + text }
      ]
    };
   const headers = { "Content-Type": "application/json" };
    if (apiKey) headers["Authorization"] = "Bearer " + apiKey;
    let lastError = "";

     for (const proxy of CORS_PROXIES) {
      try {
        const url = proxy + encodeURIComponent(POLLINATIONS_API);
        const res = await fetch(url, {
          method: "POST",
          headers,
          body: JSON.stringify(body)
        });

        if (!res.ok) {
          lastError = `HTTP ${res.status}: ${await res.text()}`;
          continue;
        }

        const data = await res.json();
        const summary = data.choices?.[0]?.message?.content;

        if (summary) {
          output.innerText = summary;
          loading.innerText = "";
          btn.disabled = false;
          return;
        }
      } catch (e) {
        lastError = e.message;
        continue;
      }
    }
loading.innerText = "";
    btn.disabled = false;
    output.innerText =
      "didnt work"
    }
        

function copyText() {
    const text = document.getElementById("output").innerText;
    if (!text || text.startsWith("⚠️")) return alert("Nothing to copy yet!");
    navigator.clipboard.writeText(text).then(() => alert("Copied!"));
  }