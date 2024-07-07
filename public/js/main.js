const button = document.getElementById("get-posts");
const output = document.getElementById("output");
const form = document.getElementById("add-post");

output.innerHTML = "";

async function showPosts() {
  try {
    const res = await fetch("http://localhost:8000/api/posts");
    if (!res.ok) {
      throw new Error(`${res.status} can not fetch data`);
    }

    const data = await res.json();

    for (let post of data) {
      const postElement = document.createElement("div");
      postElement.textContent = post.title;
      output.appendChild(postElement);
    }
  } catch (error) {
    console.error(error);
  }
}

const addPost = async (e) => {
  e.preventDefault(); // Correctly call e.preventDefault()
  const formData = new FormData(form);
  const title = formData.get("title");
  try {
    const res = await fetch("http://localhost:8000/api/posts", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title }),
    });

    if (!res.ok) {
      throw new Error(`Failed to add post`); // Fix typo in error message
    }

    const data = await res.json();
    for (let post of data) {
      const postElement = document.createElement("div");
      postElement.textContent = post.title;
      output.appendChild(postElement);
    }
  } catch (error) {
    console.error("Error adding post");
  }
};

button.addEventListener("click", showPosts);
form.addEventListener("submit", addPost);
