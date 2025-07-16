async function fetchKPIData(symbol) {
    const apiUrl = `/api/${symbol.toLowerCase()}`;

    try {
        const response = await fetch(apiUrl);
        const data = await response.json();

        const records = data.records;
        const livePrice = records.underlyingValue;
        const previousClose = records.data[0]?.PE?.[0]?.previousClose || 0;

        const movement = (livePrice - previousClose).toFixed(2);
        const percentChange = ((movement / previousClose) * 100).toFixed(2);

        document.getElementById("live-price").textContent = livePrice;
        document.getElementById("previous-close").textContent = previousClose;
        document.getElementById("movement").textContent = (movement > 0 ? "+" : "") + movement;
        document.getElementById("percent-change").textContent = (percentChange > 0 ? "+" : "") + percentChange + " %";

    } catch (error) {
        console.error("Error fetching live data:", error.message);
    }
}