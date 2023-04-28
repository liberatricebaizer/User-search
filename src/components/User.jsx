import React, { useEffect, useState } from "react";
import "./User.css";
import { ImLocation2 } from "react-icons/im";
import { RxTwitterLogo } from "react-icons/rx";
import { BsLink45Deg } from "react-icons/bs";
import { AiOutlineReconciliation } from "react-icons/ai";
import Search from "./Search";
const User = ({
  login,
  avatar_url,
  repos_url,
  followers_url,
  following_url,
}) => {
  const [Users, setUsers] = useState([]);
  const [search, setSearch] = useState("");
  useEffect(() => {
    fetchUsers();
  }, []);
  const fetchUsers = async () => {
    await fetch("https://api.github.com/users")
      .then((res) => res.json())
      .then((data) => setUsers(data))
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <>
      <div className="user__container">
        <div className="users">
          <div onChange={(e) => setSearch(e.target.value)}>
            <Search />
          </div>
          {Users.filter((user) => {
            return search.toLowerCase() === ""
              ? user
              : user.login.toLowerCase().includes(search);
          }).map((user) => (
            <div className="content" key={user.id}>
              <div className="content__header">
                {/* {user.vatar_url} */}
                {/* <img src={UserImage} alt="user-github" /> */}
                <img src={user.avatar_url} alt="user-github" />
                <div className="content__text">
                  <h2>{user.login}</h2>
                  <h5>@octocat</h5>
                  <p>This profile has no bio</p>
                </div>
                <div className="para">
                  <p>Joined 25 Jan 2011</p>
                </div>
              </div>
              <div className="container">
                <div className="content__box">
                  <div className="content__box-description">
                    <div className="box-text">
                      <h4>Repos</h4>
                      <p>{user.repos_url.length}</p>
                    </div>
                    <div className="box-text">
                      <h4>Followers</h4>
                      <p>{user.followers_url.length}</p>
                    </div>
                    <div className="box-text">
                      <h4>Following</h4>
                      <p>{user.following_url.length}</p>
                    </div>
                  </div>
                </div>
                <div className="links">
                  <div>
                    <h3>
                      <ImLocation2 /> San Francisco
                    </h3>
                    <p>
                      <BsLink45Deg /> https://github.blog
                    </p>
                    <link rel="stylesheet" href="https://github.blog" />
                  </div>
                  <div className="git">
                    <h3>
                      <RxTwitterLogo /> Not Available
                    </h3>
                    <p>
                      <a href={user.html_url} style={{ color: "white" }}>
                        <AiOutlineReconciliation />
                        @github
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default User;
