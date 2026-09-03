import MailIcon from '@/icons/MailIcon';
import PhoneIcon from '@/icons/PhoneIcon';
import SendIcon from '@/icons/SendIcon';
import {FC, memo} from 'react';
import CalendarIcon from '@/icons/CalendarIcon';
import ArrowIcon from '@/icons/ArrowIcon';
import CreativeCloudIcon from '@/icons/CreativeCloudIcon';
import PalleteIcon from '@/icons/PalleteIcon';
import WebsiteIcon from '@/icons/WebsiteIcon';
import FigmaIcon from '@/icons/FigmaIcon';
import ReactIcon from '@/icons/ReactIcon';
import NextJsIcon from '@/icons/NextJsIcon';
import TailwindIcon from '@/icons/TailwindIcon';
import TypescriptIcon from '@/icons/TypescriptIcon';
import NodejsIcon from '@/icons/NodejsIcon';
import JavaIcon from '@/icons/JavaIcon';
import LocationIcon from '@/icons/LocationIcon';
import StrapiIcon from '@/icons/StrapiIcon';
import SpringIcon from '@/icons/SpringIcon';
import FirebaseIcon from '@/icons/FirebaseIcon';
import QuarkusIcon from '@/icons/QuarkusIcon';
import DockerIcon from '@/icons/DockerIcon';
import KubernetesIcon from '@/icons/KubernetesIcon';
import PythonIcon from '@/icons/PythonIcon';
import GraphqlIcon from '@/icons/GraphqlIcon';
import BunIcon from '@/icons/BunIcon';
import InstagramIcon from '@/icons/InstagramIcon';
import LinkedInIcon from '@/icons/LinkedInIcon';
import MobileIcon from '@/icons/MobileIcon';

const Icon = ({name, ...props}: {name: IconName} & Icon) => {
  const icons: Record<IconName, FC<Icon>> = {
    mail: MailIcon,
    phone: PhoneIcon,
    mobile: MobileIcon,
    send: SendIcon,
    calendar: CalendarIcon,
    creativeCloud: CreativeCloudIcon,
    arrow: ArrowIcon,
    pallete: PalleteIcon,
    website: WebsiteIcon,
    figma: FigmaIcon,
    react: ReactIcon,
    nextjs: NextJsIcon,
    tailwind: TailwindIcon,
    typescript: TypescriptIcon,
    nodejs: NodejsIcon,
    java: JavaIcon,
    location: LocationIcon,
    strapi: StrapiIcon,
    spring: SpringIcon,
    firebase: FirebaseIcon,
    quarkus: QuarkusIcon,
    docker: DockerIcon,
    kubernetes: KubernetesIcon,
    python: PythonIcon,
    graphql: GraphqlIcon,
    bun: BunIcon,
    instagram: InstagramIcon,
    linkedin: LinkedInIcon,
  };

  const IconComponent = icons[name];

  return IconComponent ? <IconComponent {...props} /> : null;
};

export default memo(Icon);
