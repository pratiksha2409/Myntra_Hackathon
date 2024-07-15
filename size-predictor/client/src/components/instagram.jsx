import React, { useState } from "react";
import axios from "axios";
import "./insta.css";
import { Link } from "react-router-dom";

function Instagram() {
  const [video, setVideo] = useState(null);

  const handleVideoUpload = async (videoFile) => {
    const formData = new FormData();
    formData.append("video", videoFile);

      try {
        await axios.post('http://localhost:5000/api/upload', formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        });
        alert('Video uploaded successfully!');
      } catch (error) {
        alert('Error uploading video');
      }
  };

  const handleAddPhoto = (event) => {
    // Logic to handle adding photos (if needed)
    // Example: setPhoto(event.target.files[0]);
    alert("Add photo functionality can be implemented here");
  };

  const handleAddContentClick = (event) => {
    if (event.target.classList.contains("add")) {
      const fileType = event.target.dataset.type;

      if (fileType === "video") {
        document.getElementById("upload-video").click();
      } else if (fileType === "photo") {
        document.getElementById("upload-photo").click();
      }
    }
  };

  const handleFileChange = (event) => {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      if (file.type.startsWith("video")) {
        setVideo(file);
        handleVideoUpload(file);
      } else {
        handleAddPhoto(file);
      }
    }
  };

  return (
    <div>
      {/* Sidebar */}
      <div className=" flex flex-row ">
        <div className="sidebar">
          {/* Replace logo and profile details with your dynamic data */}
          <a href="#" className="logo">
            <img src="public/img/logo.png" alt="logo" />
          </a>

          <Link to="/stories">
            <div className="profile">
              <div className="profile-img">
                {" "}
                {/* Add onClick handler */}
                <img src="public/img/profile.jpg" alt="profile" />
              </div>
              <div className="name">
                <h1>Arpan Chowdhury</h1>
                <img src="public/img/verify.png" alt="verify" />
              </div>
              <span>@apu</span>
            </div>
          </Link>
          {/* About */}
          <div className="about">
            <div className="box">
              <h3>54</h3>
              <span>Posts</span>
            </div>
            <div className="box two">
              <h3>14.4k</h3>
              <span>Followers</span>
            </div>
            <div className="box">
              <h3>13</h3>
              <span>Following</span>
            </div>
          </div>
          {/* Menu */}
          <div className="menu">
            <a href="#" className="active">
              <span className="icon">
                <i className="ri-function-line"></i>
              </span>
              Feed
            </a>
            {/* Add other menu items as needed */}
          </div>
        </div>

        <div className="flex flex-col overflow-hidden">
          {/* Main Content */}
          <div className="main-home w-full">
            <div className="header">
              {/* Search */}
              <div className="search">
                <i className="ri-search-line"></i>
                <input type="text" name="" id="" placeholder="Search" />
              </div>
              {/* Header Content */}
              <div className="header-content">
                <i className="ri-notification-4-line"></i>
                <i className="ri-mail-unread-fill"></i>
              </div>
            </div>

            {/* Stories Section */}
            <div className="stories-title">
              <h1>Stories</h1>
              <a href="#" className="btn">
                <i className="ri-play-circle-line"></i>
                <div className="text">Watch all</div>
              </a>
            </div>

            <div className="stories-container">
              <div className="stories" onClick={handleAddContentClick}>
                {/* Replace with dynamic content */}
                <div className="stories-img color">
                  <img src="public/img/profile.jpg" alt="profile" />
                  <div
                    className="add"
                    data-type="video"
                    style={{ background: "hsla(322, 58%, 68%, 0.7)" }}
                  >
                    +
                  </div>
                </div>
                {/* Add other stories dynamically */}
              </div>

              <div className="stories" onClick={handleAddContentClick}>
                {/* Replace with dynamic content */}
                <div className="stories-img color">
                  <img src="public/img/profile2.jpg" alt="profile" />
                  {/* <div className="add" data-type="video">+</div> */}
                </div>
                {/* Add other stories dynamically */}
              </div>

              <div className="stories" onClick={handleAddContentClick}>
                {/* Replace with dynamic content */}
                <div className="stories-img color">
                  <img src="public/img/profile3.jpg" alt="profile" />
                  {/* <div className="add" data-type="video">+</div> */}
                </div>
                {/* Add other stories dynamically */}
              </div>

              <div className="stories" onClick={handleAddContentClick}>
                {/* Replace with dynamic content */}
                <div className="stories-img color">
                  <img src="public/img/profile4.jpg" alt="profile" />
                  {/* <div className="add" data-type="video">+</div> */}
                </div>
                {/* Add other stories dynamically */}
              </div>

              <div className="stories" onClick={handleAddContentClick}>
                {/* Replace with dynamic content */}
                <div className="stories-img color">
                  <img src="public/img/profile5.jpg" alt="profile" />
                  {/* <div className="add" data-type="video">+</div> */}
                </div>
                {/* Add other stories dynamically */}
              </div>

              <div className="stories" onClick={handleAddContentClick}>
                {/* Replace with dynamic content */}
                <div className="stories-img color">
                  <img src="public/img/profile6.jpg" alt="profile" />
                  {/* <div className="add" data-type="video">+</div> */}
                </div>
                {/* Add other stories dynamically */}
              </div>

              <div className="stories" onClick={handleAddContentClick}>
                {/* Replace with dynamic content */}
                <div className="stories-img color">
                  <img src="public/img/profile7.jpg" alt="profile" />
                  {/* <div className="add" data-type="video">+</div> */}
                </div>
                {/* Add other stories dynamically */}
              </div>

              <div className="stories" onClick={handleAddContentClick}>
                {/* Replace with dynamic content */}
                <div className="stories-img color">
                  <img src="public/img/profile8.jpg" alt="profile" />
                  {/* <div className="add" data-type="video">+</div> */}
                </div>
                {/* Add other stories dynamically */}
              </div>
              <div className="stories" onClick={handleAddContentClick}>
                {/* Replace with dynamic content */}
                <div className="stories-img color">
                  <img src="public/img/profile9.jpg" alt="profile" />
                  {/* <div className="add" data-type="video">+</div> */}
                </div>
                {/* Add other stories dynamically */}
              </div>

              <div className="stories" onClick={handleAddContentClick}>
                {/* Replace with dynamic content */}
                <div className="stories-img color">
                  <img src="public/img/profile10.jpg" alt="profile" />
                  {/* <div className="add" data-type="video">+</div> */}
                </div>
                {/* Add other stories dynamically */}
              </div>
            </div>

            {/* Feed Section */}
            <div className="feed">
              <h1>Feed</h1>
              <div className="feed-text">
                <h2>Latest</h2>
                <span>Popular</span>
              </div>
            </div>

            {/* Main Posts */}
          </div>
          {/* <div> */}
          <div class="main-post">
            {/* <!-- Box1 --> */}
            <div class="post-box">
              <img src="img/post1.jpg" alt="post" />
              <div class="post-info">
                <div class="post-profile">
                  <div class="post-img">
                    <img src="img/profile10.jpg" alt="profile" />
                  </div>
                  <h3>Marquee B</h3>
                </div>
                <div class="likes">
                  <i class="ri-heart-line"></i>
                  <span>84.4k</span>
                  <i class="ri-chat-3-line"></i>
                  <span>88</span>
                </div>
              </div>
            </div>

            <div class="post-box">
              <img src="img/post1.jpg" alt="post" />
              <div class="post-info">
                <div class="post-profile">
                  <div class="post-img">
                    <img src="img/profile10.jpg" alt="profile" />
                  </div>
                  <h3>Marquee B</h3>
                </div>
                <div class="likes">
                  <i class="ri-heart-line"></i>
                  <span>84.4k</span>
                  <i class="ri-chat-3-line"></i>
                  <span>88</span>
                </div>
              </div>
            </div>

            <div class="post-box">
              <img src="img/post1.jpg" alt="post" />
              <div class="post-info">
                <div class="post-profile">
                  <div class="post-img">
                    <img src="img/profile10.jpg" alt="profile" />
                  </div>
                  <h3>Marquee B</h3>
                </div>
                <div class="likes">
                  <i class="ri-heart-line"></i>
                  <span>84.4k</span>
                  <i class="ri-chat-3-line"></i>
                  <span>88</span>
                </div>
              </div>
            </div>

            <div class="post-box">
              <img src="img/post1.jpg" alt="post" />
              <div class="post-info">
                <div class="post-profile">
                  <div class="post-img">
                    <img src="img/profile10.jpg" alt="profile" />
                  </div>
                  <h3>Marquee B</h3>
                </div>
                <div class="likes">
                  <i class="ri-heart-line"></i>
                  <span>84.4k</span>
                  <i class="ri-chat-3-line"></i>
                  <span>88</span>
                </div>
              </div>
            </div>

            <div class="post-box">
              <img src="img/post1.jpg" alt="post" />
              <div class="post-info">
                <div class="post-profile">
                  <div class="post-img">
                    <img src="img/profile10.jpg" alt="profile" />
                  </div>
                  <h3>Marquee B</h3>
                </div>
                <div class="likes">
                  <i class="ri-heart-line"></i>
                  <span>84.4k</span>
                  <i class="ri-chat-3-line"></i>
                  <span>88</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Hidden file inputs */}
      <input
        type="file"
        id="upload-video"
        accept="video/*"
        style={{ display: "none" }}
        onChange={handleFileChange}
      />
      <input
        type="file"
        id="upload-photo"
        accept="image/*"
        style={{ display: "none" }}
        onChange={handleFileChange}
      />
    </div>
  );
}

export default Instagram;
