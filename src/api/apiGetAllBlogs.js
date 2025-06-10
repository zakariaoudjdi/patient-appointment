async function getAllBlogs() {
  try {
    const response = await fetch('http://localhost:8080/api/v1/blogs');
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    return data.blogs
  } catch (error) {
    console.error('There has been a problem with your fetch operation:', error);
  }
}

export default getAllBlogs;