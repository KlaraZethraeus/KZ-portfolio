import '../css/AboutMe.css'
import InnerDevGoals from './InnerDevGoals'
import SkillsPersonal from './SkillsPersonal'
const AboutMe = () => {
  return (
    <div className="about-me">
      <div className="portrait">
        <h1>me.</h1>
        <p>Some moodboards to get a hint of my life.</p>
      </div>
      <div className="images">
        <div className="image ">
          <img src="photo/me-mood.jpg" alt="Me" />
        </div>
        <div className="personalskills">
          <div first-column>
            <h3>skills.</h3>
            <SkillsPersonal />
          </div>
        </div>
        <div className="image first-column">
          <h3>family.</h3>
          <img src="photo/family-mood.jpg" alt="Family" />
        </div>
        <div className="image first-column">
          <h3>fun.</h3>
          <img src="photo/fun-mood.jpg" alt="Fun" />
        </div>
        <div className="image ">
          <h3>inspiration.</h3>
          <div>
            <p className="important">
              {/* As they point out:
            "when we talk about mind shift, when we talk
            about growth that mattewrs"
            I think the basic human challange is this: */}
              It is difficult to learn if you already know...
            </p>
          </div>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <div style={{ maxWidth: 640 }}>
              <InnerDevGoals url="https://www.youtube.com/embed/m6-zeAAFSXQ" />
            </div>
          </div>
        </div>

        <div>
          <p>thanks.</p>
          <p>kz</p>
        </div>
      </div>
    </div>
  )
}

export default AboutMe
