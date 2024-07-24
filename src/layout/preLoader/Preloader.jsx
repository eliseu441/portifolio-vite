import { useLanguage } from '../LanguageProvider/Language.jsx';

const Preloader = () => {
  const { theme } = useLanguage();
  
  return (
    <div className="st-preloader">
      <div className="st-preloader-in" style={
        theme == false ? { background: 'linear-gradient(90deg, rgb(255 94 0) 20%, rgb(0, 0, 0, 0) 90%)' } : { background: 'linear-gradient(90deg, rgb(0, 0, 0) 20%, rgb(0, 0, 0, 0) 90%)' }
        }></div>
    </div>
  );
};

export default Preloader;