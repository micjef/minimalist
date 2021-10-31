import BlogCard from './components/Cards/BlogCard';

function App() {
  return (
    <div>
      <BlogCard 
        size="big"
        backgroundColor='#DADDE2'
        image='https://images.unsplash.com/photo-1504418682362-6ad6257cb2fb?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjR8fG1pbmltYWxpc3R8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
        profileImage='https://avatars.githubusercontent.com/u/61500479?v=4'
        profile='micjef'
        title="Lorem Ipsum"
        description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc elementum, ipsum eu mattis varius, ligula elit dictum enim, et tristique nunc augue et odio. Fusce auctor mollis maximus. In hac habitasse platea dictumst. Mauris id rutrum ex. Nunc accumsan est suscipit felis faucibus, semper placerat est molestie. In scelerisque nibh at elit fermentum molestie. Pellentesque porttitor convallis tellus eu volutpat. Sed non dolor in erat aliquam hendrerit at eget dolor. Nam vitae lectus non massa iaculis consectetur eu at mauris. Nam tincidunt diam et nibh porta fringilla. Nullam cursus sagittis diam a semper. Praesent eget aliquet odio. Nulla eget semper orci.'
        maxLengthOfDescription='100'
        link='https://github.com/micjef/minimalist'
        time='29 Oktober 2021'
      />
    </div>
  );
}

export default App;
