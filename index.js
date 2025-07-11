async function getRepoCountGraphQL(username) {
  const query = `
    query {
      user(login: "${username}") {
        repositories(ownerAffiliations: OWNER) {
          totalCount
        }
      }
    }
  `;

  const response = await fetch("https://api.github.com/graphql", {
    method: "POST",
    headers: {
      "Authorization": `Bearer YOUR_GITHUB_TOKEN`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ query })
  });

  const result = await response.json();
  return result.data.user.repositories.totalCount;
}
function formatDate(date) {
  return date.toISOString().split('T')[0];
}
document.getElementById('repositories').innerHTML = `<b>${await getRepoCountGraphQL('RestlessByte')}</b>`
document.getElementById('time').innerHTML = `🕒 Updated: ${await formatDate(new Date())} `;