import { useNavigate, Link } from 'react-router-dom';
import supabase from '../config/supabaseClient';

export default function Dashboard() {
  const navigate = useNavigate(); // Get the navigate function from react-router-dom

  async function handleSignOut() {
    const { error } = await supabase.auth.signOut();

    if (error) {
      alert(error.message);
    } else {
      // Redirect the user to the login page after successful sign-out
      navigate('/login'); // Replace '/login' with the path to your login page
    }
  }

  return (
    <div>
      <p>Welcome!</p>
      <button onClick={handleSignOut}>Sign out</button>

      {/* Add a button that takes the user to the updateProfile page */}
      <Link to="/account">Update Profile</Link>
      {/* Replace '/account' with the path to your updateProfile page */}
    </div>
  );
}
