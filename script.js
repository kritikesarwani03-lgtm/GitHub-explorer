let repoData = [];

window.onload = () => {
  const saved = localStorage.getItem("lastUser");
  if (saved) {
    document.getElementById("username").value = saved;
    searchUser();
  }
};

async function searchUser() {
  const username = document.getElementById("username").value;
  localStorage.setItem("lastUser", username);

  const loading = document.getElementById("loading");
  const error = document.getElementById("error");
  const profileDiv = document.getElementById("profile");
  const reposDiv = document.getElementById("repos");
  const btn = document.getElementById("searchBtn");

  error.textContent = "";
  profileDiv.innerHTML = "";
  reposDiv.innerHTML = "";

  loading.classList.remove("hidden");
  btn.disabled = true;

  try {
    const userRes = await fetch(`https://api.github.com/users/${username}`);
    if (!userRes.ok) throw new Error("User not found");

    const user = await userRes.json();

    profileDiv.innerHTML = `
      <img src="${user.avatar_url}" width="100">
      <h2>${user.name || ""}</h2>
      <p>${user.bio || ""}</p>
      <p>Followers: ${user.followers} | Following: ${user.following}</p>
      <p>Public Repos: ${user.public_repos}</p>
    `;

    const repoRes = await fetch(`https://api.github.com/users/${username}/repos`);
    repoData = await repoRes.json();

    renderRepos(repoData);

  } catch (err) {
    error.textContent = err.message;
  }

  loading.classList.add("hidden");
  btn.disabled = false;
}

function renderRepos(repos) {
  const reposDiv = document.getElementById("repos");
  reposDiv.innerHTML = "";

  if (repos.length === 0) {
    reposDiv.innerHTML = "<p>No repositories</p>";
    return;
  }

  repos.forEach(repo => {
    const card = document.createElement("div");
    card.className = "repo-card";

    card.innerHTML = `
      <h3>${repo.name}</h3>
      ⭐ Stars: ${repo.stargazers_count}<br>
      🍴 Forks: ${repo.forks_count}<br>
      💻 Language: ${repo.language || "N/A"}
    `;

    card.onclick = () => openModal(repo);

    reposDiv.appendChild(card);
  });
}

function sortRepos() {
  repoData.sort((a, b) => b.stargazers_count - a.stargazers_count);
  renderRepos(repoData);
}

function openModal(repo) {
  document.getElementById("modalBody").innerHTML = `
    <h3>${repo.name}</h3>
    <p>${repo.description || "No description"}</p>
    <a href="${repo.html_url}" target="_blank">View on GitHub</a>
  `;
  document.getElementById("modal").classList.remove("hidden");
}

function closeModal() {
  document.getElementById("modal").classList.add("hidden");
}