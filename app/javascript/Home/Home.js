import React from 'react';

class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      course_modules: [
        {
          id: 1, title: 'course 1 Setting up', description: 'lorem', active: false,
        },
        {
          id: 2, title: 'course 2 Adding React', description: 'lorem', active: false,
        },
        {
          id: 3, title: 'course 3 HelloWorld', description: 'lorem', active: false,
        },
        {
          id: 4, title: 'course 4 React Router DOM', description: 'lorem', active: false,
        },
      ],
    };
  }

  render() {
    return (
      <div className="container">This is a home Component</div>
    );
  }
}
export default Home;
