function renderGunCrates(sort = "a-z") {
  let sorted = [...GUN_CRATES_DATA];

  if (sort === "a-z") {
    sorted.sort((a, b) => a.name.localeCompare(b.name));
  } else if (sort === "z-a") {
    sorted.sort((a, b) => b.name.localeCompare(a.name));
  }

  const cards = sorted.map(item => {
    const slug = generateSlug(item.name);

    const content = `
      <h3>${item.name}</h3>
      ${renderStat('Contains', item.gun)}
      ${renderStat('Cooldown', item.cooldown)}
      ${renderStat('Location', item.location)}
    `;

    return `
      <div class="card">
        <img src="images/${slug}.jpg" alt="${item.name}" 
             style="width:100%; height:auto; margin-bottom:15px; border-radius:4px; 
                    box-shadow:0 0 10px rgba(255,255,255,0.2);">
        ${content}
      </div>`;
  });

  const sortButtons = renderSortButtons([
    { label: 'A-Z', value: 'a-z', onClick: "sortGunCrates('a-z')" },
    { label: 'Z-A', value: 'z-a', onClick: "sortGunCrates('z-a')" }
  ], sort);

  return renderPage('GUN CRATEs', sortButtons, cards);
}

function sortGunCrates(order) {
  document.getElementById("page-container").innerHTML = renderGunCrates(order);
}