import SpotTect2 from "../../../assets/Spot-Tec-2.jpeg";
import SpotTect3 from "../../../assets/Spot-Tec-3.jpeg";
import SpotTect4 from "../../../assets/Spot-Tec-4.jpeg";
import SpotTect5 from "../../../assets/Spot-Tec-5.jpeg";
import Edma1 from "../../../assets/Edma-Gmbh1.jpeg";
import Edma2 from "../../../assets/Edma-Gmbh2.jpeg";
import WohnDesign1 from "../../../assets/WohnDesign1.jpeg";
import WohnDesign2 from "../../../assets/WohnDesign2.jpeg";
import WohnDesign3 from "../../../assets/WohnDesign3.jpeg";

const projectData = {
    data: [
        {
            images: [SpotTect2,SpotTect3,SpotTect4,SpotTect5,],
            title:'Spot-tec Immobilien AG',
            secondTitle:'Spot-tec Immobilien AG',
            specData: {
                specificationTitles: ['STANDORT:','ARCHITECT:','GU:', 'JAHR:',],
                specifications: ['5610 Wohlen AG','Iuliano Baumanagement GmbH:','EDMA GmbH','2018',],
            },
            arrowLeft: false,
            arrowRight: true,
            paths: ['/projects/edma-gmbh']
        },
        {
            images: [Edma1,Edma2,],
            title:'EDMA GmbH',
            secondTitle: '',
            specData: {
                specificationTitles:['STANDORT:','Auftraggeber/TU:','JAHR:'] ,
                specifications:['5612 Villmergen','EDMA GmbH','2017'] ,
            },
            arrowLeft: true,
            arrowRight: true,
            paths: [ '/projects/spot-tec','/projects/wohndesign']
        },{
            images: [WohnDesign1,WohnDesign2,WohnDesign3],
            title:'Wohndesign',
            secondTitle: '„Wohndesign: Eine Reise durch architektonische Exzellenz“',
            specData: {
                specificationTitles:['STANDORT:','Auftraggeber/TU:','JAHR:'] ,
                specifications:['Wohlen AG','EDMA GmbH','2019'] ,
            },
            arrowLeft: true,
            arrowRight: false,
            paths:[ '/projects/edma-gmbh']
        }      
    ]
}

export default projectData;