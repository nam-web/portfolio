import { useEffect, useState } from "react";
import ProjectList from "../projectList/ProjectList";
import "./project.scss"

export default function Project() {
  const [selected, setSelected] = useState("featured");
  const list = [
    {
      id: "featured",
      title: "Featured",
    },
    {
      id: "web",
      title: "Web App",
    },
    {
      id: "mobile",
      title: "Mobile App",
    },
    {
      id: "design",
      title: "Design",
    }, 
    {
      id: "content",
      title: "Content",
    },
  ];
  return (
    <div className="project" id="project">
        <h1>Projects</h1>
        <ul>
          {list.map((item) => (
            <ProjectList title={item.title} active={selected===item.id} setSelected={setSelected}
            id={item.id}/>
          ))}
        </ul>
        <div className="container">
          <div className="item">
            <img src="https://scontent.flko9-2.fna.fbcdn.net/v/t39.30808-6/313345511_2143954692466443_1378502434603134259_n.png?stp=cp6_dst-png&_nc_cat=101&ccb=1-7&_nc_sid=5f2048&_nc_ohc=umLC_bHeQNUAX_7_5j6&_nc_ht=scontent.flko9-2.fna&oh=00_AfDQVBNraVEGDU0ZPWMcmgky44bjtkgBAAc2QADykGMRuQ&oe=660F211B" alt="" />
            <h3><a href="https://nam-web.github.io/blinkit-clone/">Blinkit Clone</a></h3>
          </div>
          <div className="item">
            <img src="https://repository-images.githubusercontent.com/629708677/0984006d-d0ea-44f0-9c04-7c94d4e5f32c" alt="" />
            <h3><a href="">Movie App</a></h3>
          </div>
          <div className="item">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUWF91MfXl0iaM1BHiAOepgIoHfu2AxHfxtiDrURCrMCOLkeHbpbKusKwfcnqM5dOWsI4&usqp=CAU" alt="" />
            <h3><a href="">Food Delivery App</a></h3>
          </div>
          <div className="item">
          <img src="https://miro.medium.com/v2/resize:fit:3588/1*tRUq9FQeOwBUpHNsPXrzPQ.png" alt="" />
            <h3><a href="https://nam-web.github.io/namWeatherApp/">Weather App</a></h3>
          </div>
          <div className="item">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuSudA_4KQkw9JjV6YNhPEBQAlGvnycdk35fXo30lBjYlvc9amytpBSbCRtFP1hrbkMx4&usqp=CAU" alt="" />
            <h3><a href="">E-commerce App</a></h3>
          </div>
          <div className="item">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQo1mFEDvO6ToyTEzGTaX-Q7H6MDpI7CWbDD1Mm6cMR9MTrv-4libE-vIVdpUcznLR0DVM&usqp=CAUhttps://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFSw-bqgcpsKfN29OKc9wlgu3ZIQ6QQhByyg&usqp=CA"/>
            <h3><a href="https://nam-web.github.io/spotify-clone-module-test/">Spotify Clone</a></h3>
          </div>
        </div>
    </div>
  )
}
