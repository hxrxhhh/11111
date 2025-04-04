import 'bootstrap/dist/css/bootstrap.min.css';import { motion } from "framer-motion";

const [angle, setAngle] = useState(0);

const handleSpin = () => {
  const spins = Math.floor(Math.random() * 4 + 4);
  const newAngle = 360 * spins;
  setAngle(newAngle);
};

return (
  <motion.div
    className="wheel"
    animate={{ rotate: angle }}
    transition={{ duration: 4, ease: "easeInOut" }}
  >
    <Button onClick={handleSpin}>Spin the Wheel</Button>
  </motion.div>
);
const handleUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const formData = new FormData();
      formData.append("file", file);
      fetch("YOUR_BACKEND_URL", {
        method: "POST",
        body: formData,
      });
    }
  };
  
  <input type="file" accept="video/*" onChange={handleUpload} />