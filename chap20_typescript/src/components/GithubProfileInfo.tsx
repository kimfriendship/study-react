import React from 'react';
import './GithubProfileInfo.css';

type GithubProfileInfoProps = {
  name: string;
  thumbnail: string;
  bio: string;
  blog: string;
};

function GithubProfileInfo({
  name,
  thumbnail,
  bio,
  blog,
}: GithubProfileInfoProps) {
  return (
    <div className="GithubProfileInfo">
      <div className="profile-head">
        <img src={thumbnail} alt="user thumbnail" />
        <span>{name}</span>
      </div>
      <p>{bio}</p>
      <span>{blog && <a href={blog}>블로그</a>}</span>
    </div>
  );
}

export default GithubProfileInfo;
