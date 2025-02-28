import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom"; // Import Link for navigation
import "./Home.css"; // You can style your page with a CSS file
import "./index.css"; // You can style your page with a CSS file

import todoImage from "./assets/images/todomain.jpg";
import calendarImage from "./assets/images/calmain.jpg";
import featureImage1 from "./assets/images/featureimg1.jpg"; // Update the path as per your file structure
import featureImage2 from "./assets/images/featureimg2.jpg"; // Update the path as per your file structure
import featureImage3 from "./assets/images/featureimg3.jpg"; // Update the path as per your file structure

const Home = () => {
  const [isContentVisible, setIsContentVisible] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselRef = useRef(null);

  // Data array for features
const featureData = [
  {
    image: featureImage1,
    alt: "Task Management",
    title: "Task Management",
    description:
      "Efficiently organize, prioritize, and track your tasks with our intuitive system."
  },
  {
    image: featureImage2,
    alt: "Custom Reminders",
    title: "Custom Reminders",
    description:
      "Set personalized reminders to stay on top of your deadlines and important events."
  },
  {
    image: featureImage3,
    alt: "Cross-Platform Sync",
    title: "Cross-Platform Sync",
    description:
      "Access your tasks and schedules seamlessly from any device, anywhere."
  }
];

  const [activeFAQIndex, setActiveFAQIndex] = useState(null); // 상태 추가

  // Add scroll event listener to trigger animations when elements are in view
  window.addEventListener("scroll", function () {
    const elements = document.querySelectorAll(".feature-card, .section-title");

    elements.forEach(function (element) {
      if (isInViewport(element)) {
        element.classList.add("in-view");
      }
    });
  });

  // Scroll to the top on page load
  window.onload = function () {
    window.scrollTo(0, 0); // Scroll to the top (coordinates: x=0, y=0)
  };

  window.addEventListener("scroll", function () {
    const showcase = document.querySelector(".features-showcase");
    if (isInViewport(showcase)) {
      showcase.classList.add("in-view");
    }
  });

  // Check if an element is in the viewport
  function isInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= window.innerHeight &&
      rect.right <= window.innerWidth
    );
  }

  useEffect(() => {
    // After 3 seconds, make the content visible
    const timer = setTimeout(() => {
      setIsContentVisible(true);
    }, 3000); // 3000ms = 3 seconds

    return () => clearTimeout(timer); // Cleanup on component unmount
  }, []);

  const benefitTitles = [
    "Task Organization",
    "Checklists",
    "Multiple Lists",
    "Set Reminders",
    "Cross-Platform Sync",
  ];

   // 오른쪽 버튼 클릭시 인덱스를 증가시키고, 마지막 박스를 넘지 않도록 처리
   const handleRightClick = () => {
    if (currentIndex === benefitTitles.length - 1) {
      // 마지막 박스를 넘을 경우, 첫 번째 박스로 돌아감
      setCurrentIndex(0);
    } else {
      setCurrentIndex(currentIndex + 1);
    }
  };

  // 왼쪽 버튼 클릭시 인덱스를 감소시키고, 첫 번째 박스를 넘지 않도록 처리
  const handleLeftClick = () => {
    if (currentIndex === 0) {
      // 첫 번째 박스를 넘을 경우, 마지막 박스로 돌아감
      setCurrentIndex(benefitTitles.length - 1);
    } else {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const faqData = [
    {
      id: 1,
      question: "How can I set reminders?",
      answer: (
        <p>
          You can easily set reminders for your tasks in the To-Do app by selecting
          the task you want to be reminded of, then choosing a specific time or date
          to receive a notification. This ensures that you'll never forget an important
          task again!
        </p>
      ),
    },
    {
      id: 2,
      question: "Is there a mobile app?",
      answer: (
        <p>
          Yes, our To-Do app is available for both Android and iOS. You can download it
          from the Google Play Store or the Apple App Store. The app provides the same
          great features and functionality as the web version, so you can manage your tasks
          on the go!
        </p>
      ),
    },
    {
      id: 3,
      question: "How do I sync my tasks across devices?",
      answer: (
        <p>
          Your tasks are automatically synced across all your devices through cloud syncing.
          Whether you're using your phone, tablet, or computer, your tasks, reminders, and
          lists are always up-to-date. Just sign in with your account to sync and stay connected
          to your tasks everywhere.
        </p>
      ),
    },
    {
      id: 4,
      question: "Can I create multiple task lists?",
      answer: (
        <p>
          Yes! You can create multiple task lists to organize your tasks based on different
          projects or categories. This feature helps you manage your work and personal tasks
          separately, making your productivity even more efficient. You can even color-code
          your lists for easier navigation.
        </p>
      ),
    },
    {
      id: 5,
      question: "Is there a way to collaborate with others on tasks?",
      answer: (
        <p>
          Yes! You can easily collaborate with others by sharing task lists with your friends,
          family, or coworkers. This allows multiple people to view, add, and complete tasks
          together. It's a great feature for team projects or shared household chores!
        </p>
      ),
    },
  ];

  const toggleFAQ = (index) => {
    setActiveFAQIndex(index === activeFAQIndex ? null : index);
  };



  return (
    <div className={`home-container ${isContentVisible ? "show-content" : ""}`}>
      <div class="parallax">
        <div class="parallax-content gb-color-font-bright gb-text-align-center">
          <div className="home-header gb-text-align-center">
            <h1>Welcome to Your Productivity Suite!</h1>
            <div className="intro">
              <p>
                Explore our awesome To-Do app and Calendar app to stay
                organized!
              </p>
            </div>
          </div>

          <div className="app-introductions">
            <div className="app-card gb-text-align-center">
              <Link to="/todo">
                {" "}
                {/* Link to Todo.js */}
                <img src={todoImage} alt="To-Do App" />
                <h2 id="servicename-title">To-Do App</h2>
                <p>Keep track of your tasks and never forget anything!</p>
              </Link>
            </div>

            <div className="app-card gb-text-align-center">
              <Link to="/calendar">
                {" "}
                {/* Link to Calendar.js */}
                <img src={calendarImage} alt="Calendar App" />
                <h2 id="servicename-title">Calendar App</h2>
                <p>
                  Stay on top of your schedule with our easy-to-use calendar!
                </p>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="features-showcase gb-text-align-center">
      <h3 className="section-title">Key Features</h3>
      <div className="features-container">
        {/* Loop through the featureData array and render each feature card */}
        {featureData.map((feature, index) => (
          <div key={index} className="feature-card gb-color-background-white">
            <img
              src={feature.image}
              alt={feature.alt}
              className="feature-image"
            />
            <h4 className="feature-title gb-color-font-dark">{feature.title}</h4>
            <p className="feature-description">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>

    <div className="carousel-container gb-text-align-center gb-color-font-black">
      <h3>Why Use Our To-Do App?</h3>
      <div className="carousel-wrapper">
        <button className="carousel-btn left" onClick={handleLeftClick}>
          &#10094;
        </button>
        <div
          className="carousel gb-display-flex"
          ref={carouselRef}
          style={{ transform: `translateX(-${currentIndex * 300}px)` }}
        >
          {benefitTitles.map((title, index) => (
            <div key={index} className="benefit-box gb-text-align-center gb-color-background-gray gb-color-font-black">
              <h4>{title}</h4>
              <p>Short description of {title} benefits.</p>
            </div>
          ))}
        </div>
        <button className="carousel-btn right" onClick={handleRightClick}>
          &#10095;
        </button>
      </div>
    </div>

      <h2 className="midtitle">FAQs</h2>
        <div className='accordion-container'>
        {faqData.map(({ id, question, answer }) => (
          <div key={id} className="accordion-item gb-text-align-center">
            <button
              className="accordion-btn gb-border-radius gb-text-align-left gb-color-background-white"
              onClick={() => toggleFAQ(id)}
              aria-expanded={activeFAQIndex === id}
            >
              {question}
            </button>
            {activeFAQIndex === id && <div className="accordion-content">{answer}</div>}
          </div>
        ))}
      </div>


    </div>


  );
};

export default Home;