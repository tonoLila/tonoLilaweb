import '../Styles/home.css'

import Header from '../Components/Header/Header'
import WheelMenu from '../Components/WheelMenu/WheelMenu'

const Home = () => {

    return (
        <div className="home__Header">            
            <Header 
            imageUrl={'https://www.historylatam.com/sites/default/files/styles/wide/public/images/2015/12/14/biografia-history-darth-vader-star-wars-es.jpg'}
            title='Título'
            text='Lorem ipsum dolor sit amet consectetur adipisicing elit. In illo hic doloribus voluptatibus perferendis maxime itaque ex nostrum quam? Suscipit eligendi aspernatur id ad libero. Quo autem veritatis debitis consequatur.'
            boldText='Lorem ipsum dolor sit amet consectetur adipisicing elit.'
            btn='Botón'
            />
            <WheelMenu />
            
        </div>
    )
    
}

export default Home; 