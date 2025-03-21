// Your Supabase project URL and public anon key
const supabaseUrl = 'https://yoyddvrqspqdzwmzoasb.supabase.co'; // Replace with your actual URL
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlveWRkdnJxc3BxZHp3bXpvYXNiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDI0ODY1ODUsImV4cCI6MjA1ODA2MjU4NX0._dw7197pFucZkTP-rML2D6atzKL8HA9QB4Fhf72bwW0'; // Replace with your actual anon key
const supabase = supabase.createClient(supabaseUrl, supabaseKey);

// Fetch data from your table (replace 'your_table_name' with the actual table name)
async function fetchData() {
  const { data, error } = await supabase
    .from('favorites')  // Replace with your table name
    .select('*');

  if (error) {
    console.error(error);
  } else {
    displayData(data);
  }
}

// Display data in your HTML
function displayData(data) {
  const dataContainer = document.getElementById('data-container');
  dataContainer.innerHTML = '';

  data.forEach(item => {
    const div = document.createElement('div');
    div.innerHTML = `<p><strong>${item.name}</strong><br/>${item.description}</p>`;
    dataContainer.appendChild(div);
  });
}

// Call the fetchData function when the page loads
fetchData();
