import AdminNav from 'components/AdminNav'
import { Outlet, redirect } from 'react-router'
import { getExistingUser, storeUserData } from '~/appwrite/auth';
import { account } from '~/appwrite/client';

export async function clientLoader() {
    try {
        const user = await account.get();

        if(!user.$id) return redirect('/sign-in');

        const existingUser = await getExistingUser(user.$id);

        if(existingUser?.status === 'user') {
            return redirect('/');
        }

        return existingUser?.$id ? existingUser : await storeUserData();
    } catch (e) {
        console.log('Error in clientLoader', e)
        return redirect('/sign-in')
    }
}

const AdminLayout = () => {
  return (
    <div>
        <AdminNav/>
        <Outlet/>
    </div>
  )
}

export default AdminLayout