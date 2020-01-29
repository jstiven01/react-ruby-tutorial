import React from 'react';
import Jumbotron from './Jumbotron';
import Table from './Table/Table';
import axios from 'axios';

class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      course_modules: [],
    };
  }
  componentDidMount(){
      axios.get('/episodes.json')
      .then(response => {
          let result = []
          response.data.data.map(data => {
              result.push({id:data.id, title: data.title, description: data.description, active: false });
              this.setState({course_modules: result})
          })
      })
      .catch(data =>{
          console.log('Error: ', data)
      });
  }

  handleVideoChange(item,event) {
      event.preventDefault();
      const {course_modules} = this.state;
      const newCourseModules = [...course_modules];
      let indexItem = 0;
      newCourseModules.map((course, index) => {
          course.active = false
          if(course.id === item){
              indexItem = index;
          }
      });
      newCourseModules[indexItem].active = !newCourseModules[indexItem].active;
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
