import {
  HomeModernIcon,
  UserGroupIcon,
  AcademicCapIcon,
} from "@heroicons/react/24/solid";
import { BenefitType, SelectedPage } from "@/shared/types";
import { motion } from "framer-motion";
import HText from "@/shared/HText";
import Benefit from "./Benefit";
import ActionButton from "@/shared/ActionButton";

const benefits: Array<BenefitType> = [
  {
    icon: <HomeModernIcon className="h-6 w-6" />,
    title: "State of the art facilities",
    description: "The best of the best",
  },
  {
    icon: <UserGroupIcon className="h-6 w-6" />,
    title: "Hundreds of diverse classes",
    description: "More classes than you can count",
  },
  {
    icon: <AcademicCapIcon className="h-6 w-6" />,
    title: "Expert and pro trainers",
    description: "Learn from the best",
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
        <motion.div className="md:my-5 md:w-3/5">
          <HText>MORE THAN JUST A GYM</HText>
          <p>
            We provide world class equipment, trainers and get you to your
            fitness goals with ease. We put care intoeach and every member.
          </p>
        </motion.div>

        {/* BENEFITS */}
        <motion.div
          className="md:flex items-center justify-between gap-8 mt-5"
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
        <div>
          <img />
          {/* DESCRIPTION */}
          <div>
            {/* TITLE */}
            <div className="relative">
              <div className="before:absolute before:-top -20 before:-left-20 before:z-[-1] before:content-abstractwaves">
                <div>
                  <HText>
                    MILLIONS OF HAPPY MEMBERS GETTING{" "}
                    <span className="text-primary-500">FIT</span>
                  </HText>
                </div>
              </div>
            </div>
            {/* DESCRIPTION */}
            <div>
              <p className="my-5">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem
                ex autem incidunt amet ratione. Laborum, voluptatibus non.
                Delectus at ratione enim? Quam eligendi quos voluptate voluptas
                ab ad, nam aliquam suscipit reprehenderit similique cum aperiam
                numquam obcaecati officiis optio modi magni! Delectus doloribus
                modi quam a quaerat hic voluptatum recusandae voluptas.
              </p>
              <p className="mb-5">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Architecto fugit maxime odit expedita error laboriosam
                voluptatem quidem quod inventore aliquam voluptatibus accusamus,
                possimus eveniet corporis iusto veritatis quae reiciendis,
                ducimus excepturi odio. Illum eveniet quas est magni. Aliquid
                minima possimus inventore qui, temporibus nesciunt, deleniti
                nemo odit aut quidem modi voluptatem vitae beatae harum. Quis
                saepe voluptatum laboriosam ipsam quae?
              </p>
            </div>
            {/* BUTTON */}
            <div className="relative mt-16">
              <div className="before:absolute before:-bottom-20 before:right-40 before:z-[1] before:content-sparkles">
                <ActionButton setSelectedPage={setSelectedPage}>
                  Join Now
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
