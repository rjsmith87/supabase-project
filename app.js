// Import Supabase client
import { createClient } from '@supabase/supabase-js';

// Set up Supabase URL and Key
const supabaseUrl = 'https://yoyddvrqspqdzwmzoasb.supabase.co'; // Replace with your Supabase URL
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlveWRkdnJxc3BxZHp3bXpvYXNiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDI0ODY1ODUsImV4cCI6MjA1ODA2MjU4NX0._dw7197pFucZkTP-rML2D6atzKL8HA9QB4Fhf72bwW0'; // Replace with your Supabase anon key
const supabase = createClient(supabaseUrl, supabaseKey);

// Example function to fetch data from a table
async function fetchData() {
  const { data, error } = await supabase
    .from('tasks')  // Replace 'tasks' with the name of your table
    .select('*');

  if (error) {
    console.error('Error fetching data:', error);
  } else {
    console.log('Data fetched:', data);
  }
}

// Call the fetchData function
fetchData();
