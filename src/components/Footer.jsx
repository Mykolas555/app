import githubIcon from '../assets/github.svg';
import shadcnIcon from "../assets/shadcn.png";
import reactIcon from "../assets/react.svg"
const Footer = () => {
    return (
      <footer className="bg-yellow-400 mt-10 rounded-full p-4 lg:flex lg:justify-evenly flex flex-col justify-center ">
        <div className='lg:flex flex justify-center m-3 gap-5'>
            <a href="https://github.com/shadcn-ui/ui" target="_blank"><img className='h-10 w-10' src={githubIcon} alt="github" /></a>
            <a href="https://react.dev/" target="_blank"><img className='h-10 w-10' src={reactIcon} alt="shadcn Ui" /></a>
            <a href="https://ui.shadcn.com/" target="_blank"><img className='h-10 w-10' src={shadcnIcon} alt="shadcn Ui" /></a>
        </div>
        <div>
            <h1>App created with React and Shadcn/ui</h1>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  