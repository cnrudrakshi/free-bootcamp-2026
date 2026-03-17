const expenseTable = document.getElementById("expenseBody");
const titleInput = document.getElementById("titleInput");;
const amountInput = document.getElementById("amountInput");
const cateogryInput = document.getElementById("dropdownSelector");

const form = document.getElementById("form")

// cards
const totalSpending = document.getElementById("spendings");
const thisMonth = document.getElementById("growth");
const avgTransaction = document.getElementById("average");
const transactionCount = document.getElementById("transactions");
const tableTransactionCount = document.getElementById("tableTransactionCount");
const noDataMessage = document.getElementById("noDataMessage");

const categoryChart = document.getElementById("categoryChart");

let totalExpenses = JSON.parse(localStorage.getItem("expenses")) || [];

const categoryColors = {
  'Food': 'rgb(255, 99, 132)',
  'Travel': 'rgb(255, 205, 86)',
  'Bills': 'rgb(54, 162, 235)',
  'Entertainment': ' rgb(220, 202, 232)',
  'Shopping': 'rgba(117, 227, 190, 1)',
  'Health Care': ' rgb(213, 227, 188)',
  'Others': 'rgb(254, 255, 181)'
};

// upadte cards
function updatedCards() {
  let total = 0;
  let monthTotal = 0;
  let currentMonth = new Date().getMonth();
  totalExpenses.forEach(expense => {
    let amount = Number(expense.amount);
    total = total + amount;

    let expenseMonth = new Date(expense.date).getMonth();

    if (expenseMonth === currentMonth) {
      monthTotal = monthTotal + amount;
    }
  })
  let avg;
  if (totalExpenses.length > 0) {
    avg = (total / totalExpenses.length).toFixed(2);
  } else {
    avg = 0;
  }

  totalSpending.textContent = "₹ " + total;
  thisMonth.textContent = "₹" + total;
  avgTransaction.textContent = "₹" + avg;
  transactionCount.textContent = totalExpenses.length;
  tableTransactionCount.textContent = totalExpenses.length + " transactions";
}
// Add Transactions
function addTransaction(date, description, cateogry, amount) {
  totalExpenses.push({
    date,
    description,
    cateogry,
    amount
  });
  localStorage.setItem("expenses", JSON.stringify(totalExpenses));
  displayTransactions();
}

form.addEventListener("submit", function (event) {
  event.preventDefault();
  let title = titleInput.value;
  let amount = amountInput.value;
  let cateogry = cateogryInput.value;
  if (!title) {
    alert("Fill the description");
    return;
  }
  if (!amount) {
    alert("Fill the amount");
    return;
  }
  if (!cateogry) {
    alert("Fill the cateogry");
    return;
  }
  addTransaction(
  new Date().toLocaleString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
    hour: 'numeric',
    minute: '2-digit',
    hour12: true
  }),
  title,
  cateogry,
  amount
);
  titleInput.value = "";
  amountInput.value = "";
  cateogryInput.value = "";
});

// Display Transactions
function displayTransactions() {
  expenseTable.innerHTML = "";
if(totalExpenses.length === 0){
  let row = document.createElement('tr');
  row.innerHTML = `
      <td class="default-items" colspan="5" style="text-align:center; padding:10px;">
          💸 No transactions yet. Add your first expense to get started!
      </td>
  `;
  expenseTable.appendChild(row);

  updatedCards();
  updateCategoryChart(); 
  return;
}
  totalExpenses.forEach((transactions, index) => {
    let row = document.createElement('tr');
    let color = categoryColors[transactions.cateogry];
    let categoryChip = `<span style="
                            background-color: ${color};
                            color: white; 
                            padding: 2px 8px; 
                            border-radius: 12px; 
                            font-size: 0.8rem;
                            display: inline-block;
                        ">
                            ${transactions.cateogry}
                        </span>`;

    row.innerHTML = `
      <td class="tableData text-secondary text-start">${transactions.date}</td>
      <td class="tableData">${transactions.description}</td>
      <td class="tableData text-start">${categoryChip}</td>
      <td class="tableData text-end">&#8377;${transactions.amount}</td>
      <td class="text-center">
        <button class=" border-0 btn btn-sm text-center delete-btn" onclick="deleteTransaction(${index})">
          <i class="fa-solid fa-trash text-danger"></i>
        </button>
      </td>
    `;
    expenseTable.appendChild(row);
  });

  updatedCards();
  updateCategoryChart(); 
}

// Delete Transaction
function deleteTransaction(index) {
  totalExpenses.splice(index, 1);
  localStorage.setItem("expenses", JSON.stringify(totalExpenses));
  displayTransactions();
}
function updateCategoryChart() {

  const categoryTotals = {
    'Food': 0,
    'Travel': 0,
    'Shopping': 0,
    'Entertainment': 0,
    'Bills': 0,
    'Others': 0
  };

  totalExpenses.forEach(expense => {
    if (categoryTotals.hasOwnProperty(expense.cateogry)) {
      categoryTotals[expense.cateogry] += Number(expense.amount);
    } else {
      categoryTotals['Others'] += Number(expense.amount);
    }
  });

  const labels = Object.keys(categoryTotals).filter(cat => categoryTotals[cat] > 0);
const data = labels.map(label => categoryTotals[label]);
const backgroundColors = labels.map(label => {
  return categoryColors[label] || '#e0e0e0'; // fallback grey
});

 if (labels.length === 0) {
  categoryChart.style.display = "none";
  noDataMessage.style.display = "block";

  if (window.myCategoryChart) {
    window.myCategoryChart.destroy();
  }
  return;
} else {
  categoryChart.style.display = "block";
  noDataMessage.style.display = "none";
}

  // destroy old chart
  if (window.myCategoryChart) {
    window.myCategoryChart.destroy();
  }

  // create new chart
  const ctx = categoryChart.getContext('2d');

  window.myCategoryChart = new Chart(ctx, {
    type: 'doughnut',
    data: {
      labels: labels,
      datasets: [{
        data: data,
        backgroundColor: backgroundColors.slice(0, labels.length),
        hoverOffset: 4
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: true,
      plugins: {
        legend: {
          position: 'bottom'
        }
      }
    }
  });
}
displayTransactions();
updateCategoryChart();