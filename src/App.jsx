import { AboutUsBlock } from "@/components/section/AboutUsBlock";
import { ServicesBlock } from "@/components/section/ServicesBlock";
import { WelcomBlock } from '@/components/section/WelcomBlock';
import './styles/global/fonts.scss';
export function App() {
  return (
    <>
      <WelcomBlock />
      <ServicesBlock />
      <AboutUsBlock />
    </>
  );
}
