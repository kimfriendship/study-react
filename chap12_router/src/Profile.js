import React from "react";

const profileData = {
  wooey: {
    name: "Woojung",
    description: "Frontend Engineer",
  },
  eddie: {
    name: "Jongsun",
    description: "Full stack Engineer",
  },
};

const Profile = ({ match }) => {
  const { username } = match.params;
  const profile = profileData[username];

  if (!profile) return <div>Profile doesn't exist.</div>;

  return (
    <div>
      <h3>
        {username}: ({profile.name})
      </h3>
      <p>{profile.description}</p>
    </div>
  );
};

export default Profile;
