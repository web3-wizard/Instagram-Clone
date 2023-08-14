import React from 'react';

import user from '../assets/data/user.json';
import ProfileHeader from '../components/profile/ProfileHeader';
import FeedGridView from '../components/feed/FeedGridView';

const ProfileScreen = () => {
  return (
    <>
      {/* Grid View Posts*/}
      <FeedGridView data={user.posts} ListHeaderComponent={ProfileHeader} />
    </>
  );
};

export default ProfileScreen;
