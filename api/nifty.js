import axios from 'axios';

export default async function handler(req, res) {
    try {
        const response = await axios.get("https://www.nseindia.com/api/option-chain-indices?symbol=NIFTY", {
            headers: {
                "User-Agent": "Mozilla/5.0",
                "Referer": "https://www.nseindia.com/",
                "Accept": "*/*",
            }
        });
        res.status(200).json(response.data);
    } catch (err) {
        res.status(500).json({ error: "NSE Nifty API fetch failed" });
    }
}