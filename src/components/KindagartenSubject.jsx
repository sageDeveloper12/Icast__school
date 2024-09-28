import { PiMathOperationsFill } from "react-icons/pi";
import { GrLanguage } from "react-icons/gr";
import { TbWriting } from "react-icons/tb";
import { FaMusic } from "react-icons/fa";
import { FaPaintBrush } from "react-icons/fa";
import { MdOutlineSportsHandball } from "react-icons/md";
import { FaChildren } from "react-icons/fa6";
import { MdOutlineSmartToy } from "react-icons/md";
import { RiTeamFill } from "react-icons/ri";
import { IoBookSharp } from "react-icons/io5";
import { AiOutlineEnvironment } from "react-icons/ai";
import { IoSparklesSharp } from "react-icons/io5";
import { GiTeacher } from "react-icons/gi";
import { MdCastForEducation } from "react-icons/md";
import { FiActivity } from "react-icons/fi";
import { FaSchool } from "react-icons/fa6";
import { color } from "framer-motion";

export const kindagartensubjects = [
  {
    id: 1,
    icon: <PiMathOperationsFill />,
    title: 'Mathematics',
    color: 'limegreen'
  },
  {
    id: 2,
    icon: <GrLanguage />,
    title: 'Language',
    color: 'pink'
  },
  {
    id: 3,
    icon: <TbWriting />,
    title: 'Writing',
    color: 'limegreen'
  },
  {
    id:4,
    icon: <FaMusic />,
    title: 'Music',
    color:  'rgb(192, 217, 255)'
  },
  {
    id:5,
    icon: <MdOutlineSportsHandball />,
    title: 'Sports',
    color:'rgb(255, 192, 255)'
  },
  {
    id:6,
    icon: <FaPaintBrush />,
    title: 'Arts',
    color: ' rgb(204, 192, 255)'
  }
];

export const kindagartResource =[
    {
      title: 'Fullday Care',
      icon: <FaChildren/>
    },
    {
      title: 'Lots of Toys',
      icon: <MdOutlineSmartToy />
    },
    {
      title: 'Professional Staff',
      icon: <RiTeamFill />
    },
    {
      title: 'Books',
      icon:<IoBookSharp />
    },
    {
      title: 'Favorable Setting',
      icon: <AiOutlineEnvironment />
    },
    {
      title: 'Play Ground',
      icon: <IoSparklesSharp />
    }
]


export const primaryOffers = [
  {
  id:1,
  icon: <GiTeacher />,
  title: "Expert Teacher",
  text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid suscipit excepturi harum tenetur esse officia.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid suscipit "
},
  
  {
  id: 2,
  icon:<MdCastForEducation />,
  title: "Quality Education",
  text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid suscipit excepturi harum tenetur esse officia.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid suscipit "
},
  {
  id:3,
  icon:<FiActivity />,
  title: "extracurricular activities",
  text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid suscipit excepturi harum tenetur esse officia.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid suscipit "
},
  {
  id: 4,
  icon: <FaSchool />,
  title: "facilities",
  text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid suscipit excepturi harum tenetur esse officia.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid suscipit "
},
]
