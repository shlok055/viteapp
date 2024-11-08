import { SelectedPage, ClassType } from "@/shared/types";
import image1 from "@/assets/image1.png";
import image2 from "@/assets/image2.jpg";
import image3 from "@/assets/image3.jpg";
import image4 from "@/assets/image4.png";
import image5 from "@/assets/image5.png";
import image6 from "@/assets/image6.jpg";
import { motion } from "framer-motion";
import HText from "@/shared/HText";
import Class from "./Class";

const classes: Array<ClassType> = [
  {
    name: "100% Responsive Design",
    description:
      "Creating a 100% responsive design for a mobile app is essential to ensure that it functions well on a wide range of devices, screen sizes, and orientations.",
    image: image1,
  },
  {
    name: "Phenomenal Features",
    description:
      "Enhancing a multi-vendor online ordering and delivery system requires features for a seamless experience for both vendors and customers.",
    image: image2,
  },
  {
    name: "Partner App",
    description:
      "Partner mobile apps facilitate collaboration, communication, and productivity with key partners, including suppliers and customers.",
    image: image3,
  },
  {
    name: "Admin Panel",
    description:
      "An admin panel or CMS is essential for managing website content and infrastructure effectively.",
    image: image4,
  },
  {
    name: "Mobile App",
    description:
    "Mobile apps are vital for business, communication, and productivity in modern society.",
    image: image5,
  },
  {
    name: "Website",
    description:
      "Websites are crucial for establishing a strong online presence and achieving various goals.",
    image: image6,
  },
];

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const OurClasses = ({ setSelectedPage }: Props) => {
  return (
    <section id="ourclasses" className="w-full bg-primary-100 py-40">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.OurClasses)}
      >
        <motion.div
          className="mx-auto w-5/6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <div className="md:w-3/5">
            <HText>Key Features</HText>
            <p className="py-5">
            Most Probably Included Best Features Ever
            </p>
          </div>
        </motion.div>
        <div className="mt-10 grid grid-cols-3 gap-4 rounded-lg">
          {classes.map((item: ClassType, index) => (
            <Class
              key={`${item.name}-${index}`}
              name={item.name}
              description={item.description}
              image={item.image}
            />
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default OurClasses;
