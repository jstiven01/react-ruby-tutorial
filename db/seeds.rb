course = Course.create(title: 'Hello World', description: 'Create a react app with ruby on rails')

section = Section.create(title: 'Chapter 1' , course: course)

episodes = Episode.create([
    {title: '1. Setting up a new Ruby on Rails App with React.', description: 'lorem ipsum',url:'https://www.youtube.com/embed/5F_JUvPq410', section: section},

    {title: '2. Adding React to an existing Rails App. ', description: 'lorem ipsum',url:'https://www.youtube.com/embed/5F_JUvPq410', section: section}
                          ])