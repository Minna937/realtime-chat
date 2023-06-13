import { FC } from 'react';
import AddFriendButton from "@/components/AddFriendButton";

const page:FC = () => {
  return <main className="pt-8 pl-6">
    <h1 className="font-bold text-5xl mb-8">Add a friend</h1>
    <AddFriendButton />
  </main>
};

export default page;