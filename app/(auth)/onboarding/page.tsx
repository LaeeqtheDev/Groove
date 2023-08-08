import React from 'react';
import AccountProfile from '@/components/forms/AccountProfile';
import { currentUser } from '@clerk/nextjs';

async function Page() {
  const user = await currentUser();

  // Assuming `user` is an object with the following properties: id, firstName, username, imageUrl, etc.
  // If `user` and `userInfo` are the same, you don't need two separate variables.
  const userData = {
    id: user?.id,
    objectId: user?._id,
    username: user?.username,
    name: user?.firstName ?? '',
    bio: user?.bio || '',
    image: user?.imageUrl || '',
  };

  return (
    <main className='mx-auto flex max-w-3xl flex-col justify-start px-10 py-20'>
      <h1 className='head-text'>Onboarding</h1>
      <p className='mt-3 text-base-regular text-light-2'>
        Complete your profile now to use Threds.
      </p>

      <section className='mt-9 bg-dark-2 p-10'>
        <AccountProfile user={userData} btnTitle='Continue' />
      </section>
    </main>
  );
}

export default Page;
