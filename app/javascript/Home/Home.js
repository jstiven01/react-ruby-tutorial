import React from 'react';
import Jumbotron from './Jumbotron';
import Table from './Table/Table';

class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      course_modules: [
        {
          id: 0, title: 'course 1 Setting up', description: 'lorem', active: false,
        },
        {
          id: 1, title: 'course 2 Adding React', description: 'lorem', active: false,
        },
        {
          id: 2, title: 'course 3 HelloWorld', description: 'lorem', active: false,
        },
        {
          id: 3, title: 'course 4 React Router DOM', description: 'lorem', active: false,
        },
        {
          id: 4, title: 'course 5 Active Item Course', description: 'lorem', active: false,
        },
      ],
    };
  }

  handleVideoChange(item,event) {
      event.preventDefault();
      const {course_modules} = this.state;
      const newCourseModules = [...course_modules];
      newCourseModules.map(course => {
          course.active = false
      });
      newCourseModules[item].active = !newCourseModules[item].active;
      this.setState({course_modules: newCourseModules});
  }

  render() {
      const {course_modules} = this.state;
    return (
      <div>
          <Jumbotron />
          <Table handlerVideoChange={this.handleVideoChange.bind(this)} courseModules={course_modules} />
      </div>
    );
  }
}
export default Home;
