import ActionButton from "@/shared/ActionButton";
import HText from "@/shared/HText";
import { BenefitType, SelectedPage } from "@/shared/types";
import {
  Cog6ToothIcon,
  DevicePhoneMobileIcon,
  GlobeAltIcon,
} from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import BenefitsPageGraphic from "@/assets/BenefitsPageGraphic.png";
import Benefit from "./Benefit";

const benefits: Array<BenefitType> = [
  {
    icon: <GlobeAltIcon className="h-6 w-6" />,
    title: "Web Development",
    description:
      "Responsive websites built with modern technologies.",
  },
  {
    icon: <DevicePhoneMobileIcon className="h-6 w-6" />,
    title: "Mobile Apps",
    description:
      "Innovative native and cross-platform mobile applications.",
  },
  {
    icon: <Cog6ToothIcon className="h-6 w-6" />,
    title: "Custom Solutions",
    description:
      "Tailored software solutions to meet your business needs.",
  },
];

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2 },
  },
};

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Benefits = ({ setSelectedPage }: Props) => {
  return (
    <section id="benefits" className="mx-auto min-h-full w-5/6 py-20">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.Benefits)}
      >
        {/* HEADER */}
        <motion.div
          className="md:my-5 md:w-3/5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <HText>Our Service</HText>
          <p className="my-5 text-sm">
          Comprehensive digital solutions tailored to your unique business goals. 
          Let's partner to build a digital future together.
          </p>
        </motion.div>

        {/* BENEFITS */}
        <motion.div
          className="mt-5 items-center justify-between gap-8 md:flex"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={container}
        >
          {benefits.map((benefit: BenefitType) => (
            <Benefit
              key={benefit.title}
              icon={benefit.icon}
              title={benefit.title}
              description={benefit.description}
              setSelectedPage={setSelectedPage}
            />
          ))}
        </motion.div>

        {/* GRAPHICS AND DESCRIPTION */}
        <div className="mt-16 items-center justify-between gap-20 md:mt-28 md:flex">
          {/* GRAPHIC */}
          <img
            className="mx-auto"
            alt="benefits-page-graphic"
            src={BenefitsPageGraphic}
          />

          {/* DESCRIPTION */}
          <div>
            {/* TITLE */}
            <div className="relative">
              <div className="before:absolute before:-top-20 before:-left-20 before:z-[1] before:content-abstractwaves">
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.5 }}
                  variants={{
                    hidden: { opacity: 0, x: 50 },
                    visible: { opacity: 1, x: 0 },
                  }}
                >
                  <HText>
                  <p className="mb-5">
                    Discover the Features of Our{" "}
                    <span className="text-primary-500 mb-5">App</span>
                  </p>
                  </HText>
                </motion.div>
              </div>
            </div>

            {/* DESCRIPT */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              variants={{
                hidden: { opacity: 0, x: 50 },
                visible: { opacity: 1, x: 0 },
              }}
            >
              <HText>
                  <span className="text-primary-500">Website</span>
                  {" "}For Business
                  </HText>
              <p className="mb-5">
              A website serves as a 24/7 online storefront, providing customers with a platform to learn about your 
              business, products, and services. It's an invaluable tool for creating a strong online presence, attracting 
              new customers, and keeping existing ones engaged.
              </p>
              <HText>
                 
                    <span className="text-primary-500">App</span>
                    {" "}For Business
                  </HText>
              <p className="mb-5">
              Mobile apps are optimized for small screens and touch interfaces, delivering a more user-friendly and intuitive
              experience compared to mobile websites. In this digital world,where smartphone usage is soaring, having a mobile 
              app can be a game-changer for your business. It enables you to reach your customers wherever they are, offer 
              personalized experiences, and enhance customer engagement.
              </p>
            </motion.div>

            {/* BUTTON */}
            <div className="relative mt-16">
              <div className="before:absolute before:-bottom-20 before:right-40 before:z-[-1] before:content-sparkles">
                <ActionButton setSelectedPage={setSelectedPage}>
                  Get Started
                </ActionButton>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Benefits;
