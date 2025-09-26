# 🌐 WebRTC – Interview Notes

WebRTC (**Web Real-Time Communication**) is a browser-based technology that enables real-time **audio, video, and data sharing** directly between peers — without requiring external plugins.

---

## ✅ Core Features
- **Peer-to-Peer Communication** – Directly connects two browsers (or apps) for low-latency media exchange.  
- **Built-in Support for Audio/Video/Data** – No need for extra libraries to capture and send streams.  
- **Secure by Default** – Uses DTLS-SRTP for end-to-end encryption.  
- **Cross-Browser Support** – Supported by most modern browsers (Chrome, Firefox, Safari, Edge).

---

## 🧠 How WebRTC Works
1. **Media Capture**
   - Uses `navigator.mediaDevices.getUserMedia()` to access the camera and microphone.

2. **Signaling (Required but NOT built into WebRTC)**
   - WebRTC does **NOT** provide signaling by itself.
   - You must build a **signaling server** (commonly using WebSockets, Socket.io, or any real-time transport).
   - Signaling is used to exchange:
     - **SDP (Session Description Protocol)**: Describes media capabilities, codecs, network info.
     - **ICE Candidates**: Possible network routes (local IP, public IP, TURN server).

3. **Connection Setup**
   - Browser A creates an **offer** (SDP) and sends it to Browser B through the signaling server.
   - Browser B replies with an **answer** (SDP).
   - Both exchange ICE candidates until a connection path is found.

4. **Media/Data Transfer**
   - Once connected, media streams flow **directly between peers** over UDP.

---

## 🌍 STUN / TURN / ICE
- **STUN Server:** Discovers public IP + port mapping (for NAT traversal).
- **TURN Server:** Relays media if direct P2P fails (e.g., strict NAT/firewall).
- **ICE (Interactive Connectivity Establishment):** Framework that tries multiple connection candidates (host, reflexive, relay).

---

## ⚠️ Limitations of Pure P2P
- Works great for 1:1 calls.
- **Scales poorly** for group calls (each peer must send media to every other peer → high bandwidth usage).
- Cannot easily support recording, moderation, or server-side logic.

---

## 🖧 SFU (Selective Forwarding Unit)
- **Industry Standard for Group Calls**
- Each client sends a single media stream to the SFU.
- SFU forwards streams to all participants — **does not decode/re-encode** (low latency).
- Benefits:
  - **Scalable:** Only 1 upstream per client.
  - **Centralized control:** Easy to add recording, moderation, analytics.
  - **Efficient:** Lower CPU and bandwidth usage on clients compared to full mesh.

---

## 🗝️ Key Takeaways for Interviews
- WebRTC is P2P by default, but **requires signaling** to work (WebRTC alone is not enough).
- **STUN/TURN servers** are critical for NAT traversal and connectivity.
- **SFU architecture** is the preferred approach for production multi-party calls.
- Understanding **SDP, ICE candidates, and signaling flow** is crucial for debugging real-time issues.
