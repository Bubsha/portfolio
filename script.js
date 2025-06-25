* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body {
  font-family: 'Segoe UI', sans-serif;
  background: #0e0e0e;
  color: white;
}
a {
  text-decoration: none;
  color: inherit;
}
header, footer, section {
  padding: 2rem;
}
nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: rgba(20, 20, 20, 0.9);
  padding: 1rem 2rem;
  position: sticky;
  top: 0;
  z-index: 999;
}
nav .logo {
  font-size: 1.5rem;
  font-weight: bold;
  color: #00cfff;
}
nav ul {
  display: flex;
  list-style: none;
  gap: 1.5rem;
}
nav ul li a:hover {
  color: #00cfff;
}
.hero {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  height: 100vh;
  padding: 2rem 4rem;
  background: linear-gradient(to right, rgba(0, 255, 255, 0.1), rgba(255, 255, 255, 0.02));
}
.hero h1 {
  font-size: 2.5rem;
}
.hero span {
  color: #00cfff;
}
.hero p {
  font-size: 1.2rem;
  margin-top: 0.5rem;
}
.hero .buttons {
  margin-top: 1.5rem;
  display: flex;
  gap: 1rem;
}
.hero .buttons button {
  padding: 0.8rem 1.5rem;
  border: none;
  border-radius: 20px;
  cursor: pointer;
  transition: all 0.3s;
}
.hero .hire {
  background: #00cfff;
  color: black;
}
.hero .works {
  background: transparent;
  border: 1px solid #00cfff;
  color: #00cfff;
}
.about, .skills, .experience, .contact {
  background: rgba(255, 255, 255, 0.05);
  margin: 2rem;
  border-radius: 20px;
  padding: 2rem;
  box-shadow: 0 0 10px rgba(0, 255, 255, 0.2);
  backdrop-filter: blur(10px);
}
.skills .skill {
  margin: 1rem 0;
}
.skills .skill h4 {
  margin-bottom: 0.3rem;
}
.skills .bar {
  background: rgba(255, 255, 255, 0.1);
  height: 8px;
  border-radius: 5px;
  overflow: hidden;
}
.skills .bar span {
  display: block;
  height: 100%;
  background: #00cfff;
  animation: fillBar 2s ease-in-out;
}
@keyframes fillBar {
  from { width: 0%; }
  to { width: 100%; }
}
.experience .card {
  background: rgba(0, 255, 255, 0.1);
  padding: 1rem;
  margin: 1rem 0;
  border-radius: 15px;
  box-shadow: 0 0 8px rgba(0, 255, 255, 0.3);
}
footer {
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #000;
  color: #aaa;
  padding-bottom: 2rem;
}
.social-icons {
  margin-top: 1rem;
}
.social-icons a {
  margin: 0 0.5rem;
  color: #00cfff;
  font-size: 1.5rem;
  transition: transform 0.2s;
}
.social-icons a:hover {
  transform: scale(1.2);
  color: white;
}
