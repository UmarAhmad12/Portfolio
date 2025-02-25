import styles from './ProjectsStyles.module.css';
import lms from '../../assets/lms.png';
import todo from '../../assets/todo.jpeg';
import blog from '../../assets/blog.png';
import movie from '../../assets/movie.png';
import ProjectCard from '../../common/ProjectCard';

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={lms}
          link="https://github.com/UmarAhmad12/LMS"
          h3="LMS"
          p="Learning Management App"
        />
        <ProjectCard
          src={todo}
          link="https://github.com/UmarAhmad12/Milestone-2-Assignments/tree/main/Project-3-Todo-web-App"
          h3="Todo"
          p="Todo Web App"
        />
        <ProjectCard
          src={blog}
          link="https://github.com/UmarAhmad12/Milestone-2-Assignments/tree/main/Project-1-Blog-App"
          h3="Blog"
          p="Blog App"
        />
        <ProjectCard
          src={movie}
          link="https://github.com/UmarAhmad12/Milestone-2-Assignments/tree/main/Project-2-Movie-Search-Web-App"
          h3="Movies Search"
          p="Movies Search Web App"
        />
      </div>
    </section>
  );
}

export default Projects;
