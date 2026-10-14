KALKI SPORTS WEBSITE — SETUP GUIDE (Hindi)

Aapki website ka starter design taiyar hai. Isme responsive homepage, products, category filters aur WhatsApp order buttons hain.

ZAROORI:
1. Abhi products ke visuals demo/illustrative hain. Apni asli product photos aur confirmed prices lagayein.
2. WhatsApp order chalu karne ke liye script.js file kholein.
3. Is line ko dhoondhein:
   const WHATSAPP_NUMBER = "ADD_YOUR_NUMBER_HERE";
   Isme ADD_YOUR_NUMBER_HERE ko apne WhatsApp number se replace karein, India ke liye country code 91 ke saath, sirf digits.
   Example format: "919876543210"
   Apna number public karne se pehle business WhatsApp use karne par vichar karein.
4. Yeh starter site cart, automatic checkout, payment gateway, inventory ya order database nahi banati. Abhi customers WhatsApp par enquiry/order karenge.
5. Delivery policy, return policy, business contact, prices, tax/GST details (agar lagu hon) aur product claims publish karne se pehle verify karein.

FREE PUBLISHING — GitHub Pages (computer easiest):
A. GitHub par account banayein/sign in karein: https://github.com
B. New public repository banayein, e.g. kalki-sports-kanpur
C. index.html, style.css aur script.js upload karein.
D. Repository Settings > Pages kholein.
E. Build and deployment mein "Deploy from a branch" select karein; branch "main", folder "/ (root)" select karke Save karein.
F. Kuch minutes baad GitHub Pages aapko published site ka address dikhayega.

Alternative: Netlify Drop (simple upload):
https://app.netlify.com/drop
Project folder ke files upload karein; account/sign-in ya platform ke current rules lag sakte hain.

Free hosting ki terms badal sakti hain. Custom domain aam taur par alag se kharidna padta hai.
