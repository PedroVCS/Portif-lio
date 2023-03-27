import Avatar from "../img/eu.jpg";

import "../styles/components/sidebar.sass";

const Sidebar = () =>  {
  return (
    <aside id="sidebar">
      <img src={Avatar} alt="Pedro Victor" />
   <p className="title">Desenvolvedor</p>
   <p className="">Redes Sociais</p>
   <p className="">Imformaçoes para contato</p>
   <a href="" className="btn">Download Curriculo</a>
    </aside>
    
  );
};

export default Sidebar