import { useLoaderData, useNavigate } from 'react-router';
import { logoutUser } from '~/appwrite/auth';

const AdminNav = () => {
  const user = useLoaderData();
  const navigate = useNavigate();
  const handleLogout = async () => {
    await logoutUser();
    navigate('/sign-in')
  }
  return (
    <div>
      <img src={user?.imageUrl || '/assets/images/david.webp'} alt={user?.name || 'David'} referrerPolicy="no-referrer" />

      <article>
        <h2>{user?.name}</h2>
        <p>{user?.email}</p>
      </article>

      <button
        onClick={handleLogout}
        className="cursor-pointer"
      >
        <img
          src="/assets/icons/logout.svg"
          alt="logout"
          className="size-6"
        />
      </button>
    </div>
  )
}

export default AdminNav