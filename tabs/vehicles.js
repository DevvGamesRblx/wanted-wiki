function renderVehicles(sort = "high") {
  const sorted = [...VEHICLES_DATA].sort((a, b) =>
    sort === "high" ? b.contractPrice - a.contractPrice : a.contractPrice - b.contractPrice
  );

  const cards = sorted.map(item => {
    const slug = generateSlug(item.name);
    let statsHtml = '';
    
    if (item.type === 'ground') {
      statsHtml = `
        ${renderStat('Top Speed', `${item.stats.topSpeed} MPH`)}
        ${renderStat('Acceleration', `${item.stats.acceleration}%`)}
        ${renderStat('Braking', `${item.stats.braking}%`)}
        ${renderStat('Max Health', item.stats.maxHealth)}
        ${renderStat('Armor', item.stats.armor)}
      `;
    } else if (item.type === 'flying') {
      statsHtml = `
        ${renderStat('Top Speed', `${item.stats.topSpeed} Knots`)}
        ${renderStat('Handling', `${item.stats.handling}%`)}
        ${renderStat('Spool Time', `${item.stats.spoolTime}s`)}
        ${renderStat('Max Health', item.stats.maxHealth)}
        ${renderStat('Armor', item.stats.armor)}
      `;
    }
    
    const content = `
      ${renderPriceTag(item.contractPrice)}
      <h3>${item.name}</h3>
      ${renderStat('Repair', formatPrice(item.repairPrice))}
      ${statsHtml}
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
    { label: 'Expensive to Cheap', value: 'high', onClick: "sortVehicles('high')" },
    { label: 'Cheap to Expensive', value: 'low', onClick: "sortVehicles('low')" }
  ], sort);

  return renderPage('VEHICLEs', sortButtons, cards);
}

function sortVehicles(order) {
  document.getElementById("page-container").innerHTML = renderVehicles(order);

}
