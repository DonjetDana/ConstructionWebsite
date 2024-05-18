import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Components/Header';
import Footer from './Components/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ProjectPage from './pages/ProjectPage';
import ContactPage from './pages/ContactPage';
import BussinesComponent from './Components/pages/BussinesSelector/BussinesComponent';
import ServicesComponent from './Components/pages/Services/ServicesComponent';
import data from "./Components/pages/Services/ServiceData"
import AppLoader from './Components/AppLoader';

function App() {
  const architectureContent = "Unsere Priorität ist es, die besten Einrichtungen und Gebäude für Wohnen, Arbeiten und Freizeit zu entwerfen. Wir entwickeln Projekte vom Konzeptentwurf bis zu den endgültigen Details, basierend auf den Anforderungen des Kunden und unter Berücksichtigung der Baukriterien und -bedingungen, mit dem alleinigen Ziel, die Kontinuität des Konzeptentwurfs und des Gebäudes mit hoher Qualität zu gewährleisten. Gutes Design, das auf der Wahrnehmung vor Ort basiert, ist der Schlüssel zu adäquatem und qualitativ hochwertigem Design.In diesem Tätigkeitsfeld plant unser professionelles Team aus erfahrenen Architekten, Statikern, Bauingenieuren und Detailplanern oberirdische Bauwerke, die mit einem hohen technischen Standard ausgestattet sind. Solche Projekte werden von uns in allen Phasen umfassend betreut. Mit Schweizer Standards für Gesundheits-, Bildungs-, Sport-, Verwaltungs-, Hotel- und Industriegebäude."
  const energyContent = "Energy efficiency simply means using less energy to perform the same task – that is, eliminating energy waste. Energy efficiency brings a variety of benefits: reducing greenhouse gas emissions, reducing demand for energy imports, and lowering our costs on a household and economy-wide level. While renewable energy technologies also help accomplish these objectives, improving energy efficiency is the cheapest – and often the most immediate – way to reduce the use of fossil fuels. There are enormous opportunities for efficiency improvements in every sector of the economy, whether it is buildings, transportation, industry, or energy generation.Buildings are an important field for energy efficiency improvements around the world because of their role as a major energy consumer. However, the question of energy use in buildings is not straightforward as the indoor conditions that can be achieved with energy use vary a lot. The measures that keep buildings comfortable, lighting, heating, cooling and ventilation, all consume energy. Typically the level of energy efficiency in a building is measured by dividing energy consumed with the floor area of the building which is referred to as specific energy consumption (SEC) or energy use intensity (EUI)."
  const waterContent = "Infrastructure is the fundamental facilities and systems serving a country, city, or other area, including the services and facilities necessary for its economy to function. Infrastructure is composed of public and private physical improvements such as roads, railways, bridges, tunnels, water supply, sewers, electrical grids, and telecommunications (including Internet connectivity and broadband speeds). In general, it has also been defined as “the physical components of interrelated systems providing commodities and services essential to enable, sustain, or enhance societal living conditions”.There are two general types of ways to view infrastructure, hard or soft. Hard infrastructure refers to the physical networks necessary for the functioning of a modern industry. This includes roads, bridges, railways, etc. Soft infrastructure refers to all the institutions that maintain the economic, health, social, and cultural standards of a country. This includes educational programs, official statistics, parks and recreational facilities, law enforcement agencies, and emergency services.Infrastructure is the term for the basic physical systems of a business or nation—transportation, communication, sewage, water, and electric systems are all examples of infrastructure. These systems tend to be high-cost investments and are vital to a country’s economic development and prosperity. Projects related to infrastructure improvements may be funded publicly, privately, or through public-private partnerships. In economic terms infrastructure often involves the production of public goods or production processes that support natural monopolies."

  return (
    <>
      <Router>
        <AppLoader>
          <Header />
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/about' element={<AboutPage />} />
            <Route path="/projects" element={<ProjectPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/architecture" element={<BussinesComponent title="Architecture" content={architectureContent} />} />

            <Route path="/3-3-energy-effiency-renewable-energy"
              element={<BussinesComponent title="Energy Efficiency and Renewable Energy" content={energyContent} />} />
            <Route path="/3-4-water-infrastructure" element={<BussinesComponent title="Water & Infrastructure"
              content={waterContent} />} />

            <Route path="/consulting-and-studies" element={<ServicesComponent title={data.serviceData[0].title}
              content={data.serviceData[0].content} image={data.serviceData[0].image}
              singleImg={data.serviceData[0].singleImg} />} />

            <Route path="/analysis-and-conceptual-design" element={<ServicesComponent title={data.serviceData[1].title}
              content={data.serviceData[1].content} image={data.serviceData[1].image}
              singleImg={data.serviceData[1].singleImg} />} />

            <Route path="/project-supervision" element={<ServicesComponent title={data.serviceData[2].title}
              content={data.serviceData[2].content} image={data.serviceData[2].image}
              singleImg={data.serviceData[2].singleImg} />} />

            <Route path="/project-managment" element={<ServicesComponent title={data.serviceData[3].title}
              content={data.serviceData[3].content} image={data.serviceData[3].image}
              singleImg={data.serviceData[3].singleImg} />} />

            <Route path="/construction" element={<ServicesComponent title={data.serviceData[4].title} content={data.serviceData[4].content}
              image={data.serviceData[4].image} singleImg={data.serviceData[4].singleImg} />} />
          </Routes>
          <Footer />
        </AppLoader>
      </Router>
    </>
  );
}

export default App;
