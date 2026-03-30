const ipApiUrl = "https://arcada-leppanee-project-1-leppanee-webbkommunikation.2.rahtiapp.fi/api/ip"
const roomsApiUrl = "https://arcada-leppanee-project-1-leppanee-webbkommunikation.2.rahtiapp.fi/rooms"
const alt = "http://0.0.0.0:8080/rooms"

async function getIp() {
    const res = await fetch(ipApiUrl);
    const data = await res.json();

    console.log(data);
    document.getElementById("ip").textContent = data.ip;
}

getIp();

async function getRooms() {
    const res = await fetch(roomsApiUrl);
    const data = await res.json();
    
    console.log(data);
    const roomContainer = document.getElementById("rooms");

    if (!Array.isArray(data) || data.length === 0) {
        roomContainer.textContent = "No rooms found.";
        return;
    }

    const roomList = document.createElement("ul");

    data.forEach(room => {
        const item = document.createElement("li");
        item.textContent = `Room ${room.roomNumber}: size ${room.size}, beds ${room.beds}`;
        roomList.appendChild(item);
    });

    roomContainer.textContent = "";
    roomContainer.appendChild(roomList);
}

getRooms();