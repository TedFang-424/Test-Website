// 在ProfilePage.js文件中
import React from "react";
import "./ProfilePage.css"; // 引入样式文件

const ProfilePage = () => {
  return (
    <div className="profile-container">
      <header className="profile-header">
        <h1>Welcome to My Profile</h1>
      </header>
      <main className="profile-content">
        <section className="profile-info">
          <h2>John Doe</h2>
          <p>Web Developer</p>
          <p>Location: New York, USA</p>
          {/* LinkedIn 链接 */}
          <a
            href="https://www.linkedin.com/in/dazheng-fang-b59026255/"
            target="_blank"
            rel="noopener noreferrer"
            className="linkedin-link"
          >
            Visit my LinkedIn
          </a>
        </section>
        <section className="profile-bio">
          <h3>About Me</h3>
          <p>This is a short introduction about myself.</p>
        </section>
      </main>
    </div>
  );
};

export default ProfilePage;
