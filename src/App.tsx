import React, { useEffect } from 'react';
import { useTheme } from './context/ThemeContext';
import logoDark from './images/svg/logo-dark.svg';
import logoLight from './images/svg/logo-light.svg';

import './App.scss';

function App() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="App">
      <div className="about">
        <div className="about__left">
          <div className="about__left-title">About Hawk</div>
          <div className="about__left-content">Hawk is a a comprehensive and user-friendly design system</div>
        </div>
        <div className="about__right">
          <div className="about__right-title" onClick={toggleTheme}><img src={theme === 'light' ? logoLight : logoDark} alt="logo" /></div>
          <div className="about__right-content">
            Hawk prioritizes clean and minimal design principles with 
            fixed maximum width and consistent spacing guidelines. 
            It covers various components, such as tooltips, modals, buttons, overlays, and more, 
            ensuring a cohesive and visually pleasing user experience.
          </div>
        </div>
      </div>

      <div className="line"></div>

      <div className="why">
        <div className="why__title">
          Why use Hawk?
        </div>
        <div className="why__content">
          Use Hawk for cohesive, efficient, and user-centric design. 
          It offers pre-defined components, guidelines, and accessibility best practices, 
          saving time and promoting collaboration.
        </div>
      </div>

      <div className="cards">
        <div className="card">
          <div className="card__title">
            Consistency
          </div>
          <div className="card__content">
            Hawk ensures uniformity in design elements 
            and components across the interface, creating 
            a cohesive user experience. 
            It establishes a visual harmony that reinforces 
            brand identity and user familiarity.
          </div>
        </div>

        <div className="card">
          <div className="card__title">
            Efficiency
          </div>
          <div className="card__content">
            With predefined components and guidelines, designers can work faster and make informed decisions, reducing design iteration time. The system streamlines workflows, boosting productivity and collaboration.
          </div>
        </div>

        <div className="card">
          <div className="card__title">
            Time-saving
          </div>
          <div className="card__content">
            Hawk's pre-built elements save designers from reinventing the wheel, allowing them to focus on refining designs and addressing specific user needs more effectively.
          </div>
        </div>


        <div className="card">
          <div className="card__title">
            User-Centered Design
          </div>
          <div className="card__content">
            Hawk emphasizes user needs and accessibility, guiding designers to create intuitive interfaces that cater to diverse user requirements and preferences.
          </div>
        </div>

        <div className="card">
          <div className="card__title">
            Accessibility
          </div>
          <div className="card__content">
            Hawk integrates accessibility principles, equipping designers to craft inclusive designs that meet the needs of all users, regardless of their abilities.
          </div>
        </div>

        <div className="card">
          <div className="card__title">
            Scalability
          </div>
          <div className="card__content">
            Hawk's flexible components adapt seamlessly to various screen sizes and devices, supporting responsive design and ensuring consistent user experiences across platforms.
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
